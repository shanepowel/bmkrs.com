# Agent guide — bmkrs.com

The BMKRS design/growth studio marketing site (`www.bmkrs.com`). The active app is the Next.js 16 + Sanity project in [`web/`](web/) — it is **not** an npm-workspaces monorepo; the root `package.json` just proxies into `web/` via `--prefix web`. Everything under `archive/` is legacy and not part of the active product.

## Stack

- **App:** `web/` — Next.js 16, React 19, TypeScript, Tailwind CSS 3, styled-components
- **CMS:** Sanity v4 (embedded Studio at `/studio`). The site has full in-code fallback content (`web/src/lib/content/fallback.ts`), so it renders with no Sanity env configured.
- **Deploy:** Vercel, root directory `web`

## Commands

```bash
npm run install:web   # cd web && npm ci --legacy-peer-deps
npm run dev           # http://localhost:3000  (Studio: /studio)
npm run build         # reinstalls then builds web
npm run lint
```

## Cursor Cloud specific instructions

Dependencies are refreshed automatically on VM start via `npm ci --legacy-peer-deps` inside `web/`. Notes:

- **Install requires `--legacy-peer-deps`** (peer-dependency conflicts otherwise). Plain `npm install` at the repo root will not install the app; work happens in `web/`.
- **No database / external services needed.** Content comes from Sanity cloud when configured, otherwise the in-code fallback — the site runs fully offline out of the box.
- **Dev/build run prebuild scripts.** `npm run dev` first runs `scripts/sync-assets.js` + `scripts/compile-journal.js`; `prebuild` also runs icon/image generation. The production build uses webpack (`next build --webpack`), not Turbopack.
- **Lint.** `npm run lint` (ESLint) works but currently reports pre-existing errors (`react-hooks/set-state-in-effect` in `web/src/components/layout/SiteHeader.tsx`) and unused-var warnings — these are existing code issues, not environment problems.
- Dev server runs on port **3000** (the sibling `bmkrs-bench` app uses 3001, so both can run together).
