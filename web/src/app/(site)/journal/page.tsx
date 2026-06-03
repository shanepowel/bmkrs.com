import Link from "next/link";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { BWordRotate } from "@/components/bmkrs/BWordRotate";
import { Reveal } from "@/components/bmkrs/Reveal";
import { JOURNAL_TOPIC_WORDS } from "@/lib/b-words";
import { getJournalArticles } from "@/lib/content";

export const metadata = {
  title: "journal",
  description:
    "Practical guides on brand voice, PR, rebrands, and how to resource marketing work, written plainly, without jargon.",
};

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d
    .toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
    .toLowerCase();
}

function excerpt(body: string) {
  const block = body.trim().split(/\n\n+/)[0] ?? "";
  return block.length > 200 ? `${block.slice(0, 197)}…` : block;
}

export default async function JournalPage() {
  const articles = await getJournalArticles();

  return (
    <>
      <section className="page-hero min-h-[52vh]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Journal</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display mt-4 text-[clamp(2.25rem,9vw,8rem)] font-bold">
              notes on <BWordRotate words={JOURNAL_TOPIC_WORDS} />{" "}
              <span className="text-accent">work.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead mt-7 max-w-[540px]">
              Practical guides for founders and marketing leads. No inflated metrics, no
              superlatives. just what we have seen work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="wrap">
          <ul className="divide-y-2 divide-[var(--line)] border-t-2 border-[var(--line)]">
            {articles.map((article, i) => (
              <li key={article.slug}>
                <Reveal delay={(i % 2) as 0 | 1}>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="group block py-10 transition-colors hover:bg-ink/[0.02]"
                  >
                    <time
                      dateTime={article.publishedAt}
                      className="text-[13px] font-semibold text-accent"
                    >
                      {formatDate(article.publishedAt)}
                    </time>
                    <h2 className="display mt-3 text-[clamp(1.5rem,4vw,2.5rem)] font-semibold lowercase group-hover:text-accent">
                      {article.h1}
                    </h2>
                    <p className="mt-4 max-w-[620px] text-muted">{excerpt(article.body)}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-accent">
                      read article <ArrowIcon />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
