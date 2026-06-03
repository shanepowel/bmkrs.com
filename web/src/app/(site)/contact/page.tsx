import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/bmkrs/Reveal";
import { getPage, getSiteSettings } from "@/lib/content";

export const metadata = { title: "contact" };

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getPage("contact"), getSiteSettings()]);

  return (
    <section className="px-[var(--pad)] pb-24 pt-36">
      <div className="wrap">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow">{page.heroEyebrow}</span>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="display mt-4 text-[clamp(52px,9vw,130px)] font-bold">
                start a <span className="text-accent">project.</span>
              </h1>
            </Reveal>
            {page.heroSubtitle && (
              <Reveal delay={2}>
                <p className="lead mt-7">{page.heroSubtitle}</p>
              </Reveal>
            )}
            <Reveal delay={3}>
              <a
                href={`mailto:${settings.email}`}
                className="nocase display mt-10 inline-block text-[clamp(22px,3vw,34px)] font-semibold hover:text-accent"
              >
                {settings.email}
              </a>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <ContactForm email={settings.email} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
