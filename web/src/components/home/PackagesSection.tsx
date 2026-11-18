import { SectionHeading, Stat, StatGrid, TierCard, TierGrid } from "@bmkrs/ui";
import { brandMessaging, TIER_DISPLAY } from "@/lib/content/messaging";
import { formatProductPrice } from "@/lib/format-product-price";
import type { Product, ProductTier } from "@/lib/types";

const amountOf = (product: Product) =>
  Number((product.price ?? product.priceFrom ?? "").replace(/[^0-9.]/g, "")) || Infinity;

/** Entry price for a tier: the cheapest package in it, phrased as "from" when the tier has several. */
function tierPrice(products: Product[]): string | undefined {
  const priced = products.filter((p) => amountOf(p) !== Infinity);
  if (!priced.length) return undefined;
  const cheapest = priced.reduce((a, b) => (amountOf(b) < amountOf(a) ? b : a));
  const line = formatProductPrice(cheapest);
  if (!line) return undefined;
  return priced.length > 1 && !line.startsWith("from ") ? `from ${line}` : line;
}

const TIERS: ProductTier[] = ["start", "make", "grow"];

// only claims the offer itself guarantees; add delivery numbers here once they are verified
const STATS = [
  { value: "17+", label: "years shipping products inside organisations where failure is expensive" },
  { value: "3", label: "phases every engagement: assess, implement, amplify" },
  { value: "1", label: "point of contact, from first call to production" },
] as const;

export function PackagesSection({ products }: { products: Product[] }) {
  const byTier = (tier: ProductTier) => products.filter((product) => product.tier === tier);

  return (
    <>
      <SectionHeading title={brandMessaging.packagesTitle} eyebrow={brandMessaging.packagesEyebrow} />
      <TierGrid>
        {TIERS.map((tier) => {
          const meta = TIER_DISPLAY[tier];
          return (
            <TierCard
              key={tier}
              eyebrow={meta.eyebrow}
              title={meta.label}
              blurb={meta.blurb}
              featured={meta.featured}
              price={tierPrice(byTier(tier))}
              shape={meta.shape}
              links={byTier(tier).map((product) => ({
                href: tier === "grow" ? "/motion" : `/services#${product.slug}`,
                label: product.name.toLowerCase(),
              }))}
            />
          );
        })}
      </TierGrid>
      <StatGrid>
        {STATS.map((stat) => (
          <Stat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </StatGrid>
    </>
  );
}
