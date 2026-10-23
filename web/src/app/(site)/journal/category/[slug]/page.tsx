import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink, Body, H1, Kicker, Meta, Section, WorkGrid, WorkTile } from "@bmkrs/ui";
import {
  getJournalCategorySlugs,
  getJournalPostsByCategory,
} from "@/lib/content";
import {
  JOURNAL_CATEGORY_INTRO,
  JOURNAL_CATEGORY_MIN_POSTS,
  journalCategoryLabel,
} from "@/lib/journal-categories";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

function formatDate(iso: string) {
  return new Date(iso)
    .toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
    .toLowerCase();
}

export async function generateStaticParams() {
  const slugs = await getJournalCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = journalCategoryLabel(slug);
  const intro = JOURNAL_CATEGORY_INTRO[slug] ?? "posts from the journal.";
  return pageMetadata(label, intro, `/journal/category/${slug}`);
}

export default async function JournalCategoryPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getJournalPostsByCategory(slug);

  if (posts.length < JOURNAL_CATEGORY_MIN_POSTS) {
    notFound();
  }

  const label = journalCategoryLabel(slug);
  const intro = JOURNAL_CATEGORY_INTRO[slug] ?? "";

  const jsonLd = breadcrumbSchema([
    { name: "home", path: "/" },
    { name: "journal", path: "/journal" },
    { name: label, path: `/journal/category/${slug}` },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section theme="ink">
        <BackLink href="/journal">← journal</BackLink>
        <Kicker theme="ink">journal</Kicker>
        <H1 theme="ink" className="mt-4">
          {label}
        </H1>
        {intro ? (
          <Body theme="ink" lead className="mt-4">
            {intro}
          </Body>
        ) : null}
        <Meta theme="ink" className="mt-3">
          {posts.length} posts
        </Meta>
      </Section>
      <Section theme="paper">
        <WorkGrid>
          {posts.map((post) => (
            <WorkTile
              key={post.slug}
              href={`/journal/${post.slug}`}
              tag={`${label} · ${formatDate(post.publishedAt)}`}
              name={post.title}
              detail={post.excerpt}
              image={post.cover?.url ? { src: post.cover.url, alt: "" } : undefined}
            />
          ))}
        </WorkGrid>
      </Section>
    </main>
  );
}
