import Link from "next/link";
import { Body, H3, Kicker, Meta, Section } from "@bmkrs/ui";
import { brandMessaging, tierLabel } from "@/lib/content/messaging";
import { formatProductPrice } from "@/lib/format-product-price";
import type { Product } from "@/lib/types";

export function GrowBand({ motionPrice }: { motionPrice?: Product }) {
  const price = motionPrice ? formatProductPrice(motionPrice) : "from £4,500/month";

  return (
    <Section theme="ink" id={tierLabel("grow")}>
      <Kicker theme="ink">{tierLabel("grow")}</Kicker>
      <H3 theme="ink" className="mt-4 text-[clamp(1.35rem,3vw,2rem)]">
        motion · motion plus · motion embedded
      </H3>
      <Body theme="ink" lead className="mt-4">
        one team keeping your product and ai estate moving, month after month. monthly partnership,
        senior people only, cancel with notice.
      </Body>
      <Meta theme="ink" className="mt-6 block">
        {price} ·{" "}
        <Link href="/motion" className="underline decoration-1 underline-offset-4">
          {brandMessaging.ctaMotion} →
        </Link>
      </Meta>
    </Section>
  );
}