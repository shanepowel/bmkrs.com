import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AccentLine } from "@/components/bmkrs/AccentLine";
import { BMakersLine } from "@/components/bmkrs/BMakersLine";
import { PageHeroSplit } from "@/components/bmkrs/PageHeroSplit";
import { Reveal } from "@/components/bmkrs/Reveal";
import { SectionImage } from "@/components/bmkrs/SectionImage";
import { getAboutPage, getTeamMembers } from "@/lib/content";
import { aboutBeliefsImage, aboutStoryImage, pageHeroImages } from "@/lib/content/image-fallbacks";

export const metadata: Metadata = {
  title: "about",
  description:
    "a brand company run by builders. for people with something good that deserves to be better known. since 2013.",
};

export default async function AboutPage() {
  const [about, team] = await Promise.all([getAboutPage(), getTeamMembers()]);

  return (
    <main>
      <PageHeroSplit image={pageHeroImages.about} minHeight="min-h-[72vh]">
        <Reveal>
          <p className="eyebrow">about bmkrs</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-4">
            <BMakersLine multiline className="text-[clamp(2.25rem,9vw,9rem)]" />
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="lead mt-8 max-w-[540px]">{about.intro}</p>
        </Reveal>
      </PageHeroSplit>

      <section className="section-pad section--paper">
        <div className="wrap section prose-with-media">
          <div className="prose">
            {about.story.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mb-6 text-[17px] leading-relaxed text-ink/90">
                {paragraph}
              </p>
            ))}
          </div>
          <SectionImage src={aboutStoryImage.src} alt={aboutStoryImage.alt} aspect="square" />
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap section">
          <p className="eyebrow">who we are</p>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold">
            the people who do the work.
          </h2>
          <p className="lead mt-6 max-w-[560px]">{about.whoWeAre}</p>
          <div className="team-grid mt-12">
            {team.map((member) => (
              <div key={member.name} className="team-card">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section--paper">
        <div className="wrap section prose-with-media">
          <div>
            <p className="eyebrow">what we love</p>
            <p className="lead mt-4 max-w-[560px]">{about.whatWeLove}</p>
          </div>
          <SectionImage src={aboutStoryImage.src} alt="craft and brand work" aspect="wide" />
        </div>
      </section>

      <section className="section-pad">
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

      <section className="section-pad section--paper">
        <div className="wrap section">
          <p className="eyebrow">the long game</p>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3rem)] font-bold">we are built to stick around.</h2>
          <p className="lead mt-6 max-w-[560px]">{about.longGame}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap section own-words">
          <p className="eyebrow">in our own words</p>
          <ul className="mt-8">
            {about.inOwnWords.map((line) => (
              <li key={line}>
                <AccentLine content={line} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
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
