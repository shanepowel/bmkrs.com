# Frontend component foundation

## Standard going forward

The active marketing site uses the conventional shadcn/ui source-owned component layout in `web/src/components/ui`. `web/components.json` is the shadcn CLI configuration; new primitives should be added with the official CLI and styled through Tailwind utilities and the CSS variables in `web/src/app/globals.css`. Shared class composition lives in `web/src/lib/utils.ts`. Radix primitives, class-variance-authority, and lucide-react are already dependencies, so this foundation does not add a second component runtime.

The brand layer should remain small. Use the installed primitives for common controls and compose bmkrs-specific sections only when they express a real content or brand pattern. Keep the logo SVGs and the Cabinet Grotesk / Fragment Mono fonts as the brand source of truth.

## Compatibility pieces retained during migration

- `packages/ui` (`@bmkrs/ui`) remains in place because marketing routes, the embedded Sanity Studio, mobile navigation, contact selectors, and shared content patterns still import it. Removing it now would require rewriting every route and interaction at once. New generic controls should use `web/src/components/ui`; migrate existing consumers as they are touched and remove the package only after imports and styles are gone.
- `packages/ui/src/library.css` remains imported while active pages depend on its established hero, project, navigation, surface, motion, and conversion layouts. Those selectors are not duplicated in the new primitive components.
- `web/src/styles/components.css` remains for older case-study and service-page selectors. It overlaps in age and purpose with the newer library stylesheet, but its selectors are still in use. Consolidate it page-by-page after selector usage is checked.
- `styled-components` and the `react-is` webpack alias remain for the Sanity v4 / Next integration. The marketing source does not call styled-components directly; remove the compatibility only after validating Sanity Studio and production rendering without it.

## Tokens and styling

The app owns its Tailwind theme and shadcn CSS variables. The existing bmkrs palette, type scale, and spacing aliases are retained in `web/src/styles/tokens.css` for active brand compositions and are imported once by `globals.css`. `@bmkrs/ui/tailwind` is no longer a Tailwind preset dependency. Avoid adding another global CSS framework or token import.

## Verification after a migration step

Run `npm run lint`, `npx tsc --noEmit --project web/tsconfig.json`, and `npm run build` from the repository root. Check the homepage, contact form, work and journal routes, `/studio`, mobile navigation, and a narrow viewport before deleting compatibility code.
