import type { Metadata } from "next";
import { EmailCapture } from "@/components/bmkrs/EmailCapture";
import {
  Body,
  CategoryTabs,
  PageHero,
  RuledList,
  Section,
  WorkGrid,
  WorkTile,
} from "@bmkrs/ui";
import { getJournalCategorySlugs, getJournalIndex } from "@/lib/content";
import { brandMessaging } from "@/lib/content/messaging";
import { JOURNAL_CATEGORY_LABEL } from "@/lib/journal-categories";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { sentenceCase } from "@/lib/sentence-case";

export const metadata: Metadata = {
  ...pageMetadata(
    "journal",
    brandMessaging.journalLede,
    "/journal",
  ),
  alternates: {
    canonical: `${siteUrl}/journal`,
    types: {
      "application/rss+xml": `${siteUrl}/journal/feed.xml`,
    },
  },
};

function formatDate(iso: string) {
  return new Date(iso)
    .toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
    .toLowerCase();
}

function formatListDate(iso: string) {
  return new Date(iso)
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();
}

export default async function JournalPage() {
  const [{ featured, posts }, categorySlugs] = await Promise.all([
    getJournalIndex(),
    getJournalCategorySlugs(),
  ]);
  const listPosts = posts.filter((post) => post.slug !== featured?.slug);

  const categoryTabs = [
    { id: "all", label: "all", href: "/journal" },
    ...categorySlugs.map((slug) => ({
      id: slug,
      label: (JOURNAL_CATEGORY_LABEL[slug] ?? slug).toLowerCase(),
      href: `/journal/category/${slug}`,
    })),
  ];

  return (
    <main className="journal" data-surface="paper">
      <PageHero title={brandMessaging.journalTitle} lede={brandMessaging.journalLede} />

      <Section theme="paper" className="!pt-0">
        <CategoryTabs items={categoryTabs} active="all" />

        {featured?.cover?.url ? (
          <div className="mb-10">
            <WorkGrid>
              <WorkTile
                wide
                href={`/journal/${featured.slug}`}
                tag={`featured · ${JOURNAL_CATEGORY_LABEL[featured.category] ?? featured.category} · ${formatDate(featured.publishedAt)}`}
                name={sentenceCase(featured.title)}
                detail={featured.excerpt ? sentenceCase(featured.excerpt) : featured.excerpt}
                image={{ src: featured.cover.url, alt: "" }}
              />
            </WorkGrid>
          </div>
        ) : null}

        {listPosts.length ? (
          <RuledList
            items={listPosts.map((post) => ({
              href: `/journal/${post.slug}`,
              date: formatListDate(post.publishedAt),
              title: sentenceCase(post.title),
              category: (JOURNAL_CATEGORY_LABEL[post.category] ?? post.category).toLowerCase(),
            }))}
          />
        ) : (
          <Body theme="paper">No articles yet. Check back soon.</Body>
        )}
      </Section>

      <EmailCapture surface="paper" />
    </main>
  );
}
