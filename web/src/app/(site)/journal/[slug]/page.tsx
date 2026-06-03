import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/bmkrs/ArticleBody";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { Reveal } from "@/components/bmkrs/Reveal";
import { getJournalArticle, getJournalArticles } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d
    .toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
    .toLowerCase();
}

export async function generateStaticParams() {
  const articles = await getJournalArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getJournalArticle(slug);
  if (!article) return { title: "journal" };
  return {
    title: article.seoTitle,
    description: article.metaDescription,
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
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
            <time
              dateTime={article.publishedAt}
              className="eyebrow mt-8 block"
            >
              {formatDate(article.publishedAt)}
            </time>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display mt-4 max-w-[900px] text-[clamp(2rem,6vw,4.5rem)] font-bold lowercase leading-[1.05]">
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
                    className="group display text-[clamp(1.25rem,3vw,2rem)] font-semibold lowercase hover:text-accent"
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
