import { createRouteOgImage, ROUTE_OG_CONTENT_TYPE, ROUTE_OG_SIZE } from "@/lib/route-opengraph";

export const runtime = "edge";
export const alt = "bmkrs. services";
export const size = ROUTE_OG_SIZE;
export const contentType = ROUTE_OG_CONTENT_TYPE;

export default function Image() {
  return createRouteOgImage({
    alt,
    title: "start, make, grow.",
    subtitle: "brand, voice, pr and product from one team.",
    heroPath: "/images/optimized/copa-hero.jpg",
  });
}
