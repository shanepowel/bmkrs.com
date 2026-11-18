import { homeProcessStrip } from "@/lib/content/expansion-v2";
import { Body, Kicker, Meta, Section } from "@bmkrs/ui";

const PROCESS_STEPS = homeProcessStrip.steps.split(" → ");

export function ProcessBand() {
  return (
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
      <Body theme="ink" lead className="mt-4">
        {homeProcessStrip.body}
      </Body>
      <Meta theme="ink" className="mt-4 block">
        {homeProcessStrip.footnote}
      </Meta>
    </Section>
  );
}
