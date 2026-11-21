'use client';

/**
 * bmkrs flavours of the shadcn/ui primitives. Every bmkrs page builds its
 * tags, cards, questions and buttons from these so the UX stays consistent.
 */
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Corners } from "./primitives";

/** Mono spec tag, e.g. NEXT.JS · HEADLESS CMS. */
export function SpecTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Badge variant="spec" className={className}>
      {children}
    </Badge>
  );
}

export function SpecTags({ tags, className }: { tags?: string[]; className?: string }) {
  if (!tags?.length) return null;
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((t) => (
        <SpecTag key={t}>{t}</SpecTag>
      ))}
    </div>
  );
}

/** Dark bordered tile with coral corner marks on hover. */
export const BmkCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn("bmk-tile group relative rounded-none bg-transparent text-white shadow-none", className)}
      {...props}
    >
      <Corners />
      {children}
    </Card>
  ),
);
BmkCard.displayName = "BmkCard";

/** Question list built on the shadcn Accordion (keyboard and screen-reader friendly). */
export function BmkFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible defaultValue="q0" className="max-w-4xl border-t border-white/10">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`q${i}`} className="border-white/10">
          <AccordionTrigger className="py-6 text-left text-lg font-semibold text-white hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-[#F85C70]">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-7 pr-10 text-base leading-relaxed text-white/75">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
