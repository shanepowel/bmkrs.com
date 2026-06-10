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

export function OgTemplate({ kicker, title, subtitle, heroUrl }: OgTemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: OG_COLORS.ink,
        backgroundImage: heroUrl ? `url(${heroUrl})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          padding: "56px 64px",
          width: "100%",
          background: "linear-gradient(transparent, rgba(24,22,19,0.92))",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: OG_COLORS.accent,
            letterSpacing: 2,
            textTransform: "lowercase",
          }}
        >
          {kicker}
        </div>
        <div
          style={{
            fontSize: title.length > 48 ? 52 : 64,
            color: OG_COLORS.paper,
            fontWeight: 500,
            lineHeight: 1.05,
            textTransform: "lowercase",
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            style={{
              fontSize: 28,
              color: OG_COLORS.paper,
              opacity: 0.85,
              textTransform: "lowercase",
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}
