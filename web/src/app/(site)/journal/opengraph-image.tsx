import { ImageResponse } from "next/og";
import { OgTemplate, OG_SIZE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "bmkrs. the journal";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
  (
    <OgTemplate
      kicker="the journal"
      title="notes on building brands."
      subtitle="strategy, voice, pr, growth."
    />
  ),
    { ...size },
  );
}
