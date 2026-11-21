export interface InsightContent {
  type?: string;
  description?: string;
  body?: string;
  image?: string;
  date?: string;
  readTime?: string;
  author?: string;
  keyTakeaways?: string[];
  sources?: string;
  tags?: string[];
  relatedServices?: Array<{ label: string; href: string }>;
  faq?: Array<{ question: string; answer: string }>;
}

export type BundledInsightSeed = {
  id: string;
  type: 'insight';
  title: string;
  slug: string;
  status: 'published' | 'draft' | 'archived';
  modifiedBy: string;
  version: number;
  content: InsightContent;
};

/** Insight document shape used by the insights UI and API routes. */
export interface InsightItem {
  id: string;
  type: 'insight';
  title: string;
  slug: string;
  content: InsightContent;
  status: 'published' | 'draft' | 'archived';
  modifiedBy: string;
  version: number;
  lastModified: Date;
  createdAt: Date;
}
