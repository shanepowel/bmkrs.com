import { createRouteOgImage, ROUTE_OG_CONTENT_TYPE, ROUTE_OG_SIZE } from "@/lib/route-opengraph";

export const runtime = "edge";
export const alt = "contact bmkrs.";
export const size = ROUTE_OG_SIZE;
export const contentType = ROUTE_OG_CONTENT_TYPE;

export default function Image() {
  return createRouteOgImage({
    alt,
    title: "let's talk.",
    subtitle: "tell us what you are building.",
    heroPath: "/images/optimized/smoothies-hero.jpg",
  });
}
