import Link from "next/link";
import type { ReactNode } from "react";
import { AccentLine } from "@/components/bmkrs/AccentLine";
import { BMakersLine } from "@/components/bmkrs/BMakersLine";
import { BWordRotate } from "@/components/bmkrs/BWordRotate";
import { ABOUT_IDENTITY_WORDS, HERO_BRAND_ADJECTIVES } from "@/lib/b-words";
import { Reveal } from "@/components/bmkrs/Reveal";
import Image from "next/image";
import { getPage, getTeamMembers } from "@/lib/content";

export const metadata = { title: "about" };

const beliefs: { num: string; title: string; body: string; rotate?: boolean }[] = [
  { num: "01", title: "a brand is a promise.", body: "we make sure yours is worth keeping." },
  { num: "02", title: "design does a job.", body: "it isn't decoration. it earns its place." },
  { num: "03", title: "growth beats noise.", body: "we measure what actually matters." },
  { num: "04", title: "one team, all in.", body: "no churn, no hand-offs, no excuses." },
];

function sectionText(page: Awaited<ReturnType<typeof getPage>>, key: string) {
  return page.sections?.find((s) => s.key === key)?.content;
}

function SideBySideSection({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: ReactNode;
  delay?: 0 | 1;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-14">
      <Reveal>
        <span className="section-label text-[13px] font-semibold tracking-[0.04em] text-accent">
          {label}
        </span>
      </Reveal>
      <Reveal delay={delay}>{children}</Reveal>
    </div>
  );
}

export default async function AboutPage() {
  const [page, team] = await Promise.all([getPage("about"), getTeamMembers()]);
  const since = sectionText(page, "since");
  const where = sectionText(page, "where");
  const what = sectionText(page, "what");
  const intro = sectionText(page, "intro");
  const body2 = sectionText(page, "body2");
  const body3 = sectionText(page, "body3");
  const body4 = sectionText(page, "body4");
  const closing = sectionText(page, "closing");
  const whoWeAre1 = sectionText(page, "whoWeAre1");
  const whoWeAre2 = sectionText(page, "whoWeAre2");
  const whatWeLove1 = sectionText(page, "whatWeLove1");
  const whatWeLove2 = sectionText(page, "whatWeLove2");
  const beliefsIntro = sectionText(page, "beliefsIntro");
  const longGameLead = sectionText(page, "longGameLead");
  const longGame1 = sectionText(page, "longGame1");
  const longGame2 = sectionText(page, "longGame2");
  const creedLines = ["creed1", "creed2", "creed3", "creed4", "creed5"]
    .map((key) => sectionText(page, key))
    .filter((line): line is string => Boolean(line));

  return (
    <>
      <section className="page-hero min-h-[72vh]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{page.heroEyebrow}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-4 text-[clamp(2.25rem,9vw,9rem)]">
              <BMakersLine multiline className="text-[clamp(2.25rem,9vw,9rem)]" />
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
            <dl className="space-y-6">
              {since && (
                <div>
                  <dt className="meta-label font-semibold text-accent">Since</dt>
                  <dd className="nocase mt-1 text-base">{since}</dd>
                </div>
              )}
              {where && (
                <div>
                  <dt className="meta-label font-semibold text-accent">Where</dt>
                  <dd className="nocase mt-1 text-base">{where}</dd>
                </div>
              )}
              {what && (
                <div>
                  <dt className="meta-label font-semibold text-accent">What</dt>
                  <dd className="mt-1 text-base">
                    we are the <BWordRotate words={ABOUT_IDENTITY_WORDS} />.
                  </dd>
                </div>
              )}
            </dl>
          </Reveal>
          <div className="space-y-5">
            {intro && (
              <Reveal delay={1}>
                <p className="display  text-[clamp(24px,3.4vw,44px)] font-semibold leading-[1.06] tracking-[-0.03em]">
                  {intro}
                </p>
              </Reveal>
            )}
            {[body2, body3, body4].map(
              (paragraph, i) =>
                paragraph && (
                  <Reveal key={paragraph.slice(0, 24)} delay={((i + 1) % 2) as 0 | 1}>
                    <p className="text-[clamp(17px,1.6vw,19px)] text-muted">{paragraph}</p>
                  </Reveal>
                )
            )}
            {closing && (
              <Reveal>
                <p className="display text-[clamp(20px,2.2vw,28px)] font-semibold">{closing}</p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {(whoWeAre1 || whoWeAre2) && (
        <section className="section-pad pt-0">
          <div className="wrap space-y-16">
            {(whoWeAre1 || whoWeAre2) && (
              <SideBySideSection label="who we are">
                <div className="space-y-5">
                  {whoWeAre1 && (
                    <p className="text-[clamp(18px,1.9vw,22px)] leading-relaxed">{whoWeAre1}</p>
                  )}
                  {whoWeAre2 && (
                    <p className="text-[clamp(18px,1.9vw,22px)] leading-relaxed text-muted">
                      {whoWeAre2}
                    </p>
                  )}
                </div>
              </SideBySideSection>
            )}
            {(whatWeLove1 || whatWeLove2) && (
              <SideBySideSection label="what we love" delay={1}>
                <div className="space-y-5">
                  {whatWeLove1 && (
                    <p className="text-[clamp(18px,1.9vw,22px)] leading-relaxed">{whatWeLove1}</p>
                  )}
                  {whatWeLove2 && (
                    <p className="text-[clamp(18px,1.9vw,22px)] leading-relaxed text-muted">
                      {whatWeLove2}
                    </p>
                  )}
                </div>
              </SideBySideSection>
            )}
          </div>
        </section>
      )}

      {team.length > 0 && (
        <section className="section-pad pt-0">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">the team</span>
            </Reveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={(i % 2) as 0 | 1}>
                  <div>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius)] bg-ink/5">
                      <Image
                        src={member.photoUrl}
                        alt={member.photoAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    </div>
                    <p className="display mt-4 text-[22px] font-semibold">
                      {member.name.split(" ")[0]}
                    </p>
                    {member.discipline && (
                      <p className="text-sm text-muted">{member.discipline}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad block-mint">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">what we stand for</span>
          </Reveal>
          {beliefsIntro && (
            <Reveal delay={1}>
              <h2 className="display mt-2 max-w-[20ch] text-[clamp(28px,4vw,48px)] font-semibold leading-[1.05]">
                {beliefsIntro}
              </h2>
            </Reveal>
          )}
          <div className="mt-11 grid gap-4 md:grid-cols-2">
            {beliefs.map((b, i) => (
              <Reveal key={b.num} delay={(i % 2) as 0 | 1}>
                <div className="cap-card">
                  <span className="col-span-2 font-display text-[15px] font-semibold text-accent">
                    {b.num}
                  </span>
                  <div className="col-span-2">
                    <h3 className="display mb-2.5 text-[clamp(24px,3vw,36px)]">
                      {"rotate" in b && b.rotate ? (
                        <>
                          a <BWordRotate words={HERO_BRAND_ADJECTIVES} /> {b.title}
                        </>
                      ) : (
                        b.title
                      )}
                    </h3>
                    <p className="text-base text-muted">{b.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {(longGameLead || longGame1 || longGame2) && (
        <section className="section-pad pt-0">
          <div className="wrap">
            <SideBySideSection label="The long game">
              <div className="space-y-5">
                {longGameLead && (
                  <p className="display  text-[clamp(24px,3.2vw,44px)] font-semibold leading-[1.06] tracking-[-0.03em]">
                    {longGameLead}
                  </p>
                )}
                {longGame1 && (
                  <p className="text-[clamp(17px,1.7vw,20px)] leading-relaxed text-muted">
                    {longGame1}
                  </p>
                )}
                {longGame2 && (
                  <p className="text-[clamp(17px,1.7vw,20px)] leading-relaxed text-muted">
                    {longGame2}
                  </p>
                )}
              </div>
            </SideBySideSection>
          </div>
        </section>
      )}

      {creedLines.length > 0 && (
        <section className="section-pad block-peach">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">In our own words</span>
            </Reveal>
            <div className="mt-8 grid gap-1">
              {creedLines.map((line, i) => (
                <Reveal key={line} delay={(i % 2) as 0 | 1}>
                  <p className="display  text-[clamp(26px,4.6vw,58px)] font-semibold leading-[1.05] tracking-[-0.035em]">
                    <AccentLine content={line} />
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad text-center">
        <div className="wrap">
          <Reveal>
            <h2 className="display mb-7 text-[clamp(40px,7vw,100px)]">
              let&apos;s make something <span className="text-accent">worth choosing.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="btn-row mx-auto justify-center sm:mx-0">
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
