import {
  fallbackHome,
  fallbackMotion,
  fallbackPages,
  fallbackProjects,
  fallbackServices,
  fallbackSiteSettings,
} from "./fallback";
import { fallbackJournalArticles } from "./journal-fallback";
import type {
  CmsPage,
  HomeContent,
  HomePillar,
  JournalArticle,
  MotionContent,
  Project,
  Service,
  SiteSettings,
} from "@/lib/types";
import { sanityClient } from "@/lib/sanity/client";
import {
  homePillarsQuery,
  journalArticleBySlugQuery,
  journalArticlesQuery,
  pageBySlugQuery,
  projectBySlugQuery,
  projectsQuery,
  servicesQuery,
  siteSettingsQuery,
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
  const data = await fetchSanity<SiteSettings>(siteSettingsQuery);
  if (data?.navigation?.length) {
    return {
      ...fallbackSiteSettings,
      ...data,
      navigation: data.navigation.map((n) => ({
        label: n.label,
        href: n.href,
        highlight: n.highlight,
      })),
    };
  }
  return fallbackSiteSettings;
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
  const data = await fetchSanity<Project[]>(projectsQuery);
  const list = data?.length ? data : fallbackProjects;
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
  const data = await fetchSanity<Project>(projectBySlugQuery, { slug });
  if (data) return normalizeProject(data);
  const fallback = fallbackProjects.find((p) => p.slug === slug);
  return fallback ? normalizeProject(fallback) : null;
}

function normalizeProject(project: Project): Project {
  return {
    ...project,
    context: project.context || project.excerpt,
    challenge: project.challenge || project.brief || project.problem,
    whatWeDid: project.whatWeDid || project.background,
    outcome: project.outcome || project.result,
  };
}

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
