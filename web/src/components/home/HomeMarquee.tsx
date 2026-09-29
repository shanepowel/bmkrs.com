import { Marquee } from "@bmkrs/ui";

export function HomeMarquee({ items }: { items: string[] }) {
  return <Marquee items={items} />;
}
