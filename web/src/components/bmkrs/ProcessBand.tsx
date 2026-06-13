import { homeProcessStrip } from "@/lib/content/expansion-v2";
import { Kicker, Section, themeFaintStyle } from "@/components/bmkrs/surfaces";
import { MarketingBanner } from "@/components/bmkrs/MarketingBanner";
import { marketingImages } from "@/lib/marketing-assets";

export function ProcessBand() {
  return (
    <>
      <MarketingBanner
        src={marketingImages.studioWorkspace}
        alt="design, digital and brand production in the studio"
        aspect="4/3"
      />
      <Section theme="ink" tight>
        <Kicker theme="ink">how it runs</Kicker>
        <p className="mono mt-4 text-lg text-accent">{homeProcessStrip.steps}</p>
        <p className="lead mt-4 max-w-[65ch]">{homeProcessStrip.body}</p>
        <p className="mono mt-4 text-meta" style={themeFaintStyle("ink")}>
          {homeProcessStrip.footnote}
        </p>
      </Section>
    </>
  );
}
