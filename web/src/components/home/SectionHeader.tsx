import { H2 } from "@bmkrs/ui";

export function SectionHeader({
  title,
  eyebrow,
  theme = "ink",
}: {
  title: string;
  eyebrow: string;
  theme?: "ink" | "paper";
}) {
  return (
    <div className="home-section-header">
      <H2 theme={theme}>{title}</H2>
      <span className="mono">{eyebrow}</span>
    </div>
  );
}
