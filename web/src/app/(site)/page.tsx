import Link from "next/link";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { Marquee } from "@/components/bmkrs/Marquee";
import { ProjectTile } from "@/components/bmkrs/ProjectTile";
import { Reveal } from "@/components/bmkrs/Reveal";
import { getFeaturedProjects, getHomeContent } from "@/lib/content";

export default async function HomePage() {
  const [home, featured] = await Promise.all([getHomeContent(), getFeaturedProjects()]);

  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-[var(--pad)] pb-24 pt-32">
        <div
          className="pointer-events-none absolute inset-[-10%] -z-10 blur-md"
          style={{
            background:
              "radial-gradient(42% 48% at 82% 8%, rgba(255,150,110,0.5), transparent 62%), radial-gradient(40% 46% at 8% 22%, rgba(196,176,255,0.46), transparent 62%), radial-gradient(52% 56% at 60% 100%, rgba(160,224,202,0.44), transparent 62%)",
          }}
        />
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">a brand company</span>
          </Reveal>
          <h1 className="display mt-2 text-[clamp(58px,13.5vw,210px)] font-bold">
            <span className="block">{home.heroLines[0]}</span>
            <span className="block">
              that <span className="text-accent">move.</span>
            </span>
          </h1>
          <p className="lead mt-8 max-w-[540px]">{home.heroSub}</p>
          <div className="mt-10 flex flex-wrap gap-3.5">
            <Link href="/work" className="btn-primary">
              see our work <ArrowIcon />
            </Link>
            <Link href="/contact" className="btn-ghost">
              start a project
            </Link>
          </div>
        </div>
        <p className="absolute bottom-8 left-[var(--pad)] flex items-center gap-2.5 text-[13px] text-muted">
          scroll
          <span className="h-0.5 w-10 rounded-sm bg-accent" />
        </p>
      </section>

      <Marquee items={home.marqueeItems} />

      <section className="section-pad block-lilac">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{home.positioning.eyebrow}</span>
          </Reveal>
          <h2 className="display mt-4 max-w-[16ch] text-[clamp(36px,7vw,98px)] font-bold">
            {home.positioning.statement.split("identity, voice + messaging.")[0]}
            <span className="text-accent">identity, voice + messaging.</span>
          </h2>
          <p className="lead mt-8 text-ink/70">{home.positioning.lead}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-10">
            <Reveal>
              <h2 className="display max-w-[820px] text-[clamp(38px,6vw,86px)]">
                brand-led. <span className="text-accent">growth-built.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="max-w-[340px] text-muted">{home.capabilitiesHead.subtitle}</p>
            </Reveal>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {home.capabilityTiles.map((tile, i) => (
              <Reveal key={tile.title} delay={(i % 2) as 0 | 1}>
                <Link href={tile.href} className="cap-card">
                  <span className="col-span-2 font-display text-[15px] font-semibold text-accent">
                    {tile.number}
                  </span>
                  <div>
                    <h3 className="display mb-2.5 text-[clamp(24px,3vw,36px)]">{tile.title}</h3>
                    <p className="max-w-[360px] text-base text-muted">{tile.description}</p>
                  </div>
                  <span className="text-[22px] text-accent">↗</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad block-peach">
        <div className="wrap">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {home.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i as 0 | 1 | 2 | 3}>
                <div>
                  <p className="display text-[clamp(48px,7vw,96px)] font-bold leading-none tracking-[-0.05em]">
                    {stat.highlight && <span className="text-accent">{stat.highlight}</span>}
                    {stat.value}
                  </p>
                  <p className="mt-3 max-w-[190px] text-[15px] text-ink/60">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {home.statsDisclaimer && (
            <p className="mt-6 text-xs text-muted">{home.statsDisclaimer}</p>
          )}
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{home.whoWeWorkWith.eyebrow}</span>
          </Reveal>
          <h2 className="display mt-4 max-w-[16ch] text-[clamp(36px,7vw,98px)] font-bold">
            {home.whoWeWorkWith.statement.replace("different.", "")}
            <span className="text-accent">different.</span>
          </h2>
          <p className="lead mt-8">{home.whoWeWorkWith.lead}</p>
        </div>
      </section>

      <div className="pb-0 pt-12 text-center">
        <Reveal>
          <span className="eyebrow justify-center">trusted by ambitious brands</span>
        </Reveal>
      </div>
      <Marquee items={home.clientMarquee} dark duration="30s" />

      <section className="section-pad block-mint">
        <div className="wrap">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-10">
            <Reveal>
              <h2 className="display text-[clamp(38px,6vw,86px)]">
                the brands we <span className="text-accent">build for</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-ink/60">{home.selectedWork.subtitle}</p>
            </Reveal>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featured.map((project, i) => (
              <div
                key={project.slug}
                className={i === 0 ? "md:col-span-2" : undefined}
              >
                <ProjectTile
                  project={project}
                  featured={i === 0}
                  delay={(i as 0 | 1 | 2) || 0}
                  gradientIndex={i}
                />
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/work" className="btn-primary">
              all projects <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">how we work</span>
          </Reveal>
          <h2 className="display mt-4 max-w-[16ch] text-[clamp(36px,7vw,98px)] font-bold">
            one team, built around your brand.{" "}
            <span className="text-accent">no churn, no hand-offs.</span>
          </h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {home.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i as 0 | 1 | 2 | 3}>
                <div className="rounded-[var(--radius)] border-2 border-ink bg-bg p-8">
                  <p className="display text-[30px] font-bold text-accent">
                    {["i", "ii", "iii", "iv"][i]}
                  </p>
                  <h3 className="display mt-4 text-[25px]">{pillar.title}</h3>
                  <p className="mt-2.5 text-[15px] text-muted">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {home.testimonial && (
        <section className="section-pad block-peach">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">what clients say</span>
            </Reveal>
            <blockquote className="display mt-6 max-w-[17ch] text-[clamp(30px,5.2vw,68px)] font-semibold leading-[1.04] tracking-[-0.03em]">
              “{home.testimonial.quote}”
            </blockquote>
            <p className="mt-8 text-base text-ink/65">{home.testimonial.attribution}</p>
          </div>
        </section>
      )}

      <section className="section-pad text-center">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow justify-center">{home.motionTeaser.eyebrow}</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display my-7 text-[clamp(44px,8vw,120px)]">
              always in <span className="text-accent">motion.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead mx-auto mb-10">{home.motionTeaser.body}</p>
          </Reveal>
          <Reveal delay={3}>
            <Link href={home.motionTeaser.href} className="btn-primary">
              {home.motionTeaser.ctaLabel} <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
