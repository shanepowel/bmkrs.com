import * as React from "react";
import { cn } from "@/lib/utils";
import { textVariants, type TextVariantProps } from "./tokens";

type TextElement = "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";

const defaultElement: Record<NonNullable<TextVariantProps["variant"]>, TextElement> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  lead: "p",
  body: "p",
  small: "p",
  caption: "p",
  eyebrow: "p",
  mono: "p",
};

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    TextVariantProps {
  as?: TextElement;
}

/**
 * Typography primitive with overflow-safe defaults:
 * min-w-0, text-balance, break-words, and optional line-clamp.
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant = "body", tone, clamp, as, ...props }, ref) => {
    const Comp = as ?? defaultElement[variant ?? "body"];
    return (
      <Comp
        ref={ref as never}
        className={cn(textVariants({ variant, tone, clamp }), className)}
        {...props}
      />
    );
  },
);
Text.displayName = "Text";

export function Eyebrow({
  className,
  tone = "coral",
  ...props
}: Omit<TextProps, "variant">) {
  return <Text variant="eyebrow" tone={tone} className={className} {...props} />;
}
