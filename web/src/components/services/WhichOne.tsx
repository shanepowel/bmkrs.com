import { Kicker, LinkIndex, LinkRow, Section } from "@bmkrs/ui";

const ROUTES = [
  {
    situation: "not sure what to build, or whether ai belongs in it",
    target: "readiness",
    href: "#readiness",
  },
  {
    situation: "you need a digital product in users' hands",
    target: "product build",
    href: "#product-build",
  },
  {
    situation: "ai pilots exist. nothing is in production",
    target: "ai implementation",
    href: "#ai-implementation",
  },
  {
    situation: "you cannot adopt ai by bypassing controls",
    target: "ai governance",
    href: "#ai-governance",
  },
  {
    situation: "the build shipped. the team cannot run it",
    target: "onboard",
    href: "#onboard",
  },
  {
    situation: "you want the same team to keep shipping",
    target: "motion",
    href: "/motion",
  },
] as const;

export function WhichOne() {
  return (
    <Section theme="paper">
      <Kicker theme="paper">which one is mine?</Kicker>
      <div className="mt-8">
        <LinkIndex>
          {ROUTES.map((item) => (
            <LinkRow
              key={item.href}
              href={item.href}
              name={item.situation}
              description={item.target}
            />
          ))}
        </LinkIndex>
      </div>
      <p className="lead mt-8 max-w-[65ch]">
        still not sure? that&apos;s what readiness is for.
      </p>
    </Section>
  );
}
