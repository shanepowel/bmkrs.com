import * as React from "react";
import { cn } from "@/lib/utils";
import { sectionVariants, type SectionVariantProps } from "./tokens";
import { Container, type ContainerProps } from "./container";

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    SectionVariantProps {
  containerSize?: ContainerProps["size"];
  containerClassName?: string;
  /** When false, renders children without the standard Container wrapper. */
  contained?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      tone,
      padding,
      containerSize = "default",
      containerClassName,
      contained = true,
      children,
      ...props
    },
    ref,
  ) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ tone, padding }), className)}
      {...props}
    >
      {contained ? (
        <Container size={containerSize} className={containerClassName}>
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  ),
);
Section.displayName = "Section";
