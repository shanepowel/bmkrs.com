import * as React from "react";
import { cn } from "@/lib/utils";
import { gridVariants, type GridVariantProps } from "./tokens";

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    GridVariantProps {}

/**
 * Equal-height grid by default. Children stretch to the tallest row item,
 * which prevents irregular card heights across a section.
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols, gap, equal, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(gridVariants({ cols, gap, equal }), className)}
      {...props}
    />
  ),
);
Grid.displayName = "Grid";
