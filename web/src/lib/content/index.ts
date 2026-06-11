import { unstable_cache } from "next/cache";
import {
  fallbackHome,
  fallbackHomeTestimonials,
  fallbackMotion,
  fallbackPages,
  fallbackProjects,
  fallbackServices,
  fallbackSiteSettings,
} from "./fallback";
import { fallbackJournalArticles } from "./journal-fallback";
import {
  fallbackAboutPage,
  fallbackDisciplines,
  fallbackNowBuilding,
  fallbackPeople,
  fallbackProducts,
  fallbackTeam,
} from "./offering-fallback";
import {
  categorySlugsWithMinPosts,
  groupPostsByCategory,
} from "../journal-categories";
import {
  filterPublishedPosts,
  isJournalPublished,
  journalSlugRedirects,
} from "./journal-publish";
import { getMarkdownJournalPosts } from "./journal-markdown";
import { fallbackPosts as legacyJournalPosts } from "./journal-posts-fallback";
import {
  mergeDisciplineImage,
  mergePostCover,
  mergeProjectImages,
  mergeTeamPhoto,
} from "./image-fallbacks";
import { disciplineExpansion, outcomeLineForSlug } from "./expansion-v2";
import { fallbackPressKit } from "./press-kit-fallback";
import { fallbackNetworkPage } from "./network-page-fallback";
import { hasFilledMetrics, isFilled } from "./placeholders";
import type {
  AboutPageContent,
  Discipline,
  CmsPage,
  HomeContent,
  HomePillar,
  JournalArticle,
  JournalPost,
  MotionContent,
  NowBuildingContent,
  PressKitContent,
  NetworkPageContent,
  Person,
  Product,
  Project,
  Service,
  SiteSettings,
  TeamMember,
  Testimonial,
} from "@/lib/types";
import { sanityClient } from "@/lib/sanity/client";
import {
  aboutPageQuery,
  nowBuildingQuery,
  pressKitQuery,
  networkPageQuery,
  peopleQuery,
  allProductsQuery,
  disciplinesQuery,
  caseStudiesQuery,
  caseStudyBySlugQuery,
  caseStudySlugsQuery,
  featuredCaseStudiesQuery,
  homePillarsQuery,
  homeTestimonialsQuery,
  journalArticleBySlugQuery,
  journalArticlesQuery,
  journalIndexQuery,
  motionTiersQuery,
  pageBySlugQuery,
  postBySlugQuery,
  postSlugsQuery,
  projectBySlugQuery,
  projectsQuery,
  servicesQuery,
  siteSettingsQuery,
  teamQuery,
} from "@/lib/sanity/queries";

async function fetchSanity<T>(query: string, params?: Record<string, unknown>): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params ?? {});
  } catch {
    return null;
  }
}

async function loadSiteSettings(): Promise<SiteSettings> {
  const data = await fetchSanity<SiteSettings & { socials?: SiteSettings["socialLinks"] }>(
    siteSettingsQuery,
  );
  if (!data) return fallbackSiteSettings;

  const socialLinks =
    data.socialLinks?.length ? data.socialLinks : (data.socials ?? fallbackSiteSettings.socialLinks);

  return {
    ...fallbackSiteSettings,
    ...data,
    email: data.generalEmail || data.email || fallbackSiteSettings.email,
    generalEmail: data.generalEmail || data.email || fallbackSiteSettings.generalEmail,
    pressEmail: data.pressEmail || fallbackSiteSettings.pressEmail,
    networkPortalUrl: data.networkPortalUrl || fallbackSiteSettings.networkPortalUrl,
    networkHireUrl: data.networkHireUrl || fallbackSiteSettings.networkHireUrl,
    networkJoinUrl: data.networkJoinUrl || fallbackSiteSettings.networkJoinUrl,
    memberLoginUrl: data.memberLoginUrl || fallbackSiteSettings.memberLoginUrl,
    socialLinks,
    navigation: data.navigation?.length
      ? data.navigation.map((n) => ({
          label: n.label,
          href: n.href,
          highlight: n.highlight,
        }))
      : fallbackSiteSettings.navigation,
  };
}

export const getSiteSettings = unstable_cache(loadSiteSettings, ["site-settings"], {
  tags: ["settings"],
});

export async function getPage(slug: string): Promise<CmsPage> {
  const key = slug === "discover" ? "services" : slug;
  const data = await fetchSanity<CmsPage>(pageBySlugQuery, { slug: key });
  return data ?? fallbackPages[key] ?? fallbackPages.home;
}

export async function getHomeContent(): Promise<HomeContent> {
  const pillars = await fetchSanity<HomePillar[]>(homePillarsQuery);
  if (pillars?.length) {
    return { ...fallbackHome, pillars };
  }
  return fallbackHome;
}

export async function getServices(): Promise<Service[]> {
  const data = await fetchSanity<Service[]>(servicesQuery);
  return data?.length ? data : fallbackServices;
}

export async function getProjects(): Promise<Project[]> {
  const caseStudies = await fetchSanity<Project[]>(caseStudiesQuery);
  const legacy = await fetchSanity<Project[]>(projectsQuery);
  const sanityList = caseStudies?.length ? caseStudies : (legacy ?? []);
  const bySlug = new Map(fallbackProjects.map((p) => [p.slug, normalizeProject(p)]));
  for (const p of sanityList) {
    bySlug.set(p.slug, normalizeProject(p));
  }
  return [...bySlug.values()].sort((a, b) => a.order - b.order);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const featured = await fetchSanity<Project[]>(featuredCaseStudiesQuery);
  if (featured?.length) {
    return featured.map(normalizeProject).slice(0, 4);
  }
  const projects = await getProjects();
  const client = projects.filter((p) => p.projectType !== "studio" && p.featured);
  const studio = projects.filter((p) => p.projectType === "studio");
  const picked = [...client.slice(0, 2), ...studio.slice(0, 2)];
  if (picked.length >= 4) return picked.slice(0, 4);
  const rest = projects.filter((p) => !picked.includes(p));
  return [...picked, ...rest].slice(0, 4);
}

function mergeProducts(sanity: Product[] | null | undefined): Product[] {
  const bySlug = new Map(fallbackProducts.map((p) => [p.slug, p]));
  for (const p of sanity ?? []) {
    const fb = bySlug.get(p.slug);
    bySlug.set(p.slug, {
      ...fb,
      ...p,
      priceFrom: p.priceFrom ?? fb?.priceFrom,
      shape: p.shape ?? fb?.shape,
      priceNote: p.priceNote ?? fb?.priceNote,
    });
  }
  return [...bySlug.values()].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getProducts(): Promise<Product[]> {
  const data = await fetchSanity<Product[]>(allProductsQuery);
  return mergeProducts(data);
}

export async function getDisciplines(): Promise<Discipline[]> {
  const data = await fetchSanity<Discipline[]>(disciplinesQuery);
  const list = data?.length ? data : fallbackDisciplines;
  return list.map((d) => {
    const expansion = disciplineExpansion[d.name];
    const merged = {
      ...d,
      symptom: d.symptom ?? expansion?.symptom,
      craft: d.craft ?? expansion?.craft,
      outcome: d.outcome ?? expansion?.outcome,
    };
    return mergeDisciplineImage(merged);
  });
}

export async function getMotionTiers(): Promise<Product[]> {
  const data = await fetchSanity<Product[]>(motionTiersQuery);
  const products = mergeProducts(data);
  return products.filter((p) => p.tier === "grow");
}

function formatNowBuildingLabel(iso: string): string {
  if (!iso) return "";
  return new Date(iso)
    .toLocaleDateString("en-GB", { month: "long", year: "numeric" })
    .toLowerCase();
}

export async function getAboutPage(): Promise<AboutPageContent> {
  const data = await fetchSanity<Partial<AboutPageContent>>(aboutPageQuery);
  return {
    ...fallbackAboutPage,
    ...(data ?? {}),
    founder: fallbackAboutPage.founder,
    beliefs: data?.beliefs?.length ? data.beliefs : fallbackAboutPage.beliefs,
    founderStory: data?.founderStory?.length ? data.founderStory : fallbackAboutPage.founderStory,
    studioProductCount: data?.studioProductCount ?? fallbackAboutPage.studioProductCount,
  };
}

export async function getPeople(): Promise<Person[]> {
  const data = await fetchSanity<
    {
      slug: string;
      name: string;
      role?: string;
      discipline?: string;
      shortBio?: string;
      longBio?: string;
      linkedinUrl?: string;
      order?: number;
      quickfire?: Person["quickfire"];
      portrait?: { url?: string; alt?: string };
    }[]
  >(peopleQuery);

  if (data?.length) {
    return data
      .map((person) => ({
        slug: person.slug,
        name: person.name,
        role: person.role,
        discipline: person.discipline,
        shortBio: person.shortBio,
        longBio: person.longBio,
        linkedinUrl: person.linkedinUrl,
        order: person.order,
        quickfire: person.quickfire,
        portraitUrl: person.portrait?.url,
        portraitAlt:
          person.portrait?.alt ??
          `illustrated portrait of ${person.name}, ${person.discipline ?? person.role ?? ""} at bmkrs`,
      }))
      .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  }

  return fallbackPeople;
}

export async function getNowBuilding(): Promise<NowBuildingContent> {
  const data = await fetchSanity<{ lines?: string[]; updatedAt?: string }>(nowBuildingQuery);
  if (data?.lines?.length) {
    return {
      lines: data.lines,
      updatedAt: data.updatedAt ?? fallbackNowBuilding.updatedAt,
      updatedLabel: formatNowBuildingLabel(data.updatedAt ?? fallbackNowBuilding.updatedAt),
    };
  }
  return fallbackNowBuilding;
}

export async function getPressKit(): Promise<PressKitContent> {
  const data = await fetchSanity<Partial<PressKitContent>>(pressKitQuery);
  if (!data?.headline) return fallbackPressKit;
  return {
    ...fallbackPressKit,
    ...data,
    colors: data.colors?.length ? data.colors : fallbackPressKit.colors,
    typefaces: data.typefaces?.length ? data.typefaces : fallbackPressKit.typefaces,
    logoAssets: data.logoAssets?.length ? data.logoAssets : fallbackPressKit.logoAssets,
    usageRules: data.usageRules?.length ? data.usageRules : fallbackPressKit.usageRules,
    updatedAt: data.updatedAt ?? fallbackPressKit.updatedAt,
  };
}

export async function getNetworkPage(): Promise<NetworkPageContent> {
  const data = await fetchSanity<Partial<NetworkPageContent>>(networkPageQuery);
  if (!data?.headline) return fallbackNetworkPage;
  return {
    ...fallbackNetworkPage,
    ...data,
    forCompanies: data.forCompanies ?? fallbackNetworkPage.forCompanies,
    forSpecialists: data.forSpecialists ?? fallbackNetworkPage.forSpecialists,
    seo: { ...fallbackNetworkPage.seo, ...data.seo },
  };
}

export async function getMotionContent(): Promise<MotionContent> {
  return fallbackMotion;
}

export async function getProject(slug: string): Promise<Project | null> {
  const fromCaseStudy = await fetchSanity<Project>(caseStudyBySlugQuery, { slug });
  if (fromCaseStudy) return normalizeProject(fromCaseStudy);

  const legacy = await fetchSanity<Project>(projectBySlugQuery, { slug });
  if (legacy) return normalizeProject(legacy);

  const fallback = fallbackProjects.find((p) => p.slug === slug);
  return fallback ? normalizeProject(fallback) : null;
}

export async function getNextProject(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1 || projects.length < 2) return null;
  return projects[(index + 1) % projects.length] ?? null;
}

export async function getCaseStudySlugs(): Promise<string[]> {
  const projects = await getProjects();
  return projects.map((p) => p.slug);
}

export async function getHomeTestimonials(): Promise<Testimonial[]> {
  const data = await fetchSanity<Testimonial[]>(homeTestimonialsQuery);
  if (data?.length) return data.filter((t) => isFilled(t.quote));
  return fallbackHomeTestimonials.filter((t) => isFilled(t.quote));
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const data = await fetchSanity<
    {
      name: string;
      discipline?: string;
      bio?: string;
      photo?: { url?: string; alt?: string };
    }[]
  >(teamQuery);
  if (data?.length) {
    return data
      .map((m) =>
        mergeTeamPhoto({
          name: m.name,
          discipline: m.discipline,
          bio: m.bio,
          photoUrl: m.photo?.url,
          photoAlt: m.photo?.alt || m.name,
        }),
      );
  }
  return fallbackTeam.map(mergeTeamPhoto);
}

function allFallbackJournalPosts(): JournalPost[] {
  const fromMarkdown = getMarkdownJournalPosts();
  if (fromMarkdown.length > 0) {
    return fromMarkdown.map(mergePostCover);
  }
  const mdSlugs = new Set(fromMarkdown.map((p) => p.slug));
  const legacy = legacyJournalPosts.filter(
    (p) => !mdSlugs.has(p.slug) && !journalSlugRedirects[p.slug],
  );
  return [...fromMarkdown, ...legacy].map(mergePostCover);
}

function buildJournalIndex(
  sanityFeatured: JournalPost | null,
  sanityPosts: JournalPost[],
): { featured: JournalPost | null; posts: JournalPost[] } {
  const bySlug = new Map<string, JournalPost>();
  const markdownPack = getMarkdownJournalPosts();

  if (markdownPack.length === 0) {
    if (sanityFeatured) {
      bySlug.set(sanityFeatured.slug, mergePostCover(sanityFeatured));
    }
    for (const p of sanityPosts) {
      bySlug.set(p.slug, mergePostCover(p));
    }
  }
  for (const p of allFallbackJournalPosts()) {
    bySlug.set(p.slug, p);
  }

  const published = filterPublishedPosts([...bySlug.values()]).sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  const featured = published.find((p) => p.featured) ?? published[0] ?? null;
  const posts = published.filter((p) => p.slug !== featured?.slug);
  return { featured, posts };
}

export async function getJournalIndex(): Promise<{
  featured: JournalPost | null;
  posts: JournalPost[];
}> {
  const data = await fetchSanity<{ featured: JournalPost | null; posts: JournalPost[] }>(
    journalIndexQuery,
  );
  return buildJournalIndex(data?.featured ?? null, data?.posts ?? []);
}

export async function getAllPublishedJournalPosts(): Promise<JournalPost[]> {
  const { featured, posts } = await getJournalIndex();
  return featured ? [featured, ...posts] : posts;
}

export async function getJournalCategorySlugs(): Promise<string[]> {
  const all = await getAllPublishedJournalPosts();
  return categorySlugsWithMinPosts(all);
}

export async function getJournalPostsByCategory(category: string): Promise<JournalPost[]> {
  const all = await getAllPublishedJournalPosts();
  const grouped = groupPostsByCategory(all);
  return grouped.get(category) ?? [];
}

export async function getJournalCategoryPostCount(category: string): Promise<number> {
  return (await getJournalPostsByCategory(category)).length;
}

export async function getPost(slug: string): Promise<JournalPost | null> {
  const redirect = journalSlugRedirects[slug];
  if (redirect) {
    return getPost(redirect);
  }

  const fb = allFallbackJournalPosts().find((p) => p.slug === slug);
  if (fb && isJournalPublished(fb.publishedAt)) {
    return mergePostCover(fb);
  }

  const data = await fetchSanity<JournalPost>(postBySlugQuery, { slug });
  if (data) {
    const merged = mergePostCover(data);
    return isJournalPublished(merged.publishedAt) ? merged : null;
  }

  return null;
}

export async function getPostSlugs(): Promise<string[]> {
  const { featured, posts } = await getJournalIndex();
  const slugs = new Set<string>();
  if (featured) slugs.add(featured.slug);
  for (const p of posts) slugs.add(p.slug);
  for (const p of allFallbackJournalPosts()) {
    if (isJournalPublished(p.publishedAt)) slugs.add(p.slug);
  }
  return [...slugs];
}

function normalizeProject(project: Project): Project {
  const services = project.serviceTags?.length
    ? project.serviceTags
    : (project as Project & { services?: string[] }).services;

  const category =
    project.category ||
    project.sector ||
    (services?.[0] as string | undefined) ||
    "work";

  const testimonial = project.testimonial
    ? {
        ...project.testimonial,
        attribution:
          project.testimonial.attribution ||
          [
            project.testimonial.name,
            project.testimonial.role,
            project.testimonial.company,
          ]
            .filter(Boolean)
            .join(", "),
      }
    : undefined;

  return mergeProjectImages({
    ...project,
    positioning: project.positioning || project.tagline,
    outcomeLine: outcomeLineForSlug(project.slug, project.outcomeLine),
    category,
    serviceTags: services,
    brief: project.brief || project.context,
    challenge: project.challenge || project.problem,
    thinking: project.thinking || project.challenge || project.problem,
    whatWeDid: project.whatWeDid || project.background,
    resultsNarrative: project.resultsNarrative || project.outcome || project.result,
    results: project.results || project.outcomeMetrics,
    outcome: project.resultsNarrative || project.outcome || project.result,
    testimonial,
  });
}

export { isFilled, hasFilledMetrics };

export async function getJournalArticles(): Promise<JournalArticle[]> {
  const data = await fetchSanity<JournalArticle[]>(journalArticlesQuery);
  if (data?.length) {
    return data.map(normalizeJournalArticle);
  }
  return fallbackJournalArticles;
}

export async function getJournalArticle(slug: string): Promise<JournalArticle | null> {
  const data = await fetchSanity<JournalArticle>(journalArticleBySlugQuery, { slug });
  if (data) return normalizeJournalArticle(data);
  const fallback = fallbackJournalArticles.find((a) => a.slug === slug);
  return fallback ? normalizeJournalArticle(fallback) : null;
}

function normalizeJournalArticle(article: JournalArticle): JournalArticle {
  return {
    ...article,
    seoTitle: article.seoTitle || article.title,
    publishedAt: article.publishedAt?.slice(0, 10) || "",
  };
}
