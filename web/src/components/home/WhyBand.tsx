import { SplitQuote, Surface } from "@bmkrs/ui";
import { homeManifesto } from "@/lib/content/expansion-v2";

const manifestoParts = homeManifesto.split("\n\n");
const opening = manifestoParts[0] ?? "";
const quoteSplit = opening.indexOf("we spent seventeen years");
const quoteText = quoteSplit > 0 ? opening.slice(0, quoteSplit).trim() : opening;
const firstBody = quoteSplit > 0 ? opening.slice(quoteSplit).trim() : "";
const restBody = manifestoParts.slice(1);

export function WhyBand() {
  const quoteMatch = quoteText.match(/^(.*?)(the best-told one does\.)\s*$/i);

  return (
    <Surface theme="ink" raised pad="home">
      <SplitQuote
        quote={
          quoteMatch ? (
            <>
              {quoteMatch[1]}
              <em>{quoteMatch[2]}</em>
            </>
          ) : (
            quoteText
          )
        }
      >
        {firstBody ? <p>{firstBody}</p> : null}
        {restBody.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </SplitQuote>
    </Surface>
  );
}
