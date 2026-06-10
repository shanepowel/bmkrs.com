import type { Metadata } from "next";
import { LegalDocument } from "@/components/bmkrs/LegalDocument";
import { cookiesNotice } from "@/lib/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "cookies notice",
  "what cookies and similar storage bmkrs.com uses, why, and how to change your choice.",
  "/legal/cookies",
);

export default function CookiesPage() {
  return <LegalDocument doc={cookiesNotice} />;
}
