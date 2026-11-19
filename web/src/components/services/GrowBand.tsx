import Link from "next/link";
import { Body, H3, Kicker, Meta, Section } from "@bmkrs/ui";
import { brandMessaging, tierLabel } from "@/lib/content/messaging";
export function GrowBand() {
  return (
    <Section theme="ink" id={tierLabel("grow")}>
      <Kicker theme="ink">{tierLabel("grow")}</Kicker>
      <H3 theme="ink" className="mt-4 text-[clamp(1.35rem,3vw,2rem)]">
        motion · motion plus · motion embedded
      </H3>
      <Body theme="ink" lead className="mt-4">
          a trusted team keeping your product, brand and experience moving, month after month.
        </Body>
      <Meta theme="ink" className="mt-6 block">
        shape the partnership around the work ·{" "}
        <Link href="/motion" className="underline decoration-1 underline-offset-4">
          {brandMessaging.ctaMotion} <span aria-hidden="true">+</span>
        </Link>
      </Meta>
    </Section>
  );
}
