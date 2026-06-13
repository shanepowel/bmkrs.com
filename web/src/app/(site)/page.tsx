import Link from "next/link";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { HeroCollage } from "@/components/bmkrs/HeroCollage";
import { HeroReel } from "@/components/bmkrs/HeroReel";
import LivingProof from "@/components/LivingProof";
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
          <div className="wrap site-grid items-end">
            <div className="site-span-9 heading-group">
              <Kicker theme="ink">{hero.eyebrow}</Kicker>
              <H1 theme="ink" className="max-w-[16ch]">
                {heroHeadline}
              </H1>
              <Body theme="ink" lead className="lead max-w-[60ch]">
                {hero.sub}
              </Body>
            </div>
            <div className="site-span-cta lg:mt-0">
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
        <div className="heading-group mt-[var(--cluster-gap)] max-w-[65ch]">
          <Kicker theme="paper">{home.positioning.eyebrow}</Kicker>
          <H2 theme="paper">{home.positioning.statement}</H2>
          <Body theme="paper" lead>
            {home.positioning.lead}
          </Body>
        </div>

        <RuledGrid className="block-gap" columns={2}>
          {home.capabilityTiles.map((tile) => (
            <RuledGridItem key={tile.title}>
              <Link href={tile.href} className="group grid grid-cols-[auto_1fr] gap-x-4">
                <p className="mono text-meta text-accent">{tile.number}</p>
                <span>
                  <h3 className="text-h3 font-medium group-hover:text-accent">{tile.title}</h3>
                  <p className="mt-2 text-body-sm text-muted">{tile.description}</p>
                </span>
              </Link>
            </RuledGridItem>
          ))}
        </RuledGrid>

        <div className="block-gap border-t border-line pt-[var(--block-gap)] max-w-[65ch]">
          <Kicker theme="paper">why we exist</Kicker>
          <div className="heading-group mt-[var(--cluster-gap)] whitespace-pre-line">
            <p className="text-lead">{homeManifesto.split("\n\n")[0]}</p>
            <p className="text-body">{homeManifesto.split("\n\n").slice(1).join("\n\n")}</p>
          </div>
        </div>
      </Surface>

      <Surface theme="ink">
        <SectionRule />
        <div className="heading-group mt-[var(--cluster-gap)]">
          <Kicker theme="ink">ways to work with us</Kicker>
          <H2 theme="ink">
            start, make, <span className="text-accent">grow.</span>
          </H2>
          <Body theme="ink" lead>
            one funnel, one team, bespoke work throughout. the packages shape how you start, not how
            the creative gets made.
          </Body>
        </div>

        <RuledGrid className="block-gap" columns={3}>
          {TIERS.map((tier) => (
            <RuledGridItem key={tier}>
              <h3 className="text-h3 font-medium text-accent">{TIER_LABELS[tier].label}</h3>
              <p className="mt-2 text-body-sm text-muted">{TIER_LABELS[tier].blurb}</p>
              <ul className="mt-4 list-none space-y-3 p-0">
                {byTier(tier).map((p) => (
                  <li key={p.slug} className="border-t border-line pt-2">
                    <Link
                      href={tier === "grow" ? "/motion" : `/services#${p.slug}`}
                      className="inline-flex min-h-11 items-center transition-colors hover:text-accent"
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

        <Button href="/services" className="block-gap">
          see the full offering <ArrowIcon />
        </Button>
      </Surface>

      <Surface theme="ink" tight>
        <LivingProof />
      </Surface>

      <WorkProjectsSwipe projects={selectedProjects} subtitle={home.selectedWork.subtitle} />

      <Surface theme="orange" tight>
        <Kicker theme="orange">in their words</Kicker>
        <Testimonials items={testimonials} />
      </Surface>

      <Surface theme="ink" tight>
        <Kicker theme="ink">{home.motionTeaser.eyebrow}</Kicker>
        <Reveal>
          <H2 theme="ink">
            always in <span style={{ color: tokens.color.orange }}>motion.</span>
          </H2>
        </Reveal>
        <Body theme="ink" lead className="mt-[var(--cluster-gap)]">
          {home.motionTeaser.body}
        </Body>
        <InkButton href={home.motionTeaser.href} className="mt-[var(--cluster-gap)]">
          {home.motionTeaser.ctaLabel} <ArrowIcon />
        </InkButton>
      </Surface>

      <ProcessBand />

      <Surface theme="ink">
        <div className="text-center">
          <H2 theme="ink">let&apos;s make something worth choosing.</H2>
          <Button href="/contact" className="block-gap">
            start a project <ArrowIcon />
          </Button>
        </div>
      </Surface>
    </main>
  );
}
