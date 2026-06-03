import { ServicePage } from "./ServicePage"

export function Capability() {
  return (
    <ServicePage
      label="AMP 04"
      title="Capability Building"
      positioning="Every engagement ends with your teams running it independently. Product Owner programmes, Centres of Excellence, AI literacy — capability that compounds."
      challenge="Consultancy that leaves when the contract ends creates dependency. We build capability into every engagement so your teams can own and evolve what we've delivered — reducing long-term cost and risk."
      whatWeDo={[
        { title: "Product Owner and PM development programmes", description: "Structured development so your people can lead delivery." },
        { title: "Centre of Excellence design and setup", description: "CoE models that fit your organisation and scale." },
        { title: "AI literacy for non-technical teams", description: "Practical understanding so the whole organisation can engage with AI responsibly." },
        { title: "Embedded upskilling alongside live delivery", description: "Capability transfer that happens during delivery, not as an afterthought." },
      ]}
      frameworks="DDaT profession standards, your internal L&D frameworks, and role-based competency models."
      path="/capability"
    />
  )
}
