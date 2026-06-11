import { ImageResponse } from "next/og";
import { OgTemplate, OG_SIZE, absoluteUrl } from "@/lib/og-image";

export const ROUTE_OG_RUNTIME = "edge" as const;
export const ROUTE_OG_SIZE = OG_SIZE;
export const ROUTE_OG_CONTENT_TYPE = "image/png";

type RouteOgConfig = {
  alt: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  heroPath?: string;
};

export function createRouteOgImage(config: RouteOgConfig) {
  const heroUrl = absoluteUrl(config.heroPath);
  return new ImageResponse(
    (
      <OgTemplate
        kicker={config.kicker ?? "bmkrs."}
        title={config.title}
        subtitle={config.subtitle}
        heroUrl={heroUrl}
      />
    ),
    { ...OG_SIZE },
  );
}
