import { OrangeButton, GhostButton, SnapLine } from "@bmkrs/ui";
import type { HomeHero as HomeHeroContent } from "@/lib/types";
import { HomeHeroMedia } from "./HomeHeroMedia";

export function HomeHero({
  hero,
  reelUrl,
  poster,
}: {
  hero: HomeHeroContent;
  reelUrl?: string;
  poster?: string;
}) {
  const hasMedia = Boolean(reelUrl || poster);

  return (
    <header
      className={`home-hero${hasMedia ? " home-hero--reel" : ""}`}
      data-surface="ink"
    >
      {hasMedia ? <HomeHeroMedia reelUrl={reelUrl} poster={poster} /> : null}
      <div className="home-wrap home-hero__content">
        <span className="home-hero__eyebrow">{hero.eyebrow}</span>
        <h1 className="home-hero__title">
          most studios stop at the logo.
          <br />
          <span className="home-hero__underline">
            we ship the whole thing.
            <SnapLine
              tick="— snapped, not sketched"
              trigger="load"
              delay={350}
              thick
              className="!absolute inset-x-0 bottom-[0.02em]"
            />
          </span>
        </h1>
        <p className="home-hero__lede">{hero.sub}</p>
        <div className="home-hero__ctas">
          <OrangeButton href={hero.primaryCta.href}>{hero.primaryCta.label}</OrangeButton>
          <GhostButton href={hero.secondaryCta.href}>{hero.secondaryCta.label}</GhostButton>
        </div>
        <div className="home-hero__plate" aria-hidden>
          <span>sheet 01 / 07</span>
          <span>rev. 2026</span>
          <span>london · everywhere</span>
        </div>
      </div>
    </header>
  );
}
