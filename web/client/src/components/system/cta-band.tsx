import * as React from "react";
import { Section } from "./section";
import { Stack } from "./stack";
import { Text, Eyebrow } from "./text";
import { cn } from "@/lib/utils";

export interface CtaBandProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  align?: "center" | "start";
  tone?: "navy" | "purple";
}

/** Closing CTA band used at the bottom of marketing pages. */
export function CtaBand({
  eyebrow,
  title,
  lead,
  children,
  className,
  align = "center",
  tone = "navy",
}: CtaBandProps) {
  return (
    <Section tone={tone} padding="lg" className={className}>
      <Stack
        gap="lg"
        align={align === "center" ? "center" : "start"}
        className={cn(align === "center" && "text-center")}
      >
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Text variant="h2" tone="white" className="max-w-[760px]">
          {title}
        </Text>
        {lead ? (
          <Text variant="lead" tone="white-75" className="max-w-[640px]">
            {lead}
          </Text>
        ) : null}
        {children}
      </Stack>
    </Section>
  );
}
