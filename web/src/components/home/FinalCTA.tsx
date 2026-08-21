import { GhostButton, OrangeButton, SnapLine } from "@bmkrs/ui";

export function FinalCTA() {
  return (
    <section className="home-cta" id="contact" data-surface="ink">
      <div className="home-wrap">
        <SnapLine
          tick="the story's only as good as what happens after we tell it"
          trigger="inView"
          className="home-cta__snap"
        />
        <h2>let&apos;s make something worth choosing</h2>
        <div className="home-cta__actions">
          <OrangeButton href="/contact">start a project</OrangeButton>
          <GhostButton href="/contact">book a 15-minute brand check call</GhostButton>
        </div>
      </div>
    </section>
  );
}
