import { createClient, type QueryParams } from 'next-sanity';
import { apiVersion, dataset, isSanityConfigured, projectId } from './env';

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: 'published',
      token: process.env.SANITY_API_READ_TOKEN || undefined,
    })
  : null;

/**
 * Runs a GROQ query against Sanity. Returns `null` when Sanity is not
 * configured so callers can fall back to bundled content.
 */
export async function sanityFetch<T>(
  query: string,
  params: QueryParams = {},
): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.error('Sanity fetch failed:', error);
    return null;
  }
}
