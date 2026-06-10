import Link from "next/link";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { EmailCapture } from "@/components/bmkrs/EmailCapture";
import { HeroCollage } from "@/components/bmkrs/HeroCollage";
import { HeroReel } from "@/components/bmkrs/HeroReel";
import { Kicker } from "@/components/bmkrs/Kicker";
import { Marquee } from "@/components/bmkrs/Marquee";
import { ProjectTile } from "@/components/bmkrs/ProjectTile";
import { Reveal } from "@/components/bmkrs/Reveal";
import { RuledGrid, RuledGridItem } from "@/components/bmkrs/RuledGrid";
import { SectionRule } from "@/components/bmkrs/SectionRule";
import { Testimonials } from "@/components/bmkrs/Testimonials";
import {
  getFeaturedProjects,
  getHomeContent,
  getHomeTestimonials,
  getProducts,
  getSiteSettings,
} from "@/lib/content";
import type { ProductTier } from "@/lib/types";

const TIER_LABELS: Record<ProductTier, { label: string; blurb: string }> = {
  start: { label: "start", blurb: "a fast, honest read before you commit to more." },
  make: { label: "make", blurb: "fixed-scope sprints that build the brand and what carries it." },
  grow: { label: "grow", blurb: "one team keeping it all moving, month after month." },
};

const TIERS: ProductTier[] = ["start", "make", "grow"];

export default async function HomePage() {
  const [home, featured, testimonials, products, settings] = await Promise.all([
    getHomeContent(),
    getFeaturedProjects(),
    getHomeTestimonials(),
    getProducts(),
    getSiteSettings(),
  ]);
  const byTier = (tier: ProductTier) => products.filter((p) => p.tier === tier);
  const { hero } = home;
  const collage =
    hero.collage ??
    featured.slice(0, 6).map((p) => ({ src: p.thumbnailPath, alt: p.title }));
  const useReelHero = Boolean(settings.heroReelUrl || settings.heroPoster);

  const heroHeadline = hero.headline ?? (
    <>
      {hero.headlineLead} {hero.headlineTail}
    </>
  );
  const selectedProjects = featured.slice(0, 4);

  return (
    <>
      {/* 1. hero */}
      {useReelHero ? (
        <HeroReel
          reelUrl={settings.heroReelUrl}
          poster={settings.heroPoster}
          eyebrow={hero.eyebrow}
          headline={heroHeadline}
          sub={hero.sub}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
        />
      ) : (
        <section className="page-hero relative pb-0">
          <div className="wrap site-grid items-end">
            <div className="site-span-9 cluster-tight">
              <Kicker>{hero.eyebrow}</Kicker>
              <h1 className="display text-hero font-medium">{heroHeadline}</h1>
              <p className="lead">{hero.sub}</p>
            </div>
            <div className="site-span-cta mt-[var(--space-tight)] lg:mt-0">
              <div className="btn-row lg:justify-end">
                <Link href={hero.primaryCta.href} className="btn-primary">
                  {hero.primaryCta.label} <ArrowIcon />
                </Link>
                <Link href={hero.secondaryCta.href} className="btn-ghost">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
          <HeroCollage images={collage} />
        </section>
      )}

      {/* 2. ticker */}
      <Marquee items={home.marqueeItems} />

      {/* 3. what we really do + disciplines */}
      <section className="section-pad">
        <div className="wrap">
          <SectionRule />
          <div className="cluster-tight mt-[var(--space-tight)] max-w-[65ch]">
            <Kicker>{home.positioning.eyebrow}</Kicker>
            <h2 className="display text-h2 font-medium">{home.positioning.statement}</h2>
            <p className="lead">{home.positioning.lead}</p>
          </div>

          <RuledGrid className="mt-[var(--space-block)]" columns={4}>
            {home.capabilityTiles.map((tile) => (
              <RuledGridItem key={tile.title}>
                <Link href={tile.href} className="group block">
                  <p className="mono text-meta text-accent">{tile.number}</p>
                  <h3 className="display mt-2 text-h3 font-medium group-hover:text-accent">
                    {tile.title}
                  </h3>
                  <p className="mt-2 text-muted">{tile.description}</p>
                </Link>
              </RuledGridItem>
            ))}
          </RuledGrid>
        </div>
      </section>

      {/* 4. start / make / grow + stats */}
      <section className="section-pad section--paper">
        <div className="wrap">
          <SectionRule />
          <div className="cluster-tight mt-[var(--space-tight)]">
            <Kicker>ways to work with us</Kicker>
            <h2 className="display text-h2 font-medium">
              start, make, <span className="text-accent">grow.</span>
            </h2>
            <p className="lead">
              one funnel, one team, bespoke work throughout. the packages shape how you start, not
              how the creative gets made.
            </p>
          </div>

          <RuledGrid className="mt-[var(--space-block)]" columns={3}>
            {TIERS.map((tier) => (
              <RuledGridItem key={tier}>
                <h3 className="display text-h3 font-medium text-accent">{TIER_LABELS[tier].label}</h3>
                <p className="mt-2 text-muted">{TIER_LABELS[tier].blurb}</p>
                <ul className="mt-4 list-none space-y-2 p-0">
                  {byTier(tier).map((p) => (
                    <li key={p.slug} className="border-t border-line pt-2">
                      <Link
                        href={tier === "grow" ? "/motion" : `/services#${p.slug}`}
                        className="text-ink/80 transition-colors hover:text-accent"
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </RuledGridItem>
            ))}
          </RuledGrid>

          <RuledGrid className="mt-[var(--space-block)]" columns={3}>
            {home.stats.map((stat) => (
              <RuledGridItem key={stat.label}>
                <p className="mono text-hero font-normal leading-none text-accent">
                  {stat.highlight}
                  {stat.value}
                </p>
                <p className="nocase mt-3 max-w-[28ch] text-meta text-muted">{stat.label}</p>
              </RuledGridItem>
            ))}
          </RuledGrid>

          <Link href="/services" className="btn-primary mt-[var(--space-block)] inline-flex">
            see the full offering <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* 5. selected work */}
      <section className="section-pad">
        <div className="wrap">
          <SectionRule />
          <div className="sec-head mt-[var(--space-tight)]">
            <h2 className="display text-h2 font-medium">
              the brands we <span className="text-accent">build for</span>
            </h2>
            <p className="text-muted">{home.selectedWork.subtitle}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {selectedProjects.map((project, i) => (
              <ProjectTile
                key={project.slug}
                project={project}
                featured={false}
                delay={(i as 0 | 1 | 2 | 3) || 0}
                gradientIndex={i}
              />
            ))}
          </div>
          <Link href="/work" className="btn-primary mt-[var(--space-block)] inline-flex">
            all projects <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* 6. testimonial + motion teaser */}
      <section className="section-pad section--paper">
        <div className="wrap grid gap-[var(--space-block)] lg:grid-cols-2 lg:items-start">
          <div>
            <Kicker>in their words</Kicker>
            <Testimonials items={testimonials} />
          </div>
          <div>
            <Kicker>{home.motionTeaser.eyebrow}</Kicker>
            <Reveal>
              <h2 className="display text-h2 font-medium">
                always in <span className="text-accent">motion.</span>
              </h2>
            </Reveal>
            <p className="lead mt-[var(--space-tight)]">{home.motionTeaser.body}</p>
            <Link
              href={home.motionTeaser.href}
              className="btn-primary mt-[var(--space-tight)] inline-flex"
            >
              {home.motionTeaser.ctaLabel} <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. final cta */}
      <section className="section-pad closing text-center">
        <div className="wrap">
          <h2 className="display text-h2 font-medium">let&apos;s make something worth choosing.</h2>
          <Link href="/contact" className="btn-primary mt-[var(--space-block)] inline-flex">
            start a project <ArrowIcon />
          </Link>
        </div>
      </section>

      <EmailCapture className="section-pad pt-0" />
    </>
  );
}
