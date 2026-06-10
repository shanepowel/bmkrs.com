import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { PageHeroSplit } from "@/components/bmkrs/PageHeroSplit";
import { Reveal } from "@/components/bmkrs/Reveal";
import { SectionImage } from "@/components/bmkrs/SectionImage";
import { MotionShowcase } from "@/components/bmkrs/MotionShowcase";
import { H2, Kicker, Section } from "@/components/bmkrs/surfaces";
import { getMotionTiers } from "@/lib/content";
import { pageHeroImages } from "@/lib/content/image-fallbacks";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "motion",
  "a rolling monthly partnership for brands that never stop talking. one senior team keeping your brand, voice, pr and growth moving, month after month. no lock-in.",
  "/motion",
);

const HOW_IT_WORKS = [
  {
    n: "i",
    title: "plan",
    body: "each month starts with a short plan: what moves the brand next, agreed together.",
  },
  {
    n: "ii",
    title: "ship",
    body: "the same team builds and ships continuously, not in a once-a-quarter scramble.",
  },
  {
    n: "iii",
    title: "measure",
    body: "a monthly readout on what actually moved, so next month is sharper than the last.",
  },
  {
    n: "iv",
    title: "compound",
    body: "the team learns your brand deeper every month. that knowledge is the whole point.",
  },
];

export default async function MotionPage() {
  const tiers = await getMotionTiers();

  return (
    <main>
      <PageHeroSplit image={pageHeroImages.motion} minHeight="min-h-[78vh]" className="motion-hero">
        <Reveal>
          <p className="eyebrow">ongoing partnership</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="display mt-4 text-[clamp(2.5rem,12vw,11.875rem)] font-bold">
            always in <span className="text-accent">motion.</span>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="lead mt-8 max-w-[640px]">
            brands do not stop talking, so neither do we. motion is a rolling monthly partnership:
            one senior team keeping your brand, voice, pr and growth moving, month after month.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              start motion <ArrowIcon />
            </Link>
            <a href="#tiers" className="text-sm font-semibold text-muted hover:text-accent">
              see the tiers
            </a>
          </div>
        </Reveal>
      </PageHeroSplit>

      <MotionShowcase />

      <Section theme="ink">
        <div className="prose-with-media grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Kicker theme="ink">why it exists</Kicker>
            <H2 theme="ink">the project ends. the brand does not.</H2>
            <p className="lead mt-6 max-w-[560px]">
              most agencies build the thing, hand it over, and disappear. then the brand drifts, the
              voice slips, and momentum quietly dies. motion is the opposite: the team that built it
              stays, and keeps it sharp.
            </p>
          </div>
          <SectionImage src={pageHeroImages.work.src} alt="brand work in market" aspect="wide" />
        </div>
        <div className="motion-contrast mt-12">
          <div className="contrast-col">
            <span className="eyebrow">the usual way</span>
            <ul>
              <li>a burst of work, then silence</li>
              <li>a new team each time, relearning your brand</li>
              <li>momentum lost between projects</li>
              <li>hand-offs that drop the detail</li>
            </ul>
          </div>
          <div className="contrast-col contrast-col--ours">
            <span className="eyebrow">motion</span>
            <ul>
              <li>continuous, every month</li>
              <li>the same team, compounding knowledge</li>
              <li>momentum that builds, not resets</li>
              <li>no hand-offs, no strangers</li>
            </ul>
          </div>
        </div>

        <div className="mt-[var(--space-block)]">
          <Kicker theme="ink">how it works</Kicker>
          <H2 theme="ink">plan, ship, measure, compound.</H2>
          <div className="howit-grid mt-10">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.n} className="howit">
                <span className="eyebrow">{step.n}</span>
                <h3 className="display mt-2 text-xl">{step.title}</h3>
                <p className="mt-2 text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section theme="paper" className="scroll-mt-24" id="tiers">
        <Kicker theme="paper">the tiers</Kicker>
        <H2 theme="paper">grow with us.</H2>
        <div className="motion-tier-grid mt-10">
          {tiers.map((tier) => (
            <article key={tier.slug} className="motion-tier-card">
              <h3 className="display">{tier.name}</h3>
              <p className="mt-2">{tier.tagline}</p>
              {tier.forWho && <p className="motion-meta mt-3">{tier.forWho}</p>}
              {tier.cadence && (
                <p className="motion-meta">
                  <span className="eyebrow mb-1 block">cadence</span> {tier.cadence}
                </p>
              )}
              {tier.commitment && (
                <p className="motion-meta">
                  <span className="eyebrow mb-1 block">commitment</span> {tier.commitment}
                </p>
              )}
              {tier.priceFrom && (
                <p className="display mt-4 text-2xl font-bold tracking-[-0.04em]">
                  from {tier.priceFrom}
                  {tier.priceNote ?? "/month"}
                </p>
              )}
              {tier.monthlyDeliverables?.length ? (
                <ul className="product-included mt-3">
                  {tier.monthlyDeliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {tier.outcome && <p className="mt-3 text-sm text-muted">{tier.outcome}</p>}
              <Link href="/contact" className="product-cta mt-auto pt-4">
                let&apos;s talk →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section theme="ink" tight>
        <p className="lede max-w-[48ch]">
          rolling, monthly, thirty days&apos; notice, no lock-in. you stay because it works.
        </p>
      </Section>
    </main>
  );
}
