'use client';
import { brand } from "@/lib/brand";

import { LegalDocumentLayout } from "@/components/system";

const LAST_UPDATED = "1 March 2026";

const sections = [
  {
    title: "Who we are",
    body: `b makers ltd is registered in England and Wales (Company No. ${brand.companyNumber}). Our registered office is ${brand.registeredOffice}. We are the data controller for information collected through this website.

Contact us about data protection matters at privacy@bmkrs.com.`,
  },
  {
    title: "What information we collect",
    body: null,
    list: [
      "Contact and enquiry information you submit via consultation request forms: name, email address, company, telephone, and the content of your message.",
      "Newsletter subscription email address and marketing preferences.",
      "Information you provide when using our AI Waste Calculator (no personal data is required or retained).",
      "Technical data collected automatically when you browse: IP address, browser type, pages visited, and time on site. This is collected via analytics cookies only where you have given consent.",
    ],
  },
  {
    title: "Lawful basis for processing",
    body: null,
    list: [
      "Legitimate interests: responding to enquiries and managing our client relationships.",
      "Consent: marketing communications and optional analytics cookies. You may withdraw consent at any time.",
      "Legal obligation: retaining records as required by law.",
      "Contract: processing necessary to deliver services you have engaged us for.",
    ],
  },
  {
    title: "How we use your information",
    body: null,
    list: [
      "To respond to your consultation requests and general enquiries.",
      "To send you insights, updates, and service information where you have opted in.",
      "To improve our website and services using anonymised analytics data.",
      "To comply with our legal and regulatory obligations.",
      "We do not sell, rent, or trade your personal information with third parties for their own marketing purposes.",
    ],
  },
  {
    title: "Third-party services",
    body: `We use the following third-party services which may process data on our behalf as data processors:`,
    list: [
      "HubSpot CRM (EU servers): contact management and marketing communications.",
      "Resend: transactional email delivery of consultation requests.",
      "Mailchimp: visitor tracking and newsletter management, where consent is given.",
      "Neon Database: secure, serverless hosting of form submission data.",
      "All third-party processors are bound by data processing agreements and applicable data protection law.",
    ],
  },
  {
    title: "Cookies",
    body: `We use two categories of cookies:`,
    list: [
      "Strictly necessary cookies: required for the website to function. These do not require consent and cannot be switched off.",
      "Analytics cookies: used to understand how visitors use the site. These are only set with your explicit consent via our cookie banner. You may withdraw consent at any time by clearing your browser cookies or revisiting the cookie banner.",
    ],
  },
  {
    title: "Data retention",
    body: null,
    list: [
      "Consultation enquiry data is retained for 7 years in line with standard business records requirements.",
      "Marketing contact data is retained until you withdraw consent or for a maximum of 3 years of inactivity.",
      "Technical/analytics data is retained in anonymised aggregate form for up to 26 months.",
    ],
  },
  {
    title: "International transfers",
    body: `We primarily process data within the UK and the European Economic Area. Where personal data is transferred to countries outside these areas (for example, where a third-party processor operates US-based servers), we ensure appropriate safeguards are in place, including standard contractual clauses approved by the Information Commissioner's Office.`,
  },
  {
    title: "Your rights under UK GDPR",
    body: `You have the following rights in relation to your personal data:`,
    list: [
      "Right of access: to request a copy of the personal data we hold about you.",
      "Right to rectification: to have inaccurate data corrected.",
      "Right to erasure: to request deletion of your data where there is no lawful reason to continue holding it.",
      "Right to restriction: to ask us to stop processing your data in certain circumstances.",
      "Right to portability: to receive your data in a structured, machine-readable format.",
      "Right to object: to object to processing based on legitimate interests or for direct marketing.",
      "Right to withdraw consent: where processing is based on consent, you may withdraw it at any time without affecting prior lawful processing.",
    ],
  },
  {
    title: "How to exercise your rights",
    body: `To exercise any of the above rights, contact us at privacy@bmkrs.com or write to: b makers ltd, ${brand.registeredOffice}. We will respond within one calendar month. We may need to verify your identity before processing a request.

You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk, or by calling 0303 123 1113.`,
  },
  {
    title: "Changes to this policy",
    body: `We review this Privacy Policy regularly and may update it to reflect changes in our practices or legal requirements. We will update the "Last updated" date at the top of this page when we make material changes.`,
  },
];

export default function Privacy() {
  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      titleTestId="text-privacy-title"
      lastUpdated={LAST_UPDATED}
      sections={sections}
      companyInfo={[
        ["Legal name", "b makers ltd"],
        ["Company number", brand.companyNumber],
        ["Registered office", brand.registeredOffice],
        ["Incorporated", brand.incorporated],
        ["Nature of business", brand.natureOfBusiness],
        ["Data protection contact", "privacy@bmkrs.com"],
      ]}
    />
  );
}
