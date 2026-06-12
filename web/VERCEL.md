# Vercel setup (BMKRS Next.js)

## Correct settings

Use **one** of these setups (not both).

### A — Root Directory = `web` (recommended)

| Setting | Value |
|---------|--------|
| **Root Directory** | `web` |
| **Framework** | Next.js (auto-detected) |
| **Install Command** | *(empty)* or `npm ci --legacy-peer-deps` |
| **Build Command** | *(empty)* or `npm run build` |

Vercel reads `web/package.json` and `web/vercel.json`. Ignore the repo-root `vercel.json` for this project.

### B — Root Directory blank (monorepo at repo root)

Root `package.json` lists `next`, `react`, and `react-dom`, and the install command runs `npm install` at the repo root before `install:web`, so Vercel framework detection finds `next` in `node_modules`. Keep versions aligned with `web/package.json`.

| Setting | Value |
|---------|--------|
| **Root Directory** | *(empty)* |
| **Framework** | Next.js (from root `vercel.json` `"framework": "nextjs"`) |
| **Install / Build** | From root `vercel.json`: `npm install --legacy-peer-deps && npm run install:web`, `npm run build --prefix web` |
| **Output** | `web/.next` |

The install step runs `npm install` at the repo root first (so `next` lands in root `node_modules` for framework detection), then `npm run install:web` for the app under `web/`.

Root `vercel.json` **must** include `"framework": "nextjs"` or Vercel looks for `next` in the root `package.json` and fails.

Do **not** set Root Directory to `bmkrs.com` — that folder has no `package.json`.

## Error: `.../bmkrs.com/web/package.json` ENOENT

You have **Root Directory = `bmkrs.com`** and an install command with **`--prefix web`**. npm looks for `bmkrs.com/web/package.json`, which does not exist. The app is at **`web/package.json`** (repo root → `web/`).

**Fix:** Project → Settings → General → set **Root Directory** to `web`.  
Then Project → Settings → Build → **clear** any custom Install Command that contains `--prefix web`. Redeploy.

## Error: `Can't resolve 'react-is'` (Sanity Studio)

Usually means the **Install Command never ran in `web/`** before `npm run build --prefix web`.

**Option A (recommended):** Root Directory = **`web`**, Install = `npm ci --legacy-peer-deps`, Build = `npm run build`.

**Option B (repo root):** Root Directory blank; root `vercel.json` with `"framework": "nextjs"`, Install = `npm run install:web`, Build = `npm run build --prefix web`, Output = `web/.next`.

`react-is` is a direct dependency in `web/package.json`; it must be present under `web/node_modules` at build time.

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

## Sanity Studio will not connect

- **Project ID** must be `xwgymvao` (not the duplicate `laqqhrou` project). Match `web/.env.local` and Vercel env vars to `web/.env.example`.
- **CORS** (sanity.io/manage → API): allow `http://localhost:3000`, `https://bmkrs.com`, and `https://www.bmkrs.com` with credentials. From `web/`: `npx sanity cors add <origin> --credentials --project xwgymvao`.
- **Access:** your Sanity login must be invited to project **bmkrs** (`xwgymvao`).

## Environment variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID` = `xwgymvao`
- `NEXT_PUBLIC_SANITY_DATASET` = `production`
- `NEXT_PUBLIC_SITE_URL` = `https://www.bmkrs.com` (must match the canonical www host; non-www redirects here)
- `NEXT_PUBLIC_NETWORK_PORTAL_URL` = `https://app.bmkrs.com`
- `NEXT_PUBLIC_NETWORK_HIRE_URL` = `https://app.bmkrs.com/hire`
- `NEXT_PUBLIC_NETWORK_JOIN_URL` = `https://app.bmkrs.com/join`
- `NEXT_PUBLIC_MEMBER_LOGIN_URL` = `https://app.bmkrs.com/login`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-4GXGNXYMVL` (optional; defaults to this id; loads only after cookie consent)
