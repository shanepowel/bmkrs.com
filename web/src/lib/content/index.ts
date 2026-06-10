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
  fallbackProducts,
  fallbackTeam,
} from "./offering-fallback";
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
  if (caseStudies?.length) {
    return caseStudies.map(normalizeProject);
  }
  const legacy = await fetchSanity<Project[]>(projectsQuery);
  const list = legacy?.length ? legacy : fallbackProjects;
  return list.map(normalizeProject);
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

export async function getProducts(): Promise<Product[]> {
  const data = await fetchSanity<Product[]>(allProductsQuery);
  return data?.length ? data : fallbackProducts;
}

export async function getDisciplines(): Promise<Discipline[]> {
  const data = await fetchSanity<Discipline[]>(disciplinesQuery);
  const list = data?.length ? data : fallbackDisciplines;
  return list.map(mergeDisciplineImage);
}

export async function getMotionTiers(): Promise<Product[]> {
  const data = await fetchSanity<Product[]>(motionTiersQuery);
  if (data?.length) return data;
  return fallbackProducts.filter((p) => p.tier === "grow");
}

export async function getAboutPage(): Promise<AboutPageContent> {
  const data = await fetchSanity<AboutPageContent>(aboutPageQuery);
  return data ?? fallbackAboutPage;
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

export async function getCaseStudySlugs(): Promise<string[]> {
  const slugs = await fetchSanity<string[]>(caseStudySlugsQuery);
  if (slugs?.length) return slugs;
  return fallbackProjects.map((p) => p.slug);
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
  const mdSlugs = new Set(fromMarkdown.map((p) => p.slug));
  const legacy = legacyJournalPosts.filter(
    (p) => !mdSlugs.has(p.slug) && !journalSlugRedirects[p.slug],
  );
  return [...fromMarkdown, ...legacy].map(mergePostCover);
}

function publishedJournalPosts(): JournalPost[] {
  return filterPublishedPosts(allFallbackJournalPosts());
}

export async function getJournalIndex(): Promise<{
  featured: JournalPost | null;
  posts: JournalPost[];
}> {
  const data = await fetchSanity<{ featured: JournalPost | null; posts: JournalPost[] }>(
    journalIndexQuery,
  );
  if (data?.posts?.length || data?.featured) {
    const featured = data.featured ? mergePostCover(data.featured) : null;
    const posts = (data.posts ?? []).map(mergePostCover);
    return {
      featured: featured && isJournalPublished(featured.publishedAt) ? featured : null,
      posts: filterPublishedPosts(posts),
    };
  }
  const published = publishedJournalPosts();
  const featured = published.find((p) => p.featured) ?? null;
  const posts = published.filter((p) => !p.featured);
  return { featured, posts };
}

export async function getPost(slug: string): Promise<JournalPost | null> {
  const redirect = journalSlugRedirects[slug];
  if (redirect) {
    return getPost(redirect);
  }

  const data = await fetchSanity<JournalPost>(postBySlugQuery, { slug });
  if (data) {
    const merged = mergePostCover(data);
    return isJournalPublished(merged.publishedAt) ? merged : null;
  }

  const fb = allFallbackJournalPosts().find((p) => p.slug === slug);
  if (!fb || !isJournalPublished(fb.publishedAt)) return null;
  return mergePostCover(fb);
}

export async function getPostSlugs(): Promise<string[]> {
  const slugs = await fetchSanity<string[]>(postSlugsQuery);
  if (slugs?.length) return slugs;
  return publishedJournalPosts().map((p) => p.slug);
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
    category,
    serviceTags: services,
    brief: project.brief || project.context,
    challenge: project.challenge || project.problem,
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
