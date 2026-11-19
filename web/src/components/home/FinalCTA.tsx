import { Button, Close } from "@bmkrs/ui";
import { brandMessaging } from "@/lib/content/messaging";

export function FinalCTA() {
  return (
    <Close
      id="contact"
      title={brandMessaging.closeTitle}
      lede={brandMessaging.closeLead}
      action={
        <Button href="/contact" variant="link">
          {brandMessaging.ctaClose} →
        </Button>
      }
    />
  );
}
