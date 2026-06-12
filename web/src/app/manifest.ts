import type { MetadataRoute } from "next";
import { BRAND_AVATAR } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "bmkrs. a brand company run by builders.",
    short_name: "bmkrs.",
    description:
      "A brand company shaping identity, voice, PR, and product from London to worldwide.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f5",
    theme_color: "#181613",
    icons: [
      { src: "/icon.png", sizes: "32x32", type: "image/png" },
      { src: "/icon-light.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/favicon.ico", sizes: "32x32", type: "image/png" },
      {
        src: BRAND_AVATAR,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
