export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-06-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "xwgymvao";

export const sanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "placeholder"
);
