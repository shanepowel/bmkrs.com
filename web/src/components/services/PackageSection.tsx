import { Kicker, Section } from "@/components/bmkrs/surfaces";
import type { Product, ProductTier } from "@/lib/types";
import { GrowBand } from "./GrowBand";
import { PackageCard } from "./PackageCard";

const TIER_THEME: Record<ProductTier, "ink" | "paper"> = {
  start: "ink",
  make: "paper",
  grow: "ink",
};

export function PackageSection({
  tier,
  products,
}: {
  tier: ProductTier;
  products: Product[];
}) {
  if (tier === "grow") {
    return <GrowBand motionPrice={products.find((p) => p.slug === "motion")} />;
  }

  if (!products.length) return null;

  const theme = TIER_THEME[tier];

  return (
    <Section theme={theme} id={tier}>
      <Kicker theme={theme}>{tier}</Kicker>
      <div className="mt-[var(--space-block)] space-y-10">
        {products.map((product) => (
          <PackageCard key={product.slug} product={product} />
        ))}
      </div>
    </Section>
  );
}
