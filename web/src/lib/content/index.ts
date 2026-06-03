import {
  fallbackHome,
  fallbackPages,
  fallbackProjects,
  fallbackServices,
  fallbackSiteSettings,
} from "./fallback";
import type {
  CmsPage,
  HomeContent,
  HomePillar,
  Project,
  Service,
  SiteSettings,
} from "@/lib/types";
import { sanityClient } from "@/lib/sanity/client";
import {
  homePillarsQuery,
  pageBySlugQuery,
  projectBySlugQuery,
  projectsQuery,
  servicesQuery,
  siteSettingsQuery,
} from "@/lib/sanity/queries";
import { sanityConfigured } from "@/lib/sanity/env";

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
  const data = await fetchSanity<CmsPage>(pageBySlugQuery, { slug });
  return data ?? fallbackPages[slug] ?? fallbackPages.home;
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
  return data?.length ? data : fallbackProjects;
}

export async function getProject(slug: string): Promise<Project | null> {
  const data = await fetchSanity<Project>(projectBySlugQuery, { slug });
  if (data) return data;
  return fallbackProjects.find((p) => p.slug === slug) ?? null;
}

export function isUsingCms(): boolean {
  return sanityConfigured;
}
