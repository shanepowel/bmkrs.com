import { SectionHeading, StepLine, Surface } from "@bmkrs/ui";
import { homeProcessStrip } from "@/lib/content/expansion-v2";

const STEPS = homeProcessStrip.steps.split(" → ");

export function ProcessSection() {
  return (
    <Surface theme="ink" pad="home" id="motion">
      <SectionHeading title="how it runs" eyebrow="the method" />
      <StepLine steps={STEPS} body={homeProcessStrip.body} note={homeProcessStrip.footnote} />
    </Surface>
  );
}
