import { createRouteOgImage, ROUTE_OG_CONTENT_TYPE, ROUTE_OG_SIZE } from "@/lib/route-opengraph";

export const runtime = "edge";
export const alt = "bmkrs. network";
export const size = ROUTE_OG_SIZE;
export const contentType = ROUTE_OG_CONTENT_TYPE;

export default function Image() {
  return createRouteOgImage({
    alt,
    title: "the people behind the work.",
    subtitle: "hire senior builders, or join the network.",
    heroPath: "/images/optimized/carter-hero.jpg",
  });
}
