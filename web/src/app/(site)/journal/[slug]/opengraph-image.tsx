import { ImageResponse } from "next/og";
import { getPost } from "@/lib/content";
import { sanityClient } from "@/lib/sanity/client";
import { postBySlugQuery } from "@/lib/sanity/queries";

export const runtime = "edge";
export const alt = "bmkrs. journal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type PostOg = {
  title?: string;
  excerpt?: string;
  seo?: { ogImage?: string };
  cover?: { url?: string };
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: PostOg | null = null;

  if (sanityClient) {
    post = await sanityClient.fetch<PostOg>(postBySlugQuery, { slug });
  }

  if (!post) {
    const fallback = await getPost(slug);
    if (fallback) {
      post = {
        title: fallback.title,
        excerpt: fallback.excerpt,
        seo: fallback.seo,
        cover: fallback.cover,
      };
    }
  }

  const heroUrl = post?.seo?.ogImage ?? post?.cover?.url;
  const title = post?.title ?? "the journal";
  const excerpt = post?.excerpt ?? "notes on building bold brands.";

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
            the journal
          </div>
          <div style={{ fontSize: 64, color: "#F5F1EA", fontWeight: 600, lineHeight: 1.05 }}>
            {title}
          </div>
          <div style={{ fontSize: 28, color: "#F5F1EA", opacity: 0.85 }}>{excerpt}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
