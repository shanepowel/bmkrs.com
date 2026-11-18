import { GhostButton, Hero, OrangeButton, SnapLine, WorkReel, type WorkReelFrame } from "@bmkrs/ui";
import { brandMessaging } from "@/lib/content/messaging";

export function HomeHero({ frames }: { frames: WorkReelFrame[] }) {
  return (
    <Hero
      aside={frames.length ? <WorkReel frames={frames} label="selected work" /> : undefined}
      eyebrow={brandMessaging.heroEyebrow}
      title={
        <>
          {brandMessaging.heroTitleLead}
          <br />
          <span className="bmkrs-hero__underline">
            {brandMessaging.heroTitleEm}
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
      lede={brandMessaging.heroSub}
      actions={
        <>
          <OrangeButton href="/contact">{brandMessaging.ctaPrimary} <span aria-hidden="true">+</span></OrangeButton>
          <GhostButton href="/work">{brandMessaging.ctaWork} <span aria-hidden="true">+</span></GhostButton>
        </>
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
