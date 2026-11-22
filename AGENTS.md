# Agent guide: bmkrs.com

The bmkrs studio site (`www.bmkrs.com`): brands, digital products and practical AI. The active app is the Next.js 15 project in [`web/`](web/). The root `package.json` proxies into `web/` with `--prefix web`. `archive/` is legacy and not part of the product.

## Stack

- **App:** `web/`: Next.js 15 (App Router), React, TypeScript, Tailwind CSS 3, shadcn/ui (Radix)
- **CMS:** Sanity v3 (embedded Studio at `/studio`), project `laqqhrou`, dataset `production`. Pages fall back to bundled copy in `web/client/src/content/` when Sanity isn't configured.
- **Deploy:** Vercel project `bmkrs.com`, root directory `web/`, configured by `web/vercel.json` (installs and builds inside `web/` with its own lockfile).

## Commands

```bash
npm run install:web
npm run dev        # http://localhost:3000
npm run build
npm run seed:sanity
```

## Conventions

- UK spelling. No em dashes in copy. Plain, concrete language.
- Navigation is defined once in `web/client/src/content/nav.ts`; never hard-code menu links elsewhere.
- Use the shadcn/ui primitives in `web/client/src/components/ui/` and the bmkrs wrappers in `web/client/src/components/bmk/ui.tsx` (SpecTag, BmkCard, BmkFaq) rather than one-off markup.
- Content pages are data: add or change them in `web/client/src/content/bmk-pages-*.ts` and Sanity, not in JSX.
- Client work is anonymised (descriptions, not names).
