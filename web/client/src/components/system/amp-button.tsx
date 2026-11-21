import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type AmpButtonVariant =
  | "coral"
  | "navy"
  | "outlineLight"
  | "outlineDark"
  | "ghostLight"
  | "ghostDark";

export type AmpButtonSize = "sm" | "md" | "lg" | "xl";

export interface AmpButtonProps
  extends Omit<ButtonProps, "variant" | "size"> {
  variant?: AmpButtonVariant;
  size?: AmpButtonSize;
  fullWidth?: boolean;
}

/**
 * Brand CTA built on shadcn Button.
 * Keeps fixed heights so CTAs stay consistent across pages.
 */
export const AmpButton = React.forwardRef<HTMLButtonElement, AmpButtonProps>(
  (
    {
      className,
      variant = "coral",
      size = "lg",
      fullWidth = false,
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        className={cn("amp-focus-ring", className)}
        {...props}
      />
    );
  },
);
AmpButton.displayName = "AmpButton";
