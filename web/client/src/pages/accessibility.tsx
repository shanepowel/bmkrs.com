'use client';
import { brand } from "@/lib/brand";

import { LegalDocumentLayout } from "@/components/system";

const LAST_UPDATED = "1 March 2026";

const sections = [
  {
    title: "Our commitment",
    body: `b makers ltd is committed to making this website accessible to everyone, including people with disabilities. We work to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, as referenced by the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018 and recognised as best practice across all sectors.

We believe that accessible design is good design. Clarity, legibility, and logical structure benefit every user, not only those using assistive technology.`,
  },
  {
    title: "What we have done",
    body: null,
    list: [
      "Semantic HTML5 markup to ensure the site is navigable by screen readers and assistive technologies.",
      "Keyboard navigation support throughout all interactive elements.",
      "ARIA labels and roles where needed to clarify the purpose of elements for assistive technology users.",
      "Colour contrast ratios that meet or exceed WCAG AA requirements for all body text and interactive elements.",
      "Responsive layout that functions on mobile, tablet, and desktop at all standard zoom levels.",
      "Alternative text on all meaningful images.",
      "Visible focus indicators on all interactive elements to support keyboard-only navigation.",
      "Respects the user's prefers-reduced-motion setting to avoid triggering vestibular disorders.",
    ],
  },
  {
    title: "Known limitations",
    body: `We are honest about the limitations that exist. We are actively working to address these:`,
    list: [
      "Some third-party embedded content (including scheduling tools and forms) may not fully meet WCAG AA standards. We have raised these with the relevant vendors.",
      "Older PDF documents linked from the site may not be fully accessible. We are working to replace or tag these.",
      "Complex interactive components (including some data visualisations) may require additional assistive technology support beyond basic screen reader use.",
    ],
  },
  {
    title: "Assistive technology compatibility",
    body: `This website is designed to work with the following assistive technologies and has been tested against them:`,
    list: [
      "NVDA and JAWS (Windows screen readers) with Chrome and Firefox.",
      "VoiceOver (macOS and iOS) with Safari.",
      "Keyboard-only navigation.",
      "Browser zoom at up to 200% without loss of content or functionality.",
    ],
  },
  {
    title: "Technical approach",
    body: `This website is built using React 18, TypeScript, and Tailwind CSS with a strong emphasis on semantic markup. We rely on the following technologies to support accessibility:`,
    list: [
      "HTML5 semantic elements (nav, main, section, article, aside, header, footer).",
      "WAI-ARIA where native HTML semantics are insufficient.",
      "CSS that does not override browser default focus styles without providing visible alternatives.",
      "Progressive enhancement to ensure core content is accessible without JavaScript.",
    ],
  },
  {
    title: "Reporting an accessibility problem",
    body: `If you experience any difficulty using this website or encounter an accessibility barrier not mentioned above, please tell us. We treat accessibility feedback seriously and aim to respond within 5 working days.

Email: accessibility@bmkrs.com
Alternative: use our contact form at bmkrs.com/contact

Please describe the barrier you have encountered, the assistive technology or browser you are using, and what you were trying to do. This helps us reproduce and fix the issue.`,
  },
  {
    title: "Enforcement",
    body: `If you are not satisfied with our response, you can contact the Equality Advisory and Support Service (EASS) at equalityadvisoryservice.com, or the Equality and Human Rights Commission at equalityhumanrights.com.`,
  },
  {
    title: "Review",
    body: `We review this statement and the accessibility of the website at least annually. When we fix an accessibility issue or identify a new limitation, we update this page to reflect the current state accurately.`,
  },
];

export default function Accessibility() {
  return (
    <LegalDocumentLayout
      title="Accessibility Statement"
      titleTestId="text-accessibility-title"
      lastUpdated={LAST_UPDATED}
      sections={sections}
      companyInfo={[
        ["Legal name", "b makers ltd"],
        ["Company number", brand.companyNumber],
        ["Registered office", brand.registeredOffice],
        ["Accessibility contact", "accessibility@bmkrs.com"],
      ]}
    />
  );
}
