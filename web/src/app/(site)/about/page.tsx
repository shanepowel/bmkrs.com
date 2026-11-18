import type { Metadata } from "next";
import Link from "next/link";
import { PortraitTile } from "@/components/bmkrs/PortraitTile";
import { MarketingBanner } from "@/components/bmkrs/MarketingBanner";
import {
  Accent,
  Body,
  Button,
  CellGrid,
  EdgeQuote,
  FactCell,
  GhostButton,
  H1,
  H2,
  H3,
  Kicker,
  Marquee,
  Meta,
  Section,
  SpecList,
  Stat,
  StatGrid,
} from "@bmkrs/ui";
import { getAboutPage, getNowBuilding, getPeople } from "@/lib/content";
import { fetchBenchPublic } from "@/lib/bench-public";
import { visibleQuickfire } from "@/lib/quickfire";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, personSchema } from "@/lib/structured-data";
import { marketingImages } from "@/lib/marketing-assets";

export const metadata: Metadata = pageMetadata(
  "about",
  "bmkrs is a digital product studio founded by a builder: seventeen years shipping inside complex organisations, now putting products and ai into production with governance and handover included.",
  "/about",
);

const ABOUT_TICKER = [
  "founded by a builder",
  "partner team, not payroll",
  "london, and wherever you are",
  "we ship our own products too",
  "production is the product",
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
          jobTitle: "founder",
          description: about.founderStory[0] ?? "",
          linkedinUrl: founder.linkedinUrl,
          image: founderPerson?.portraitUrl,
        })
      : null,
    breadcrumbSchema([
      { name: "home", path: "/" },
      { name: "about", path: "/about" },
    ]),
  ].filter(Boolean);

  const stats = [
    {
      value: "2013",
      label: "building products and teams since. the studio came later. the rigour did not.",
    },
    { value: "4", label: "disciplines, one coordinated team" },
    { value: "1", label: "point of contact, brief to ship" },
    {
      value: String(about.studioProductCount),
      label: "products of our own, live right now",
    },
  ];

  return (
    <main className="about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section theme="ink">
        <div className="lg:max-w-[80%]">
          <Kicker theme="ink">about bmkrs</Kicker>
          <H1 theme="ink">
            built, not <Accent>branded.</Accent>
          </H1>
          <Body theme="ink" lead className="mt-8">
            {about.intro}
          </Body>
        </div>
      </Section>

      <Section theme="ink" tight pad="tight" className="!py-0">
        <Marquee items={ABOUT_TICKER} />
      </Section>

      {founder && founderPerson ? (
        <Section theme="paper">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <PortraitTile
                name={founder.name}
                discipline={founderPerson.discipline}
                portraitUrl={founderPerson.portraitUrl}
                theme="paper"
                size={200}
              />
              <Meta theme="paper" className="mt-4 block">
                {founder.name} · founder ·{" "}
                <a
                  href={founder.linkedinUrl}
                  className="underline decoration-1 underline-offset-4"
                  rel="me noopener"
                  target="_blank"
                >
                  linkedin ↗
                </a>
              </Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <H2 theme="paper">{about.founderStoryTitle}</H2>
              <Body theme="paper" className="mt-8 space-y-6 text-lg">
                {about.founderStory.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </Body>
              <EdgeQuote>&ldquo;{about.founderPullQuote}&rdquo;</EdgeQuote>
            </div>
          </div>
        </Section>
      ) : null}

      <MarketingBanner
        src={marketingImages.studioTeam}
        alt="the bmkrs team at work in the studio"
        aspect="21/9"
        priority
      />

      <Section theme="ink">
        <H2 theme="ink">{about.beliefsHeadline}</H2>
        <div className="mt-12">
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

      <Section theme="paper">
        <H2 theme="paper">a partner team, not a payroll.</H2>
        <Body theme="paper" lead className="mb-14 mt-6">
          {about.teamIntro}
        </Body>
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => {
            const quickfire = visibleQuickfire(person.quickfire);
            return (
              <article key={person.slug} id={person.slug} className="border-t border-[var(--bmkrs-rule-paper)] pt-6">
                <PortraitTile
                  name={person.name}
                  discipline={person.discipline ?? person.role}
                  portraitUrl={person.portraitUrl}
                  theme="paper"
                />
                <H3 theme="paper" className="mt-5">
                  {person.name}{" "}
                  <Meta theme="paper" className="ml-1 font-normal">
                    {person.role ?? person.discipline}
                  </Meta>
                </H3>
                <Body theme="paper" className="mt-3">
                  {person.shortBio ?? person.longBio}
                </Body>
                {quickfire.length > 0 ? (
                  <div className="mt-5">
                    <SpecList
                      items={quickfire.map((item) => ({
                        label: item.label,
                        value: item.href ? (
                          <Link href={item.href} className="underline decoration-1 underline-offset-4">
                            {item.value}
                          </Link>
                        ) : (
                          item.value
                        ),
                      }))}
                    />
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
        <Body theme="paper" className="mt-14 text-lg">
          {about.teamClosing}
        </Body>
        <Meta theme="paper" className="mt-6 block">
          collaborators:{" "}
          <Link href="/network" className="underline decoration-1 underline-offset-4">
            the network
          </Link>
        </Meta>
      </Section>

      <Section theme="ink">
        <StatGrid>
          {stats.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </StatGrid>
      </Section>

      <Section theme="orange">
        <Kicker theme="orange">now</Kicker>
        <H2 theme="orange">what is on the bench this month.</H2>
        <ul className="mt-10 max-w-[70ch]">
          {nowLines.map((line) => (
            <li
              key={line}
              className="border-t border-[var(--bmkrs-rule-orange)] py-5 text-lg font-medium leading-relaxed text-[var(--bmkrs-orange-body)]"
            >
              {line}
            </li>
          ))}
        </ul>
        <Meta theme="orange" className="mt-8 block">
          updated {nowUpdated}. if this is stale, tell us off:{" "}
          <a href="mailto:hello@bmkrs.com" className="underline decoration-1 underline-offset-4">
            hello@bmkrs.com
          </a>
        </Meta>
      </Section>

      <Section theme="ink">
        <div className="grid gap-10 lg:grid-cols-12">
          <H2 theme="ink" className="lg:col-span-4">
            {about.longGameTitle}
          </H2>
          <Body theme="ink" className="space-y-6 text-lg lg:col-span-7 lg:col-start-6">
            {longGameParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Body>
        </div>

        <div className="mt-[clamp(4rem,8vw,7rem)] border-t border-[var(--surface-rule)] pt-16">
          <H2 theme="ink">got something worth building?</H2>
          <Body theme="ink" className="mt-6 text-lg">
            tell us what it is. we will tell you what it needs, including the parts not to buy from
            us.
          </Body>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Button href="/contact">start a build</Button>
            <GhostButton href="/journal">read the journal first</GhostButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
