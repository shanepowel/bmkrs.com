import { Marquee } from "@bmkrs/ui";

/** @deprecated prefer `<Marquee />` from `@bmkrs/ui`. */
export function AboutTicker({ items }: { items: string[] }) {
  return <Marquee items={items} />;
}
