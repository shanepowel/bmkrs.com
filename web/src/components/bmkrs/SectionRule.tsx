import { cn } from "@/lib/utils";

type SectionRuleProps = {
  className?: string;
  dark?: boolean;
};

export function SectionRule({ className, dark = false }: SectionRuleProps) {
  return (
    <hr
      className={cn("section-rule", dark && "section-rule--dark", className)}
      aria-hidden="true"
    />
  );
}
