import Link from "next/link";
import { formatProductPrice } from "@/lib/format-product-price";
import type { Product } from "@/lib/types";

export function PackageCard({ product }: { product: Product }) {
  const price = formatProductPrice(product);

  return (
    <article id={product.slug} className="scroll-mt-24 border-t border-line pt-10 first:border-t-0 first:pt-0">
      <h3 className="display text-[clamp(1.35rem,3vw,2rem)] font-medium">{product.name}</h3>
      <p className="lead mt-3 max-w-[65ch] font-medium">{product.tagline}</p>

      {product.forWho ? (
        <p className="mt-6 max-w-[65ch]">
          <span className="mono text-meta uppercase tracking-[0.08em] text-muted">for: </span>
          {product.forWho}
        </p>
      ) : null}

      {product.included?.length ? (
        <div className="mt-6 max-w-[65ch]">
          <p className="mono text-meta uppercase tracking-[0.08em] text-muted">what&apos;s in it</p>
          <p className="mt-2 text-body">{product.included.join(" · ")}</p>
        </div>
      ) : null}

      {product.shape ? (
        <p className="mono mt-6 text-meta uppercase tracking-[0.08em] text-muted">
          shape: <span className="normal-case tracking-normal text-[var(--surface-body,#444441)]">{product.shape}</span>
        </p>
      ) : null}

      {price ? (
        <p className="mono mt-4 text-meta uppercase tracking-[0.08em] text-accent">{price}</p>
      ) : null}

      {product.outcome ? (
        <p className="mt-6 max-w-[65ch]">
          <span className="mono text-meta uppercase tracking-[0.08em] text-muted">what you leave with: </span>
          {product.outcome}
        </p>
      ) : null}

      {product.creditNote ? (
        <p className="mt-4 max-w-[65ch] text-muted italic">{product.creditNote}</p>
      ) : null}

      {product.proof?.length ? (
        <p className="mt-4 text-meta text-muted">
          proof:{" "}
          {product.proof.map((c, i) => (
            <span key={c.slug}>
              <Link href={`/work/${c.slug}`} className="text-accent hover:underline">
                {c.title}
              </Link>
              {i < product.proof!.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      ) : null}
    </article>
  );
}
