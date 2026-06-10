import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeroSplit } from "@/components/bmkrs/PageHeroSplit";
import { Reveal } from "@/components/bmkrs/Reveal";
import { SectionImage } from "@/components/bmkrs/SectionImage";
import { getAboutPage, getTeamMembers } from "@/lib/content";
import { aboutBeliefsImage, pageHeroImages } from "@/lib/content/image-fallbacks";
import { pageMetadata } from "@/lib/seo";
import { personSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(
  "about",
  "bmkrs is a brand company founded by a builder: a director-level consultant who spent years shipping products inside complex organisations, now building brands the same way.",
  "/about",
);

export default async function AboutPage() {
  const [about, team] = await Promise.all([getAboutPage(), getTeamMembers()]);
  const founder = about.founder;

  const founderJsonLd = founder
    ? personSchema({
        name: founder.name,
        jobTitle: "founder",
        description: founder.bio[0] ?? "",
        linkedinUrl: founder.linkedinUrl,
      })
    : null;

  return (
    <main>
      {founderJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }}
        />
      ) : null}

      <PageHeroSplit image={pageHeroImages.about} minHeight="min-h-[72vh]">
        <Reveal>
          <p className="eyebrow">about bmkrs</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="display mt-4 text-[clamp(2.25rem,9vw,9rem)] font-bold">{about.headline}</h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="lead mt-8 max-w-[540px]">{about.intro}</p>
        </Reveal>
      </PageHeroSplit>

      {founder ? (
        <section className="section-pad section--paper">
          <div className="wrap section prose-with-media items-start">
            <div className="team-photo relative mx-auto aspect-square w-full max-w-[320px] shrink-0 overflow-hidden rounded-[var(--radius)] border-2 border-ink lg:mx-0">
              <div className="grid h-full w-full place-items-center bg-[var(--block-lilac)]">
                <span className="display preserve-case text-[clamp(4rem,12vw,7rem)] font-bold text-ink/25">
                  {founder.name.charAt(0)}
                </span>
              </div>
            </div>
            <div>
              <h2 className="display text-[clamp(2rem,5vw,3.5rem)] font-bold">{founder.name}, founder</h2>
              <a
                href={founder.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link mt-3 inline-block text-sm"
              >
                linkedin →
              </a>
              <div className="prose mt-8">
                {founder.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mb-6 text-[17px] leading-relaxed text-ink/90">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-pad">
        <div className="wrap section">
          <p className="eyebrow">the team</p>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold">
            a partner team, not a payroll.
          </h2>
          <p className="lead mt-6 max-w-[560px]">{about.teamIntro ?? about.whoWeAre}</p>
          <div className="team-grid mt-12">
            {team.map((member) => (
              <div key={member.name} className="team-card" id={member.slug}>
                <div className="team-photo">
                  {member.photoUrl ? (
                    <Image
                      src={member.photoUrl}
                      alt={member.photoAlt}
                      fill
                      className="object-cover"
                      sizes="360px"
                    />
                  ) : (
                    <span className="team-initial preserve-case">{member.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className="display mt-4 text-[22px]">{member.name}</h3>
                {member.discipline && <span className="eyebrow mt-1 block">{member.discipline}</span>}
                {member.bio && <p className="mt-3 text-sm text-muted">{member.bio}</p>}
                {member.linkedinUrl ? (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-link mt-2 inline-block text-sm"
                  >
                    linkedin →
                  </a>
                ) : null}
              </div>
            ))}
          </div>
          {about.teamClosing ? (
            <p className="display mt-12 text-[clamp(1.25rem,3vw,1.75rem)] font-semibold">{about.teamClosing}</p>
          ) : null}
        </div>
      </section>

      <section className="section-pad section--paper">
        <div className="wrap section prose-with-media">
          <div>
            <p className="eyebrow">what we stand for</p>
            <h2 className="display mt-4 max-w-[20ch] text-[clamp(2rem,5vw,3rem)] font-bold">{about.ethos}</h2>
            <div className="belief-grid mt-10">
              {about.beliefs.map((belief, i) => (
                <div key={belief.title} className="belief">
                  <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display mt-2 text-xl">{belief.title}</h3>
                  <p className="mt-2 text-muted">{belief.body}</p>
                </div>
              ))}
            </div>
          </div>
          <SectionImage src={aboutBeliefsImage.src} alt={aboutBeliefsImage.alt} aspect="cinema" className="lg:mt-16" />
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap section">
          <p className="eyebrow">the long game</p>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3rem)] font-bold">we are built to stick around.</h2>
          <p className="lead mt-6 max-w-[560px]">{about.longGame}</p>
        </div>
      </section>

      <section className="section-pad section--paper">
        <div className="wrap section closing">
          <h2 className="display text-[clamp(2rem,5vw,3.5rem)] font-bold">
            let&apos;s make something worth choosing.
          </h2>
          <div className="hero-cta mt-8 flex flex-wrap items-center gap-6">
            <Link href="/contact" className="btn-primary inline-flex">
              work with us
            </Link>
            <Link href="/services" className="font-semibold text-accent hover:underline">
              our services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
