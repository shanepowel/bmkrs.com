import Link from "next/link";
import type { ReactNode } from "react";

function parseBoldSegments(text: string, keyStart = 0): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  const nodes: ReactNode[] = [];
  let key = keyStart;

  for (const part of parts) {
    if (!part) continue;
    const bold = /^\*\*([^*]+)\*\*$/.exec(part);
    if (bold) {
      nodes.push(
        <strong key={key++} className="font-semibold text-ink">
          {bold[1]}
        </strong>
      );
    } else {
      nodes.push(...parseInline(part, key));
      key += part.length;
    }
  }

  return nodes;
}

function parseInline(text: string, keyStart = 0): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = keyStart;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    const href = match[2];
    const isExternal = href.startsWith("http");
    parts.push(
      isExternal ? (
        <a key={key++} href={href} className="text-accent underline underline-offset-2">
          {match[1]}
        </a>
      ) : (
        <Link key={key++} href={href} className="text-accent underline underline-offset-2">
          {match[1]}
        </Link>
      )
    );
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return parts.length ? parts : [text];
}

export function parseArticleMarkdown(markdown: string): ReactNode[] {
  const blocks = markdown.trim().split(/\n\n+/);
  const nodes: ReactNode[] = [];

  blocks.forEach((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("### ")) {
      nodes.push(
        <h3
          key={i}
          className="display mb-4 mt-10 text-[clamp(1.35rem,3vw,1.75rem)] font-semibold lowercase first:mt-0"
        >
          {trimmed.slice(4)}
        </h3>
      );
      return;
    }

    const lines = trimmed.split("\n");
    if (lines.every((line) => line.startsWith("- "))) {
      nodes.push(
        <ul key={i} className="my-4 list-none space-y-3 pl-0">
          {lines.map((line, j) => {
            const content = line.slice(2);
            const boldMatch = /^\*\*([^*]+)\*\*\s*(.*)$/.exec(content);
            return (
              <li key={j} className="flex gap-3 text-[17px] leading-relaxed text-ink/90">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>
                  {boldMatch ? (
                    <>
                      <strong className="font-semibold text-ink">{boldMatch[1]}</strong>{" "}
                      {parseInline(boldMatch[2])}
                    </>
                  ) : (
                    parseInline(content)
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );
      return;
    }

    nodes.push(
      <p key={i} className="my-4 text-[17px] leading-relaxed text-ink/90">
        {parseBoldSegments(trimmed.replace(/\n/g, " "))}
      </p>
    );
  });

  return nodes;
}
