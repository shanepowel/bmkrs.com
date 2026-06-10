import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/og-image";

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.VERCEL_ENV === "preview";
  if (isPreview) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio/", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
