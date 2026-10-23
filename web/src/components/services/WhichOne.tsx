import { Kicker, LinkIndex, LinkRow, Section } from "@bmkrs/ui";

const ROUTES = [
  { situation: "not sure what's wrong, just that something is", target: "brand check", href: "#brand-check" },
  { situation: "new brand, nothing built yet", target: "launch kit", href: "#launch-kit" },
  { situation: "the brand no longer matches the business", target: "rebrand", href: "#rebrand" },
  { situation: "the brand is fine, the site isn't", target: "storefront", href: "#storefront" },
  { situation: "you look fine and sound like everyone", target: "story", href: "#story" },
  { situation: "there's a launch date and no story", target: "press launch", href: "#press-launch" },
  { situation: "you want it all to keep moving", target: "motion", href: "/motion" },
] as const;

export function WhichOne() {
  return (
    <Section theme="paper">
      <Kicker theme="paper">which one is mine?</Kicker>
      <div className="mt-8">
        <LinkIndex>
          {ROUTES.map((item) => (
            <LinkRow key={item.href} href={item.href} name={item.situation} description={item.target} />
          ))}
        </LinkIndex>
      </div>
      <p className="lead mt-8 max-w-[65ch]">still not sure? that&apos;s what the brand check is for.</p>
    </Section>
  );
}
