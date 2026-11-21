export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01';

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';

// True once a real Sanity project id is supplied. When false the app falls
// back to the bundled TypeScript/seed content so local dev works without Sanity.
export const isSanityConfigured = Boolean(projectId);
