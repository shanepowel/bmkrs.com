import { ServicePage } from "./ServicePage"

export function WebBuilds() {
  return (
    <ServicePage
      label="AMP 05"
      title="Web & Platform Builds"
      positioning="We build digital platforms with the same delivery rigour we bring to enterprise transformation. Discovery-led. Architecture-first. Handed over with documentation you can actually use."
      challenge={null}
      whatWeDo={[
        { title: "Discovery, UX design, and technical architecture", description: "We start with understanding your users and your goals before writing code." },
        { title: "React / Next.js development with clean handover", description: "Modern stacks, documented and maintainable." },
        { title: "CMS integration, e-commerce, and API connectivity", description: "Platforms that integrate with your existing systems." },
        { title: "Post-launch optimisation and support", description: "We don't disappear at go-live — we optimise and support." },
      ]}
      frameworks={null}
      path="/web-builds"
    />
  )
}
