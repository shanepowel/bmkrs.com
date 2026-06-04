import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "bmkrs. we are b makers.",
    short_name: "bmkrs.",
    description:
      "A brand company shaping identity, voice, PR, and product from London to worldwide.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f5",
    theme_color: "#181613",
    icons: [
      { src: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { src: "/icon.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      {
        src: "/images/bmkrs_white_instapic.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
