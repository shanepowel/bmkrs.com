import { createRouteOgImage, ROUTE_OG_CONTENT_TYPE, ROUTE_OG_SIZE } from "@/lib/route-opengraph";

export const runtime = "edge";
export const alt = "bmkrs. work";
export const size = ROUTE_OG_SIZE;
export const contentType = ROUTE_OG_CONTENT_TYPE;

export default function Image() {
  return createRouteOgImage({
    alt,
    title: "selected work.",
    subtitle: "proof, not promises.",
    heroPath: "/work/images/optimized/fdb-2-hero.jpg",
  });
}
