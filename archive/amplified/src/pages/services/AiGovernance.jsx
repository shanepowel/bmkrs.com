import { ServicePage } from "./ServicePage"

export function AiGovernance() {
  return (
    <ServicePage
      label="AMP 01"
      title="AI Governance"
      positioning="We build governance foundations before your teams write a line of code — frameworks that stand up to regulatory scrutiny, audit, and board challenge."
      challenge="Regulated industries face mounting pressure to adopt AI while maintaining accountability. Without governance that integrates with existing PMO and assurance structures, AI initiatives risk bypassing the very controls that protect your organisation and your customers. We design governance that fits your sector — not generic best practice."
      whatWeDo={[
        { title: "AI readiness assessments and risk frameworks", description: "Structured assessment of your current capability, risk appetite, and regulatory alignment before any implementation begins." },
        { title: "Responsible AI policy and ethics governance", description: "Policies and decision frameworks that your board can stand behind and auditors can verify." },
        { title: "EU AI Act and UK AI framework alignment", description: "Governance that meets current and anticipated regulatory requirements without over-engineering." },
        { title: "Auditability and explainability standards", description: "Clear standards so every AI delivery can be explained and audited." },
        { title: "Board-level AI risk reporting", description: "Reporting structures that give leadership the right information at the right cadence." },
      ]}
      frameworks="EU AI Act, UK AI Regulation, sector-specific regulation (FCA, OFGEM, DDaT), and your existing assurance frameworks."
      path="/ai-governance"
    />
  )
}
