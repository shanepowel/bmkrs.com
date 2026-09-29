import { GhostButton, Hero, OrangeButton, SnapLine } from "@bmkrs/ui";
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
    <Hero
      media={hasMedia ? <HomeHeroMedia reelUrl={reelUrl} poster={poster} /> : undefined}
      eyebrow={hero.eyebrow}
      title={
        <>
          most studios stop at the logo.
          <br />
          <span className="bmkrs-hero__underline">
            we ship the whole thing.
            <SnapLine
              tick="— snapped, not sketched"
              trigger="load"
              delay={350}
              thick
              className="!absolute inset-x-0 bottom-[0.02em]"
            />
          </span>
        </>
      }
      lede={hero.sub}
      actions={
        <>
          <OrangeButton href={hero.primaryCta.href}>{hero.primaryCta.label}</OrangeButton>
          <GhostButton href={hero.secondaryCta.href}>{hero.secondaryCta.label}</GhostButton>
        </>
      }
      plate={
        <>
          <span>sheet 01 / 07</span>
          <span>rev. 2026</span>
          <span>london · everywhere</span>
        </>
      }
    />
  );
}
