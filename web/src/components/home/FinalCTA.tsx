import { Close, OrangeButton, SnapLine } from "@bmkrs/ui";

export function FinalCTA() {
  return (
    <Close
      id="contact"
      snap={<SnapLine tick="your line goes here" trigger="inView" />}
      title="let's put something into production."
      action={<OrangeButton href="/contact">start a build</OrangeButton>}
    />
  );
}
