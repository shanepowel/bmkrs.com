import Image from "next/image";
import { Surface, StorySplit } from "@bmkrs/ui";
import { Reveal } from "@/components/bmkrs/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { PackagesSection } from "@/components/home/PackagesSection";
import { WorkSection } from "@/components/home/WorkSection";
import { brandMessaging } from "@/lib/content/messaging";
import { getHomeTestimonials, getProducts, getShowcaseProjects } from "@/lib/content";
import { marketingImages } from "@/lib/marketing-assets";
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
  const [showcase, testimonials, products] = await Promise.all([
    getShowcaseProjects(4),
    getHomeTestimonials(),
    getProducts(),
  ]);

  const workTestimonial = pickWorkTestimonial(testimonials);
  const reelFrames = showcase.map((project) => ({
    href: `/work/${project.slug}`,
    name: project.title.toLowerCase(),
    tag: (project.sector || project.category).toLowerCase(),
    src: project.thumbnailPath,
    alt: `${project.title.toLowerCase()}, project work`,
  }));

  return (
    <main data-surface="paper">
      <HomeHero frames={reelFrames} />

      <Reveal>
        <WorkSection
          projects={showcase}
          testimonial={workTestimonial}
          eyebrow="selected work"
          title={brandMessaging.workTitle}
        />
      </Reveal>

      <Surface theme="paper" pad="home" id="story">
        <Reveal>
          <StorySplit
            eyebrow={brandMessaging.positioningEyebrow}
            title={brandMessaging.positioningStatement}
            body={<p>{brandMessaging.positioningLead}</p>}
            media={
              <Image
                src={marketingImages.studioWorkspace}
                alt="product and delivery work in the studio"
                width={960}
                height={1200}
                className="h-full w-full object-cover"
              />
            }
          />
        </Reveal>
      </Surface>

      <Surface theme="paper" pad="home" id="packages">
        <Reveal>
          <PackagesSection products={products} />
        </Reveal>
      </Surface>

      <Reveal>
        <FinalCTA />
      </Reveal>
    </main>
  );
}
