import { Close, OrangeButton, SnapLine } from "@bmkrs/ui";
import { brandMessaging } from "@/lib/content/messaging";

export function FinalCTA() {
  return (
    <Close
      id="contact"
      snap={<SnapLine tick="your line goes here" trigger="inView" />}
      title={brandMessaging.closeTitle}
      action={<OrangeButton href="/contact">{brandMessaging.ctaPrimary}</OrangeButton>}
    />
  );
}
