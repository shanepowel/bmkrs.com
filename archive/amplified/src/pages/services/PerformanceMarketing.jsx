import { ServicePage } from "./ServicePage"

export function PerformanceMarketing() {
  return (
    <ServicePage
      label="AMP 07"
      title="Performance Marketing"
      positioning="We don't report on impressions. We report on pipeline. Paid search, SEO, and content built around commercial outcomes — with attribution that connects spend to revenue."
      challenge={null}
      whatWeDo={[
        { title: "Paid search (Google / Microsoft Ads)", description: "Campaigns built around conversion and pipeline, not vanity metrics." },
        { title: "SEO — technical, on-page, and link acquisition", description: "Sustainable organic growth that compounds." },
        { title: "Content strategy and production", description: "Content that serves users and search, aligned to commercial goals." },
        { title: "Analytics, attribution, and reporting", description: "Clear line of sight from spend to revenue." },
      ]}
      frameworks={null}
      path="/performance-marketing"
    />
  )
}
