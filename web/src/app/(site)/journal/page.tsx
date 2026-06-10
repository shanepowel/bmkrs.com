import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EmailCapture } from "@/components/bmkrs/EmailCapture";
import { JournalFilter } from "@/components/bmkrs/JournalFilter";
import { JournalMap } from "@/components/bmkrs/JournalMap";
import { PageHeroSplit } from "@/components/bmkrs/PageHeroSplit";
import { Reveal } from "@/components/bmkrs/Reveal";
import { Kicker, Section } from "@/components/bmkrs/surfaces";
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
      <PageHeroSplit image={pageHeroImages.journal} minHeight="min-h-[52vh]">
        <Reveal>
          <h1 className="display text-[clamp(2.25rem,9vw,8rem)] font-bold">the journal</h1>
        </Reveal>
        <Reveal delay={1}>
          <p className="lead mt-6 max-w-[65ch]">{journalMastheadIntro}</p>
        </Reveal>
      </PageHeroSplit>

      <Section theme="paper" className="!pt-0">
        <div className="section">
          {featured && (
            <Link href={`/journal/${featured.slug}`} className="journal-hero block">
              <div className="journal-hero-cover relative">
                <Image
                  src={featured.cover!.url}
                  alt={featured.cover!.alt ?? featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="journal-hero-overlay">
                  <span className="eyebrow">
                    featured · {JOURNAL_CATEGORY_LABEL[featured.category] ?? featured.category}
                  </span>
                  <h2 className="display mt-2 text-[clamp(1.5rem,4vw,2.5rem)]">{featured.title}</h2>
                </div>
              </div>
              <div className="journal-hero-meta px-4 py-3">
                <p className="excerpt">{featured.excerpt}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="muted text-sm">
                    {formatDate(featured.publishedAt)}
                    {featured.readingTime ? ` · ${featured.readingTime} min read` : ""}
                  </span>
                  <span className="accent-link">read →</span>
                </div>
              </div>
            </Link>
          )}

          <JournalFilter />

          {categorySlugs.length > 0 ? (
            <nav className="mt-10 flex flex-wrap items-center gap-3" aria-label="journal topics">
              <span className="eyebrow w-full sm:w-auto">browse by topic</span>
              {categorySlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/journal/category/${slug}`}
                  className="chip hover:border-accent hover:text-accent"
                >
                  {JOURNAL_CATEGORY_LABEL[slug] ?? slug}
                </Link>
              ))}
            </nav>
          ) : null}

          {categorySlugs.length > 0 ? (
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {categorySlugs.map((slug) => (
                <li key={`desc-${slug}`}>
                  <span className="mono text-meta text-accent">
                    {JOURNAL_CATEGORY_LABEL[slug] ?? slug}
                  </span>{" "}
                  → {journalCategoryDescriptions[slug] ?? ""}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="journal-grid">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="journal-card"
                data-category={post.category}
              >
                <div className="journal-cover relative">
                  <Image
                    src={post.cover!.url}
                    alt={post.cover!.alt ?? post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <span className="eyebrow mt-4 block">
                  {JOURNAL_CATEGORY_LABEL[post.category] ?? post.category}
                </span>
                <h3 className="display mt-2 text-xl">{post.title}</h3>
                <p className="excerpt mt-2">{post.excerpt}</p>
                <span className="muted mt-2 block text-sm">
                  {formatDate(post.publishedAt)}
                  {post.readingTime ? ` · ${post.readingTime} min` : ""}
                </span>
              </Link>
            ))}
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
