import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EmailCapture } from "@/components/bmkrs/EmailCapture";
import { Kicker } from "@/components/bmkrs/Kicker";
import { Marquee } from "@/components/bmkrs/Marquee";
import { PersonCard } from "@/components/bmkrs/PersonCard";
import { PullQuote } from "@/components/bmkrs/PullQuote";
import { Reveal } from "@/components/bmkrs/Reveal";
import { RuledGrid, RuledGridItem } from "@/components/bmkrs/RuledGrid";
import { SectionRule } from "@/components/bmkrs/SectionRule";
import { getAboutPage, getNowBuilding, getPeople } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { personSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(
  "about",
  "bmkrs is a brand company founded by a builder: a director-level consultant who spent years shipping products inside complex organisations, now building brands the same way.",
  "/about",
);

const ABOUT_TICKER = [
  "founded by a builder",
  "partner team, not payroll",
  "london, and wherever you are",
  "we ship our own products too",
  "the better-told brand wins",
];

export default async function AboutPage() {
  const [about, people, nowBuilding] = await Promise.all([
    getAboutPage(),
    getPeople(),
    getNowBuilding(),
  ]);
  const founder = about.founder;
  const founderPerson = people.find((p) => p.slug === "shane-powell") ?? people[0];
  const longGameParagraphs = about.longGame.split(/\n\n+/).filter(Boolean);

  const founderJsonLd = founder
    ? personSchema({
        name: founder.name,
        jobTitle: "founder",
        description: about.founderStory[0] ?? "",
        linkedinUrl: founder.linkedinUrl,
      })
    : null;

  const stats = [
    {
      value: "2013",
      label:
        "building products and teams since. the studio came later. the rigour did not.",
    },
    {
      value: "4",
      label: "disciplines, one coordinated team",
    },
    {
      value: "1",
      label: "point of contact, brief to ship",
    },
    {
      value: String(about.studioProductCount),
      label: "products of our own, live right now",
    },
  ];

  return (
    <main>
      {founderJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }}
        />
      ) : null}

      {/* 1. hero */}
      <section className="page-top section-pad pb-[var(--space-block)]">
        <div className="wrap site-grid">
          <Reveal className="site-span-9 cluster-tight">
            <Kicker>about bmkrs</Kicker>
            <h1 className="display text-hero font-medium">{about.headline}</h1>
            <p className="lead max-w-[65ch]">{about.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* 2. ticker */}
      <Marquee items={ABOUT_TICKER} duration="48s" />

      {/* 3. founder */}
      {founder && founderPerson ? (
        <section className="section-pad">
          <div className="wrap site-grid items-start gap-y-10">
            <Reveal className="site-span-4">
              <div className="team-photo relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--block-lilac)] lg:mx-0">
                {founderPerson.portraitUrl ? (
                  <Image
                    src={founderPerson.portraitUrl}
                    alt={founder.portraitAlt}
                    fill
                    className="object-cover"
                    sizes="360px"
                    priority
                  />
                ) : (
                  <span className="team-initial preserve-case">{founder.name.charAt(0)}</span>
                )}
              </div>
              <p className="mono mt-4 text-meta text-muted">
                {founder.name} · founder ·{" "}
                <a
                  href={founder.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  linkedin ↗
                </a>
              </p>
            </Reveal>
            <Reveal delay={1} className="site-span-7">
              <h2 className="display text-h2 font-medium">{about.founderStoryTitle}</h2>
              <div className="prose mt-[var(--space-tight)] max-w-[65ch]">
                {about.founderStory.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mb-6 text-[17px] leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              <PullQuote className="mt-[var(--space-block)]">{about.founderPullQuote}</PullQuote>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* 4. beliefs */}
      <section className="section-pad">
        <div className="wrap">
          <SectionRule />
          <div className="cluster-tight mt-[var(--space-tight)] max-w-[65ch]">
            <h2 className="display text-h2 font-medium">{about.beliefsHeadline}</h2>
          </div>
          <RuledGrid className="mt-[var(--space-block)]" columns={4}>
            {about.beliefs.map((belief, index) => (
              <RuledGridItem key={belief.title}>
                <p className="mono text-meta text-accent">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="display mt-2 text-h3 font-medium">{belief.title}</h3>
                <p className="mt-2 text-muted">{belief.body}</p>
              </RuledGridItem>
            ))}
          </RuledGrid>
        </div>
      </section>

      {/* 5. partner team */}
      <section className="section-pad">
        <div className="wrap section">
          <SectionRule />
          <div className="cluster-tight mt-[var(--space-tight)] max-w-[65ch]">
            <h2 className="display text-h2 font-medium">a partner team, not a payroll.</h2>
            <p className="lead">{about.teamIntro}</p>
          </div>
          <div className="team-grid mt-[var(--space-block)] lg:grid-cols-2 xl:grid-cols-3">
            {people.map((person) => (
              <PersonCard key={person.slug} person={person} />
            ))}
          </div>
          {about.teamClosing ? (
            <p className="display mt-12 text-[clamp(1.25rem,3vw,1.75rem)] font-medium">
              {about.teamClosing}
            </p>
          ) : null}
        </div>
      </section>

      {/* 6. numbers */}
      <section className="section-pad">
        <div className="wrap">
          <RuledGrid columns={4}>
            {stats.map((stat) => (
              <RuledGridItem key={stat.value}>
                <p className="mono text-[clamp(2rem,5vw,3.5rem)] font-normal leading-none text-accent">
                  {stat.value}
                </p>
                <p className="mono mt-3 text-meta text-muted">→ {stat.label}</p>
              </RuledGridItem>
            ))}
          </RuledGrid>
        </div>
      </section>

      {/* 7. now building */}
      <section className="section-pad">
        <div className="wrap max-w-[65ch]">
          <SectionRule />
          <div className="cluster-tight mt-[var(--space-tight)]">
            <Kicker>now</Kicker>
            <h2 className="display text-h2 font-medium">what is on the bench this month.</h2>
          </div>
          <ul className="mt-[var(--space-block)] space-y-4 text-[17px] leading-relaxed text-muted">
            {nowBuilding.lines.map((line) => (
              <li key={line}>· {line}</li>
            ))}
          </ul>
          <p className="mono mt-8 text-meta text-muted">
            updated {nowBuilding.updatedLabel}. if this is stale, tell us off:{" "}
            <a href="mailto:hello@bmkrs.com" className="text-accent hover:underline">
              hello@bmkrs.com
            </a>
          </p>
        </div>
      </section>

      {/* 8. long game */}
      <section className="section-pad">
        <div className="wrap max-w-[65ch]">
          <SectionRule />
          <h2 className="display mt-[var(--space-tight)] text-h2 font-medium">{about.longGameTitle}</h2>
          <div className="mt-[var(--space-tight)] space-y-6">
            {longGameParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="lead">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 9. cta */}
      <section className="section-pad">
        <div className="wrap max-w-[65ch]">
          <SectionRule />
          <div className="cluster-tight mt-[var(--space-tight)]">
            <h2 className="display text-h2 font-medium">got something worth building?</h2>
            <p className="lead">
              tell us what it is. we will tell you what it needs, including the parts not to buy from
              us.
            </p>
          </div>
          <div className="btn-row mt-[var(--space-block)]">
            <Link href="/contact" className="btn-primary">
              start a project
            </Link>
            <Link href="/journal" className="mono text-meta text-accent hover:underline">
              or just read the journal first →
            </Link>
          </div>
        </div>
      </section>

      <EmailCapture />
    </main>
  );
}
