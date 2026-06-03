import { SectorPage } from "./SectorPage"

export function Infrastructure() {
  return (
    <SectorPage
      name="Infrastructure & Construction"
      statement="Major infrastructure programmes run on waterfall governance and PMO rigour. We help you adopt AI and agile delivery without bypassing that accountability."
      challenge={
        <>
          <p>Major infrastructure programmes run on waterfall governance and PMO rigour. AI adoption threatens to bypass that accountability — and delivery directors know it.</p>
          <p style={{ marginTop: 16 }}>We design AI governance and delivery models that integrate with NEC contracts, stage-gate programmes, and the assurance your board expects. You get the benefits of modern delivery without losing control.</p>
        </>
      }
      howWeHelp={
        <>
          <ul style={{ paddingLeft: 20 }}>
            <li>AI governance frameworks built for programme environments</li>
            <li>Squad-based delivery that integrates with existing PMO structures</li>
            <li>Structured agile that works alongside NEC contracts and stage-gate programmes</li>
            <li>Digital capability building that doesn't require replacing your workforce</li>
          </ul>
        </>
      }
      standards="NEC, PRINCE2, IPA guidance, and your existing programme assurance frameworks."
      path="/sectors/infrastructure"
    />
  )
}
