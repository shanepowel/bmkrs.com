import { SideMedia } from "@/components/sections/PageMedia";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPage, getSiteSettings } from "@/lib/content";
import { marketingImages } from "@/lib/marketing-assets";

export const metadata = {
  title: "Contact",
};

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getPage("contact"), getSiteSettings()]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={page.heroEyebrow || "Contact"}
        title={page.heroTitle || "Start a project."}
        subtitle={page.heroSubtitle}
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <SideMedia
            src={marketingImages.creativeDesk}
            alt="Creative workspace — strategy, design, and delivery"
          />
          <div className="rounded-2xl bg-surface p-8 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold text-white">Direct line</h2>
            <a
              href={`mailto:${settings.email}`}
              className="mt-2 block text-xl text-brand hover:underline"
            >
              {settings.email}
            </a>
          </div>
        </div>
        <ContactForm email={settings.email} />
      </div>
    </div>
  );
}
