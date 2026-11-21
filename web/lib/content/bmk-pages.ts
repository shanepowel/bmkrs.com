import type { Metadata } from 'next';
import { bmkPages } from '../../client/src/content/bmk-pages';
import type { BmkBlock, BmkPageContent } from '../../client/src/content/bmk-types';
import { sanityFetch } from '../sanity/client';
import { BMK_PAGE_QUERY } from '../sanity/queries';

const SITE = 'https://bmkrs.com';

/** Block type in the site template ↔ Sanity object type name. */
export const blockTypeMap: Record<BmkBlock['type'], string> = {
  grid: 'bmkGrid',
  steps: 'bmkSteps',
  split: 'bmkSplit',
  ledger: 'bmkLedger',
  callout: 'bmkCallout',
  statement: 'bmkStatement',
  faq: 'bmkFaq',
  links: 'bmkLinks',
};
const reverseBlockTypeMap = Object.fromEntries(
  Object.entries(blockTypeMap).map(([k, v]) => [v, k]),
) as Record<string, BmkBlock['type']>;

/** Item `_type` names used inside each block's `items` array in Sanity. */
const itemTypeMap: Partial<Record<BmkBlock['type'], string>> = {
  grid: 'gridItem',
  steps: 'step',
  ledger: 'ledgerRow',
  faq: 'faqItem',
  links: 'linkItem',
};

type Loose = Record<string, unknown>;

/** Recursively drop Sanity system keys and nulls so the template gets clean data. */
function clean<T>(value: T): T {
  if (Array.isArray(value)) return value.map(clean) as T;
  if (value && typeof value === 'object') {
    const out: Loose = {};
    for (const [k, v] of Object.entries(value as Loose)) {
      if (k.startsWith('_') || v === null || v === undefined) continue;
      out[k] = clean(v);
    }
    return out as T;
  }
  return value;
}

/** Sanity document → page content used by the template. */
export function fromSanity(doc: Loose): BmkPageContent | null {
  if (!doc?.hero) return null;
  const blocks = ((doc.blocks as Loose[]) ?? [])
    .map((b) => {
      const type = reverseBlockTypeMap[b._type as string];
      if (!type) return null;
      return { ...clean(b), type } as BmkBlock;
    })
    .filter(Boolean) as BmkBlock[];
  return {
    id: doc.pageId as string,
    path: doc.path as string,
    metaTitle: (doc.metaTitle as string) ?? '',
    metaDescription: (doc.metaDescription as string) ?? '',
    hero: clean(doc.hero) as BmkPageContent['hero'],
    blocks,
    cta: doc.cta ? (clean(doc.cta) as BmkPageContent['cta']) : undefined,
  };
}

/** Page content → Sanity document, used by the seed script. */
export function toSanityDoc(page: BmkPageContent) {
  const key = (prefix: string, i: number) => `${prefix}${i}`;
  return {
    _id: `bmkPage-${page.id}`,
    _type: 'bmkPage',
    pageId: page.id,
    path: page.path,
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    hero: {
      ...page.hero,
      facts: page.hero.facts?.map((f, i) => ({ _key: key('f', i), _type: 'fact', ...f })),
    },
    blocks: page.blocks.map((b, i) => {
      const { type, ...rest } = b as BmkBlock & Loose;
      const itemType = itemTypeMap[type];
      const r = rest as Loose;
      return {
        _key: key('b', i),
        _type: blockTypeMap[type],
        ...r,
        ...(Array.isArray(r.items) && itemType
          ? { items: (r.items as Loose[]).map((it, j) => ({ _key: key('i', j), _type: itemType, ...it })) }
          : {}),
      };
    }),
    cta: page.cta,
  };
}

/** Prefer Sanity; fall back to the bundled copy when Sanity is not set up or the page is missing. */
export async function getBmkPage(id: string): Promise<BmkPageContent | null> {
  const doc = await sanityFetch<Loose | null>(BMK_PAGE_QUERY, { id });
  const fromCms = doc ? fromSanity(doc) : null;
  return fromCms ?? bmkPages[id] ?? null;
}

export async function getBmkMetadata(id: string): Promise<Metadata> {
  const page = await getBmkPage(id);
  if (!page) return {};
  const url = `${SITE}${page.path}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: { title: page.metaTitle, description: page.metaDescription, url, siteName: 'bmkrs', type: 'website' },
    twitter: { card: 'summary_large_image', title: page.metaTitle, description: page.metaDescription },
    alternates: { canonical: url },
  };
}
