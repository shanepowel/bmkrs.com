# BMKRS.com

Design and growth studio site — **Next.js 15** app in [`web/`](web/).

## Quick start

```bash
cd web
npm ci --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). CMS studio: [http://localhost:3000/studio](http://localhost:3000/studio).

## Deploy (Vercel)

- **Root Directory:** `web`
- **Env:** see [`web/VERCEL.md`](web/VERCEL.md) and [`web/CMS.md`](web/CMS.md)

## Repository layout

| Path | Purpose |
|------|---------|
| `web/` | Active Next.js + Sanity application |
| `archive/` | Legacy PHP/React site, other projects, old deployment docs |

Legacy marketing assets for local sync live under `archive/legacy-public-site/public_html/` (used by `web/scripts/sync-assets.js`).
