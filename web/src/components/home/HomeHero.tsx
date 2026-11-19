import { Button, Hero, WorkReel, type WorkReelFrame } from "@bmkrs/ui";
import { brandMessaging } from "@/lib/content/messaging";

export function HomeHero({ frames }: { frames: WorkReelFrame[] }) {
  return (
    <Hero
      aside={frames.length ? <WorkReel frames={frames} label="selected work" /> : undefined}
      eyebrow={brandMessaging.heroEyebrow}
      title={
        <>
          {brandMessaging.heroTitleLead}{" "}
          <em>{brandMessaging.heroTitleEm}</em>
        </>
      }
      lede={brandMessaging.heroSub}
      actions={
        <Button href="/contact">
          {brandMessaging.ctaPrimary} →
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
