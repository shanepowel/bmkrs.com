import { cn } from "@/lib/utils";

type KickerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span";
};

export function Kicker({ children, className, as: Tag = "p" }: KickerProps) {
  return <Tag className={cn("kicker", className)}>{children}</Tag>;
}
