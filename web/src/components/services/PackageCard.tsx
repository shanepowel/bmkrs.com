import Link from "next/link";
import { PackageEntry } from "@bmkrs/ui";
import type { Product } from "@/lib/types";

export function PackageCard({ product }: { product: Product }) {
  const specs: { label: string; value: React.ReactNode }[] = [];

  if (product.forWho) specs.push({ label: "for", value: product.forWho });
  if (product.included?.length) specs.push({ label: "what's in it", value: product.included.join(" · ") });
  if (product.shape) specs.push({ label: "shape", value: product.shape });
  if (product.outcome) specs.push({ label: "what you leave with", value: product.outcome });
  const proof = product.proof?.filter((item) => item && typeof item.slug === "string" && item.slug);
  if (proof?.length) {
    specs.push({
      label: "proof",
      value: proof.map((item, index) => (
        <span key={item.slug}>
          <Link href={`/work/${item.slug}`}>{item.title}</Link>
          {index < proof.length - 1 ? ", " : ""}
        </span>
      )),
    });
  }

  return (
    <PackageEntry
      id={product.slug}
      name={product.name}
      tagline={product.tagline}
      specs={specs}
    />
  );
}
