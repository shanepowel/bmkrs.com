import Image from "next/image";
import { PortraitTile } from "@/components/bmkrs/PortraitTile";
import { Reveal } from "@/components/bmkrs/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { brandMessaging } from "@/lib/content/messaging";
import { getPeople } from "@/lib/content";
import { marketingImages } from "@/lib/marketing-assets";
import { Body, H2, Meta, Section, StorySplit, TeamGrid } from "@bmkrs/ui";

export default async function HomePage() {
  const people = await getPeople();
  const team = people.slice(0, 4);

  return (
    <main data-surface="paper">
      <HomeHero />

      <Section theme="paper" id="story">
        <Reveal>
          <StorySplit
            title={brandMessaging.positioningStatement}
            body={
              <>
                <p>{brandMessaging.positioningLead}</p>
                <p className="mt-5">{brandMessaging.positioningBody}</p>
              </>
            }
            media={
              <Image
                src={marketingImages.studioWorkspace}
                alt="studio collaboration"
                width={960}
                height={720}
                className="h-full w-full object-cover"
              />
            }
          />
        </Reveal>
      </Section>

      <Section theme="paper" id="team">
        <Reveal>
          <div className="mb-10 grid gap-4 lg:grid-cols-12 lg:items-end">
            <H2 theme="paper" className="lg:col-span-3">
              {brandMessaging.teamEyebrow}
            </H2>
            <Body theme="paper" className="lg:col-span-7 lg:col-start-5">
              {brandMessaging.teamLead}
            </Body>
          </div>
          {team.length ? (
            <TeamGrid
              members={team.map((person) => ({
                name: person.name,
                role: (person.role ?? person.discipline ?? "").toUpperCase(),
                portrait: (
                  <PortraitTile
                    name={person.name}
                    discipline={person.discipline ?? person.role}
                    portraitUrl={person.portraitUrl}
                    theme="paper"
                    size={320}
                  />
                ),
              }))}
            />
          ) : (
            <Meta theme="paper">Team portraits coming soon.</Meta>
          )}
        </Reveal>
      </Section>

      <Reveal>
        <FinalCTA />
      </Reveal>
    </main>
  );
}
