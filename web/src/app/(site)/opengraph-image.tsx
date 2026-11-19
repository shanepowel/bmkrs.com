import { ImageResponse } from "next/og";
import { OgTemplate, OG_SIZE } from "@/lib/og-image";

export const alt = "bmkrs. digital products. ai that ships.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgTemplate
        kicker="bmkrs."
        title="digital products. ai that ships."
        subtitle="build, govern, hand over."
      />
    ),
    { ...size },
  );
}
