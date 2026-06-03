# Vercel setup (BMKRS Next.js)

## Correct settings

| Setting | Value |
|---------|--------|
| **Root Directory** | `web` |
| **Framework** | Next.js |
| **Install Command** | *(leave empty)* or `npm ci --legacy-peer-deps` |
| **Build Command** | *(leave empty)* or `npm run build` |

Do **not** set Root Directory to `bmkrs.com` — that folder has no `package.json`.

## Error: `.../bmkrs.com/web/package.json` ENOENT

You have **Root Directory = `bmkrs.com`** and an install command with **`--prefix web`**. npm looks for `bmkrs.com/web/package.json`, which does not exist. The app is at **`web/package.json`** (repo root → `web/`).

**Fix:** Project → Settings → General → set **Root Directory** to `web`.  
Then Project → Settings → Build → **clear** any custom Install Command that contains `--prefix web`. Redeploy.

## Mobile

- Layout uses `100dvh` / `100svh`, safe-area insets (notch/home indicator), and `viewport-fit: cover`.
- Nav: full-screen overlay on small screens, body scroll lock, 44px touch targets, 16px form inputs (no iOS zoom).
- Test in Chrome DevTools device mode and on a real phone after deploy.

## Lighthouse / performance

- `npm run prebuild` syncs assets and generates `public/**/optimized/*.jpg` (macOS `sips`) for lighter LCP images.
- Homepage hero uses optimized JPEGs; Next Image serves AVIF/WebP on Vercel automatically.
- After deploy, run [PageSpeed Insights](https://pagespeed.web.dev/) on `https://bmkrs.com`.

## Images on production

Marketing images are served from `web/public/` (see `web/scripts/required-assets.json`). They are copied from `archive/legacy-public-site/public_html` via `npm run prebuild` and **must be committed** in `web/public` — `.vercelignore` excludes most of `archive/`, so a deploy cannot rely on archive-only sync.

After changing image paths in content, run `node web/scripts/sync-assets.js` and commit the updated files under `web/public`.

## Sanity Studio build deps

If the build fails with `Can't resolve 'react-is'` or `@sanity/schema`, ensure `web/package.json` lists them as direct dependencies (required for `npm ci` on Vercel).

## Environment variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID` = `xwgymvao`
- `NEXT_PUBLIC_SANITY_DATASET` = `production`
- `NEXT_PUBLIC_SITE_URL` = `https://bmkrs.com`
