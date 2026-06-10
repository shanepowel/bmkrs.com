import { ImageResponse } from "next/og";
import { OgTemplate, OG_SIZE } from "@/lib/og-image";
import { JOURNAL_CATEGORY_INTRO, journalCategoryLabel } from "@/lib/journal-categories";

export const runtime = "edge";
export const alt = "bmkrs. journal category";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const label = journalCategoryLabel(slug);
  const intro = JOURNAL_CATEGORY_INTRO[slug] ?? "from the journal.";

  return new ImageResponse(
    <OgTemplate kicker="the journal" title={label} subtitle={intro} />,
    { ...size },
  );
}
