import { ServicePage } from "./ServicePage"

export function StructuredDelivery() {
  return (
    <ServicePage
      label="AMP 03"
      title="Structured Delivery"
      positioning="Squad-based delivery designed for organisations where PMO governance, stage gates, and contract structures are non-negotiable — not obstacles."
      challenge="Agile delivery often clashes with programme governance, NEC contracts, and stage-gate approvals. We design operating models and squad structures that work within your constraints — so you get the benefits of agile without the chaos."
      whatWeDo={[
        { title: "Agile operating model design for PM-heavy industries", description: "Operating models that fit infrastructure, energy, and regulated sectors." },
        { title: "Squad implementation with PMO integration", description: "Squads that report in ways your PMO and board recognise." },
        { title: "Hybrid agile/waterfall frameworks", description: "Frameworks that respect stage gates and contract milestones while enabling iterative delivery." },
        { title: "Programme-level reporting your board recognises", description: "Clear, accountable reporting that fits your governance." },
      ]}
      frameworks="NEC, PRINCE2, DDaT delivery models, and your existing programme governance."
      path="/structured-delivery"
    />
  )
}
