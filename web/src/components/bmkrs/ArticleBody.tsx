import { parseArticleMarkdown } from "@/lib/parse-article-markdown";

type Props = { body: string };

export function ArticleBody({ body }: Props) {
  return <div className="article-prose max-w-[680px]">{parseArticleMarkdown(body)}</div>;
}
