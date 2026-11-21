'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Download, Share2, BookOpen, TrendingUp, Users, Shield, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { StructuredData } from "@/components/structured-data";
import { createArticleSchema, createBreadcrumbSchema, createFAQSchema } from "@/lib/schemas";
import DOMPurify from 'isomorphic-dompurify';
import {
  AmpButton,
  BreadcrumbBar,
  Container,
  CtaBand,
  Eyebrow,
  PageShell,
  Section,
  Stack,
  Surface,
  Text,
} from "@/components/system";

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedService {
  label: string;
  href: string;
}

interface ArticleContent {
  id: string;
  type: string;
  title: string;
  slug: string;
  content: {
    description?: string;
    body?: string;
    image?: string;
    date?: string;
    readTime?: string;
    author?: string;
    keyTakeaways?: string[];
    sources?: string;
    faq?: FAQItem[];
    tags?: string[];
    relatedServices?: RelatedService[];
  };
  status: string;
  lastModified: string;
  modifiedBy: string;
  version: number;
}

interface ArticleDetailProps {
  onOpenConsultation: (serviceType?: string) => void;
}

function formatArticleContent(content: string): string {
  let html = content;
  
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/```([\s\S]+?)```/g, '<pre><code>$1</code></pre>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  const lines = html.split('\n');
  const processedLines: string[] = [];
  let inUnorderedList = false;
  let inOrderedList = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isUnorderedItem = /^. (.+)$/.test(line);
    const isOrderedItem = /^\d+\. (.+)$/.test(line);
    
    if (isUnorderedItem) {
      if (inOrderedList) { processedLines.push('</ol>'); inOrderedList = false; }
      if (!inUnorderedList) { processedLines.push('<ul>'); inUnorderedList = true; }
      processedLines.push(line.replace(/^. (.+)$/, '<li>$1</li>'));
    } else if (isOrderedItem) {
      if (inUnorderedList) { processedLines.push('</ul>'); inUnorderedList = false; }
      if (!inOrderedList) { processedLines.push('<ol>'); inOrderedList = true; }
      processedLines.push(line.replace(/^\d+\. (.+)$/, '<li>$1</li>'));
    } else {
      if (inUnorderedList) { processedLines.push('</ul>'); inUnorderedList = false; }
      if (inOrderedList) { processedLines.push('</ol>'); inOrderedList = false; }
      processedLines.push(line);
    }
  }
  
  if (inUnorderedList) processedLines.push('</ul>');
  if (inOrderedList) processedLines.push('</ol>');
  
  html = processedLines.join('\n');
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.split('\n\n').map(para => {
    if (para.startsWith('<') || para.trim() === '') return para;
    return `<p>${para.replace(/\n/g, '<br />')}</p>`;
  }).join('\n');
  
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'p', 'strong', 'em', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'br', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel']
  });
}

function getTypeIcon(type: string) {
  switch (type.toLowerCase()) {
    case "white paper":
    case "research synthesis": return BookOpen;
    case "research report": return TrendingUp;
    case "thought leadership": return Users;
    case "emergency guide": return Shield;
    default: return BookOpen;
  }
}

const defaultRelatedServices: RelatedService[] = [
  { label: "AI and automation", href: "/ai" },
  { label: "AI tokenomics", href: "/ai/tokenomics" },
  { label: "EmberNest", href: "/ai/embernest" },
  { label: "Digital products", href: "/services/products" },
];

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Stack gap="sm">
      {faqs.map((faq, index) => (
        <Surface key={index} variant="bordered" padding="none" radius="md" className="overflow-hidden">
          <button
            className="amp-focus-ring-on-light flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-colors duration-150 hover:bg-gray-50"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <Text as="span" variant="body" className="font-semibold leading-snug">
              {faq.question}
            </Text>
            <span className="mt-0.5 shrink-0 text-[#F85C70]">
              {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </span>
          </button>
          {openIndex === index && (
            <div className="border-t border-[#E5E3EE] px-6 pb-5">
              <Text variant="small" tone="muted" className="pt-4">
                {faq.answer}
              </Text>
            </div>
          )}
        </Surface>
      ))}
    </Stack>
  );
}

export default function ArticleDetail({ onOpenConsultation }: ArticleDetailProps) {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const [article, setArticle] = useState<ArticleContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      try {
        setIsLoading(true);
        const response = await fetch(`/api/cms/content/slug/${slug}`);
        const data = await response.json();
        if (!data.success) { setError("Article not found"); return; }
        setArticle(data.data);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError("Failed to load article");
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);

  const articleTags = article?.content?.tags || [];
  const articleFaqs = article?.content?.faq || [];
  const articleRelatedServices = article?.content?.relatedServices || defaultRelatedServices;


  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.content?.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: "Link copied", description: "Article link copied to clipboard" });
    }
  };

  const handleDownload = () => {
    toast({ title: "Download initiated", description: "Your article download will begin shortly" });
  };

  if (isLoading) {
    return (
      <PageShell className="bg-background">
        <Section tone="transparent" padding="md" contained={false}>
          <Container size="narrow">
            <div className="animate-pulse space-y-8 py-20">
              <div className="h-8 w-1/4 rounded bg-muted" />
              <div className="h-12 w-3/4 rounded bg-muted" />
              <div className="h-64 rounded bg-muted" />
              <div className="space-y-4">
                <div className="h-4 rounded bg-muted" />
                <div className="h-4 rounded bg-muted" />
                <div className="h-4 w-5/6 rounded bg-muted" />
              </div>
            </div>
          </Container>
        </Section>
      </PageShell>
    );
  }

  if (error || !article) {
    return (
      <PageShell className="bg-background">
        <Section tone="transparent" padding="md" contained={false}>
          <Container size="narrow" className="py-20 text-center">
            <Text variant="h2" className="mb-4">Article Not Found</Text>
            <Text variant="lead" tone="muted" className="mb-8">
              The article you are looking for does not exist or has been removed.
            </Text>
            <AmpButton asChild data-testid="button-back-to-insights">
              <Link href="/insights">
                <ArrowLeft className="h-4 w-4" />
                Back to Insights
              </Link>
            </AmpButton>
          </Container>
        </Section>
      </PageShell>
    );
  }

  const Icon = getTypeIcon(article.type);
  const dateIso = article.content?.date ? new Date(article.content.date).toISOString() : new Date().toISOString();
  const dateDisplay = article.content?.date
    ? new Date(article.content.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  const articleSchema = createArticleSchema({
    headline: article.title,
    description: article.content?.description || '',
    url: `https://bmkrs.com/insights/${article.slug}`,
    datePublished: dateIso,
    dateModified: article.lastModified ? new Date(article.lastModified).toISOString() : dateIso,
    authorName: article.content?.author || 'bmkrs',
    image: article.content?.image || undefined,
    keywords: articleTags.length > 0
      ? articleTags
      : ['AI', 'AI tokenomics', 'digital products', 'brand'],
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://bmkrs.com/' },
    { name: 'Insights', url: 'https://bmkrs.com/insights' },
    { name: article.title, url: `https://bmkrs.com/insights/${article.slug}` },
  ]);

  const faqSchema = articleFaqs.length > 0 ? createFAQSchema(articleFaqs) : null;

  return (
    <PageShell className="relative overflow-hidden bg-background">
      <StructuredData data={articleSchema} id="article-schema" />
      <StructuredData data={breadcrumbSchema} id="article-breadcrumb" />
      {faqSchema && <StructuredData data={faqSchema} id="article-faq-schema" />}

      <div className="absolute inset-0 modern-pattern opacity-5" aria-hidden="true" />

      <BreadcrumbBar
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: article.title },
        ]}
      />

      <Section tone="transparent" padding="md" contained={false} className="relative z-10">
        <Container size="narrow">
          <AmpButton asChild variant="ghostDark" size="sm" className="mb-8" data-testid="button-back">
            <Link href="/insights">
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Link>
          </AmpButton>

          <Stack gap="lg" className="mb-12">
            <div className="flex flex-wrap gap-2">
              <Surface variant="navy" padding="sm" radius="sm" className="inline-flex items-center gap-2 text-sm">
                <Icon className="h-4 w-4" />
                {article.type}
              </Surface>
              {articleTags.map((tag) => (
                <Surface key={tag} variant="bordered" padding="sm" radius="sm" className="text-xs text-[#65677B]">
                  {tag}
                </Surface>
              ))}
            </div>

            <Text variant="h1" data-testid="text-article-title">{article.title}</Text>

            {article.content?.description && (
              <Text variant="lead" tone="muted">{article.content.description}</Text>
            )}

            <Stack direction="row-responsive" gap="lg" className="flex-wrap border-b border-border/50 pb-8 text-sm text-muted-foreground">
              {dateDisplay && (
                <Stack direction="row" gap="xs" align="center">
                  <Calendar className="h-4 w-4 text-[#F85C70]" />
                  <time dateTime={dateIso} className="font-medium">{dateDisplay}</time>
                </Stack>
              )}
              {article.content?.readTime && (
                <Stack direction="row" gap="xs" align="center">
                  <Clock className="h-4 w-4 text-[#F85C70]" />
                  <span className="font-medium">{article.content.readTime}</span>
                </Stack>
              )}
              {article.content?.author && (
                <Stack direction="row" gap="xs" align="center">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F85C70]" aria-hidden="true" />
                  <span>
                    By{' '}
                    <Link href="/about" className="amp-focus-ring-on-light font-semibold text-foreground hover:text-[#F85C70] transition-colors">
                      {article.content.author}
                    </Link>
                  </span>
                </Stack>
              )}
            </Stack>

            <Stack direction="row-responsive" gap="sm" className="flex-wrap">
              <AmpButton onClick={handleDownload} data-testid="button-download-article">
                <Download className="h-4 w-4" />
                Download PDF
              </AmpButton>
              <AmpButton variant="outlineDark" onClick={handleShare} data-testid="button-share-article">
                <Share2 className="h-4 w-4" />
                Share
              </AmpButton>
              <AmpButton variant="outlineDark" onClick={() => onOpenConsultation()} data-testid="button-discuss-article">
                Discuss with Expert
              </AmpButton>
            </Stack>
          </Stack>

          {article.content?.image && (
            <div className="mb-12 overflow-hidden rounded-2xl border border-border/50 bg-muted shadow-medium crystalline-border">
              <Image
                src={article.content.image}
                alt={article.title}
                className="h-auto w-full object-cover"
                data-testid="img-article-featured"
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 800px"
                width={800}
                height={600}
              />
            </div>
          )}

          {article.content?.keyTakeaways && article.content.keyTakeaways.length > 0 && (
            <Surface variant="mist" padding="lg" radius="lg" border="hairline" className="mb-12 border-[#F85C70]/20">
              <Text variant="h2" className="mb-6">Key Points</Text>
              <Stack gap="md">
                {article.content.keyTakeaways.map((takeaway, index) => (
                  <Stack key={index} direction="row" gap="md" align="start">
                    <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[#F85C70]" aria-hidden="true" />
                    <Text variant="body">{takeaway}</Text>
                  </Stack>
                ))}
              </Stack>
            </Surface>
          )}

          {article.content?.body && (
            <div className="prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-foreground prose-p:leading-relaxed prose-p:text-base prose-p:mb-6 prose-strong:text-foreground prose-strong:font-semibold prose-ul:text-foreground prose-ul:my-6 prose-ol:text-foreground prose-ol:my-6 prose-li:text-foreground prose-li:text-base prose-li:leading-relaxed prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:text-foreground prose-blockquote:italic prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-6 prose-code:text-accent prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:overflow-x-auto prose-pre:my-6 prose-hr:my-8 prose-hr:border-border mb-12 max-w-none" data-testid="text-article-body">
              <div 
                className="article-content [&_h2]:scroll-mt-20 [&_h3]:scroll-mt-20"
                dangerouslySetInnerHTML={{ __html: formatArticleContent(article.content.body) }}
              />
            </div>
          )}

          {articleFaqs.length > 0 && (
            <Stack gap="md" className="mb-12">
              <Stack gap="xs">
                <Eyebrow>Frequently Asked Questions</Eyebrow>
                <Text variant="h2">Common Questions</Text>
              </Stack>
              <FAQAccordion faqs={articleFaqs} />
            </Stack>
          )}

          <Surface variant="mist" padding="md" radius="lg" className="mb-12">
            <Eyebrow className="mb-4">Related Services</Eyebrow>
            <div className="flex flex-wrap gap-3">
              {articleRelatedServices.map((s) => (
                <AmpButton key={s.href} asChild size="sm" variant="navy">
                  <Link href={s.href}>
                    {s.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </AmpButton>
              ))}
            </div>
          </Surface>

          {article.content?.sources && (
            <Surface variant="bordered" padding="md" className="mb-12">
              <Text variant="h4" className="mb-3 uppercase tracking-wider">Research Sources</Text>
              <Text variant="small" tone="muted" className="italic">
                {article.content.sources}
              </Text>
            </Surface>
          )}
        </Container>
      </Section>

      <CtaBand
        title="Ready to implement this?"
        lead="Our partners can help you apply these ideas inside your programme. Book a consultation to discuss your specific situation."
        className="relative z-10"
      >
        <Stack direction="row-responsive" gap="md" justify="center" className="flex-wrap">
          <AmpButton size="lg" onClick={() => onOpenConsultation()} data-testid="button-book-consultation">
            Book a Consultation
          </AmpButton>
          <AmpButton asChild size="lg" variant="outlineLight" data-testid="button-more-insights">
            <Link href="/insights">Explore More Insights</Link>
          </AmpButton>
        </Stack>
      </CtaBand>
    </PageShell>
  );
}
