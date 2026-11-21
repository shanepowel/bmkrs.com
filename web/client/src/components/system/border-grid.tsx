import * as React from "react";
import { cn } from "@/lib/utils";
import { Grid, type GridProps } from "./grid";

/** Bordered equal-height cell grid used for proof strips and card rows. */
export function BorderGrid({
  className,
  cols = 3,
  ...props
}: GridProps) {
  return (
    <Grid
      cols={cols}
      gap="none"
      equal
      className={cn("amp-border-grid", className)}
      {...props}
    />
  );
}

export function BorderCell({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("amp-border-cell amp-equal-card p-6 lg:p-7", className)} {...props}>
      {children}
    </div>
  );
}
