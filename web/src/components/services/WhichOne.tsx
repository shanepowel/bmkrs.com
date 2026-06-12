import Link from "next/link";
import { Kicker, Section } from "@/components/bmkrs/surfaces";

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
      <ul className="mt-8 max-w-[65ch] space-y-4">
        {ROUTES.map((item) => (
          <li key={item.situation} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
            {item.situation} →{" "}
            <Link href={item.href} className="font-medium text-accent hover:underline">
              {item.target}
            </Link>
          </li>
        ))}
      </ul>
      <p className="lead mt-8 max-w-[65ch]">still not sure? that&apos;s what the brand check is for.</p>
    </Section>
  );
}
