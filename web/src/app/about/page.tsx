import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getPage } from "@/lib/content";

export const metadata = {
  title: "About",
};

export default async function AboutPage() {
  const page = await getPage("about");
  const story = page.sections?.find((s) => s.key === "story");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About BMKRS"
        title={page.heroTitle || "We are the Brandmakers"}
        subtitle={page.heroSubtitle}
      />

      <div className="prose prose-invert max-w-3xl">
        <p className="text-lg text-muted leading-relaxed">
          {story?.content ||
            "We fuel the growth of purpose-driven brands through strategy activation, design empowerment, and market adoption."}
        </p>
        <p className="mt-6 text-muted leading-relaxed">
          From branding and identity to websites, eCommerce, and performance marketing,
          we partner with teams who want to rank their business up — with creative that
          performs and experiences that convert.
        </p>
      </div>

      <div className="mt-12 flex gap-4">
        <Button href="/discover">Our services</Button>
        <Button href="/contact" variant="outline">
          Work with us
        </Button>
      </div>
    </div>
  );
}
