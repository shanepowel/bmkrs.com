import type { InsightItem } from './types';
import { sanityFetch } from '../sanity/client';
import {
  INSIGHTS_QUERY,
  INSIGHT_BY_SLUG_QUERY,
  type SanityInsight,
} from '../sanity/queries';
import { getBundledInsights } from './bundled-insights';

function mapInsight(doc: SanityInsight): InsightItem {
  const date = doc.date || doc._createdAt;
  return {
    id: doc._id,
    type: 'insight',
    title: doc.title,
    slug: doc.slug ?? doc._id,
    content: {
      type: doc.category,
      description: doc.description,
      body: doc.body,
      image: doc.image || doc.imageUrl,
      date,
      readTime: doc.readTime,
      author: doc.author,
      keyTakeaways: doc.keyTakeaways,
      sources: doc.sources,
    },
    status: 'published',
    modifiedBy: 'sanity',
    version: 1,
    lastModified: doc._updatedAt ? new Date(doc._updatedAt) : new Date(),
    createdAt: date ? new Date(date) : new Date(),
  };
}

/**
 * Insights for listing and detail pages. Prefers Sanity; falls back to bundled
 * TypeScript content when Sanity is not configured or empty.
 */
export async function getInsights(): Promise<InsightItem[]> {
  const docs = await sanityFetch<SanityInsight[]>(INSIGHTS_QUERY);
  if (docs && docs.length > 0) {
    return docs.filter((d) => d.slug).map(mapInsight);
  }
  return getBundledInsights();
}

export async function getInsightBySlug(slug: string): Promise<InsightItem | null> {
  const doc = await sanityFetch<SanityInsight | null>(INSIGHT_BY_SLUG_QUERY, { slug });
  if (doc && doc.slug) {
    return mapInsight(doc);
  }
  return getBundledInsights().find((item) => item.slug === slug) ?? null;
}
