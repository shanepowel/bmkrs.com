"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Post = { slug: string; title: string; category: string };

const ANCHORS: Record<string, { x: number; y: number; label: string }> = {
  brand: { x: 150, y: 92, label: "brand" },
  voice: { x: 490, y: 92, label: "voice" },
  pr: { x: 565, y: 205, label: "pr" },
  growth: { x: 470, y: 320, label: "growth" },
  studio: { x: 150, y: 320, label: "studio" },
};
const HUB = { x: 320, y: 205 };
const CATEGORY_LABEL: Record<string, string> = {
  brand: "brand + identity",
  voice: "voice + messaging",
  pr: "pr + comms",
  growth: "growth",
  studio: "studio",
};

function layout(posts: Post[]) {
  const byCat: Record<string, Post[]> = {};
  posts.forEach((p) => {
    const key = ANCHORS[p.category] ? p.category : "studio";
    (byCat[key] ||= []).push(p);
  });
  const nodes: { post: Post; x: number; y: number }[] = [];
  Object.entries(byCat).forEach(([cat, list]) => {
    const a = ANCHORS[cat];
    const r = list.length > 1 ? 38 : 0;
    list.forEach((post, i) => {
      const angle = (i / list.length) * Math.PI * 2 - Math.PI / 2;
      nodes.push({
        post,
        x: a.x + Math.cos(angle) * r,
        y: a.y + Math.sin(angle) * r + (r ? 0 : 24),
      });
    });
  });
  return nodes;
}

export function JournalMap({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const nodes = useMemo(() => layout(posts), [posts]);
  const [selected, setSelected] = useState<Post | null>(null);

  const go = (slug: string) => router.push(`/journal/${slug}`);
  const surprise = () => {
    if (!nodes.length) return;
    const n = nodes[Math.floor(Math.random() * nodes.length)];
    setSelected(n.post);
  };

  return (
    <div className="journal-map" aria-hidden="false">
      <svg viewBox="0 0 640 380" width="100%" role="img" aria-label="Journal posts grouped by discipline">
        {nodes.map((n, i) => (
          <line key={`l${i}`} x1={HUB.x} y1={HUB.y} x2={n.x} y2={n.y} className="jm-link" />
        ))}
        <circle cx={HUB.x} cy={HUB.y} r={4} className="jm-hub-dot" />
        <text x={HUB.x} y={HUB.y - 12} textAnchor="middle" className="jm-hub-label">
          bmkrs
        </text>

        {Object.values(ANCHORS).map((a) => (
          <text key={a.label} x={a.x} y={a.y - 30} textAnchor="middle" className="jm-cat">
            {a.label}
          </text>
        ))}

        {nodes.map((n, i) => {
          const active = selected?.slug === n.post.slug;
          return (
            <g
              key={n.post.slug + i}
              role="link"
              tabIndex={0}
              aria-label={`${n.post.title}, ${CATEGORY_LABEL[n.post.category] ?? n.post.category}`}
              className={`jm-node ${active ? "is-active" : ""}`}
              onClick={() => go(n.post.slug)}
              onMouseEnter={() => setSelected(n.post)}
              onFocus={() => setSelected(n.post)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  go(n.post.slug);
                }
              }}
            >
              <circle cx={n.x} cy={n.y} r={active ? 9 : 6} />
              <title>{n.post.title}</title>
            </g>
          );
        })}
      </svg>

      <div className="jm-readout">
        <div>
          <div className="eyebrow">{selected ? CATEGORY_LABEL[selected.category] : "tap a node"}</div>
          <div className="jm-readout-title">
            {selected ? selected.title : "wander the ideas, or let us pick one for you."}
          </div>
        </div>
        <div className="jm-actions">
          {selected && (
            <button type="button" className="btn-primary" onClick={() => go(selected.slug)}>
              read →
            </button>
          )}
          <button type="button" className="jm-surprise" onClick={surprise}>
            surprise me
          </button>
        </div>
      </div>
    </div>
  );
}
