import { homeManifesto } from "@/lib/content/expansion-v2";

const [quoteText, bodyText] = homeManifesto.split("\n\n");
const quoteMatch = (quoteText ?? "").match(/^(.*?)(the best-told one does\.)\s*$/i);

export function WhyBand() {
  return (
    <section className="home-why home-section">
      <div className="home-wrap home-why__grid">
        <blockquote className="home-why__quote">
          {quoteMatch ? (
            <>
              {quoteMatch[1]}
              <em>{quoteMatch[2]}</em>
            </>
          ) : (
            quoteText
          )}
        </blockquote>
        <div className="home-why__body">
          {bodyText ? <p>{bodyText}</p> : null}
        </div>
      </div>
    </section>
  );
}
