import type { Metadata } from "next";
import { ContactExperience } from "@/components/bmkrs/ContactExperience";
import { getSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "contact",
  description: "start a project, press, join the network, or just say hi. we reply within one working day.",
};

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const email = settings.generalEmail || settings.email;

  return (
    <div className="contact-page bg-[var(--bmkrs-ink)] text-[var(--bmkrs-paper)]">
      <ContactExperience fallbackEmail={email} />
    </div>
  );
}
