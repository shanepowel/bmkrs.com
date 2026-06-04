import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { HowWeWork } from "./pages/HowWeWork"
import { Contact } from "./pages/Contact"
import { AiGovernance } from "./pages/services/AiGovernance"
import { AiImplementation } from "./pages/services/AiImplementation"
import { StructuredDelivery } from "./pages/services/StructuredDelivery"
import { Capability } from "./pages/services/Capability"
import { WebBuilds } from "./pages/services/WebBuilds"
import { UxConversion } from "./pages/services/UxConversion"
import { PerformanceMarketing } from "./pages/services/PerformanceMarketing"
import { Infrastructure } from "./pages/sectors/Infrastructure"
import { Energy } from "./pages/sectors/Energy"
import { Financial } from "./pages/sectors/Financial"
import { PublicSector } from "./pages/sectors/PublicSector"
import { InsightsHub } from "./pages/insights/InsightsHub"
import { AiGovernanceGapArticle } from "./pages/insights/AiGovernanceGapArticle"
import { SquadDeliveryArticle } from "./pages/insights/SquadDeliveryArticle"
import { PlatformHandoverArticle } from "./pages/insights/PlatformHandoverArticle"
import { Privacy } from "./pages/Privacy"
import { Terms } from "./pages/Terms"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/transformation" element={<Navigate to="/how-we-work" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ai-governance" element={<AiGovernance />} />
        <Route path="/ai-implementation" element={<AiImplementation />} />
        <Route path="/structured-delivery" element={<StructuredDelivery />} />
        <Route path="/capability" element={<Capability />} />
        <Route path="/web-builds" element={<WebBuilds />} />
        <Route path="/ux-and-conversion" element={<UxConversion />} />
        <Route path="/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/sectors/infrastructure" element={<Infrastructure />} />
        <Route path="/sectors/energy" element={<Energy />} />
        <Route path="/sectors/financial" element={<Financial />} />
        <Route path="/sectors/public-sector" element={<PublicSector />} />
        <Route path="/insights" element={<InsightsHub />} />
        <Route path="/insights/ai-governance-gap-infrastructure" element={<AiGovernanceGapArticle />} />
        <Route path="/insights/squad-delivery-regulated" element={<SquadDeliveryArticle />} />
        <Route path="/insights/platform-handover" element={<PlatformHandoverArticle />} />
        <Route path="/press" element={<Navigate to="/insights" replace />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}
