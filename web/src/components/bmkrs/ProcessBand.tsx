import { homeProcessStrip } from "@/lib/content/expansion-v2";
import { Kicker, Section, themeFaintStyle } from "@/components/bmkrs/surfaces";

export function ProcessBand() {
  return (
    <Section theme="ink" tight>
      <Kicker theme="ink">how it runs</Kicker>
      <p className="mono mt-4 text-lg text-accent">{homeProcessStrip.steps}</p>
      <p className="lead mt-4 max-w-[65ch]">{homeProcessStrip.body}</p>
      <p className="mono mt-4 text-meta" style={themeFaintStyle("ink")}>
        {homeProcessStrip.footnote}
      </p>
    </Section>
  );
}
