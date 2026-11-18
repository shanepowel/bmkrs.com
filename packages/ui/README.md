# @bmkrs/ui

Shared bmkrs design system. **All new UI primitives go here** — never inline one-offs in `web/` or `app.bmkrs.com`.

## Foundation

Interactive primitives are built on the **shadcn stack**:

- [Radix UI](https://www.radix-ui.com/) — accessible behaviour (Slot, Label, Select, Separator, Dialog, Navigation Menu)
- [class-variance-authority](https://cva.style/) — variant APIs
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) via `cn()`

Brand look stays ours: ink / paper / orange surfaces, Cabinet + Fragment type, StatusDot as the mark. Do not import a second visual system (Radix Themes, generic shadcn themes) into pages.

```ts
import { Surface, Kicker, H2, Button, tokens, cn } from "@bmkrs/ui";
import "@bmkrs/ui/tokens.css";
```

Tailwind: `presets: [require("@bmkrs/ui/tailwind")]`

## Exports

| Export | Usage |
|--------|--------|
| `tokens` / `cn` | raw brand values + class merge |
| `Surface` | `<Surface theme="ink">…</Surface>` |
| `Kicker` / `H1` / `H2` / `Body` / `Rule` | typography + dividers |
| `Accent` / `EdgeQuote` / `FactCell` | headline highlight, story quote, belief grid |
| `Button` (+ Slot `asChild`) | primary / ghost / ink / orange |
| `Separator` | Radix divider, surface-coloured |
| `Field` / `TextArea` / `PillSelect` / `SelectField` / `SelectMenu` | forms (Label is Radix) |
| `StatusDot` / `Status` | brand mark as status |
| `StickyCTA` / `SiteHeader` / `MobileNav` / `SwipeRow` | chrome |
| patterns | `Hero`, `Marquee`, `StatGrid`, `WorkGrid`, `Footer`, … |

## Rules

- No hardcoded hex in apps. Use `tokens` or CSS variables from `tokens.css`.
- One orange block per page. Surfaces alternate ink → paper → ink; orange is the act moment.
- Missing primitive? Add it here on Radix/CVA first, export from `index.ts`, then consume.
- No icon libraries in product UI without explicit approval; prefer StatusDot, mono labels, rules.
