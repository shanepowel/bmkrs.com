/** Renders text with |accent| segments highlighted. */
export function AccentLine({ content }: { content: string }) {
  const parts = content.split(/(\|[^|]+\|)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("|") && part.endsWith("|")) {
          return (
            <span key={i} className="text-accent">
              {part.slice(1, -1)}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
