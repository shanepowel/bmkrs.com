import { GhostButton, Hero, OrangeButton, SnapLine, WorkReel, type WorkReelFrame } from "@bmkrs/ui";
import type { HomeHero as HomeHeroContent } from "@/lib/types";

export function HomeHero({ hero, frames }: { hero: HomeHeroContent; frames: WorkReelFrame[] }) {
  return (
    <Hero
      aside={frames.length ? <WorkReel frames={frames} label="shipped work" /> : undefined}
      eyebrow={hero.eyebrow}
      title={
        <>
          most studios stop at the logo.
          <br />
          <span className="bmkrs-hero__underline">
            we ship the whole thing.
            <SnapLine
              tick="shipped, not sketched"
              trigger="load"
              delay={350}
              thick
              place="below"
              className="!absolute inset-x-0 bottom-[0.12em]"
            />
          </span>
        </>
      }
      lede={hero.sub}
      actions={
        <>
          <OrangeButton href={hero.secondaryCta.href}>{hero.secondaryCta.label}</OrangeButton>
          <GhostButton href={hero.primaryCta.href}>{hero.primaryCta.label}</GhostButton>
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
