import Link from "next/link";
import { Body, Kicker, Section } from "@bmkrs/ui";
import { TIER_DISPLAY } from "@/lib/content/messaging";

const COLUMNS = [
  {
    label: `${TIER_DISPLAY.start.label}.`,
    body: "a focused first step to understand the opportunity, clarify what matters and agree where to go next.",
  },
  {
    label: `${TIER_DISPLAY.make.label}.`,
    body: "the right mix of strategy, design and technology to make a digital product or meaningful experience real.",
  },
  {
    label: `${TIER_DISPLAY.grow.label}.`,
    body: (
      <>
        a close creative and digital partnership, shaped around what comes next. that&apos;s{" "}
        <Link href="/motion" className="underline decoration-1 underline-offset-4">
          motion <span aria-hidden="true">+</span>
        </Link>
      </>
    ),
  },
] as const;

export function LadderIntro() {
  return (
    <Section theme="paper" tight>
      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {COLUMNS.map((col) => (
          <div key={col.label}>
            <Kicker theme="paper">{col.label}</Kicker>
            <Body theme="paper" lead className="mt-3 max-w-[36ch]">
              {col.body}
            </Body>
          </div>
        ))}
      </div>
    </Section>
  );
}
