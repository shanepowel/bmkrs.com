import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { getPage, getSiteSettings } from "@/lib/content";

export const metadata = {
  title: "Contact",
};

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getPage("contact"), getSiteSettings()]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title={page.heroTitle || "Get in touch"}
        subtitle="You are one email away from starting your next project."
      />

      <div className="mb-12 flex flex-wrap gap-4">
        {page.heroCtaLabel && page.heroCtaHref && (
          <Button href={page.heroCtaHref} external>
            {page.heroCtaLabel}
          </Button>
        )}
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl bg-surface p-8 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold text-white">Have a question?</h2>
            <a
              href={`mailto:${settings.email}`}
              className="mt-2 block text-xl text-brand hover:underline"
            >
              {settings.email}
            </a>
          </div>
          <p className="text-muted">
            Based in South Germany, working with brands worldwide on strategy,
            design, and performance marketing.
          </p>
        </div>
        <ContactForm email={settings.email} />
      </div>
    </div>
  );
}
