import type { Metadata } from "next";
import Link from "next/link";
import { BmkCard, BmkFaq, SpecTag } from "@/components/bmk/ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogExample } from "./dialog-example";

export const metadata: Metadata = {
  title: "Design system | bmkrs",
  description: "A working reference for the components and tokens on bmkrs.com.",
  robots: { index: false, follow: false },
};

const sections = [
  { id: "foundations", label: "Foundations" },
  { id: "components", label: "Components" },
  { id: "patterns", label: "Patterns" },
];

export default function DesignSystemPage() {
  return (
    <div className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <header className="border-b border-white/15 pb-10">
          <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">
            Design system
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            A working reference for the colours, controls and patterns used on bmkrs.com.
          </p>
          <nav aria-label="On this page" className="mt-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className="inline-flex min-h-10 items-center underline decoration-white/50 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <section aria-labelledby="foundations" className="mt-12">
          <h2 id="foundations" tabIndex={-1} className="scroll-mt-28 text-3xl font-bold">Foundations</h2>
          <p className="mt-2 max-w-2xl text-white/80">
            Archivo is used for headings and body copy. IBM Plex Mono is used for short labels and token names.
            Pair each surface token with its foreground token.
          </p>
          <dl className="mt-5 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-background p-5 text-foreground">
              <dt className="font-semibold">Page</dt>
              <dd className="mt-2 font-mono text-xs">--background / --foreground</dd>
            </div>
            <div className="bg-card p-5 text-card-foreground">
              <dt className="font-semibold">Card</dt>
              <dd className="mt-2 font-mono text-xs">--card / --card-foreground</dd>
            </div>
            <div className="bg-primary p-5 text-primary-foreground">
              <dt className="font-semibold">Primary</dt>
              <dd className="mt-2 font-mono text-xs">--primary / --primary-foreground</dd>
            </div>
            <div className="bg-accent p-5 text-accent-foreground">
              <dt className="font-semibold">Accent</dt>
              <dd className="mt-2 font-mono text-xs">--accent / --accent-foreground</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="components" className="mt-12">
          <h2 id="components" tabIndex={-1} className="scroll-mt-28 text-3xl font-bold">Components</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Actions</h3>
                <p className="text-sm text-muted-foreground">Use a button for an action and a link for navigation.</p>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-3">
                <DialogExample />
                <Button asChild variant="outline"><Link href="#patterns">View patterns</Link></Button>
                <Button variant="secondary" type="button" disabled>Unavailable</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Field states</h3>
                <p className="text-sm text-muted-foreground">Give each field a label and connect its help or error text.</p>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="example-name">Project name</Label>
                  <Input id="example-name" placeholder="Website redesign" aria-describedby="example-name-help" />
                  <p id="example-name-help" className="text-sm text-muted-foreground">Use a short, recognisable name.</p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="example-email">Work email (error example)</Label>
                  <Input id="example-email" type="email" value="hello@" readOnly aria-invalid="true" aria-describedby="example-email-error" className="border-[color:var(--error-text)]" />
                  <p id="example-email-error" className="text-sm text-[color:var(--error-text)]">Enter a complete email address.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section aria-labelledby="patterns" className="mt-12">
          <h2 id="patterns" tabIndex={-1} className="scroll-mt-28 text-3xl font-bold">Patterns</h2>
          <div className="mt-5 grid items-start gap-8 md:grid-cols-2">
            <BmkCard className="p-6">
              <SpecTag>Case study</SpecTag>
              <h3 className="mt-4 text-xl font-semibold">Project card</h3>
              <p className="mt-2 text-white/80">Use a short title and a description of the work.</p>
            </BmkCard>
            <BmkFaq items={[
              { q: "Where do the primitives live?", a: "The site owns its shadcn primitives in components/ui. The bmkrs wrappers compose those primitives for marketing pages." },
              { q: "How do I try the accordion?", a: "Tab to a question and press Enter or Space. Use the arrow keys to move between questions." },
            ]} />
          </div>
        </section>
      </div>
    </div>
  );
}
