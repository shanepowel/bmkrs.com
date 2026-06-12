import Link from "next/link";
import { formatProductPrice } from "@/lib/format-product-price";
import { Kicker, Section } from "@/components/bmkrs/surfaces";
import type { Product } from "@/lib/types";

export function GrowBand({ motionPrice }: { motionPrice?: Product }) {
  const price = motionPrice ? formatProductPrice(motionPrice) : "from £4,500/month";

  return (
    <Section theme="ink" id="grow">
      <Kicker theme="ink">grow</Kicker>
      <h3 className="display mt-4 text-[clamp(1.35rem,3vw,2rem)] font-medium">
        motion · motion plus · motion embedded
      </h3>
      <p className="lead mt-4 max-w-[65ch]">
        one team keeping your brand, voice, and pr moving, month after month. monthly partnership,
        senior people only, cancel with notice.
      </p>
      <p className="mono mt-6 text-meta uppercase tracking-[0.08em] text-accent">
        {price} ·{" "}
        <Link href="/motion" className="normal-case tracking-normal hover:underline">
          see how motion runs →
        </Link>
      </p>
    </Section>
  );
}
