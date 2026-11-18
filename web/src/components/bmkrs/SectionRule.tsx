import { Separator, cn } from "@bmkrs/ui";

type SectionRuleProps = {
  className?: string;
  /** Prefer `theme` via Surface context. Kept for existing call sites. */
  dark?: boolean;
};

/** @deprecated prefer `<Separator />` or `<Rule />` from `@bmkrs/ui`. */
export function SectionRule({ className, dark = false }: SectionRuleProps) {
  return (
    <Separator
      className={cn("section-rule", dark && "section-rule--dark", className)}
      theme={dark ? "ink" : undefined}
    />
  );
}
