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

## Sanity Studio build deps

If the build fails with `Can't resolve 'react-is'` or `@sanity/schema`, ensure `web/package.json` lists them as direct dependencies (required for `npm ci` on Vercel).

## Environment variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID` = `xwgymvao`
- `NEXT_PUBLIC_SANITY_DATASET` = `production`
- `NEXT_PUBLIC_SITE_URL` = `https://bmkrs.com`
