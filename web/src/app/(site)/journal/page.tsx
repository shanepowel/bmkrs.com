import type { Metadata } from "next";
import { EmailCapture } from "@/components/bmkrs/EmailCapture";
import { JournalFilter } from "@/components/bmkrs/JournalFilter";
import { JournalMap } from "@/components/bmkrs/JournalMap";
import { Body, Chip, Kicker, Meta, PageHero, Section, WorkGrid, WorkTile } from "@bmkrs/ui";
import { getJournalCategorySlugs, getJournalIndex } from "@/lib/content";
import { pageHeroImages } from "@/lib/content/image-fallbacks";
import { journalMastheadIntro, journalCategoryDescriptions } from "@/lib/content/expansion-v2";
import { JOURNAL_CATEGORY_LABEL } from "@/lib/journal-categories";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(
    "journal",
    "notes on building brands: identity, voice, pr, growth and how we work.",
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

export default async function JournalPage() {
  const [{ featured, posts }, categorySlugs] = await Promise.all([
    getJournalIndex(),
    getJournalCategorySlugs(),
  ]);
  const all = [featured, ...posts].filter(Boolean);
  const mapPosts = all.map((p) => ({ slug: p!.slug, title: p!.title, category: p!.category }));

  return (
    <main className="journal">
      <PageHero eyebrow="journal" title="the journal" lede={journalMastheadIntro} image={pageHeroImages.journal} />

      <Section theme="paper" className="!pt-0">
        <div className="section">
          {featured?.cover?.url ? (
            <WorkGrid>
              <WorkTile
                wide
                href={`/journal/${featured.slug}`}
                tag={`featured · ${JOURNAL_CATEGORY_LABEL[featured.category] ?? featured.category} · ${formatDate(featured.publishedAt)}`}
                name={featured.title}
                detail={featured.excerpt}
                image={{ src: featured.cover.url, alt: "" }}
              />
            </WorkGrid>
          ) : null}

          <JournalFilter />

          {categorySlugs.length > 0 ? (
            <nav className="mt-10 flex flex-wrap items-center gap-3" aria-label="journal topics">
              <Meta theme="paper">browse by topic</Meta>
              {categorySlugs.map((slug) => (
                <Chip key={slug} href={`/journal/category/${slug}`}>
                  {JOURNAL_CATEGORY_LABEL[slug] ?? slug}
                </Chip>
              ))}
            </nav>
          ) : null}

          {categorySlugs.length > 0 ? (
            <ul className="mt-6 space-y-2">
              {categorySlugs.map((slug) => (
                <li key={`desc-${slug}`}>
                  <Meta theme="paper">{JOURNAL_CATEGORY_LABEL[slug] ?? slug}</Meta>{" "}
                  <Body theme="paper">{journalCategoryDescriptions[slug] ?? ""}</Body>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-10">
            <WorkGrid>
              {posts.map((post) => (
                <WorkTile
                  key={post.slug}
                  href={`/journal/${post.slug}`}
                  tag={`${JOURNAL_CATEGORY_LABEL[post.category] ?? post.category} · ${formatDate(post.publishedAt)}`}
                  name={post.title}
                  detail={post.excerpt}
                  image={post.cover?.url ? { src: post.cover.url, alt: "" } : undefined}
                />
              ))}
            </WorkGrid>
          </div>

        </div>
      </Section>

      {mapPosts.length > 0 ? (
        <Section theme="ink">
          <Kicker theme="ink">wander</Kicker>
          <p className="muted mb-6 text-sm">optional: explore posts by connection, not chronology.</p>
          <JournalMap posts={mapPosts} />
        </Section>
      ) : null}

      <EmailCapture surface="orange" />
    </main>
  );
}
