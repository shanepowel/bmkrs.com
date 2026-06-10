import { cn } from "@/lib/utils";

type FullBleedProps = {
  children: React.ReactNode;
  className?: string;
  aspect?: "21/9" | "4/3" | "auto";
};

export function FullBleed({ children, className, aspect = "auto" }: FullBleedProps) {
  return (
    <div
      className={cn(
        "full-bleed",
        aspect === "21/9" && "full-bleed--21-9",
        aspect === "4/3" && "full-bleed--4-3",
        className
      )}
    >
      {children}
    </div>
  );
}
