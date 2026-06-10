export type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type LegalDocument = {
  title: string;
  intro?: string;
  sections: LegalSection[];
  lastUpdated: string;
};

const PLACEHOLDER_DATE = "[DATE]";
const PLACEHOLDER_COMPANY = "[COMPANY NUMBER]";
const PLACEHOLDER_ADDRESS = "[ADDRESS]";

export function companyLine(companyNumber?: string, registeredAddress?: string): string {
  const name = "b makers ltd";
  const parts = [`${name} · registered in england and wales`];
  if (companyNumber) {
    parts.push(`company no. ${companyNumber}`);
  } else {
    parts.push(`company no. ${PLACEHOLDER_COMPANY}`);
  }
  if (registeredAddress) {
    parts.push(`registered office: ${registeredAddress}`);
  } else {
    parts.push(`registered office: ${PLACEHOLDER_ADDRESS}`);
  }
  return parts.join(" · ");
}

export function privacyNotice(
  companyNumber?: string,
  registeredAddress?: string,
): LegalDocument {
  const companyRef = companyNumber
    ? `company no. ${companyNumber}`
    : `company no. ${PLACEHOLDER_COMPANY}`;
  const officeRef = registeredAddress ?? PLACEHOLDER_ADDRESS;

  return {
    title: "privacy notice",
    intro:
      "we keep this short because we keep the data short. b makers ltd (\"bmkrs\", \"we\") is the data controller for personal data collected through bmkrs.com.",
    sections: [
      {
        title: "who we are",
        paragraphs: [
          `b makers ltd, registered in england and wales, ${companyRef}, registered office ${officeRef}. questions about your data: hello@bmkrs.com.`,
        ],
      },
      {
        title: "what we collect, and why",
        items: [
          "the contact form: your name, email, company, what you tell us about your project, and an optional budget range. we use it to reply to you and, if we work together, to run the engagement. legal basis: legitimate interests (responding to your enquiry) and, later, contract.",
          "the newsletter: your email address, because you asked for the emails. legal basis: consent. every email has an unsubscribe link and it works first time.",
          "analytics: if you consent via the cookie banner, anonymous-as-possible usage data (pages visited, rough location, device type) so we can see what is working. legal basis: consent. say no and the site works identically.",
          "email: if you email us, we have the email. we keep correspondence for as long as the relationship is live plus 6 years (limitation periods), then delete it.",
        ],
      },
      {
        title: "what we do not do",
        paragraphs: [
          "we do not sell data, share it with advertisers, or buy lists. we never will; it would be a strange look for a company that writes privacy notices like this one.",
        ],
      },
      {
        title: "who else touches it",
        paragraphs: [
          "a short list of processors who host things for us: vercel (site hosting), sanity (content), [email provider] (newsletter), google workspace (mail). each processes data on our instructions under their own gdpr terms. some may process data outside the uk under recognised safeguards (standard contractual clauses or adequacy).",
        ],
      },
      {
        title: "how long we keep it",
        items: [
          "enquiries that go nowhere: 12 months, then deleted.",
          "client records: the engagement plus 6 years.",
          "newsletter: until you unsubscribe.",
        ],
      },
      {
        title: "your rights",
        paragraphs: [
          "you can ask us for a copy of your data, ask us to correct it, delete it, restrict or object to processing, or take it elsewhere. email hello@bmkrs.com and we will sort it within a month, usually much faster.",
        ],
      },
      {
        title: "complaints",
        paragraphs: [
          "if you think we have handled your data badly, tell us first and we will fix it: hello@bmkrs.com. you also have the right to complain to the information commissioner's office at ico.org.uk.",
        ],
      },
    ],
    lastUpdated: PLACEHOLDER_DATE,
  };
}

export const cookiesNotice: LegalDocument = {
  title: "cookies notice",
  intro:
    "we keep cookies and similar storage to a minimum. this page lists what runs on bmkrs.com and why.",
  sections: [
    {
      title: "strictly necessary",
      items: [
        "preference storage: we remember your analytics choice in your browser (local storage, key bmkrs-consent) so we do not ask every visit. kept 12 months, then we ask again. no consent needed for this; it only stores your yes or no.",
      ],
    },
    {
      title: "analytics (only if you accept)",
      paragraphs: [
        "if you click \"fine by me\" on the cookie banner, we may load analytics to see how pages perform. nothing sold, nothing shared with advertisers. if we use vercel analytics in cookieless mode, it may run without storing cookies; we still ask because some analytics tools do use cookies.",
      ],
    },
    {
      title: "your choice",
      paragraphs: [
        "say no and the site works the same. change your mind any time via \"manage cookies\" in the footer.",
      ],
    },
  ],
  lastUpdated: PLACEHOLDER_DATE,
};

export const termsSkeleton: LegalDocument = {
  title: "terms of business (skeleton)",
  intro:
    "plain-english structure; each section needs the studio's real positions filled in and the whole reviewed by a solicitor. do not publish or attach to proposals until reviewed.",
  sections: [
    {
      title: "1. who the agreement is between",
      paragraphs: [
        `b makers ltd (company no. ${PLACEHOLDER_COMPANY}, registered office ${PLACEHOLDER_ADDRESS}) and the client named in the proposal. the proposal + these terms = the contract.`,
      ],
    },
    {
      title: "2. the work",
      paragraphs: [
        "scope is what the proposal says, no more. changes are welcome and quoted before they happen; nothing out of scope starts on a nod.",
      ],
    },
    {
      title: "3. money",
      items: [
        "fixed-scope packages: 50% on signing, 50% on delivery. motion: monthly in advance.",
        "invoices due within 14 days. late payment attracts interest at 8% over base, per the late payment of commercial debts act, and pauses the work.",
        "prices exclude vat [if registered] and third-party costs (fonts, stock, ad spend, print), which are quoted and approved before purchase.",
      ],
    },
    {
      title: "4. what we need from you",
      paragraphs: [
        "timely feedback, content you have the rights to, and one decision-maker. delays on the client side move the timeline; they do not move the invoice.",
      ],
    },
    {
      title: "5. intellectual property",
      items: [
        "on full payment, the client owns the final deliverables.",
        "we keep: our pre-existing tools and methods, rejected concepts, and the right to show the work in our portfolio and case studies [unless confidentiality is agreed in the proposal].",
        "third-party licences (fonts, stock, plugins) belong to their licensors; we set them up in the client's name where possible.",
      ],
    },
    {
      title: "6. revisions",
      paragraphs: [
        "each package includes [N] rounds of revisions at the stated checkpoints. more rounds are fine; they are quoted as changes.",
      ],
    },
    {
      title: "7. confidentiality",
      paragraphs: [
        "both sides keep each other's non-public information private, during and after. survives the end of the engagement.",
      ],
    },
    {
      title: "8. liability",
      items: [
        "we carry professional indemnity insurance of [£X].",
        "liability capped at the fees paid under the engagement. neither side is liable for indirect or consequential loss.",
        "nothing excludes liability that cannot legally be excluded (fraud, death, personal injury by negligence).",
      ],
    },
    {
      title: "9. ending it",
      items: [
        "fixed-scope: either side may terminate on written notice; work done to date is invoiced at day rate / proportion.",
        "motion: 30 days notice either way, no lock-in, as the website says.",
      ],
    },
    {
      title: "10. the boring but necessary",
      paragraphs: [
        "governed by the laws of england and wales; courts of england and wales have jurisdiction. these terms beat any conflicting client purchase terms unless agreed in writing. notices by email count.",
      ],
    },
  ],
  lastUpdated: PLACEHOLDER_DATE,
};
