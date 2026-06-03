import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { getPage, getServices, getSiteSettings } from "@/lib/content";

export const metadata = {
  title: "Motion",
};

export default async function MotionPage() {
  const [page, services, settings] = await Promise.all([
    getPage("motion"),
    getServices(),
    getSiteSettings(),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Motion program"
        title={page.heroTitle || "Motion"}
        subtitle={page.heroSubtitle}
      />

      <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.slug}
            className="rounded-2xl border border-white/5 bg-surface p-6"
          >
            <h3 className="font-semibold text-white">{service.title}</h3>
            {service.bullets && (
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {service.bullets.slice(0, 3).map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-white">Apply for Motion</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Tell us about your brand and goals. Our team will respond with next steps
            for the Motion program — including your complimentary trial period.
          </p>
        </div>
        <ContactForm email={settings.email} />
      </div>
    </div>
  );
}
