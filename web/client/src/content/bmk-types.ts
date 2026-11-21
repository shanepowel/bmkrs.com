/** Content model for bmkrs inner pages. Plain data so server routes can read it for metadata. */

export type BmkImageKey =
  | "vr"
  | "megaphone"
  | "speakers"
  | "headphones"
  | "whatNow"
  | "mesh"
  | "portrait"
  | "laptop"
  | "workshop";

export interface BmkGridItem {
  code?: string;
  title: string;
  body: string;
  tags?: string[];
  href?: string;
  external?: boolean;
}

export type BmkBlock =
  | {
      type: "grid";
      code: string;
      eyebrow: string;
      title: string;
      lead?: string;
      cols?: 2 | 3;
      items: BmkGridItem[];
    }
  | {
      type: "steps";
      code: string;
      eyebrow: string;
      title: string;
      lead?: string;
      items: { title: string; body: string }[];
    }
  | {
      type: "split";
      code: string;
      eyebrow: string;
      title: string;
      paragraphs: string[];
      image?: BmkImageKey;
      figLabel?: string;
      listTitle?: string;
      list?: string[];
      reverse?: boolean;
    }
  | {
      type: "ledger";
      code: string;
      eyebrow: string;
      title: string;
      lead?: string;
      footnote?: string;
      items: { title: string; body: string; meta?: string }[];
    }
  | {
      type: "callout";
      eyebrow: string;
      title: string;
      body: string;
      href: string;
      linkLabel: string;
      external?: boolean;
    }
  | {
      type: "statement";
      text: string;
      accent?: string;
    }
  | {
      type: "faq";
      code: string;
      title: string;
      items: { q: string; a: string }[];
    }
  | {
      type: "links";
      code: string;
      eyebrow: string;
      title: string;
      items: { label: string; href: string; desc: string; external?: boolean }[];
    };

export interface BmkPageContent {
  id: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    code: string;
    eyebrow: string;
    title: string;
    accent?: string;
    lead: string;
    image?: BmkImageKey;
    figLabel?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string; external?: boolean };
    facts?: { label: string; value: string }[];
  };
  blocks: BmkBlock[];
  cta?: { title: string; accent?: string; lead: string; label?: string; serviceType?: string };
}
