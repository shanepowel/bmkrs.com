import { OrangeButton, SnapLine } from "@bmkrs/ui";

export function FinalCTA() {
  return (
    <section className="home-cta" id="contact" data-surface="ink">
      <div className="home-wrap">
        <SnapLine tick="your line goes here" trigger="inView" className="home-cta__snap" />
        <h2>let&apos;s make something worth choosing.</h2>
        <OrangeButton href="/contact">start a project</OrangeButton>
      </div>
    </section>
  );
}
