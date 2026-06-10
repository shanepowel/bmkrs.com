import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type RuledGridProps = {
  children: ReactNode;
  className?: string;
  columns?: 2 | 3 | 4;
  dark?: boolean;
};

export function RuledGrid({ children, className, columns = 4, dark = false }: RuledGridProps) {
  return (
    <ul
      className={cn(
        "ruled-grid",
        columns === 2 && "ruled-grid--2",
        columns === 3 && "ruled-grid--3",
        columns === 4 && "ruled-grid--4",
        dark && "ruled-grid--dark",
        className
      )}
    >
      {children}
    </ul>
  );
}

export function RuledGridItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <li className={cn("ruled-grid__item", className)}>{children}</li>;
}
