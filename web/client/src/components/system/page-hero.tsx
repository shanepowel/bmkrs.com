import * as React from "react";
import { Section } from "./section";
import { Stack } from "./stack";
import { Text, Eyebrow } from "./text";
import { cn } from "@/lib/utils";

export interface PageHeroProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  /** Vertical rhythm. Default is the compact marketing hero. */
  padding?: "md" | "lg" | "xl" | "hero";
  /** Title scale. `page` uses h1; `splash` uses display for rare full-bleed intros. */
  titleSize?: "page" | "splash";
}

/**
 * Standard navy marketing hero.
 * Compact by default: eyebrow, title, optional lead, CTA slot, no full-viewport height.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  lead,
  children,
  className,
  contentClassName,
  padding = "hero",
  titleSize = "page",
}: PageHeroProps) {
  return (
    <Section tone="navy" padding={padding} className={cn("relative", className)}>
      <Stack gap="md" className={cn("max-w-[720px]", contentClassName)}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Text variant={titleSize === "splash" ? "display" : "h1"} tone="white">
          {title}
        </Text>
        {subtitle ? (
          <Text variant="h3" tone="coral" className="max-w-[640px]">
            {subtitle}
          </Text>
        ) : null}
        {lead ? (
          <Text variant="lead" tone="white-75" className="max-w-[560px]">
            {lead}
          </Text>
        ) : null}
        {children ? <div className="pt-2">{children}</div> : null}
      </Stack>
    </Section>
  );
}
