import Link from "next/link";
import { Body, Kicker, Section } from "@bmkrs/ui";
import { TIER_DISPLAY } from "@/lib/content/messaging";

const COLUMNS = [
  {
    label: `${TIER_DISPLAY.start.label}.`,
    body: "a fast, honest readiness read before you commit to a build or an ai programme. one week, one price, no obligation to continue.",
  },
  {
    label: `${TIER_DISPLAY.make.label}.`,
    body: "fixed-scope sprints that ship digital products, put ai into production, set governance, and leave your team able to run it.",
  },
  {
    label: `${TIER_DISPLAY.grow.label}.`,
    body: (
      <>
        one team keeping product and ai moving, month after month. that&apos;s{" "}
        <Link href="/motion" className="underline decoration-1 underline-offset-4">
          motion →
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
