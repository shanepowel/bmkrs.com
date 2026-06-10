import type { Metadata } from "next";
import type { Project, SiteSettings } from "@/lib/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bmkrs.com";

/** Per-page metadata with aligned title, og:title, twitter and canonical. */
export function pageMetadata(title: string, description: string, path?: string): Metadata {
  const pageTitle = title.includes("bmkrs.") ? title : `${title} | bmkrs.`;
  const url = path ? `${siteUrl}${path}` : undefined;
  return {
    title: pageTitle,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: pageTitle,
      description,
      ...(url ? { url } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}

export function organizationJsonLd(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.siteName,
    url: siteUrl,
    email: settings.email,
    slogan: settings.tagline,
    description: settings.description,
    areaServed: ["London", "Worldwide"],
    sameAs: settings.socialLinks.map((link) => link.url),
  };
}

export function creativeWorkJsonLd(project: Project, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url,
    description: project.positioning || project.tagline,
    dateCreated: project.year,
    creator: {
      "@type": "Organization",
      name: "bmkrs.",
      url: siteUrl,
    },
  };
}
