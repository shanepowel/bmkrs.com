import { SectorPage } from "./SectorPage"

export function Energy() {
  return (
    <SectorPage
      name="Energy & Utilities"
      statement="Energy organisations face regulatory scrutiny and operational risk. We deliver AI and digital capability that passes governance gates most consultancies have never encountered."
      challenge={
        <>
          <p>Energy organisations face regulatory scrutiny and operational risk. AI implementations need to pass governance gates that most consultancies have never encountered.</p>
          <p style={{ marginTop: 16 }}>We bring sector literacy and governance-first delivery — so you can adopt AI and agile without compromising safety or compliance.</p>
        </>
      }
      howWeHelp={
        <>
          <ul style={{ paddingLeft: 20 }}>
            <li>Responsible AI frameworks aligned to OFGEM and sector regulation</li>
            <li>Structured delivery that accommodates safety-critical review cycles</li>
            <li>AI readiness audits before implementation begins</li>
            <li>Capability programmes for technically diverse workforces</li>
          </ul>
        </>
      }
      standards="OFGEM, safety-case frameworks, and sector-specific regulation."
      path="/sectors/energy"
    />
  )
}
