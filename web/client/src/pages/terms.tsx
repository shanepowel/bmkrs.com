'use client';
import { brand } from "@/lib/brand";

import { LegalDocumentLayout } from "@/components/system";

const LAST_UPDATED = "1 March 2026";

const sections = [
  {
    title: "1. Definitions and interpretation",
    body: null,
    list: [
      `"bmkrs" means b makers ltd, a company registered in England and Wales (No. ${brand.companyNumber}).`,
      "\"Client\" or \"Buyer\" means the organisation or individual purchasing Services from bmkrs.",
      "\"Contract\" means the agreement between bmkrs and the Client for the supply of Services, formed when a Statement of Work or order is accepted by both parties.",
      "\"Deliverables\" means any outputs, documents, reports, software, or materials produced by bmkrs in performing the Services.",
      "\"Confidential Information\" means any information marked as confidential or which would reasonably be understood to be confidential, excluding information already in the public domain.",
      "\"Intellectual Property Rights\" means all patents, copyright, design rights, trade marks, trade secrets, and all other intellectual property rights.",
      "\"Services\" means the consulting, advisory, and technology services provided by bmkrs as described in the relevant Statement of Work or service agreement.",
    ],
  },
  {
    title: "2. Services and obligations",
    body: `bmkrs will provide the Services with reasonable skill and care, in accordance with the agreed Statement of Work, and using appropriately qualified personnel.

The Client will provide bmkrs with timely access to information, systems, and personnel reasonably required to perform the Services. Where Services are delayed or made impossible by the Client's failure to provide such access, bmkrs shall not be liable for the resulting impact on delivery timelines or outcomes.

Where Services depend on third-party products, platforms, or information outside bmkrs's reasonable control, bmkrs accepts no liability for failures or delays caused by those third parties.`,
  },
  {
    title: "3. Personnel and subcontracting",
    body: `bmkrs will ensure its personnel comply with the Client's reasonable site rules, security policies, and confidentiality requirements. bmkrs may engage subcontractors to deliver elements of the Services, subject to equivalent confidentiality obligations.

If a key individual must be replaced, bmkrs will ensure appropriate knowledge transfer at no additional cost to the Client, and will work with the Client to minimise disruption.`,
  },
  {
    title: "4. Charges and payment",
    body: `Charges are set out in the relevant Statement of Work or pricing agreement. Unless otherwise agreed:`,
    list: [
      "Invoices are issued monthly in arrears.",
      "Payment is due within 30 days of receipt of a valid invoice.",
      "Late payments attract interest at 2% above the Bank of England base rate, accruing daily.",
      "bmkrs reserves the right to suspend Services where invoices remain unpaid beyond 45 days of the due date.",
    ],
  },
  {
    title: "5. Intellectual property rights",
    body: `Each party retains ownership of its pre-existing intellectual property. Intellectual property rights in bespoke Deliverables created specifically for the Client will vest in the Client upon receipt of full payment for those Deliverables.

bmkrs retains ownership of its generic methodologies, frameworks, tools, templates, and know-how developed independently or prior to the engagement. The Client receives a non-exclusive, royalty-free licence to use any such materials incorporated into Deliverables for its internal business purposes.`,
  },
  {
    title: "6. Confidentiality",
    body: `Each party will hold the other's Confidential Information in confidence, use it only for the purposes of the Contract, and not disclose it to third parties without prior written consent. This obligation survives termination of the Contract for a period of three years.

Neither party is prevented from disclosing Confidential Information where required by law, court order, or regulatory authority, provided it gives the other party reasonable advance notice where legally permissible.`,
  },
  {
    title: "7. Data protection",
    body: `Both parties will comply with the UK GDPR and Data Protection Act 2018 in connection with any personal data processed under this Contract. Where bmkrs processes personal data on behalf of the Client, a separate Data Processing Agreement will govern those activities.

bmkrs implements appropriate technical and organisational security measures to protect Client data and complies with recognised security standards.`,
  },
  {
    title: "8. Liability and insurance",
    body: `bmkrs's total aggregate liability to the Client under or in connection with a Contract shall not exceed the greater of (a) £1,000,000 or (b) 150% of the total charges paid or payable under that Contract in the 12 months preceding the claim.

Neither party shall be liable to the other for any indirect, consequential, or special loss, loss of profits, loss of business, or reputational damage, whether arising in contract, tort, or otherwise.

Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be limited by law.

bmkrs maintains the following insurance coverage: Professional Indemnity (£1m per claim), Public Liability (£1m), Employer's Liability (£5m).`,
  },
  {
    title: "9. Termination",
    body: `Either party may terminate the Contract by giving not less than 30 days written notice. Either party may terminate immediately by written notice if the other commits a material breach that is not remedied within 14 days of written notice, or enters insolvency proceedings.

Upon termination, the Client will pay all charges due for Services performed up to the termination date. bmkrs will return or destroy Client data and Confidential Information upon request.`,
  },
  {
    title: "10. Governing law",
    body: `These Terms and any Contract formed under them are governed by the laws of England and Wales. Each party submits to the exclusive jurisdiction of the courts of England and Wales for the resolution of any dispute arising from or in connection with these Terms.`,
  },
];

export default function Terms() {
  return (
    <LegalDocumentLayout
      title="Terms of Use"
      titleTestId="text-terms-title"
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          These Terms of Use govern your use of the bmkrs website and the basis on which b makers ltd
          provides professional services. By engaging bmkrs for services or using this website, you
          agree to be bound by these Terms.
        </>
      }
      sections={sections}
      companyInfo={[
        ["Legal name", "b makers ltd"],
        ["Company number", brand.companyNumber],
        ["Registered office", brand.registeredOffice],
        ["Incorporated", brand.incorporated],
        ["Nature of business", brand.natureOfBusiness],
        ["Legal enquiries", "legal@bmkrs.com"],
      ]}
    />
  );
}
