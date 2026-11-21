import * as React from "react";
import { cn } from "@/lib/utils";

/** Root wrapper for every marketing page. Prevents horizontal overflow. */
export function PageShell({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("min-h-screen min-w-0 overflow-x-clip bg-white font-sans", className)}
      {...props}
    >
      {children}
    </div>
  );
}
