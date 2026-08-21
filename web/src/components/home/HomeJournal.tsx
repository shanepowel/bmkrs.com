import Link from "next/link";
import { EmailCapture } from "@/components/bmkrs/EmailCapture";
import type { JournalPost } from "@/lib/types";

export function HomeJournal({ latest }: { latest: JournalPost | null }) {
  return (
    <section className="home-section home-journal" data-surface="ink">
      <div className="home-wrap home-journal__grid">
        <div>
          <p className="mono home-journal__eyebrow">the journal</p>
          <h2>one idea a fortnight</h2>
          <p className="home-journal__lede">
            the thinking we use on real brands. no filler, no funnels.
          </p>
          {latest ? (
            <Link href={`/journal/${latest.slug}`} className="home-journal__latest">
              read the last one → {latest.title}
            </Link>
          ) : (
            <Link href="/journal" className="home-journal__latest">
              read the journal →
            </Link>
          )}
        </div>
        <EmailCapture variant="dark" />
      </div>
    </section>
  );
}
