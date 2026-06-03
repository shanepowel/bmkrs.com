import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPage, getServices } from "@/lib/content";

export const metadata = {
  title: "Services",
};

export default async function DiscoverPage() {
  const [page, services] = await Promise.all([getPage("discover"), getServices()]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title={page.heroTitle || page.title}
        subtitle="Strategy, design, and growth — tailored to your brand."
      />

      <div className="space-y-24">
        {services.map((service, i) => (
          <article
            key={service.slug}
            className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {service.imagePath && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
            <div className={i % 2 === 1 ? "lg:order-first" : ""}>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                {service.title}
              </h2>
              {service.summary && (
                <p className="mt-4 text-lg text-muted">{service.summary}</p>
              )}
              {service.body && (
                <p className="mt-4 text-muted leading-relaxed">{service.body}</p>
              )}
              {service.bullets && service.bullets.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-sm text-white/90"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Button href="/work">See projects</Button>
      </div>
    </div>
  );
}
