import { ContactExperience } from "@/components/bmkrs/ContactExperience";
import { getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "contact",
  "Tell us where your product or AI work is stuck. We will help you find a sensible next step.",
  "/contact",
);

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const email = settings.generalEmail || settings.email || "hello@bmkrs.com";

  return <ContactExperience fallbackEmail={email} pressEmail={settings.pressEmail} />;
}
