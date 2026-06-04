import { Reveal } from "@/components/bmkrs/Reveal";

const STEPS = [
  {
    n: "01",
    title: "understand",
    body: "we get under the skin of the business, the audience and what is actually at stake. no work starts before this.",
  },
  {
    n: "02",
    title: "shape",
    body: "strategy and positioning first. we decide what the brand needs to say before we make a single thing.",
  },
  {
    n: "03",
    title: "make",
    body: "identity, voice, product. the same team builds all of it, so nothing falls between the gaps.",
  },
  {
    n: "04",
    title: "launch",
    body: "we get it live and get it heard. a brand nobody sees is just a folder of files.",
  },
  {
    n: "05",
    title: "keep moving",
    body: "most brands do not stop at launch. neither do we. this is where motion takes over.",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="section-pad section--paper">
      <div className="wrap section">
        <Reveal>
          <p className="eyebrow">how we work</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold">
            strategy first, then everything else.
          </h2>
        </Reveal>
        <ol className="process mt-10">
          {STEPS.map((step, i) => (
            <li key={step.n} className="process-step">
              <Reveal delay={(i % 2) as 0 | 1}>
                <span className="eyebrow process-num preserve-case">{step.n}</span>
                <h3 className="display mt-2 text-xl">{step.title}</h3>
                <p className="mt-2 text-muted">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
