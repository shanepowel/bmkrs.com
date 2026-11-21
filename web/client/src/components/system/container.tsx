import * as React from "react";
import { cn } from "@/lib/utils";
import { containerVariants, type ContainerVariantProps } from "./tokens";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ContainerVariantProps {}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(containerVariants({ size }), className)} {...props} />
  ),
);
Container.displayName = "Container";
