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
    <a
      className={primary ? `btn-primary ${className ?? ""}`.trim() : `app-link ${className ?? ""}`.trim()}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
