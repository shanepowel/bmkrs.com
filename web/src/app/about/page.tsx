import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getPage } from "@/lib/content";

export const metadata = {
  title: "About",
};

export default async function AboutPage() {
  const page = await getPage("about");
  const body1 = page.sections?.find((s) => s.key === "body1");
  const body2 = page.sections?.find((s) => s.key === "body2");
  const manifesto = page.sections?.find((s) => s.key === "manifesto");

  const beliefs = manifesto?.content?.split("|") ?? [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={page.heroEyebrow || "About BMKRS"}
        title={page.heroTitle || "We are the Brandmakers."}
        subtitle={page.heroSubtitle}
      />

      <div className="max-w-3xl space-y-6">
        <p className="text-lg text-muted leading-relaxed">
          {body1?.content}
        </p>
        <p className="text-muted leading-relaxed">{body2?.content}</p>
      </div>

      {beliefs.length > 0 && (
        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">
            {manifesto?.title || "What we believe"}
          </h2>
          <ul className="mt-6 space-y-4">
            {beliefs.map((line) => (
              <li key={line} className="flex gap-3 text-muted leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {line}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-12 flex flex-wrap gap-4">
        <Button href="/discover">Our services</Button>
        <Button href="/contact" variant="outline">
          Work with us
        </Button>
      </div>
    </div>
  );
}
