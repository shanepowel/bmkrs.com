import type { JournalPost } from "@/lib/types";
import { markdownJournalPosts } from "./journal-markdown.generated";

export function getMarkdownJournalPosts(): JournalPost[] {
  return markdownJournalPosts;
}
