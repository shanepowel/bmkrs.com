import type { Metadata } from "next";
import type { Project, SiteSettings } from "@/lib/types";
import { DEFAULT_OG_IMAGE, OG_SIZE, SITE_URL, absoluteUrl } from "@/lib/og-image";

export { SITE_URL as siteUrl, absoluteUrl };

const defaultOgImage = {
  url: DEFAULT_OG_IMAGE,
  width: OG_SIZE.width,
  height: OG_SIZE.height,
  alt: "bmkrs. a brand company run by builders.",
};

/** Per-page metadata with aligned title, og:title, twitter and canonical. */
export function pageMetadata(title: string, description: string, path?: string): Metadata {
  const pageTitle = title.includes("bmkrs.") ? title : `${title} | bmkrs.`;
  const url = path ? `${SITE_URL}${path}` : undefined;
  return {
    title: pageTitle,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: pageTitle,
      description,
      ...(url ? { url } : {}),
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function metadataWithImage(
  base: Metadata,
  imagePath?: string | null,
): Metadata {
  const url = absoluteUrl(imagePath);
  if (!url) return base;
  const image = { url, width: OG_SIZE.width, height: OG_SIZE.height, alt: "bmkrs." };
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      images: [image],
    },
    twitter: {
      ...base.twitter,
      card: "summary_large_image",
      images: [url],
    },
  };
}

export function organizationJsonLd(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.siteName,
    url: SITE_URL,
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
      url: SITE_URL,
    },
  };
}
