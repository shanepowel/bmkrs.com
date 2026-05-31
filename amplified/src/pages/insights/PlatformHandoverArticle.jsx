import { ArticlePage } from "./ArticlePage"

export function PlatformHandoverArticle() {
  return (
    <ArticlePage
      category="DIGITAL GROWTH"
      title="From Build to Scale: Platform Handover That Works"
      description="Why documentation and capability transfer matter as much as the build itself."
      readTime="6 min read"
      path="/insights/platform-handover"
    >
      <p>
        A platform is only as good as the team that can run it. Too many web and product builds end with a handover document that nobody reads and a support contract that never gets used properly. The result: technical debt, knowledge silos, and dependency on the original build team.
      </p>
      <p>
        We treat handover as a phase, not a moment. Documentation that matches how your team actually works. Knowledge transfer that happens during delivery, not in a final week. And a clear definition of "done" that includes your team being able to iterate without us.
      </p>
      <p>
        Whether you're scaling a product or taking over a platform we've built, we design for the day after we leave. If that's the standard you're looking for, we should talk.
      </p>
    </ArticlePage>
  )
}
