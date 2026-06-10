import type { Metadata } from "next";
import { LegalDocument } from "@/components/bmkrs/LegalDocument";
import { getSiteSettings } from "@/lib/content";
import { privacyNotice } from "@/lib/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "privacy notice",
  "how bmkrs collects, uses and keeps personal data from bmkrs.com. short, plain english, uk gdpr.",
  "/legal/privacy",
);

export default async function PrivacyPage() {
  const settings = await getSiteSettings();
  const doc = privacyNotice(settings.companyNumber, settings.registeredAddress);
  return <LegalDocument doc={doc} />;
}
