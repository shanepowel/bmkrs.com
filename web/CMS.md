# BMKRS CMS (Sanity)

The marketing site in `web/` loads content from **Sanity** when configured, with full **fallback content** in code so the site works before CMS setup.

## Quick start

1. Project ID: **xwgymvao** · dataset: **production** (see `web/.env.local`). If Studio shows **default** or will not connect, check `.env.local` is not pointing at the old **laqqhrou** project.
2. Log in locally: `cd web && npx sanity login`
3. Link / init (only if studio is not already set up):
   ```bash
   npm create sanity@latest -- --project xwgymvao --dataset production --template clean
   ```
   **Note:** This repo already has schemas in `web/sanity/schemaTypes/`. Prefer keeping those and only running the command in a temp folder if you need a fresh Sanity CLI link — do not overwrite `sanity.config.ts` unless you intend to.
3. Run the site: `cd web && npm run dev`
4. Open the studio: [http://localhost:3000/studio](http://localhost:3000/studio)
5. Create documents matching the schemas in `web/sanity/schemaTypes/`

## Content models

| Type | Purpose |
|------|---------|
| `siteSettings` | Global nav, email, social links, tagline |
| `navigationItem` | Menu links (referenced from site settings) |
| `page` | Per-route copy (`home`, `services`, `work`, `motion`, `contact`, `about`) |
| `service` | Discover / Motion capability blocks |
| `caseStudy` | Portfolio case studies (brief, challenge, what we did, results, testimonial ref, SEO) |
| `testimonial` | Client quotes (reference from case studies and home) |
| `teamMember` | About page team grid |
| `project` | Legacy portfolio type (fallback if no `caseStudy` documents) |
| `product` | Start / make / grow offerings (incl. motion tiers on grow) |
| `post` | Journal posts at `/journal/[slug]` (portable text body) |
| `aboutPage` | Singleton: ethos, beliefs, story (About page) |
| `journalArticle` | Legacy journal type (markdown); site prefers `post` when present |
| `homePillar` | Home “Innovate / Design / Grow / Learn” blocks |

## Slugs

**Pages** — use slug: `home`, `services`, `work`, `motion`, `contact`, `about` (`discover` aliases to `services`)

**About page sections** (optional `sections[]` keys): `since`, `where`, `what`, `intro`, `body2`–`body4`, `closing`, `whoWeAre1`–`whoWeAre2`, `whatWeLove1`–`whatWeLove2`, `beliefsIntro`, `longGameLead`–`longGame2`, `creed1`–`creed5` (use `|word|` in creed copy for accent highlights). Keep `where` as `london + worldwide`, not street addresses.

**Case studies** — slugs: `copa`, `fdb`, `carter`, `wanderlust`, `smoothies`, `flipster`. Narrative fields: `brief`, `challenge`, `whatWeDid`, `resultsNarrative`. Leave `results[]` and testimonial quotes empty until the founder adds real figures (placeholders with `{{` are hidden on the site).

**Seed import** (with Sanity CLI logged in). Run commands from **`web/`** — not the repo root unless you `cd web` first.

```bash
cd web
chmod +x scripts/import-seeds.sh
./scripts/import-seeds.sh production
# or: npm run import:seeds -- production
```

**Wrong path error** (`web/web/sanity/seed/... does not exist`): you used `web/sanity/seed/products.ndjson` while the shell was already in `web/`. From `web/`, use `sanity/seed/products.ndjson` (no leading `web/`). Example:

```bash
cd web
npx sanity dataset import sanity/seed/products.ndjson production --replace
# or: npm run import:products -- production
```

**Document already exists** (`aboutPage` etc.): add `--replace` to overwrite seed docs with the same `_id`, or use `--missing` to skip existing docs. The full seed script always passes `--replace`.

Order matters: products reference case studies; disciplines reference products (see `scripts/import-seeds.sh`).

After import, link each **make** case study to its product via `productType`, and upload post cover images plus team photos (same pattern as BMK-3).

**Webhook** — see `web/sanity/webhook-config.md`. Point Sanity publish webhooks at `POST /api/revalidate` with header `Authorization: Bearer $SANITY_REVALIDATE_SECRET`. Set `SANITY_REVALIDATE_SECRET` in Vercel.

**Regenerate seeds** — after editing `content/journal/*.md` or fallback copy:

```bash
cd web
npm run generate:seeds    # writes sanity/seed/*.ndjson from markdown + copy
npm run import:seeds      # imports to production (or pass dataset name)
```

**Journal (`post`)** — 19 articles generated from `content/journal/*.md` into `posts.ndjson`. Featured: `better-told-brand-wins`. Publish dates follow the staggered schedule in `scripts/compile-journal.js`. Re-run `generate:seeds` then `import:seeds` after copy changes.

**Products** — nine documents in `products.ndjson` (start / make / grow) with `priceFrom` anchors. Grow-tier motion products power `/motion`.

**Home hero reel** — in Site settings: upload `heroReel` (video file) or set `heroReelUrl`, plus optional `heroPoster`. When either is set, the homepage uses the full-bleed reel hero (respects `prefers-reduced-motion`). Until then, the collage + rotating headline layout is shown.

Legacy URLs (`/work/project1`, etc.) redirect to the new slugs.

## Vercel

Pick **one** layout (do not mix):

| Root Directory | Install command |
|----------------|-----------------|
| **`web`** (recommended) | Default, or `npm ci --legacy-peer-deps` from `web/vercel.json` only |
| **empty** (repo root) | Uses repo root `vercel.json`: `cd web && npm ci --legacy-peer-deps` |

**ENOENT `.../bmkrs.com/web/package.json`:** Root Directory is wrongly set to **`bmkrs.com`** or **`archive/ftp-stub`** (not the app). Set it to **`web`**. See `web/VERCEL.md`.

**Install exit 254:** Root Directory is `web` but Install Command still uses `--prefix web` (npm looks for `web/web/package.json`). Clear the custom Install Command in Build settings.

Add env vars in Project → Settings → Environment Variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SITE_URL`

Connect domain **bmkrs.com** in Project → Domains. Optional: `CONTACT_WEBHOOK_URL` for form submissions.

## Without Sanity

Leave `NEXT_PUBLIC_SANITY_PROJECT_ID` unset. The site uses `src/lib/content/fallback.ts` for all copy and projects.
