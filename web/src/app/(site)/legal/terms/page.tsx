import type { Metadata } from "next";
import { LegalDocument } from "@/components/bmkrs/LegalDocument";
import { termsSkeleton } from "@/lib/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(
    "terms of business",
    "skeleton terms of business for b makers ltd. for solicitor review before client use.",
    "/legal/terms",
  ),
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return <LegalDocument doc={termsSkeleton} />;
}
