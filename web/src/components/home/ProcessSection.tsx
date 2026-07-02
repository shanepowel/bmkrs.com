import { homeProcessStrip } from "@/lib/content/expansion-v2";
import { SectionHeader } from "./SectionHeader";

const STEPS = homeProcessStrip.steps.split(" → ");

export function ProcessSection() {
  return (
    <section className="home-section" id="motion" data-surface="ink">
      <div className="home-wrap">
        <SectionHeader title="how it runs" eyebrow="the method" />
        <div className="home-process-line">
          {STEPS.map((step, index) => (
            <span key={step} className="inline-flex items-baseline gap-[1em]">
              <b className="home-process-line__word">{step}</b>
              {index < STEPS.length - 1 ? (
                <i className="home-process-line__arrow" aria-hidden>
                  →
                </i>
              ) : null}
            </span>
          ))}
        </div>
        <p className="home-process-body">{homeProcessStrip.body}</p>
        <span className="home-process-note">{homeProcessStrip.footnote}</span>
      </div>
    </section>
  );
}
