import type { LegalDocument as LegalDocumentType } from "@/lib/content/legal";
import { H1, Section, themeBodyStyle, themeFaintStyle } from "@/components/bmkrs/surfaces";

export function LegalDocument({ doc }: { doc: LegalDocumentType }) {
  return (
    <Section theme="paper">
      <H1 theme="paper" className="text-h2">
        {doc.title}
      </H1>
      {doc.intro ? (
        <p className="lead mt-6 max-w-[65ch]" style={themeBodyStyle("paper")}>
          {doc.intro}
        </p>
      ) : null}
      <div className="mt-14 space-y-12">
        {doc.sections.map((section) => (
          <section
            key={section.title}
            style={{ borderTop: "1px solid rgba(24,22,19,0.15)" }}
            className="pt-8"
          >
            <h2 className="text-xl font-medium">{section.title}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 max-w-[65ch] leading-relaxed" style={themeBodyStyle("paper")}>
                {p}
              </p>
            ))}
            {section.items ? (
              <ul className="mt-4 max-w-[65ch] space-y-3 leading-relaxed" style={themeBodyStyle("paper")}>
                {section.items.map((item) => (
                  <li key={item.slice(0, 40)} className="pl-0">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
      <p className="mono mt-14 text-meta" style={themeFaintStyle("paper")}>
        last updated: {doc.lastUpdated}
      </p>
    </Section>
  );
}
