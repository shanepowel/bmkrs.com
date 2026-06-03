import { SectorPage } from "./SectorPage"

export function Financial() {
  return (
    <SectorPage
      name="Financial Services"
      statement="FS organisations live under regulatory microscopes. We deliver AI governance and delivery that meets FCA expectations and commercial necessity."
      challenge={
        <>
          <p>FS organisations live under regulatory microscopes. AI governance isn't a nice-to-have — it's an FCA expectation and a commercial necessity.</p>
          <p style={{ marginTop: 16 }}>We design governance and delivery that fits your compliance culture and connects to Consumer Duty, model risk, and change governance.</p>
        </>
      }
      howWeHelp={
        <>
          <ul style={{ paddingLeft: 20 }}>
            <li>EU AI Act and FCA Consumer Duty-aligned governance frameworks</li>
            <li>Explainability and auditability built into every AI delivery</li>
            <li>Agile delivery structured around compliance gates and change management</li>
            <li>Model risk management and AI assurance frameworks</li>
          </ul>
        </>
      }
      standards="FCA Consumer Duty, EU AI Act, model risk management, and your existing change governance."
      path="/sectors/financial"
    />
  )
}
