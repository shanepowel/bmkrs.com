# @bmkrs/ui

Shared bmkrs design system. **All new UI primitives go here** — never inline one-offs in `web/` or `app.bmkrs.com`.

```ts
import { Surface, Kicker, H2, Button, tokens } from "@bmkrs/ui";
import "@bmkrs/ui/tokens.css";
```

Tailwind: `presets: [require("@bmkrs/ui/tailwind")]`

## Exports

| Export | Usage |
|--------|--------|
| `tokens` | `tokens.color.orange` — the only source of raw brand values |
| `Surface` | `<Surface theme="ink">…</Surface>` — section shell + colour context |
| `Kicker` | `<Kicker theme="paper">eyebrow</Kicker>` |
| `H1`, `H2` | `<H2 theme="ink">headline</H2>` |
| `Body` | `<Body theme="paper" lead>paragraph</Body>` |
| `Rule` | `<Rule theme="ink" />` — horizontal divider |
| `Button` | `<Button href="/contact">start a project</Button>` |
| `GhostButton` | `<GhostButton href="/work">see work</GhostButton>` |
| `InkButton` | `<InkButton href="/motion">explore motion</InkButton>` — ink fill on orange surfaces |
| `StatusDot` | `<StatusDot variant="solid" />` or `variant="ring"` |
| `Status` | `<Status label="core" variant="solid" />` |
| `Label` | `<Label>field name</Label>` |
| `Field` | `<Field label="name" name="name" required />` |
| `TextArea` | `<TextArea label="message" name="message" rows={5} />` |
| `PillSelect` | `<PillSelect label="services" options={…} value={…} onChange={…} multiple />` |
| `SelectField` | `<SelectField label="budget"><option>…</option></SelectField>` |
| `SwipeRow` | `<SwipeRow ariaLabel="cards">…</SwipeRow>` |
| `MobileNav` | `<MobileNav items={nav} loginUrl={…} renderLogo={…} />` |
| `StickyCTA` | `<StickyCTA actions={[{ label, href, variant }]} />` |
| `SiteHeader` | `<SiteHeader items={nav} loginUrl={…} renderLogo={…} />` |

## Rules

- No hardcoded hex in apps. Use `tokens` or CSS variables from `tokens.css`.
- One orange block per page. Surfaces alternate ink → paper → ink; orange is the act moment.
- Missing primitive? Add it here first, export from `index.ts`, then consume.
