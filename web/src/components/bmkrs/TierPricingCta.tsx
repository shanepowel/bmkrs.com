"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

type TierPricingCtaProps = {
  priceFrom: string;
  priceNote?: string;
  pricingCtaLabel?: string;
  contactHref?: string;
  contactLabel?: string;
  featured?: boolean;
};

export function TierPricingCta({
  priceFrom,
  priceNote,
  pricingCtaLabel = "see pricing from",
  contactHref = "/contact",
  contactLabel = "get a tailored quote",
  featured = false,
}: TierPricingCtaProps) {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className={cn(
          "w-full rounded-full border-2 px-5 py-3 text-left font-display text-[15px] font-semibold transition hover:-translate-y-0.5",
          featured
            ? "border-bg/40 text-bg hover:border-bg hover:bg-bg/10"
            : "border-ink hover:bg-ink hover:text-bg"
        )}
      >
        {pricingCtaLabel}
      </button>
    );
  }

  return (
    <div className="space-y-3">
      <p className="display text-[42px] font-bold tracking-[-0.04em]">
        from {priceFrom}
        {priceNote && (
          <small
            className={cn(
              "ml-1 font-body text-sm font-normal",
              featured ? "text-bg/80" : "text-muted"
            )}
          >
            {priceNote}
          </small>
        )}
      </p>
      <div className="flex flex-wrap gap-2">
        <Link
          href={contactHref}
          className={featured ? "btn-ghost border-bg text-bg hover:bg-bg hover:text-ink" : "btn-primary"}
        >
          {contactLabel}
        </Link>
        <button
          type="button"
          onClick={() => setRevealed(false)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium opacity-70 transition hover:opacity-100",
            featured ? "text-bg" : "text-muted"
          )}
        >
          hide
        </button>
      </div>
    </div>
  );
}
