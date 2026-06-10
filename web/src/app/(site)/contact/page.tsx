import { ContactExperience } from "@/components/bmkrs/ContactExperience";
import { getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "contact",
  "tell us what you are building. we reply within one working day with a real answer, not a calendar link.",
  "/contact"
);

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const email = settings.generalEmail || settings.email || "hello@bmkrs.com";

  return (
    <div className="contact-page">
      <ContactExperience fallbackEmail={email} pressEmail={settings.pressEmail} />
    </div>
  );
}
