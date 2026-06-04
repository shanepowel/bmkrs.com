import { cn } from "@/lib/utils";

type BMakersLineProps = {
  className?: string;
  multiline?: boolean;
};

/** Sitewide lockup: we are b makers. */
export function BMakersLine({ className, multiline = false }: BMakersLineProps) {
  if (multiline) {
    return (
      <span className={cn("display font-bold tracking-[-0.04em]", className)}>
        we are <br />
        <span className="text-accent">b</span> makers.
      </span>
    );
  }

  return (
    <span className={cn("display font-bold tracking-[-0.04em]", className)}>
      we are <span className="text-accent">b</span> makers.
    </span>
  );
}
