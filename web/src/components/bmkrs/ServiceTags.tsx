import Link from "next/link";
import { serviceAnchorForTag } from "@/lib/service-anchors";

export function ServiceTags({ tags }: { tags: string[] }) {
  if (!tags.length) return null;

  return (
    <ul className="case-services" role="list">
      {tags.map((tag) => (
        <li key={tag}>
          <Link href={serviceAnchorForTag(tag)} className="case-service-tag mono">
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
