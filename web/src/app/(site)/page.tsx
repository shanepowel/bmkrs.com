import { preload } from "react-dom";
import { SectionHeading, Surface } from "@bmkrs/ui";
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
  getSiteSettings,
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
  const [home, featured, testimonials, products, settings] = await Promise.all([
    getHomeContent(),
    getFeaturedProjects(),
    getHomeTestimonials(),
    getProducts(),
    getSiteSettings(),
  ]);

  if (settings.heroReelUrl) {
    preload(settings.heroReelUrl, { as: "video", fetchPriority: "high" });
  }

  const selectedProjects = featured.slice(0, 4);
  const workTestimonial = pickWorkTestimonial(testimonials);

  return (
    <main data-surface="ink">
      <HomeHero
        hero={home.hero}
        reelUrl={settings.heroReelUrl}
        poster={settings.heroPoster}
      />

      <HomeMarquee items={home.marqueeItems} />

      <Surface theme="ink" pad="home" id="arrive">
        <Reveal>
          <SectionHeading title="you usually arrive with one of these." eyebrow="why people call us" />
          <ArriveGrid points={homePainPoints} />
        </Reveal>
      </Surface>

      <Surface theme="ink" pad="home" id="services" innerClassName="!pt-0">
        <Reveal>
          <ServicesList
            eyebrow={home.positioning.eyebrow}
            statement={home.positioning.statement}
            lead={home.positioning.lead}
            tiles={home.capabilityTiles}
          />
        </Reveal>
      </Surface>

      <Reveal>
        <WhyBand />
      </Reveal>

      <Surface theme="ink" pad="home" id="packages">
        <Reveal>
          <PackagesSection products={products} />
        </Reveal>
      </Surface>

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
