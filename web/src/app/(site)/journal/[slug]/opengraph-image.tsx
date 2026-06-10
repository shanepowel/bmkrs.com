import { ImageResponse } from "next/og";
import { getPost } from "@/lib/content";
import { OgTemplate, OG_SIZE, absoluteUrl } from "@/lib/og-image";
import { sanityClient } from "@/lib/sanity/client";
import { postBySlugQuery } from "@/lib/sanity/queries";

export const runtime = "edge";
export const alt = "bmkrs. journal";
export const size = OG_SIZE;
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

  const heroUrl = absoluteUrl(post?.seo?.ogImage ?? post?.cover?.url);
  const title = post?.title ?? "the journal";
  const excerpt = post?.excerpt ?? "notes on building brands.";

  return new ImageResponse(
    <OgTemplate kicker="the journal" title={title} subtitle={excerpt} heroUrl={heroUrl} />,
    { ...size },
  );
}
