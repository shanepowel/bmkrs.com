import { PageMeta } from "../components/shared/PageMeta"
import { Hero } from "../components/home/Hero"
import { CredBar } from "../components/home/CredBar"
import { Tension } from "../components/home/Tension"
import { AmpModel } from "../components/home/AmpModel"
import { SectorTabs } from "../components/home/SectorTabs"
import { StatsBar } from "../components/home/StatsBar"
import { Insights } from "../components/home/Insights"
import { CTA } from "../components/home/CTA"
import { Nav } from "../components/layout/Nav"
import { Footer } from "../components/layout/Footer"

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Amplified | AI Governance, Structured Delivery & Digital Growth"
        description="Amplified helps regulated-industry organisations adopt AI responsibly and build high-performance digital platforms. AI governance, structured agile delivery, web builds."
        ogTitle="Amplified | Amp Up Your Capability"
        ogDescription="AI governance and structured delivery for industries where rigour isn't optional. We have an Amp for that."
        path="/"
      />
      <Nav />
      <main>
        <Hero />
        <CredBar />
        <Tension />
        <AmpModel />
        <SectorTabs />
        <StatsBar />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
