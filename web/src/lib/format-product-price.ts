import type { PriceQualifier, Product } from "@/lib/types";

function inferQualifier(product: Product): PriceQualifier {
  if (product.priceQualifier) return product.priceQualifier;
  if (product.priceNote === "/month" || product.tier === "grow") return "per-month";
  if (product.slug === "brand-check") return "fixed";
  const amount = product.price ?? product.priceFrom;
  if (amount) return "from";
  return "lets-talk";
}

/** Formatted price line for package cards. Never returns empty without a fallback when pricing is promised. */
export function formatProductPrice(product: Product): string {
  const qualifier = inferQualifier(product);
  const amount = product.price ?? product.priceFrom;

  if (!amount) {
    if (qualifier === "lets-talk") return "from £—, scoped on a call";
    return "";
  }

  let line = "";
  if (qualifier === "from") line += "from ";
  line += amount;
  if (qualifier === "per-month") line += "/month";
  return line;
}
