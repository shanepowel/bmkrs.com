import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/bmkrs/Reveal";
import { getPage, getSiteSettings } from "@/lib/content";

export const metadata = { title: "contact" };

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getPage("contact"), getSiteSettings()]);

  return (
    <section className="page-top px-[var(--pad)] pb-[max(6rem,var(--page-bottom))]">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow">{page.heroEyebrow}</span>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="display mt-4 text-[clamp(2.25rem,9vw,8.125rem)] font-bold">
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
                className="nocase display mt-10 inline-block max-w-full break-all text-[clamp(1.25rem,3vw,2.125rem)] font-semibold hover:text-accent sm:break-normal"
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
