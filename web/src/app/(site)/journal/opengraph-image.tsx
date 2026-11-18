import { ImageResponse } from "next/og";
import { OG_COLORS, OG_SIZE } from "@/lib/og-image";

export const alt = "bmkrs. the journal";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 64, backgroundColor: OG_COLORS.ink, color: OG_COLORS.paper, fontSize: 64, lineHeight: 1.05 }}>
      <div style={{ color: OG_COLORS.accent, fontSize: 28, marginBottom: 16 }}>the journal</div>
      notes on building brands.
    </div>,
    { ...size },
  );
}
