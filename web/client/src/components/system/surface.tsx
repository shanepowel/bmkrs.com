import * as React from "react";
import { cn } from "@/lib/utils";
import { surfaceVariants, type SurfaceVariantProps } from "./tokens";

type SurfaceElement = "div" | "article" | "aside" | "li";

export interface SurfaceProps
  extends React.HTMLAttributes<HTMLElement>,
    SurfaceVariantProps {
  as?: SurfaceElement;
}

/**
 * Standard surface for cards/panels. Enforces min-width 0 and overflow wrapping
 * so long words and uneven content cannot blow out the layout.
 */
export const Surface = React.forwardRef<HTMLElement, SurfaceProps>(
  ({ className, variant, padding, radius, border, as = "div", ...props }, ref) => {
    const Comp = as;
    return (
      <Comp
        ref={ref as never}
        className={cn(surfaceVariants({ variant, padding, radius, border }), className)}
        {...props}
      />
    );
  },
);
Surface.displayName = "Surface";
