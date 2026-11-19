import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortraitTile } from "@/components/bmkrs/PortraitTile";
import { MarketingBanner } from "@/components/bmkrs/MarketingBanner";
import {
  Body,
  Button,
  CellGrid,
  EdgeQuote,
  FactCell,
  GhostButton,
  H1,
  H2,
  Kicker,
  Marquee,
  Meta,
  Section,
  Stat,
  StatGrid,
  StorySplit,
  TeamGrid,
} from "@bmkrs/ui";
import { brandMessaging } from "@/lib/content/messaging";
import { getAboutPage, getNowBuilding, getPeople } from "@/lib/content";
import { fetchBenchPublic } from "@/lib/bench-public";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, personSchema } from "@/lib/structured-data";
import { marketingImages } from "@/lib/marketing-assets";

export const metadata: Metadata = pageMetadata(
  "About",
  "Meet bmkrs, an independent creative and digital studio in London. Small enough to care, experienced enough to deliver.",
  "/about",
);

const ABOUT_TICKER = [
  "independent by nature",
  "connected by design",
  "london, and everywhere",
  "strategy meets making",
  "built for what comes next",
];

export default async function AboutPage() {
  const [about, people, nowBuilding, bench] = await Promise.all([
    getAboutPage(),
    getPeople(),
    getNowBuilding(),
    fetchBenchPublic(),
  ]);
  const benchPulse = bench?.pulse;
  const benchLines = benchPulse ? [benchPulse.line] : [];
  const nowLines = [...benchLines, ...nowBuilding.lines];
  const nowUpdated = benchPulse?.updated ?? nowBuilding.updatedLabel;
  const founder = about.founder;
  const founderPerson = people.find((p) => p.slug === "shane-powell") ?? people[0];
  const longGameParagraphs = about.longGame.split(/\n\n+/).filter(Boolean);

  const jsonLd = [
    founder
      ? personSchema({
          name: founder.name,
          jobTitle: "Founder",
          description: about.founderStory[0] ?? "",
          linkedinUrl: founder.linkedinUrl,
          image: founderPerson?.portraitUrl,
        })
      : null,
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  ].filter(Boolean);

  const stats = [
    {
      value: "2013",
      label: "Building products and teams since. The studio came later. The rigour did not.",
    },
    { value: "4", label: "Disciplines, one coordinated team" },
    { value: "1", label: "Point of contact, brief to ship" },
    {
      value: String(about.studioProductCount),
      label: "Products of our own, live right now",
    },
  ];

  return (
    <main className="about-page" data-surface="paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section theme="paper">
        <div className="lg:max-w-[80%]">
          <Kicker theme="paper">about bmkrs</Kicker>
          <H1 theme="paper" className="mt-3">
            {about.headline}
          </H1>
          <Body theme="paper" lead className="mt-6">
            {about.intro}
          </Body>
        </div>
      </Section>

      <Section theme="ink" tight pad="tight" className="!py-0">
        <Marquee items={ABOUT_TICKER} />
      </Section>

      {founder && founderPerson ? (
        <Section theme="paper">
          <StorySplit
            eyebrow="our story"
            title={about.founderStoryTitle}
            body={
              <>
                {about.founderStory.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mb-5 last:mb-0">
                    {paragraph}
                  </p>
                ))}
                <EdgeQuote>&ldquo;{about.founderPullQuote}&rdquo;</EdgeQuote>
                <Meta theme="paper" className="mt-5 block">
                  {founder.name} · founder ·{" "}
                  <a
                    href={founder.linkedinUrl}
                    className="underline decoration-1 underline-offset-4"
                    rel="me noopener"
                    target="_blank"
                  >
                    LinkedIn ↗
                  </a>
                </Meta>
              </>
            }
            media={
              founderPerson.portraitUrl ? (
                <Image
                  src={founderPerson.portraitUrl}
                  alt={`${founder.name}, founder`}
                  width={720}
                  height={900}
                  className="h-full w-full object-cover"
                />
              ) : (
                <PortraitTile
                  name={founder.name}
                  discipline={founderPerson.discipline}
                  theme="ink"
                  size={320}
                />
              )
            }
          />
        </Section>
      ) : null}

      <MarketingBanner
        src={marketingImages.studioTeam}
        alt="The bmkrs team at work in the studio"
        aspect="21/9"
        priority
      />

      <Section theme="paper">
        <H2 theme="paper">{brandMessaging.teamEyebrow}</H2>
        <Body theme="paper" lead className="mb-10 mt-5">
          {about.teamIntro}
        </Body>
        <TeamGrid
          members={people.map((person) => ({
            name: person.name,
            role: person.role ?? person.discipline ?? "",
            portrait: (
              <PortraitTile
                name={person.name}
                discipline={person.discipline ?? person.role}
                portraitUrl={person.portraitUrl}
                theme="paper"
                size={320}
              />
            ),
          }))}
        />
        <Body theme="paper" className="mt-10">
          {about.teamClosing}
        </Body>
        <Meta theme="paper" className="mt-5 block">
          collaborators:{" "}
          <Link href="/network" className="underline decoration-1 underline-offset-4">
            the network
          </Link>
        </Meta>
      </Section>

      <Section theme="ink">
        <H2 theme="ink">{about.beliefsHeadline}</H2>
        <div className="mt-8">
          <CellGrid>
            {about.beliefs.map((belief, index) => (
              <FactCell
                key={belief.title}
                index={String(index + 1).padStart(2, "0")}
                title={belief.title}
                body={belief.body}
              />
            ))}
          </CellGrid>
        </div>
      </Section>

      <Section theme="paper" pad="tight">
        <StatGrid>
          {stats.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </StatGrid>
      </Section>

      <Section theme="orange">
        <Kicker theme="orange">now</Kicker>
        <H2 theme="orange" className="mt-3">
          What is on the bench this month.
        </H2>
        <ul className="mt-8 max-w-[70ch]">
          {nowLines.map((line) => (
            <li
              key={line}
              className="border-t border-[var(--bmkrs-rule-orange)] py-4 text-[length:var(--text-body)] font-medium leading-relaxed text-[var(--bmkrs-orange-body)]"
            >
              {line}
            </li>
          ))}
        </ul>
        <Meta theme="orange" className="mt-6 block">
          updated {nowUpdated}. if this is stale, tell us off:{" "}
          <a href="mailto:hello@bmkrs.com" className="underline decoration-1 underline-offset-4">
            hello@bmkrs.com
          </a>
        </Meta>
      </Section>

      <Section theme="paper">
        <div className="grid gap-8 lg:grid-cols-12">
          <H2 theme="paper" className="lg:col-span-4">
            {about.longGameTitle}
          </H2>
          <Body theme="paper" className="space-y-5 lg:col-span-7 lg:col-start-6">
            {longGameParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Body>
        </div>

        <div className="mt-[var(--space-block)] border-t border-[var(--bmkrs-rule-paper)] pt-[var(--space-block)]">
          <H2 theme="paper">{brandMessaging.closeTitle}</H2>
          <Body theme="paper" className="mt-5">
            {brandMessaging.closeLead} Including the parts not to buy from us.
          </Body>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button href="/contact">{brandMessaging.ctaPrimary} →</Button>
            <GhostButton href="/journal">Read the journal first</GhostButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
