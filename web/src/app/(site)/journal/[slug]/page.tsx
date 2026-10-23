import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/bmkrs/ArticleBody";
import { PortableBody } from "@/components/bmkrs/PortableBody";
import { AuthorBio } from "@/components/bmkrs/AuthorBio";
import { EmailCapture } from "@/components/bmkrs/EmailCapture";
import { BackLink, Body, Button, GhostButton, H1, Kicker, LinkIndex, LinkRow, Meta, Section } from "@bmkrs/ui";
import { journalRelatedWork } from "@/lib/content/journal-related-work";
import {
  getJournalArticle,
  getJournalArticles,
  getJournalCategorySlugs,
  getJournalIndex,
  getPost,
  getPostSlugs,
} from "@/lib/content";
import { JOURNAL_CATEGORY_LABEL } from "@/lib/journal-categories";
import { metadataWithImage, siteUrl } from "@/lib/seo";
import { articleSchemaFromPost, breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso)
    .toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
    .toLowerCase();
}

export async function generateStaticParams() {
  const [postSlugs, legacy] = await Promise.all([getPostSlugs(), getJournalArticles()]);
  const slugs = new Set([...postSlugs, ...legacy.map((a) => a.slug)]);
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (post) {
    const title = post.seo?.metaTitle ?? `${post.title} | bmkrs.`;
    const description = post.seo?.metaDescription ?? post.excerpt;
    const base: Metadata = {
      title,
      description,
      alternates: { canonical: `${siteUrl}/journal/${post.slug}` },
      openGraph: {
        title,
        description,
        type: "article",
        url: `${siteUrl}/journal/${post.slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
    if (post.seo?.ogImage) {
      return metadataWithImage(base, post.seo.ogImage);
    }
    return base;
  }
  const article = await getJournalArticle(slug);
  if (!article) return { title: "journal" };
  return { title: article.seoTitle, description: article.metaDescription };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (post) {
    const [{ posts }, routableCategories] = await Promise.all([
      getJournalIndex(),
      getJournalCategorySlugs(),
    ]);
    const others = posts.filter((p) => p.slug !== slug).slice(0, 2);
    const categoryLabel = JOURNAL_CATEGORY_LABEL[post.category] ?? post.category;
    const categoryHref = routableCategories.includes(post.category)
      ? `/journal/category/${post.category}`
      : null;

    const jsonLd = [
      articleSchemaFromPost(post),
      breadcrumbSchema([
        { name: "home", path: "/" },
        { name: "journal", path: "/journal" },
        { name: post.title, path: `/journal/${post.slug}` },
      ]),
    ];

    return (
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Section theme="ink" className="!pb-0">
          <div className="max-w-[900px]">
            <BackLink href="/journal">← journal</BackLink>
            <Meta theme="ink" className="mt-8">
              {categoryHref ? <Link href={categoryHref}>{categoryLabel}</Link> : categoryLabel}
              {" · "}
              {formatDate(post.publishedAt)}
              {post.readingTime ? ` · ${post.readingTime} min read` : ""}
            </Meta>
            <H1 theme="ink" className="mt-4 max-w-[16ch]">
              {post.title}
            </H1>
            {post.author && (
              <p className="mt-4 text-sm text-muted">
                {post.author.name}
                {post.author.discipline ? ` · ${post.author.discipline}` : ""}
              </p>
            )}
            {post.cover?.url && (
              <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[var(--radius)]">
                <Image
                  src={post.cover.url}
                  alt={post.cover.alt ?? post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="900px"
                />
              </div>
            )}
          </div>
        </Section>

        <Section theme="paper" className="!pt-8">
          <div className="max-w-[900px]">
            <PortableBody blocks={post.body} />
          </div>
        </Section>

        <Section theme="ink">
          <div className="max-w-[900px]">
            {post.author?.name ? <AuthorBio name={post.author.name} /> : null}

            {(post.relatedProduct || post.relatedCaseStudy || journalRelatedWork[slug]) && (
              <aside className="mt-14 border-t border-[var(--line)] pt-10">
                <Kicker theme="ink">where this shows up</Kicker>
                <Body theme="ink" className="mt-3">
                  this thinking shows up in the work, not only on the page.
                </Body>
                <div className="mt-6">
                  <LinkIndex>
                    {post.relatedProduct ? (
                      <LinkRow
                        href={`/services#${post.relatedProduct.slug}`}
                        name={post.relatedProduct.name}
                        description="the package"
                      />
                    ) : journalRelatedWork[slug]?.product ? (
                      <LinkRow
                        href={`/services#${journalRelatedWork[slug].product!.slug}`}
                        name={journalRelatedWork[slug].product!.name}
                        description="the package"
                      />
                    ) : null}
                    {post.relatedCaseStudy ? (
                      <LinkRow
                        href={`/work/${post.relatedCaseStudy.slug}`}
                        name={post.relatedCaseStudy.title}
                        description="the case"
                      />
                    ) : (
                      journalRelatedWork[slug]?.cases.map((item) => (
                        <LinkRow
                          key={item.slug}
                          href={`/work/${item.slug}`}
                          name={item.title}
                          description="the case"
                        />
                      ))
                    )}
                  </LinkIndex>
                </div>
              </aside>
            )}

            {others.length > 0 && (
              <div className="mt-14 border-t border-[var(--line)] pt-10">
                <Kicker theme="ink">related posts</Kicker>
                <div className="mt-6">
                  <LinkIndex>
                    {others.map((other) => (
                      <LinkRow
                        key={other.slug}
                        href={`/journal/${other.slug}`}
                        name={other.title}
                        description={other.excerpt}
                      />
                    ))}
                  </LinkIndex>
                </div>
              </div>
            )}

            <nav className="mt-12 flex flex-wrap gap-4 border-t border-[var(--line)] pt-8">
              <GhostButton href="/journal">more from the journal</GhostButton>
              <Button href="/contact">start a project</Button>
            </nav>
          </div>
        </Section>

        <EmailCapture surface="orange" />
      </main>
    );
  }

  const article = await getJournalArticle(slug);
  if (!article) notFound();

  const all = await getJournalArticles();
  const others = all.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <Section theme="ink">
        <BackLink href="/journal">← journal</BackLink>
        <Meta theme="ink" className="mt-8">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </Meta>
        <H1 theme="ink" className="mt-4 max-w-[16ch]">
          {article.h1}
        </H1>
      </Section>
      <Section theme="paper">
        <ArticleBody body={article.body} />
        {article.relatedLinks && article.relatedLinks.length > 0 ? (
          <nav className="mt-14 flex flex-wrap gap-3" aria-label="related links">
            {article.relatedLinks.map((link) => (
              <GhostButton key={link.href} href={link.href}>
                {link.label}
              </GhostButton>
            ))}
          </nav>
        ) : null}
      </Section>

      {others.length > 0 ? (
        <Section theme="ink">
          <Kicker theme="ink">more from the journal</Kicker>
          <div className="mt-6">
            <LinkIndex>
              {others.map((other) => (
                <LinkRow key={other.slug} href={`/journal/${other.slug}`} name={other.h1} description="" />
              ))}
            </LinkIndex>
          </div>
        </Section>
      ) : null}
    </>
  );
}
