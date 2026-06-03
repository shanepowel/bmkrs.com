import Link from "next/link";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { Reveal } from "@/components/bmkrs/Reveal";
import { getPage } from "@/lib/content";

export const metadata = { title: "about" };

const beliefs = [
  { num: "01", title: "a brand is a promise.", body: "we make sure yours is worth keeping." },
  { num: "02", title: "design does a job.", body: "it isn't decoration. it earns its place." },
  { num: "03", title: "growth beats noise.", body: "we measure what actually matters." },
  { num: "04", title: "one team, all in.", body: "no churn, no hand-offs, no excuses." },
];

export default async function AboutPage() {
  const page = await getPage("about");
  const body1 = page.sections?.find((s) => s.key === "body1")?.content;
  const body2 = page.sections?.find((s) => s.key === "body2")?.content;
  const est = page.sections?.find((s) => s.key === "est")?.content;

  return (
    <>
      <section className="flex min-h-[72vh] flex-col justify-center px-[var(--pad)] pt-32">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{page.heroEyebrow}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display mt-4 text-[clamp(48px,9vw,144px)] font-bold">
              we are the <br />
              <span className="text-accent">brandmakers.</span>
            </h1>
          </Reveal>
          {page.heroSubtitle && (
            <Reveal delay={2}>
              <p className="lead mt-8">{page.heroSubtitle}</p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="wrap grid gap-14 md:grid-cols-[200px_1fr]">
          <Reveal>
            <p className="text-[13px] font-semibold text-accent">est.</p>
            <p className="mt-1 text-base">{est || "[2013]"}</p>
          </Reveal>
          <div className="space-y-6">
            {body1 && (
              <Reveal delay={1}>
                <p className="display text-[clamp(20px,2.5vw,32px)] font-semibold leading-[1.18] tracking-[-0.02em]">
                  {body1}
                </p>
              </Reveal>
            )}
            {body2 && (
              <Reveal delay={2}>
                <p className="text-[clamp(18px,2vw,23px)] text-muted">{body2}</p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="section-pad block-mint">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">what we believe</span>
          </Reveal>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {beliefs.map((b, i) => (
              <Reveal key={b.num} delay={(i % 2) as 0 | 1}>
                <div className="cap-card">
                  <span className="col-span-2 font-display text-[15px] font-semibold text-accent">
                    {b.num}
                  </span>
                  <div className="col-span-2">
                    <h3 className="display mb-2.5 text-[clamp(24px,3vw,36px)]">{b.title}</h3>
                    <p className="text-base text-muted">{b.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad text-center">
        <div className="wrap">
          <Reveal>
            <h2 className="display mb-7 text-[clamp(40px,7vw,100px)]">
              let&apos;s make something <span className="text-accent">worth choosing.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="flex flex-wrap justify-center gap-3.5">
              <Link href="/contact" className="btn-primary">
                work with us
              </Link>
              <Link href="/services" className="btn-ghost">
                our services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
