import { cn } from "@/lib/utils";

/** Text logo: bmkrs with accent period (orange dot). */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn(className)}>
      bmkrs<span className="text-accent">.</span>
    </span>
  );
}
