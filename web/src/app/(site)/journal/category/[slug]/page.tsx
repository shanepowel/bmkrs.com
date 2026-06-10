import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/bmkrs/Reveal";
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
    <main className="journal page-top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section-pad">
        <div className="wrap section">
          <Reveal>
            <Link
              href="/journal"
              className="text-sm font-semibold text-muted transition-colors hover:text-accent"
            >
              ← journal
            </Link>
            <p className="eyebrow mt-8 block">{label}</p>
            <h1 className="display mt-4 text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.05]">
              {label}
            </h1>
            {intro ? <p className="muted mt-4 max-w-[52ch] text-lg">{intro}</p> : null}
            <p className="muted mt-2 text-sm">{posts.length} posts</p>
          </Reveal>

          <div className="journal-grid mt-12">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="journal-card"
                data-category={post.category}
              >
                {post.cover?.url ? (
                  <div className="journal-cover relative">
                    <Image
                      src={post.cover.url}
                      alt={post.cover.alt ?? post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                ) : null}
                <span className="eyebrow mt-4 block">{label}</span>
                <h2 className="display mt-2 text-xl">{post.title}</h2>
                <p className="excerpt mt-2">{post.excerpt}</p>
                <span className="muted mt-2 block text-sm">
                  {formatDate(post.publishedAt)}
                  {post.readingTime ? ` · ${post.readingTime} min` : ""}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
