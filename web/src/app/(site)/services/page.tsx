import Link from "next/link";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { BWordRotate } from "@/components/bmkrs/BWordRotate";
import { Reveal } from "@/components/bmkrs/Reveal";
import { getPage, getServices } from "@/lib/content";

export const metadata = { title: "services" };

export default async function ServicesPage() {
  const [page, services] = await Promise.all([getPage("services"), getServices()]);

  return (
    <>
      <section className="flex min-h-[68vh] flex-col justify-center px-[var(--pad)] pt-32">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{page.heroEyebrow}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display mt-4 text-[clamp(48px,9vw,128px)] font-bold">
              everything your <BWordRotate /> <br />
              needs to <span className="text-accent">grow.</span>
            </h1>
          </Reveal>
          {page.heroSubtitle && (
            <Reveal delay={2}>
              <p className="lead mt-8">{page.heroSubtitle}</p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="wrap">
          {services.map((service, i) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 grid gap-14 border-b-2 border-[var(--line)] py-[clamp(46px,6vw,80px)] first:border-t-2 md:grid-cols-[0.85fr_1.15fr]"
            >
              <Reveal>
                <p className="display text-2xl font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="display mt-3 text-[clamp(30px,4.5vw,62px)]">{service.title}</h2>
              </Reveal>
              <Reveal delay={1}>
                {service.lead && (
                  <p className="text-[clamp(18px,2vw,23px)]">{service.lead}</p>
                )}
                {service.body && (
                  <p className="mt-5 max-w-[470px] text-muted">{service.body}</p>
                )}
                {service.bullets && (
                  <ul className="mt-7">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-3.5 border-b border-[var(--line)] py-4 text-base first:border-t first:border-[var(--line)]"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </article>
          ))}
          <div className="mt-12 text-center">
            <Link href={page.heroCtaHref || "/work"} className="btn-primary">
              {page.heroCtaLabel || "see these in action"} <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
