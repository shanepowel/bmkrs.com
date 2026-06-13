import Link from "next/link";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { HeroCollage } from "@/components/bmkrs/HeroCollage";
import { HeroReel } from "@/components/bmkrs/HeroReel";
import { Marquee } from "@/components/bmkrs/Marquee";
import { MarketingBanner } from "@/components/bmkrs/MarketingBanner";
import { Reveal } from "@/components/bmkrs/Reveal";
import { RuledGrid, RuledGridItem } from "@/components/bmkrs/RuledGrid";
import { SectionRule } from "@/components/bmkrs/SectionRule";
import { Testimonials } from "@/components/bmkrs/Testimonials";
import { ProcessBand } from "@/components/bmkrs/ProcessBand";
import { PainPointsSwipe } from "@/components/mobile/PainPointsSwipe";
import { WorkProjectsSwipe } from "@/components/mobile/WorkProjectsSwipe";
import {
  Body,
  Button,
  GhostButton,
  H1,
  H2,
  InkButton,
  Kicker,
  Surface,
  themeBodyStyle,
  tokens,
} from "@bmkrs/ui";
import { captionForProject, homeManifesto, homePainPoints } from "@/lib/content/expansion-v2";
import {
  getFeaturedProjects,
  getHomeContent,
  getHomeTestimonials,
  getProducts,
  getSiteSettings,
} from "@/lib/content";
import type { ProductTier } from "@/lib/types";
import { marketingImages } from "@/lib/marketing-assets";

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
    featured.slice(0, 6).map((p) => ({
      src: p.thumbnailPath,
      alt: p.title,
      caption: p.imageCaption ?? captionForProject(p.slug, p.title),
    }));
  const useReelHero = Boolean(settings.heroReelUrl || settings.heroPoster);

  const heroHeadline = hero.headline ?? (
    <>
      {hero.headlineLead} {hero.headlineTail}
    </>
  );
  const selectedProjects = featured.slice(0, 4);

  return (
    <main>
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
        <section className="page-hero relative pb-0" data-surface="ink">
          <div className="wrap site-grid items-end py-[clamp(4.5rem,9vw,8.5rem)]">
            <div className="site-span-9 cluster-tight">
              <Kicker theme="ink">{hero.eyebrow}</Kicker>
              <H1 theme="ink">{heroHeadline}</H1>
              <Body theme="ink" lead className="lead">
                {hero.sub}
              </Body>
            </div>
            <div className="site-span-cta mt-[var(--bmkrs-space-tight)] lg:mt-0">
              <div className="btn-row lg:justify-end">
                <Button href={hero.primaryCta.href}>
                  {hero.primaryCta.label} <ArrowIcon />
                </Button>
                <GhostButton href={hero.secondaryCta.href}>{hero.secondaryCta.label}</GhostButton>
              </div>
            </div>
          </div>
          <HeroCollage images={collage} />
        </section>
      )}

      <PainPointsSwipe points={homePainPoints} />

      <Marquee items={home.marqueeItems} />

      <MarketingBanner
        src={marketingImages.disciplinePillars}
        alt="brand identity, voice and messaging, pr and communications, product and growth"
        aspect="4/3"
      />

      <Surface theme="paper">
        <SectionRule />
        <div className="cluster-tight mt-[var(--bmkrs-space-tight)] max-w-[65ch]">
          <Kicker theme="paper">{home.positioning.eyebrow}</Kicker>
          <H2 theme="paper">{home.positioning.statement}</H2>
          <Body theme="paper" lead className="lead">
            {home.positioning.lead}
          </Body>
        </div>

        <RuledGrid className="mt-[var(--bmkrs-space-block)]" columns={4}>
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

        <div className="mt-[var(--bmkrs-space-block)] border-t border-line pt-[var(--bmkrs-space-block)] max-w-[65ch]">
          <Kicker theme="paper">why we exist</Kicker>
          <div className="lead mt-6 whitespace-pre-line">{homeManifesto}</div>
        </div>
      </Surface>

      <Surface theme="ink">
        <SectionRule />
        <div className="cluster-tight mt-[var(--bmkrs-space-tight)]">
          <Kicker theme="ink">ways to work with us</Kicker>
          <H2 theme="ink">
            start, make, <span className="text-accent">grow.</span>
          </H2>
          <Body theme="ink" lead className="lead">
            one funnel, one team, bespoke work throughout. the packages shape how you start, not how
            the creative gets made.
          </Body>
        </div>

        <RuledGrid className="mt-[var(--bmkrs-space-block)]" columns={3}>
          {TIERS.map((tier) => (
            <RuledGridItem key={tier}>
              <h3 className="display text-h3 font-medium text-accent">{TIER_LABELS[tier].label}</h3>
              <p className="mt-2 text-muted">{TIER_LABELS[tier].blurb}</p>
              <ul className="mt-4 list-none space-y-2 p-0">
                {byTier(tier).map((p) => (
                  <li key={p.slug} className="border-t border-line pt-2">
                    <Link
                      href={tier === "grow" ? "/motion" : `/services#${p.slug}`}
                      className="transition-colors hover:text-accent"
                      style={themeBodyStyle("ink")}
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </RuledGridItem>
          ))}
        </RuledGrid>

        <RuledGrid className="mt-[var(--bmkrs-space-block)]" columns={3}>
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

        <Button href="/services" className="mt-[var(--bmkrs-space-block)]">
          see the full offering <ArrowIcon />
        </Button>
      </Surface>

      <WorkProjectsSwipe projects={selectedProjects} subtitle={home.selectedWork.subtitle} />

      <Surface theme="orange">
        <div className="grid gap-[var(--bmkrs-space-block)] lg:grid-cols-2 lg:items-start">
          <div>
            <Kicker theme="orange">in their words</Kicker>
            <Testimonials items={testimonials} />
          </div>
          <div>
            <Kicker theme="orange">{home.motionTeaser.eyebrow}</Kicker>
            <Reveal>
              <H2 theme="orange">
                always in <span style={{ color: tokens.color.ink }}>motion.</span>
              </H2>
            </Reveal>
            <Body theme="orange" lead className="lead mt-[var(--bmkrs-space-tight)]">
              {home.motionTeaser.body}
            </Body>
            <InkButton href={home.motionTeaser.href} className="mt-[var(--bmkrs-space-tight)]">
              {home.motionTeaser.ctaLabel} <ArrowIcon />
            </InkButton>
          </div>
        </div>
      </Surface>

      <ProcessBand />

      <Surface theme="ink">
        <div className="text-center">
          <H2 theme="ink">let&apos;s make something worth choosing.</H2>
          <Button href="/contact" className="mt-[var(--bmkrs-space-block)]">
            start a project <ArrowIcon />
          </Button>
        </div>
      </Surface>
    </main>
  );
}
