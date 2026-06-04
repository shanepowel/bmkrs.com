import { ImageResponse } from "next/og";
import { sanityClient } from "@/lib/sanity/client";
import { caseStudyBySlugQuery } from "@/lib/sanity/queries";

export const runtime = "edge";
export const alt = "bmkrs. case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type CaseStudyOg = {
  title?: string;
  positioning?: string;
  seo?: { ogImage?: string };
  heroImage?: { url?: string };
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let cs: CaseStudyOg | null = null;

  if (sanityClient) {
    cs = await sanityClient.fetch<CaseStudyOg>(caseStudyBySlugQuery, { slug });
  }

  const heroUrl = cs?.seo?.ogImage ?? cs?.heroImage?.url;
  const title = cs?.title ?? "bmkrs.";
  const positioning = cs?.positioning ?? "we make bold brands.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#181613",
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
              color: "#E4502A",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            bmkrs.
          </div>
          <div style={{ fontSize: 72, color: "#F5F1EA", fontWeight: 600, lineHeight: 1.05 }}>
            {title}
          </div>
          <div style={{ fontSize: 30, color: "#F5F1EA", opacity: 0.85 }}>{positioning}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
