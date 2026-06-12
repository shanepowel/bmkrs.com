import Link from "next/link";
import { Kicker, Section } from "@/components/bmkrs/surfaces";

const COLUMNS = [
  {
    label: "start.",
    body: "a fast, honest read before you commit to more. one week, one price, no obligation to continue.",
  },
  {
    label: "make.",
    body: "fixed-scope sprints that build the brand and the thing that carries it. six to ten weeks depending on the package.",
  },
  {
    label: "grow.",
    body: (
      <>
        one team keeping brand, voice, and pr moving, month after month. that&apos;s{" "}
        <Link href="/motion" className="text-accent hover:underline">
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
            <p className="lead mt-3 max-w-[36ch]">{col.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
