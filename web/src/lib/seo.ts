import type { SiteSettings } from "@/lib/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bmkrs.com";

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
