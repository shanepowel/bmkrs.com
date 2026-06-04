import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/bmkrs/ArticleBody";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { PortableBody } from "@/components/bmkrs/PortableBody";
import { Reveal } from "@/components/bmkrs/Reveal";
import {
  getJournalArticle,
  getJournalArticles,
  getJournalIndex,
  getPost,
  getPostSlugs,
} from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bmkrs.com";

type Props = { params: Promise<{ slug: string }> };

const CATEGORY_LABEL: Record<string, string> = {
  brand: "brand + identity",
  voice: "voice + messaging",
  pr: "pr + comms",
  growth: "growth",
  studio: "studio",
};

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso)
    .toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
    .toLowerCase();
}

export async function generateStaticParams() {
  const [postSlugs, legacy] = await Promise.all([getPostSlugs(), getJournalArticles()]);
  const slugs = new Set([...postSlugs, ...legacy.map((a) => a.slug)]);
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (post) {
    const title = post.seo?.metaTitle ?? `${post.title} | bmkrs.`;
    const description = post.seo?.metaDescription ?? post.excerpt;
    const ogImage = post.seo?.ogImage ?? post.cover?.url;
    const ogUrl = ogImage?.startsWith("http") ? ogImage : ogImage ? `${siteUrl}${ogImage}` : undefined;
    return {
      title,
      description,
      openGraph: ogUrl
        ? { title, description, images: [{ url: ogUrl, width: 1200, height: 630, alt: post.title }] }
        : { title, description },
    };
  }
  const article = await getJournalArticle(slug);
  if (!article) return { title: "journal" };
  return { title: article.seoTitle, description: article.metaDescription };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (post) {
    const { posts } = await getJournalIndex();
    const others = posts.filter((p) => p.slug !== slug).slice(0, 2);

    return (
      <article className="page-top px-[var(--pad)] pb-16">
        <div className="wrap max-w-[900px]">
          <Link
            href="/journal"
            className="text-sm font-semibold text-muted transition-colors hover:text-accent"
          >
            ← journal
          </Link>
          <p className="eyebrow mt-8 block">
            {CATEGORY_LABEL[post.category] ?? post.category} · {formatDate(post.publishedAt)}
            {post.readingTime ? ` · ${post.readingTime} min read` : ""}
          </p>
          <h1 className="display mt-4 text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.05]">
            {post.title}
          </h1>
          {post.author && (
            <p className="mt-4 text-sm text-muted">
              {post.author.name}
              {post.author.discipline ? ` · ${post.author.discipline}` : ""}
            </p>
          )}
          {post.cover?.url && (
            <div className="relative my-10 aspect-[16/9] overflow-hidden rounded-[var(--radius)]">
              <Image
                src={post.cover.url}
                alt={post.cover.alt ?? post.title}
                fill
                className="object-cover"
                priority
                sizes="900px"
              />
            </div>
          )}
          <PortableBody blocks={post.body} />

          {(post.relatedProduct || post.relatedCaseStudy) && (
            <aside className="post-cta mt-14 border-t-2 border-[var(--line)] pt-10">
              <span className="eyebrow block">where this shows up</span>
              <div className="mt-4 flex flex-wrap gap-4">
                {post.relatedProduct && (
                  <Link href={`/services#${post.relatedProduct.slug}`} className="btn-primary inline-flex">
                    {post.relatedProduct.name} →
                  </Link>
                )}
                {post.relatedCaseStudy && (
                  <Link
                    href={`/work/${post.relatedCaseStudy.slug}`}
                    className="font-semibold text-accent hover:underline"
                  >
                    see it in {post.relatedCaseStudy.title} →
                  </Link>
                )}
              </div>
            </aside>
          )}

          <nav className="post-foot mt-12 flex flex-wrap gap-6 border-t border-[var(--line)] pt-8 text-sm font-semibold">
            <Link href="/journal" className="text-muted hover:text-accent">
              more from the journal
            </Link>
            <Link href="/contact" className="text-accent hover:underline">
              start a project
            </Link>
          </nav>
        </div>

        {others.length > 0 && (
          <section className="section-pad border-t-2 border-[var(--line)] bg-ink/[0.02]">
            <div className="wrap">
              <h2 className="eyebrow">more from the journal</h2>
              <ul className="mt-8 space-y-6">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/journal/${other.slug}`}
                      className="group display text-[clamp(1.25rem,3vw,2rem)] font-semibold hover:text-accent"
                    >
                      {other.title} <ArrowIcon />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </article>
    );
  }

  const article = await getJournalArticle(slug);
  if (!article) notFound();

  const all = await getJournalArticles();
  const others = all.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <article className="page-top px-[var(--pad)] pb-16">
        <div className="wrap">
          <Reveal>
            <Link
              href="/journal"
              className="text-sm font-semibold text-muted transition-colors hover:text-accent"
            >
              ← journal
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <time dateTime={article.publishedAt} className="eyebrow mt-8 block">
              {formatDate(article.publishedAt)}
            </time>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display mt-4 max-w-[900px] text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.05]">
              {article.h1}
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <ArticleBody body={article.body} />
          </Reveal>
          {article.relatedLinks && article.relatedLinks.length > 0 && (
            <Reveal delay={2}>
              <nav
                className="mt-14 flex flex-wrap gap-3 border-t-2 border-[var(--line)] pt-10"
                aria-label="related links"
              >
                {article.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border-2 border-ink/15 px-4 py-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </Reveal>
          )}
        </div>
      </article>

      {others.length > 0 && (
        <section className="section-pad border-t-2 border-[var(--line)] bg-ink/[0.02]">
          <div className="wrap">
            <h2 className="eyebrow">more from the journal</h2>
            <ul className="mt-8 space-y-6">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/journal/${other.slug}`}
                    className="group display text-[clamp(1.25rem,3vw,2rem)] font-semibold hover:text-accent"
                  >
                    {other.h1} <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
