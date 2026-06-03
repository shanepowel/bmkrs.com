import type { MetadataRoute } from "next";
import { fallbackJournalArticles } from "@/lib/content/journal-fallback";
import { fallbackProjects } from "@/lib/content/fallback";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bmkrs.com";

const staticRoutes = [
  "",
  "/services",
  "/work",
  "/journal",
  "/motion",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projects: MetadataRoute.Sitemap = fallbackProjects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const journal: MetadataRoute.Sitemap = fallbackJournalArticles.map((article) => ({
    url: `${siteUrl}/journal/${article.slug}`,
    lastModified: article.publishedAt ? new Date(article.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...pages, ...projects, ...journal];
}
