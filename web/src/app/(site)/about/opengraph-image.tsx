import { createRouteOgImage, ROUTE_OG_CONTENT_TYPE, ROUTE_OG_SIZE } from "@/lib/route-opengraph";

export const alt = "about bmkrs.";
export const size = ROUTE_OG_SIZE;
export const contentType = ROUTE_OG_CONTENT_TYPE;

export default function Image() {
  return createRouteOgImage({
    alt,
    title: "built to stay in production.",
    subtitle: "a digital product studio founded by a builder.",
    heroPath: "/images/bmkrs-avatar-512.png",
  });
}
