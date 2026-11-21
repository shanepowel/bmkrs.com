'use client';
import { brand } from "@/lib/brand";

import { LegalDocumentLayout, Text } from "@/components/system";

const currentYear = new Date().getFullYear();
const financialYear = `${currentYear - 1}/${currentYear}`;
const LAST_UPDATED = "1 March 2026";

const sections = [
  {
    title: "Introduction",
    body: `This statement is made pursuant to Section 54(1) of the Modern Slavery Act 2015. It constitutes b makers ltd's Modern Slavery and Human Trafficking Statement for the financial year ${financialYear}. It sets out the steps we have taken to ensure that slavery and human trafficking are not taking place in our business operations or supply chains.

This statement has been approved by the Board of Directors of b makers ltd and is reviewed annually.`,
  },
  {
    title: "Our organisation",
    body: `b makers ltd (trading as bmkrs) is a small UK studio that designs, builds and launches brands, digital products and practical AI. We work remotely by default and serve clients ranging from founders and growing businesses to large organisations.

Our operations consist mainly of professional services delivered by our own team and a small number of trusted specialists. Everyone who works with us is employed or engaged on contracts that comply with UK employment law.`,
  },
  {
    title: "Our supply chains",
    body: `Our supply chains are relatively limited and transparent. They consist primarily of:`,
    list: [
      "Software and cloud platform providers (SaaS subscriptions and infrastructure).",
      "IT hardware and equipment from established UK and EU distributors.",
      "Office facilities, professional services (legal, accounting, insurance), and communications providers.",
      "Specialist subcontractors engaged on specific client projects, all of whom are required to comply with our ethical standards.",
    ],
  },
  {
    title: "Our policies",
    body: `We maintain a suite of internal policies designed to prevent modern slavery and related abuses:`,
    list: [
      "Anti-Slavery Policy: sets out our zero-tolerance position on modern slavery and human trafficking, and provides guidance to employees on recognising and reporting concerns.",
      "Recruitment Policy: includes right-to-work verification for all UK-based employees and contractors, to mitigate the risk of forced or trafficking-related labour.",
      "Whistleblowing Policy: enables all employees, contractors, and supply chain partners to raise concerns confidentially and without fear of reprisal.",
      "Code of Conduct: sets behavioural standards for all employees and sets expectations for suppliers and partners working with bmkrs.",
      "Supplier Due Diligence: new suppliers of material goods or services are assessed against ethical standards before engagement, including review of their own Modern Slavery statements where applicable.",
    ],
  },
  {
    title: "Risk assessment",
    body: `We assess our operations and supply chains against the risk of modern slavery. As a professional services business, we consider our direct operations to carry low risk. The most significant risk areas are in our indirect supply chain, specifically in the manufacturing of IT hardware and equipment where global supply chains may be less transparent.

We mitigate this risk by:`,
    list: [
      "Procuring hardware through established UK and EU-based distributors with published ethical sourcing standards.",
      "Requiring suppliers to confirm their own Modern Slavery Act compliance where applicable.",
      "Monitoring regulatory and sector-specific guidance from the Home Office and the Gangmasters and Labour Abuse Authority (GLAA).",
    ],
  },
  {
    title: "Due diligence",
    body: null,
    list: [
      "We conduct right-to-work checks for all UK employees and contractors.",
      "We review the Modern Slavery statements of material suppliers annually.",
      "We include anti-slavery obligations in our standard supplier contracts.",
      "We maintain a whistleblowing channel accessible to all employees and supply chain contacts.",
    ],
  },
  {
    title: "Training and awareness",
    body: `All employees receive onboarding training that covers modern slavery awareness, including how to recognise the signs of forced labour and human trafficking, and how to raise a concern. We are developing refresher training to be completed annually by all staff.

Managers and those involved in procurement receive additional guidance on supplier due diligence and the indicators of labour exploitation in supply chains.`,
  },
  {
    title: "Key performance indicators",
    body: null,
    list: [
      "Completion of modern slavery awareness training by all new employees within their first month.",
      "Number of concerns raised through the whistleblowing channel: zero for the financial year ${financialYear}.",
      "Annual review of supplier compliance statements for all material suppliers.",
      "Annual board review and approval of this statement.",
    ],
  },
  {
    title: "Looking ahead",
    body: `We are committed to improving our approach year on year. For the coming year, we intend to:`,
    list: [
      "Formalise annual refresher training for all staff.",
      "Strengthen contractual anti-slavery obligations for new supplier agreements.",
      "Develop more structured supplier assessment questionnaires.",
      "Extend due diligence to a wider group of suppliers including those in professional services.",
    ],
  },
];

export default function ModernSlavery() {
  return (
    <LegalDocumentLayout
      title="Modern Slavery Statement"
      titleTestId="text-modern-slavery-title"
      lastUpdated={LAST_UPDATED}
      lastUpdatedLine={
        <Text variant="small" tone="white-45">
          Financial year {financialYear} &nbsp;&middot;&nbsp; Last updated: {LAST_UPDATED}
        </Text>
      }
      sections={sections}
      afterSections={
        <div className="mt-4 border-t border-[#E5E3EE] pt-10">
          <Text variant="small" tone="muted" className="mb-2">
            For questions about this statement, contact us at{" "}
            <a href="mailto:ethics@bmkrs.com" className="text-[#F85C70]">
              ethics@bmkrs.com
            </a>
          </Text>
          <Text variant="small" tone="muted">
            This statement is approved by the Board of Directors and will be reviewed annually in accordance with
            Section 54 of the Modern Slavery Act 2015.
          </Text>
        </div>
      }
      companyInfo={[
        ["Legal name", "b makers ltd"],
        ["Company number", brand.companyNumber],
        ["Registered office", brand.registeredOffice],
        ["Incorporated", brand.incorporated],
        ["Nature of business", brand.natureOfBusiness],
        ["Ethics contact", "ethics@bmkrs.com"],
      ]}
    />
  );
}
