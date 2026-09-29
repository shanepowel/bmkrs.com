import { SectionHeading, Stat, StatGrid, TierCard, TierGrid } from "@bmkrs/ui";
import type { Product, ProductTier } from "@/lib/types";

const TIER_LABELS: Record<
  ProductTier,
  { label: string; blurb: string; eyebrow: string; featured?: boolean }
> = {
  start: { label: "start", blurb: "a fast, honest read before you commit to more.", eyebrow: "step one" },
  make: {
    label: "make",
    blurb: "fixed-scope sprints that build the brand and what carries it.",
    eyebrow: "the build",
    featured: true,
  },
  grow: { label: "grow", blurb: "one team keeping it all moving, month after month.", eyebrow: "ongoing" },
};

const TIERS: ProductTier[] = ["start", "make", "grow"];

const STATS = [
  { value: "17+", label: "years building" },
  { value: "4", label: "disciplines per team" },
  { value: "days", label: "to assemble, not months" },
  { value: "7+", label: "partners on the bench, growing" },
] as const;

export function PackagesSection({ products }: { products: Product[] }) {
  const byTier = (tier: ProductTier) => products.filter((product) => product.tier === tier);

  return (
    <>
      <SectionHeading title="start, make, grow." eyebrow="ways to work with us" />
      <TierGrid>
        {TIERS.map((tier) => {
          const meta = TIER_LABELS[tier];
          return (
            <TierCard
              key={tier}
              eyebrow={meta.eyebrow}
              title={meta.label}
              blurb={meta.blurb}
              featured={meta.featured}
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
