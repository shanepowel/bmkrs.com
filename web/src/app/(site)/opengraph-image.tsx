import { ImageResponse } from "next/og";
import { OgTemplate, OG_SIZE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "bmkrs. a brand company run by builders.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgTemplate
        kicker="bmkrs."
        title="a brand company run by builders."
        subtitle="branding, voice, pr, product."
      />
    ),
    { ...size },
  );
}
