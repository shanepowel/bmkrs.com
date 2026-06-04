import { ServicePage } from "./ServicePage"

export function AiImplementation() {
  return (
    <ServicePage
      label="AMP 02"
      title="AI Implementation"
      positioning="We don't just advise. We embed with your teams and deliver AI capabilities that work inside your existing accountability structures — not around them."
      challenge="Many AI implementations fail because they're delivered in isolation from governance and PMO. We deliver AI use cases with governance gates built in, so your programme stays accountable and your teams own the outcome."
      whatWeDo={[
        { title: "AI use case prioritisation and proof of concept", description: "Structured prioritisation and fast proof of concept so you invest in the right use cases." },
        { title: "Production deployment with governance gates built in", description: "Deployment that integrates with your existing change and release governance." },
        { title: "Integration with existing PMO and programme frameworks", description: "We work inside your structures, not in a parallel workstream." },
        { title: "Handover with internal capability transfer", description: "Every engagement ends with your teams able to run and evolve what we've built." },
      ]}
      frameworks="Your existing programme and change governance; EU AI Act and sector regulation where applicable."
      path="/ai-implementation"
    />
  )
}
