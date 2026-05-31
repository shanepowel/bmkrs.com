import { SectorPage } from "./SectorPage"

export function PublicSector() {
  return (
    <SectorPage
      name="Public Sector"
      statement="Public sector organisations must demonstrate value for money, transparent governance, and accountable delivery. We were trained on it."
      challenge={
        <>
          <p>Public sector organisations must demonstrate value for money, transparent governance, and accountable delivery. Most digital partners struggle with that combination. We were trained on it.</p>
          <p style={{ marginTop: 16 }}>We deliver within procurement and assurance frameworks — DDaT-aligned, GDS-compatible, and built for accountability.</p>
        </>
      }
      howWeHelp={
        <>
          <ul style={{ paddingLeft: 20 }}>
            <li>DDaT-aligned delivery models</li>
            <li>AI governance compatible with GDS standards and the UK AI framework</li>
            <li>Squad models that work within procurement and assurance frameworks</li>
            <li>Capability programmes aligned to Digital, Data and Technology profession standards</li>
          </ul>
        </>
      }
      standards="GDS standards, UK AI framework, DDaT profession, and your procurement and assurance frameworks."
      path="/sectors/public-sector"
    />
  )
}
