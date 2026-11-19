import { BRAND_AVATAR } from "@/lib/brand";

export const OG_SIZE = { width: 1200, height: 630 };
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bmkrs.com";

export const OG_COLORS = {
  ink: "#181613",
  paper: "#f1efe8",
  accent: "#FF4D00",
} as const;

export function absoluteUrl(path?: string | null): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const DEFAULT_OG_IMAGE = absoluteUrl(BRAND_AVATAR)!;

type OgTemplateProps = {
  kicker: string;
  title: string;
  subtitle?: string;
  heroUrl?: string;
};

export function OgTemplate({ kicker, title, subtitle }: OgTemplateProps) {
  const safeKicker = typeof kicker === "string" ? kicker : "bmkrs.";
  const safeTitle = typeof title === "string" && title.trim() ? title : "ideas made real.";
  const safeSubtitle = typeof subtitle === "string" && subtitle.trim() ? subtitle : undefined;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 64,
        backgroundColor: OG_COLORS.ink,
        color: OG_COLORS.paper,
        fontSize: 64,
        lineHeight: 1.05,
      }}
    >
      <div style={{ display: "flex", color: OG_COLORS.accent, fontSize: 28, marginBottom: 16 }}>
        {safeKicker}
      </div>
      <div style={{ display: "flex", fontSize: safeTitle.length > 48 ? 52 : 64 }}>
        {safeTitle}
      </div>
      {safeSubtitle ? (
        <div style={{ display: "flex", fontSize: 28, marginTop: 20 }}>{safeSubtitle}</div>
      ) : null}
    </div>
  );
}
