import { ImageResponse } from "next/og";
import { getProject } from "@/lib/content";
import { OgTemplate, OG_SIZE, absoluteUrl } from "@/lib/og-image";
import { sanityClient } from "@/lib/sanity/client";
import { caseStudyBySlugQuery } from "@/lib/sanity/queries";

export const runtime = "edge";
export const alt = "bmkrs. case study";
export const size = OG_SIZE;
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

  const project = await getProject(slug);

  if (!cs && project) {
    cs = {
      title: project.title,
      positioning: project.positioning ?? project.tagline,
      seo: project.seo,
      heroImage: project.heroImage,
    };
  }

  const heroUrl = absoluteUrl(
    cs?.seo?.ogImage ?? cs?.heroImage?.url ?? project?.thumbnailPath,
  );
  const title = cs?.title ?? "bmkrs.";
  const positioning = cs?.positioning ?? "we build brands.";

  return new ImageResponse(
    <OgTemplate kicker="bmkrs." title={title} subtitle={positioning} heroUrl={heroUrl} />,
    { ...size },
  );
}
