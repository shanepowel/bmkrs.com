import type { MetadataRoute } from "next";
import { getJournalCategorySlugs, getJournalIndex, getProjects } from "@/lib/content";
import { SITE_URL } from "@/lib/og-image";

const staticRoutes = [
  "",
  "/services",
  "/work",
  "/journal",
  "/motion",
  "/about",
  "/contact",
  "/press",
  "/legal/privacy",
  "/legal/cookies",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [projects, journalIndex] = await Promise.all([getProjects(), getJournalIndex()]);

  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const work: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const journalPosts = [journalIndex.featured, ...journalIndex.posts].filter(Boolean);
  const journal: MetadataRoute.Sitemap = journalPosts.map((article) => ({
    url: `${SITE_URL}/journal/${article!.slug}`,
    lastModified: article!.publishedAt ? new Date(article!.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const categorySlugs = await getJournalCategorySlugs();
  const journalCategories: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${SITE_URL}/journal/category/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...pages, ...work, ...journal, ...journalCategories];
}
