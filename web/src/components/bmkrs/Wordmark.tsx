import { wordmarkSrc, type WordmarkVariant } from "@/lib/brand";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  variant?: WordmarkVariant;
};

/** Archivo wordmark with orange full stop (SVG). */
export function Wordmark({ className, variant = "primary-dark" }: WordmarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- brand svg; deterministic across contexts
    <img
      src={wordmarkSrc(variant)}
      alt="bmkrs."
      width={430}
      height={160}
      className={cn("wordmark-img", className)}
      decoding="async"
    />
  );
}
