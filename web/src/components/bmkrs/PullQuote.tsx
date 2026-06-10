import { cn } from "@/lib/utils";

type PullQuoteProps = {
  children: string;
  className?: string;
};

export function PullQuote({ children, className }: PullQuoteProps) {
  return (
    <figure className={cn("testimonial testimonial--lead", className)}>
      <blockquote className="text-h3 font-medium leading-[1.15]">
        &ldquo;{children}&rdquo;
      </blockquote>
    </figure>
  );
}
