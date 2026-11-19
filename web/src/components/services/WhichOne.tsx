import { Body, Kicker, LinkIndex, LinkRow, Section } from "@bmkrs/ui";

const ROUTES = [
  {
    situation: "you have an opportunity and want to find the right first step",
    target: "readiness",
    href: "#readiness",
  },
  {
    situation: "you want to make a digital product or experience real",
    target: "product build",
    href: "#product-build",
  },
  {
    situation: "the idea is promising, but the route forward is unclear",
    target: "ai implementation",
    href: "#ai-implementation",
  },
  {
    situation: "your technology and teams need a clearer connection",
    target: "ai governance",
    href: "#ai-governance",
  },
  {
    situation: "your team needs the confidence to keep improving the work",
    target: "team enablement",
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
      <Body theme="paper" lead className="mt-8">
        Still not sure? Tell us what you are trying to make happen and we will find a useful place to start.
      </Body>
    </Section>
  );
}
