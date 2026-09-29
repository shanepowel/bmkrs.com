import { Close, OrangeButton, SnapLine } from "@bmkrs/ui";

export function FinalCTA() {
  return (
    <Close
      id="contact"
      snap={<SnapLine tick="your line goes here" trigger="inView" />}
      title="let's make something worth choosing."
      action={<OrangeButton href="/contact">start a project</OrangeButton>}
    />
  );
}
