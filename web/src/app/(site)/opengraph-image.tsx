import { ImageResponse } from "next/og";
import { brandMessaging } from "@/lib/content/messaging";
import { OgTemplate, OG_SIZE } from "@/lib/og-image";

export const alt = `bmkrs. ${brandMessaging.tagline}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgTemplate
        kicker="bmkrs."
        title={brandMessaging.tagline}
        subtitle={brandMessaging.ctaPrimary}
      />
    ),
    { ...size },
  );
}
