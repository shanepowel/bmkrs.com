import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { getMotionContent, getPage, getSiteSettings } from "@/lib/content";

export const metadata = {
  title: "Motion",
};

export default async function MotionPage() {
  const [page, motion, settings] = await Promise.all([
    getPage("motion"),
    getMotionContent(),
    getSiteSettings(),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={page.heroEyebrow || "Ongoing partnership"}
        title={page.heroTitle || "Your brand, always in Motion."}
        subtitle={page.heroSubtitle}
      />
      {page.heroCtaLabel && page.heroCtaHref && (
        <div className="mb-16">
          <Button href={page.heroCtaHref}>{page.heroCtaLabel}</Button>
        </div>
      )}

      <section className="mb-20">
        <SectionHeading eyebrow="Included" title="What Motion gives you" />
        <div className="grid gap-6 sm:grid-cols-2">
          {motion.benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/5 bg-surface p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 rounded-2xl bg-gradient-to-br from-brand/15 to-surface p-10 ring-1 ring-white/10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          {motion.offer.title}
        </h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">{motion.offer.body}</p>
        <div className="mt-8">
          <Button href={motion.offer.ctaHref}>{motion.offer.ctaLabel}</Button>
        </div>
      </section>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-white">Apply for Motion</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Tell us about your brand and where you want to take it. We&apos;ll come back
            within one working day.
          </p>
        </div>
        <ContactForm email={settings.email} />
      </div>
    </div>
  );
}
