import {
  fallbackHome,
  fallbackMotion,
  fallbackPages,
  fallbackProjects,
  fallbackServices,
  fallbackSiteSettings,
} from "./fallback";
import { fallbackJournalArticles } from "./journal-fallback";
import { hasFilledMetrics, isFilled } from "./placeholders";
import type {
  CmsPage,
  HomeContent,
  HomePillar,
  JournalArticle,
  MotionContent,
  Project,
  Service,
  SiteSettings,
  TeamMember,
  Testimonial,
} from "@/lib/types";
import { sanityClient } from "@/lib/sanity/client";
import {
  caseStudiesQuery,
  caseStudyBySlugQuery,
  caseStudySlugsQuery,
  homePillarsQuery,
  homeTestimonialsQuery,
  journalArticleBySlugQuery,
  journalArticlesQuery,
  pageBySlugQuery,
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

export async function getSiteSettings(): Promise<SiteSettings> {
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
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);
  return featured.length > 0 ? featured : projects.slice(0, 3);
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
  if (!data?.length) return [];
  return data.filter((t) => isFilled(t.quote));
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const data = await fetchSanity<
    { name: string; discipline?: string; photo?: { url?: string; alt?: string } }[]
  >(teamQuery);
  if (!data?.length) return [];
  return data
    .filter((m) => m.photo?.url)
    .map((m) => ({
      name: m.name,
      discipline: m.discipline,
      photoUrl: m.photo!.url!,
      photoAlt: m.photo?.alt || m.name,
    }));
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

  const thumbnailPath =
    project.thumbnailPath ||
    project.heroImage?.url ||
    "/images/blacklogo.png";

  const media =
    project.media?.length
      ? project.media
      : (project.gallery
          ?.filter((g) => g.url)
          .map((g) => ({
            type: "image" as const,
            src: g.url!,
            alt: g.alt || project.title,
          })) ?? [{ type: "image" as const, src: thumbnailPath, alt: project.title }]);

  return {
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
    thumbnailPath,
    media,
  };
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
