import { homeProcessSteps, homeProcessStrip } from "@/lib/content/expansion-v2";
import { Kicker, Section, themeFaintStyle } from "@bmkrs/ui";
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
        <p className="process-strip mt-4">
          {homeProcessSteps.map((step, i) => (
            <span key={step.name} className="inline-flex items-center gap-3">
              {step.name}
              {i < homeProcessSteps.length - 1 ? (
                <span className="process-strip__sep" aria-hidden>
                  →
                </span>
              ) : null}
            </span>
          ))}
        </p>
        <div className="process-band__steps mt-8">
          {homeProcessSteps.map((step) => (
            <div key={step.name} className="process-band__step">
              <p className="process-band__step-name">{step.name}</p>
              <p className="process-band__step-body">{step.description}</p>
            </div>
          ))}
        </div>
        <p className="mono mt-8 text-meta" style={themeFaintStyle("ink")}>
          {homeProcessStrip.footnote}
        </p>
      </Section>
    </>
  );
}
