import { Button, Close } from "@bmkrs/ui";
import { brandMessaging } from "@/lib/content/messaging";

export function FinalCTA() {
  return (
    <Close
      id="contact"
      title={brandMessaging.closeTitle}
      action={<Button href="/contact">{brandMessaging.ctaPrimary} →</Button>}
    />
  );
}
