import { useState, useEffect } from "react"

const PHRASES = [
  "AI Readiness Assessments",
  "Governance Frameworks",
  "Squad-Based Delivery",
  "EU AI Act Alignment",
  "Web Platform Builds",
  "Responsible AI Policy",
  "Performance Marketing",
  "Operating Model Design",
]

const INTERVAL_MS = 2500
const FADE_MS = 300

export function useTicker() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const step = () => {
      setVisible(false)
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % PHRASES.length)
        setVisible(true)
      }, FADE_MS)
      return t
    }
    const id = setInterval(step, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return { phrase: PHRASES[index], visible }
}
