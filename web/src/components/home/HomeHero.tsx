import { Button, Hero, WorkReel, type WorkReelFrame } from "@bmkrs/ui";
import { brandMessaging } from "@/lib/content/messaging";
import type { HomeHero as HomeHeroContent } from "@/lib/types";

export function HomeHero({ hero, frames }: { hero: HomeHeroContent; frames: WorkReelFrame[] }) {
  return (
    <Hero
      aside={frames.length ? <WorkReel frames={frames} label="shipped work" /> : undefined}
      eyebrow={hero.eyebrow || brandMessaging.heroEyebrow}
      title={
        <>
          {brandMessaging.heroTitleLead}{" "}
          <em>{brandMessaging.heroTitleEm}</em>
        </>
      }
      lede={hero.sub || brandMessaging.heroSub}
      actions={
        <Button href={hero.secondaryCta.href || "/contact"}>
          {hero.secondaryCta.label || brandMessaging.ctaPrimary} →
        </Button>
      }
      plate={
        <>
          <span>{brandMessaging.processShort}</span>
          <span>london · everywhere</span>
        </>
      }
    />
  );
}
