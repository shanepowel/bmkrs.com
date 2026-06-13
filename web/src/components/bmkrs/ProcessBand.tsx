import { homeProcessStrip } from "@/lib/content/expansion-v2";
import { Kicker, Section, themeFaintStyle } from "@/components/bmkrs/surfaces";
import { MarketingBanner } from "@/components/bmkrs/MarketingBanner";
import { marketingImages } from "@/lib/marketing-assets";

const PROCESS_STEPS = homeProcessStrip.steps.split(" → ");

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
        <p className="process-strip mt-4">
          {PROCESS_STEPS.map((step, i) => (
            <span key={step} className="inline-flex items-center gap-3">
              {step}
              {i < PROCESS_STEPS.length - 1 ? (
                <span className="process-strip__sep" aria-hidden>
                  →
                </span>
              ) : null}
            </span>
          ))}
        </p>
        <p className="text-lead mt-4 max-w-[65ch]">{homeProcessStrip.body}</p>
        <p className="mono mt-4 text-meta" style={themeFaintStyle("ink")}>
          {homeProcessStrip.footnote}
        </p>
      </Section>
    </>
  );
}
