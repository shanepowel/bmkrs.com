import { Reveal } from "@/components/bmkrs/Reveal";
import { ArriveGrid } from "@/components/home/ArriveGrid";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeMarquee } from "@/components/home/HomeMarquee";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesList } from "@/components/home/ServicesList";
import { WhyBand } from "@/components/home/WhyBand";
import { WorkSection } from "@/components/home/WorkSection";
import { homePainPoints } from "@/lib/content/expansion-v2";
import {
  getFeaturedProjects,
  getHomeContent,
  getHomeTestimonials,
  getProducts,
} from "@/lib/content";
import type { Testimonial } from "@/lib/types";

function pickWorkTestimonial(testimonials: Testimonial[]) {
  const podcast = testimonials.find((item) =>
    `${item.company ?? ""} ${item.role ?? ""} ${item.attribution ?? ""}`
      .toLowerCase()
      .includes("podcast studio london"),
  );
  return podcast ?? testimonials[0];
}

export default async function HomePage() {
  const [home, featured, testimonials, products] = await Promise.all([
    getHomeContent(),
    getFeaturedProjects(),
    getHomeTestimonials(),
    getProducts(),
  ]);

  const selectedProjects = featured.slice(0, 4);
  const workTestimonial = pickWorkTestimonial(testimonials);

  return (
    <main data-surface="ink">
      <HomeHero hero={home.hero} />

      <HomeMarquee items={home.marqueeItems} />

      <section className="home-section" id="arrive">
        <div className="home-wrap">
          <Reveal>
            <div className="mb-[var(--section-header-gap)] flex items-baseline justify-between gap-6">
              <h2 className="max-w-[20ch] text-[clamp(1.9rem,4.2vw,3.2rem)] font-medium leading-[1.04] tracking-[-0.025em]">
                you usually arrive with one of these.
              </h2>
              <span className="mono shrink-0">why people call us</span>
            </div>
            <ArriveGrid points={homePainPoints} />
          </Reveal>
        </div>
      </section>

      <section className="home-section !pt-0" id="services">
        <div className="home-wrap">
          <Reveal>
            <ServicesList
              eyebrow={home.positioning.eyebrow}
              statement={home.positioning.statement}
              lead={home.positioning.lead}
              tiles={home.capabilityTiles}
            />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <WhyBand />
      </Reveal>

      <section className="home-section" id="packages">
        <div className="home-wrap">
          <Reveal>
            <PackagesSection products={products} />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <WorkSection
          projects={selectedProjects}
          testimonial={workTestimonial}
          eyebrow={home.selectedWork.eyebrow}
          title={home.selectedWork.title}
        />
      </Reveal>

      <Reveal>
        <ProcessSection />
      </Reveal>

      <Reveal>
        <FinalCTA />
      </Reveal>
    </main>
  );
}
