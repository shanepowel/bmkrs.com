import Link from "next/link";
import type { Product, ProductTier } from "@/lib/types";
import { SectionHeader } from "./SectionHeader";

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
  const byTier = (tier: ProductTier) => products.filter((p) => p.tier === tier);

  return (
    <>
      <SectionHeader title="start, make, grow." eyebrow="ways to work with us" />
      <div className="home-packages">
        {TIERS.map((tier) => {
          const meta = TIER_LABELS[tier];
          return (
            <div
              key={tier}
              className={`home-packages__card${meta.featured ? " home-packages__card--featured" : ""}`}
            >
              <span className="home-packages__eyebrow">{meta.eyebrow}</span>
              <h3 className="home-packages__title">{meta.label}</h3>
              <p className="home-packages__sub">{meta.blurb}</p>
              <ul className="home-packages__links">
                {byTier(tier).map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={tier === "grow" ? "/motion" : `/services#${product.slug}`}
                      className="home-packages__link"
                    >
                      {product.name.toLowerCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="home-stats">
        {STATS.map((stat) => (
          <div key={stat.label} className="home-stats__cell">
            <b className="home-stats__value">{stat.value}</b>
            <span className="home-stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
