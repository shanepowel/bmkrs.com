import { Button } from "@bmkrs/ui";

export function AppLink({
  href,
  children,
  primary,
  className,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}) {
  return (
    <Button
      href={href}
      variant={primary ? "primary" : "ghost"}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} <span aria-hidden="true">↗</span>
    </Button>
  );
}
