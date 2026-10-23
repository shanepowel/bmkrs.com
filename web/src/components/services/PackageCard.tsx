import Link from "next/link";
import { PackageEntry } from "@bmkrs/ui";
import { formatProductPrice } from "@/lib/format-product-price";
import type { Product } from "@/lib/types";

export function PackageCard({ product }: { product: Product }) {
  const price = formatProductPrice(product);
  const specs: { label: string; value: React.ReactNode }[] = [];

  if (product.forWho) specs.push({ label: "for", value: product.forWho });
  if (product.included?.length) specs.push({ label: "what's in it", value: product.included.join(" · ") });
  if (product.shape) specs.push({ label: "shape", value: product.shape });
  if (product.outcome) specs.push({ label: "what you leave with", value: product.outcome });
  if (product.proof?.length) {
    specs.push({
      label: "proof",
      value: product.proof.map((item, index) => (
        <span key={item.slug}>
          <Link href={`/work/${item.slug}`}>{item.title}</Link>
          {index < product.proof!.length - 1 ? ", " : ""}
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
      price={price || undefined}
      note={product.creditNote}
    />
  );
}
