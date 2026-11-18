"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";
import { useSurface } from "./Surface";
import { SURFACE } from "./tokens";

export type SeparatorProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
  /** Force a surface theme instead of reading context. */
  theme?: keyof typeof SURFACE;
};

/**
 * Accessible divider built on Radix Separator.
 * Colours come from the active Surface.
 */
export function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  theme,
  style,
  ...props
}: SeparatorProps) {
  const contextTheme = useSurface();
  const resolved = theme ?? contextTheme;

  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 border-0",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
      style={{ backgroundColor: SURFACE[resolved].rule, ...style }}
      {...props}
    />
  );
}
