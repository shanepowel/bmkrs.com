'use client';

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StructuredData } from "@/components/structured-data";
import { insightsHubSchema } from "@/lib/schemas";
import { Calendar, ArrowRight, Clock, Search, Filter } from "lucide-react";
import dynamic from "next/dynamic";
const NewsletterModal = dynamic(() => import("@/components/newsletter-modal"), { ssr: false });
import Image from "next/image";
import type { InsightItem } from "@/lib/content/types";
import {
  AmpButton,
  BorderGrid,
  Eyebrow,
  Grid,
  PageShell,
  Section,
  Stack,
  Text,
} from "@/components/system";

interface InsightsProps {
  onOpenConsultation: (serviceType?: string) => void;
}

interface ArticleContent {
  type?: string;
  description?: string;
  image?: string;
  date?: string;
  readTime?: string;
  author?: string;
  keyTakeaways?: string[];
  sources?: string;
}

export default function Insights({ onOpenConsultation }: InsightsProps) {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [newsletterMounted, setNewsletterMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("date-desc");

  const { data: response, isLoading } = useQuery<{ success: boolean; data: InsightItem[] }>({
    queryKey: ["/api/cms/content", "insight"],
  });

  const articles = response?.data || [];

  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((article) => {
        const content = article.content as ArticleContent;
        return (
          article.title.toLowerCase().includes(query) ||
          content.description?.toLowerCase().includes(query) ||
          content.author?.toLowerCase().includes(query)
        );
      });
    }

    if (selectedType && selectedType !== "all") {
      filtered = filtered.filter((article) => {
        const content = article.content as ArticleContent;
        return content.type?.toLowerCase() === selectedType.toLowerCase();
      });
    }

    filtered.sort((a, b) => {
      const aContent = a.content as ArticleContent;
      const bContent = b.content as ArticleContent;
      if (sortBy === "date-desc") {
        return new Date(bContent.date || 0).getTime() - new Date(aContent.date || 0).getTime();
      } else if (sortBy === "date-asc") {
        return new Date(aContent.date || 0).getTime() - new Date(bContent.date || 0).getTime();
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return filtered;
  }, [articles, searchQuery, selectedType, sortBy]);

  const articleTypes = useMemo(() => {
    const types = new Set<string>();
    articles.forEach((article) => {
      const content = article.content as ArticleContent;
      if (content.type) types.add(content.type);
    });
    return Array.from(types).sort();
  }, [articles]);

  const featuredArticles = filteredArticles?.slice(0, 2) || [];
  const regularArticles = filteredArticles?.slice(2) || [];

  useEffect(() => {
    const win = window as Window & { _hsq?: Array<[string, string?]> };
    if (typeof window !== "undefined" && win._hsq) {
      win._hsq.push(["setPath", "/insights"]);
      win._hsq.push(["trackPageView"]);
    }
  }, []);

  return (
    <>
      <StructuredData data={insightsHubSchema as Record<string, unknown>} id="insights-hub-schema" />
      <PageShell className="bg-[#FAFAF9]">

        <Section tone="navy" padding="hero">
          <Grid cols="2-lg" gap="xl" className="items-end">
            <div>
              <Eyebrow className="mb-3">Insights</Eyebrow>
              <Text variant="h1" tone="white" data-testid="text-insights-page-title">
                Notes from the studio
              </Text>
            </div>
            <Stack gap="md">
              <Text variant="body" tone="white-70">
                What we&apos;re learning while we make brands, products and AI, for us and for clients.
                Practical, short where it can be, and written in plain English.
              </Text>
              <div className="flex flex-wrap gap-3">
                {["AI", "Tokenomics", "Products", "Brand"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/20 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-white/55"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Stack>
          </Grid>
        </Section>

        <Section tone="mist" padding="sm" className="border-b border-[#DDD9EA] py-8">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="relative max-w-xl flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
              <Input
                type="text"
                placeholder="Search by title, topic, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded border-0 bg-white py-5 pl-11 pr-4 font-sans text-sm text-[#181F4F] shadow-none"
                data-testid="input-search-insights"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#6B6E81]" />
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger aria-label="Filter insights by type" className="w-[180px] border-0 bg-white font-sans text-sm shadow-none" data-testid="select-type-filter">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {articleTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#6B6E81]" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger aria-label="Sort insights" className="w-[160px] border-0 bg-white font-sans text-sm shadow-none" data-testid="select-sort-by">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-desc">Newest First</SelectItem>
                  <SelectItem value="date-asc">Oldest First</SelectItem>
                  <SelectItem value="title">Title A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Text as="span" variant="mono" tone="subtle" className="ml-auto">
              {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
            </Text>
          </div>
        </Section>

        <Section tone="transparent" padding="md" className="py-20 lg:py-28">
          {isLoading ? (
            <Grid cols="2-lg" gap="lg" className="mb-16">
              {[1, 2].map((i) => (
                <div key={i} className="overflow-hidden rounded border border-[#E5E3EE]">
                  <Skeleton className="h-64 w-full" />
                  <div className="space-y-4 p-8">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>
              ))}
            </Grid>
          ) : (
            <>
              {featuredArticles.length > 0 && (
                <Stack gap="lg" className="mb-20">
                  <Stack gap="xs">
                    <Eyebrow tone="subtle">Featured</Eyebrow>
                    <Text variant="h2" data-testid="text-featured-insights">Latest notes</Text>
                  </Stack>

                  <Grid cols="2-lg" gap="lg">
                    {featuredArticles.map((article) => {
                      const content = (article.content || {}) as ArticleContent;
                      return (
                        <Link href={`/insights/${article.slug}`} key={article.id} className="amp-focus-ring-on-light group block" data-testid={`card-featured-${article.slug}`}>
                          <div className="h-full overflow-hidden rounded border border-[#E5E3EE] bg-white transition-all duration-300 hover:border-[#C8C4D8]">
                            <div className="relative h-[280px] overflow-hidden">
                              <Image
                                src={content.image || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                                alt={article.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                data-testid={`img-featured-${article.slug}`}
                                priority
                                fetchPriority="high"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#181F4F]/70 via-transparent to-transparent" />
                              <div className="absolute top-5 left-5">
                                <span className="rounded bg-[#181F4F]/85 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-[#F85C70]">
                                  {content.type || "Insight"}
                                </span>
                              </div>
                              <div className="absolute bottom-5 left-5 flex items-center gap-4">
                                {content.date && (
                                  <span className="font-sans text-xs text-white/75">
                                    {new Date(content.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
                                  </span>
                                )}
                                {content.readTime && (
                                  <span className="flex items-center gap-1 font-sans text-xs text-white/75">
                                    <Clock className="h-3 w-3" /> {content.readTime}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="p-8">
                              <Text
                                variant="h3"
                                className="mb-4 transition-colors duration-200"
                                data-testid={`text-featured-title-${article.slug}`}
                              >
                                {article.title}
                              </Text>
                              <Text variant="small" tone="muted" className="mb-6">
                                {content.description}
                              </Text>
                              {content.keyTakeaways && content.keyTakeaways.length > 0 && (
                                <div className="mb-6 border-l-2 border-[#F85C70] pl-4">
                                  <Eyebrow tone="subtle" className="mb-3">Key Takeaways</Eyebrow>
                                  <ul className="space-y-2">
                                    {content.keyTakeaways.slice(0, 3).map((t: string, idx: number) => (
                                      <li key={idx}>
                                        <Text variant="caption" tone="muted">{t}</Text>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              <span
                                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#F85C70] transition-all duration-200 group-hover:gap-3"
                                data-testid={`button-featured-cta-${article.slug}`}
                              >
                                Read full article <ArrowRight className="h-3 w-3" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </Grid>
                </Stack>
              )}

              {regularArticles.length > 0 && (
                <Stack gap="lg" className="mb-20">
                  <Stack gap="xs">
                    <Eyebrow tone="subtle">All Insights</Eyebrow>
                    <Text variant="h2" data-testid="text-all-insights">All notes</Text>
                  </Stack>

                  <BorderGrid cols={3}>
                    {regularArticles.map((article) => {
                      const content = (article.content || {}) as ArticleContent;
                      return (
                        <Link href={`/insights/${article.slug}`} key={article.id} className="amp-focus-ring-on-light group block h-full" data-testid={`link-insight-${article.slug}`}>
                          <div className="amp-border-cell amp-equal-card flex h-full flex-col transition-all duration-200 hover:bg-[#F9F8FC]">
                            <div className="relative h-[200px] overflow-hidden">
                              <Image
                                src={content.image || "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                                alt={article.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                data-testid={`img-insight-${article.slug}`}
                                loading="lazy"
                              />
                              {content.type && (
                                <div className="absolute top-4 left-4">
                                  <span className="rounded bg-[#181F4F]/80 px-2 py-1 font-mono text-xs uppercase tracking-[0.08em] text-[#F85C70]">
                                    {content.type}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                              <Text
                                variant="h4"
                                clamp={2}
                                className="mb-3 transition-opacity group-hover:opacity-75"
                                data-testid={`text-insight-title-${article.slug}`}
                              >
                                {article.title}
                              </Text>
                              <Text variant="small" tone="muted" clamp={3} className="mb-4 flex-1">
                                {content.description}
                              </Text>
                              <div className="flex items-center justify-between">
                                <Text as="span" variant="caption" tone="subtle">
                                  {content.date
                                    ? new Date(content.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })
                                    : "Recent"}
                                </Text>
                                {content.readTime && (
                                  <Text as="span" variant="caption" tone="subtle" className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" /> {content.readTime}
                                  </Text>
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </BorderGrid>
                </Stack>
              )}

              {filteredArticles.length === 0 && !isLoading && (
                <div className="py-24 text-center">
                  <Text variant="h3" className="mb-3">No articles found</Text>
                  <Text variant="small" tone="muted">Try adjusting your search or filter.</Text>
                </div>
              )}
            </>
          )}

          <BorderGrid cols="2-lg" className="mt-8 border-[#DDD9EA] bg-[#F2F0F7]">
            <div className="amp-border-cell amp-equal-card border-[#DDD9EA] p-10">
              <Eyebrow tone="subtle" className="mb-4">Stay Current</Eyebrow>
              <Text variant="h2" className="mb-4">Get insights direct to your inbox</Text>
              <Text variant="small" tone="muted" className="mb-8">
                New notes on brands, products and AI, sent when we have something worth saying.
              </Text>
              <AmpButton
                variant="navy"
                size="md"
                onClick={() => { setNewsletterMounted(true); setIsNewsletterOpen(true); }}
                data-testid="button-subscribe-insights"
              >
                Subscribe to Insights
              </AmpButton>
            </div>

            <div className="amp-border-cell amp-equal-card border-[#DDD9EA] p-10">
              <Eyebrow tone="subtle" className="mb-4">Work With Us</Eyebrow>
              <Text variant="h2" className="mb-4">Need a straight answer?</Text>
              <Text variant="small" tone="muted" className="mb-8">
                Whether it&apos;s a new product, an AI build or an AI bill that needs taming, we&apos;ll give
                you an honest view of where to start. No slide decks in the first meeting.
              </Text>
              <AmpButton
                variant="outlineDark"
                size="md"
                onClick={() => onOpenConsultation()}
                data-testid="button-expert-consultation"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </AmpButton>
            </div>
          </BorderGrid>
        </Section>

        {newsletterMounted && (
          <NewsletterModal
            isOpen={isNewsletterOpen}
            onClose={() => setIsNewsletterOpen(false)}
          />
        )}
      </PageShell>
    </>
  );
}
