import * as React from "react";
import { cn } from "@/lib/utils";
import { stackVariants, type StackVariantProps } from "./tokens";

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    StackVariantProps {}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, gap, align, justify, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(stackVariants({ direction, gap, align, justify }), className)}
      {...props}
    />
  ),
);
Stack.displayName = "Stack";
