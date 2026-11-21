import * as React from "react";
import Link from "next/link";
import { Container } from "./container";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function BreadcrumbBar({
  items,
  className,
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  return (
    <div className={cn("bg-[#F2F0F7] py-5", className)}>
      <Container>
        <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-[0.1em]">
          <ol className="flex min-w-0 flex-wrap items-center gap-2 text-[#6B6E81]">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <React.Fragment key={`${item.label}-${index}`}>
                  {index > 0 ? <li aria-hidden="true">/</li> : null}
                  <li className={cn(isLast && "text-[#181F4F]")}>
                    {item.href && !isLast ? (
                      <Link href={item.href} className="hover:underline">
                        {item.label}
                      </Link>
                    ) : (
                      item.label
                    )}
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
