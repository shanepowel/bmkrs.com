import Link from "next/link";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { BWordRotate } from "@/components/bmkrs/BWordRotate";
import { CAPABILITY_LED_WORDS } from "@/lib/b-words";
import { HeroCollage } from "@/components/bmkrs/HeroCollage";
import { HeroReel } from "@/components/bmkrs/HeroReel";
import { ImageStrip } from "@/components/bmkrs/ImageStrip";
import { Marquee } from "@/components/bmkrs/Marquee";
import { ProcessSection } from "@/components/bmkrs/ProcessSection";
import { SectionImage } from "@/components/bmkrs/SectionImage";
import { ProjectTile } from "@/components/bmkrs/ProjectTile";
import { Reveal } from "@/components/bmkrs/Reveal";
import { Testimonials } from "@/components/bmkrs/Testimonials";
import {
  getFeaturedProjects,
  getHomeContent,
  getHomeTestimonials,
  getProducts,
  getSiteSettings,
} from "@/lib/content";
import {
  homeMotionStrip,
  homePositioningImage,
  homeWhoWeWorkWithImage,
} from "@/lib/content/image-fallbacks";
import type { ProductTier } from "@/lib/types";
import Image from "next/image";

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
    featured.slice(0, 4).map((p) => ({ src: p.thumbnailPath, alt: p.title }));
  const useReelHero = Boolean(settings.heroReelUrl || settings.heroPoster);

  const heroHeadline = hero.headline ?? (
    <>
      {hero.headlineLead} {hero.headlineTail}
    </>
  );
  const selectedProjects = featured.slice(0, 4);

  return (
    <>
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
        <section className="page-hero relative">
          <div
            className="pointer-events-none absolute inset-[-10%] -z-10 blur-md"
            style={{
              background:
                "radial-gradient(42% 48% at 82% 8%, rgba(255,150,110,0.5), transparent 62%), radial-gradient(40% 46% at 8% 22%, rgba(196,176,255,0.46), transparent 62%), radial-gradient(52% 56% at 60% 100%, rgba(160,224,202,0.44), transparent 62%)",
            }}
          />
          <div className="wrap grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="eyebrow">{hero.eyebrow}</span>
              </Reveal>
              <h1 className="display mt-2 max-w-[22ch] text-[clamp(2.25rem,9vw,5.75rem)] font-bold leading-[0.95]">
                {heroHeadline}
              </h1>
              <Reveal delay={1}>
                <p className="lead mt-8 max-w-[560px]">{hero.sub}</p>
              </Reveal>
              <Reveal delay={2}>
                <div className="btn-row mt-10">
                  <Link href={hero.primaryCta.href} className="btn-primary">
                    {hero.primaryCta.label} <ArrowIcon />
                  </Link>
                  <Link href={hero.secondaryCta.href} className="btn-ghost">
                    {hero.secondaryCta.label}
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={2} className="hidden lg:block">
              <HeroCollage images={collage} />
            </Reveal>
          </div>
          <div className="wrap mt-10 max-lg:max-w-full lg:hidden">
            <HeroCollage images={collage} />
          </div>
          <p className="absolute bottom-[max(2rem,var(--page-bottom))] left-[var(--pad)] hidden items-center gap-2.5 text-[13px] text-muted sm:flex">
            scroll
            <span className="h-0.5 w-10 rounded-sm bg-accent" />
          </p>
        </section>
      )}

      <Marquee items={home.marqueeItems} />

      <section className="section-pad block-lilac">
        <div className="wrap prose-with-media items-center">
          <div>
            <Reveal>
              <span className="eyebrow">{home.positioning.eyebrow}</span>
            </Reveal>
            <h2 className="display mt-4 max-w-[22ch] text-[clamp(36px,7vw,98px)] font-bold">
              {home.positioning.statement}
            </h2>
            <p className="lead mt-8 text-ink/70">{home.positioning.lead}</p>
          </div>
          <SectionImage
            src={homePositioningImage.src}
            alt={homePositioningImage.alt}
            aspect="wide"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <h2 className="display  max-w-[820px] text-[clamp(2rem,6vw,5.375rem)]">
                <BWordRotate words={CAPABILITY_LED_WORDS} suffix="-led. " />
                <span className="text-accent">growth-built.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="max-w-[340px] text-muted">{home.capabilitiesHead.subtitle}</p>
            </Reveal>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {home.capabilityTiles.map((tile, i) => (
              <Reveal key={tile.title} delay={(i % 2) as 0 | 1}>
                <Link
                  href={tile.href}
                  className={tile.image ? "cap-card cap-card--visual" : "cap-card"}
                >
                  {tile.image && (
                    <div className="cap-card-media relative">
                      <Image
                        src={tile.image}
                        alt={tile.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 480px"
                      />
                    </div>
                  )}
                  <div className={tile.image ? "cap-card-body" : "contents"}>
                    <span className="col-span-2 font-display text-[15px] font-semibold text-accent">
                      {tile.number}
                    </span>
                    <div>
                      <h3 className="display  mb-2.5 text-[clamp(24px,3vw,36px)]">
                        {tile.title}
                      </h3>
                      <p className="max-w-[360px] text-base text-muted">{tile.description}</p>
                    </div>
                    <span className="text-[22px] text-accent">↗</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section--paper">
        <div className="wrap section">
          <Reveal>
            <span className="eyebrow">ways to work with us</span>
          </Reveal>
          <h2 className="display mt-4 text-[clamp(2rem,6vw,4rem)] font-bold">
            start, make, <span className="text-accent">grow.</span>
          </h2>
          <p className="lead mt-6 max-w-[560px]">
            one funnel, one team, bespoke work throughout. the packages shape how you start, not how the
            creative gets made.
          </p>
          <div className="tier-grid mt-10">
            {TIERS.map((tier) => (
              <div key={tier} className="tier">
                <h3 className="display preserve-case text-2xl text-accent">{TIER_LABELS[tier].label}</h3>
                <p className="muted mt-2">{TIER_LABELS[tier].blurb}</p>
                <ul className="mt-4">
                  {byTier(tier).map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={tier === "grow" ? "/motion" : `/services#${p.slug}`}
                        className="text-ink/80 transition-colors hover:text-accent"
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/services" className="btn-primary mt-10 inline-flex">
            see the full offering <ArrowIcon />
          </Link>
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
                  <p className="nocase mt-3 max-w-[190px] text-[15px] text-ink/60">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap prose-with-media items-center">
          <div>
            <Reveal>
              <span className="eyebrow">{home.whoWeWorkWith.eyebrow}</span>
            </Reveal>
            <h2 className="display mt-4 max-w-[16ch] text-[clamp(36px,7vw,98px)] font-bold">
              {home.whoWeWorkWith.statement.replace("different.", "")}
              <span className="text-accent">different.</span>
            </h2>
            <p className="lead mt-8">{home.whoWeWorkWith.lead}</p>
          </div>
          <SectionImage
            src={homeWhoWeWorkWithImage.src}
            alt={homeWhoWeWorkWithImage.alt}
            aspect="square"
          />
        </div>
      </section>

      <div className="pb-0 pt-12 text-center">
        <Reveal>
          <span className="eyebrow justify-center">trusted by ambitious brands</span>
        </Reveal>
      </div>
      <Marquee items={home.clientMarquee} dark duration="30s" />

      {home.studioVentures?.length ? (
        <section className="section-pad pt-0">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">built in the studio</span>
            </Reveal>
            <p className="muted mt-3 max-w-[52ch] text-[15px]">
              our own ventures, proof that we ship products as well as brands for clients.
            </p>
            <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {home.studioVentures.map((v) => (
                <li key={v.href}>
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-col rounded-[var(--radius)] border-2 border-ink px-5 py-4 transition-colors hover:border-accent"
                  >
                    <span className="font-display text-lg font-semibold">{v.name}</span>
                    <span className="text-sm text-muted">{v.descriptor}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section-pad block-mint">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <h2 className="display text-[clamp(2rem,6vw,5.375rem)]">
                the brands we <span className="text-accent">build for</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-ink/60">{home.selectedWork.subtitle}</p>
            </Reveal>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {selectedProjects.map((project, i) => (
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

      <ProcessSection />

      <Testimonials items={testimonials} />

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
            <p className="lead mx-auto mb-10 max-w-[560px]">{home.motionTeaser.body}</p>
          </Reveal>
          <ImageStrip images={homeMotionStrip} />
          <Reveal delay={3}>
            <Link href={home.motionTeaser.href} className="btn-primary mt-10 inline-flex">
              {home.motionTeaser.ctaLabel} <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad closing text-center">
        <div className="wrap section">
          {home.closing ? (
            <figure className="mx-auto mb-10 max-w-[640px]">
              <blockquote className="display text-[clamp(1.35rem,3vw,2rem)] font-semibold leading-snug">
                &ldquo;{home.closing.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted">{home.closing.attribution}</figcaption>
            </figure>
          ) : null}
          <h2 className="display text-[clamp(2rem,6vw,4rem)] font-bold">
            let&apos;s make something worth choosing.
          </h2>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            start a project <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
