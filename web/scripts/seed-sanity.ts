/**
 * Seeds Sanity with the current bmkrs page content and insight articles,
 * so the CMS starts with exactly what the site shows today.
 *
 * Requirements (set in .env.local, or inline, before running):
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET            (defaults to "production")
 *   SANITY_API_WRITE_TOKEN                (Editor/Write token)
 *
 * Run with:  npm run seed:sanity
 * Safe to re-run: documents are created or replaced by fixed IDs.
 * Add --remove-legacy to also delete old Amplified engagement/case-study documents.
 */
import { createClient } from '@sanity/client';
import { bmkPages } from '../client/src/content/bmk-pages';
import { toSanityDoc } from '../lib/content/bmk-pages';
import { getBundledInsights } from '../lib/content/bundled-insights';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01';

if (!projectId) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Aborting.');
  process.exit(1);
}
if (!token) {
  console.error('Missing SANITY_API_WRITE_TOKEN (needs Editor/Write access). Aborting.');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

async function seedPages() {
  const pages = Object.values(bmkPages);
  console.log(`Seeding ${pages.length} pages...`);
  for (const page of pages) {
    await client.createOrReplace(toSanityDoc(page));
    console.log(`  - ${page.path}`);
  }
}

async function seedInsights() {
  const insights = getBundledInsights();
  console.log(`Seeding ${insights.length} insights...`);
  for (const a of insights) {
    await client.createOrReplace({
      _id: `insight-${a.slug}`,
      _type: 'insight',
      title: a.title,
      slug: { _type: 'slug', current: a.slug },
      description: a.content.description,
      date: a.content.date,
      readTime: a.content.readTime,
      author: a.content.author,
      keyTakeaways: a.content.keyTakeaways,
      body: a.content.body,
      sources: a.content.sources,
    });
    console.log(`  - ${a.title}`);
  }
}

async function removeLegacy() {
  // Old Amplified document types that no longer exist in the schema.
  const ids = await client.fetch<string[]>(
    `*[_type in ["engagement", "caseStudy", "siteSettings"]]._id`,
  );
  if (ids.length) {
    console.log(`Removing ${ids.length} legacy documents...`);
    const tx = client.transaction();
    ids.forEach((id) => tx.delete(id));
    await tx.commit();
  }
}

(async () => {
  await seedPages();
  await seedInsights();
  if (process.argv.includes('--remove-legacy')) await removeLegacy();
  console.log('Done.');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
