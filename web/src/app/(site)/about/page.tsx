import type { Metadata } from "next";
import Link from "next/link";
import { AboutTicker } from "@/components/bmkrs/AboutTicker";
import { PortraitTile } from "@/components/bmkrs/PortraitTile";
import {
  H2,
  Kicker,
  Section,
  mono as monoStyle,
  themeBodyStyle,
  themeFaintStyle,
} from "@/components/bmkrs/surfaces";
import { getAboutPage, getNowBuilding, getPeople, getSiteSettings } from "@/lib/content";
import { BMKRS_ORANGE } from "@/lib/brand";
import {
  networkPortalLabel,
  resolveNetworkPortalUrl,
} from "@/lib/urls";
import { visibleQuickfire } from "@/lib/quickfire";
import { SURFACE } from "@/lib/surfaces";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, personSchema } from "@/lib/structured-data";

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
  const [about, people, nowBuilding, settings] = await Promise.all([
    getAboutPage(),
    getPeople(),
    getNowBuilding(),
    getSiteSettings(),
  ]);
  const networkPortalUrl = resolveNetworkPortalUrl(settings);
  const networkPortalHost = networkPortalLabel(networkPortalUrl);
  const founder = about.founder;
  const founderPerson = people.find((p) => p.slug === "shane-powell") ?? people[0];
  const longGameParagraphs = about.longGame.split(/\n\n+/).filter(Boolean);

  const ink = SURFACE.ink;
  const paper = SURFACE.paper;
  const orange = SURFACE.orange;

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
          <h1 className="display text-hero font-medium">
            built, not <span style={{ color: BMKRS_ORANGE }}>branded.</span>
          </h1>
          <p className="lead mt-8 max-w-[65ch]" style={themeBodyStyle("ink")}>
            {about.intro}
          </p>
        </div>
      </Section>

      <AboutTicker items={ABOUT_TICKER} />

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
              <p className="mt-4 text-meta" style={themeFaintStyle("paper")}>
                {founder.name} · founder ·{" "}
                <a
                  href={founder.linkedinUrl}
                  style={{ color: paper.text }}
                  className="underline decoration-1 underline-offset-4"
                  rel="me noopener"
                  target="_blank"
                >
                  linkedin ↗
                </a>
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <H2 theme="paper">{about.founderStoryTitle}</H2>
              <div className="mt-8 max-w-[65ch] space-y-6 text-lg leading-relaxed" style={themeBodyStyle("paper")}>
                {about.founderStory.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
              <blockquote
                className="mt-10 max-w-[40ch] pl-5 text-h3 font-medium leading-snug"
                style={{ borderLeft: `3px solid ${BMKRS_ORANGE}`, color: paper.text }}
              >
                &ldquo;{about.founderPullQuote}&rdquo;
              </blockquote>
            </div>
          </div>
        </Section>
      ) : null}

      <Section theme="ink">
            <H2 theme="ink">{about.beliefsHeadline}</H2>
        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {about.beliefs.map((belief, index) => (
            <div
              key={belief.title}
              style={{ borderTop: `1px solid ${ink.rule}` }}
              className="pt-6"
            >
              <p className="mb-3 text-meta" style={{ ...monoStyle, color: BMKRS_ORANGE }}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-2xl font-medium">{belief.title}</h3>
              <p className="max-w-[55ch] leading-relaxed" style={themeBodyStyle("ink")}>
                {belief.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section theme="paper">
        <H2 theme="paper">a partner team, not a payroll.</H2>
        <p className="lead mb-14 mt-6 max-w-[65ch]" style={themeBodyStyle("paper")}>
          {about.teamIntro}
        </p>
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => {
            const quickfire = visibleQuickfire(person.quickfire);
            return (
              <article
                key={person.slug}
                id={person.slug}
                style={{ borderTop: `1px solid ${paper.rule}` }}
                className="pt-6"
              >
                <PortraitTile
                  name={person.name}
                  discipline={person.discipline ?? person.role}
                  portraitUrl={person.portraitUrl}
                  theme="paper"
                />
                <h3 className="mt-5 text-xl font-medium">
                  {person.name}{" "}
                  <span className="ml-1 text-meta font-normal" style={themeFaintStyle("paper")}>
                    {person.role ?? person.discipline}
                  </span>
                </h3>
                <p className="mt-3 leading-relaxed" style={themeBodyStyle("paper")}>
                  {person.shortBio ?? person.longBio}
                </p>
                {quickfire.length > 0 ? (
                  <dl className="mt-5 space-y-1.5">
                    {quickfire.map((item) => (
                      <div key={item.label} className="flex gap-2 text-meta" style={monoStyle}>
                        <dt style={{ color: paper.faint }}>{item.label} →</dt>
                        <dd style={{ color: paper.text }}>
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="underline decoration-1 underline-offset-4"
                              style={{ color: paper.text }}
                            >
                              {item.value}
                            </Link>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </article>
            );
          })}
        </div>
        <p className="mt-14 text-lg" style={themeBodyStyle("paper")}>
          {about.teamClosing}
        </p>
        <p className="mono mt-6 text-meta" style={themeFaintStyle("paper")}>
          collaborators:{" "}
          <a
            href={networkPortalUrl}
            className="underline decoration-1 underline-offset-4"
            style={{ color: paper.text }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {networkPortalHost}
          </a>
        </p>
      </Section>

      <Section theme="ink">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{ borderTop: `1px solid ${ink.rule}` }}
              className="pt-5"
            >
              <p className="text-5xl font-medium" style={{ letterSpacing: "-0.02em" }}>
                {stat.value}
              </p>
              <p className="mt-3 text-meta leading-relaxed" style={themeFaintStyle("ink")}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section theme="orange">
        <Kicker theme="orange">now</Kicker>
        <H2 theme="orange">what is on the bench this month.</H2>
        <ul className="mt-10 max-w-[70ch]">
          {nowBuilding.lines.map((line) => (
            <li
              key={line}
              style={{ borderTop: `1px solid ${orange.rule}`, color: orange.body }}
              className="py-5 text-lg font-medium leading-relaxed"
            >
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-meta" style={themeFaintStyle("orange")}>
          updated {nowBuilding.updatedLabel}. if this is stale, tell us off:{" "}
          <a
            href="mailto:hello@bmkrs.com"
            style={{ color: orange.text }}
            className="underline decoration-1 underline-offset-4"
          >
            hello@bmkrs.com
          </a>
        </p>
      </Section>

      <Section theme="ink">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2
            className="text-3xl font-medium lg:col-span-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            {about.longGameTitle}
          </h2>
          <div
            className="space-y-6 text-lg leading-relaxed lg:col-span-7 lg:col-start-6"
            style={themeBodyStyle("ink")}
          >
            {longGameParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div
          style={{ borderTop: `1px solid ${ink.rule}` }}
          className="mt-[clamp(4rem,8vw,7rem)] pt-16"
        >
          <H2 theme="ink">got something worth building?</H2>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed" style={themeBodyStyle("ink")}>
            tell us what it is. we will tell you what it needs, including the parts not to buy from
            us.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link href="/contact" className="btn-primary">
              start a project
            </Link>
            <Link
              href="/journal"
              className="text-meta underline-offset-4 hover:underline"
              style={{ ...monoStyle, color: ink.body }}
            >
              or just read the journal first →
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
