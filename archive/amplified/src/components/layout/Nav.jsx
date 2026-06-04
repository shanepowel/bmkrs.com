import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useNav } from "../../hooks/useNav"

const TRANSFORMATION_ITEMS = [
  { label: "AMP 01 — AI Governance", desc: "Responsible AI for regulated industries", href: "/ai-governance" },
  { label: "AMP 02 — AI Implementation", desc: "End-to-end AI delivery within your governance", href: "/ai-implementation" },
  { label: "AMP 03 — Structured Delivery", desc: "Agile without the chaos", href: "/structured-delivery" },
  { label: "AMP 04 — Capability Building", desc: "Build it in, not bolted on", href: "/capability" },
]
const GROWTH_ITEMS = [
  { label: "AMP 05 — Web & Platform Builds", desc: "Platforms that perform and scale", href: "/web-builds" },
  { label: "AMP 06 — UX & Conversion", desc: "Designed around your users, optimised for results", href: "/ux-and-conversion" },
  { label: "AMP 07 — Performance Marketing", desc: "Growth that's measurable and compounding", href: "/performance-marketing" },
]

const TRANSFORMATION_PATHS = ["/ai-governance", "/ai-implementation", "/structured-delivery", "/capability"]
const GROWTH_PATHS = ["/web-builds", "/ux-and-conversion", "/performance-marketing"]

export function Nav() {
  const scrolled = useNav()
  const location = useLocation()
  const pathname = location.pathname
  const [transOpen, setTransOpen] = useState(false)
  const [growthOpen, setGrowthOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isTransformationActive = TRANSFORMATION_PATHS.includes(pathname) || pathname === "/how-we-work"
  const isGrowthActive = GROWTH_PATHS.includes(pathname)
  const isInsightsActive = pathname === "/insights" || pathname.startsWith("/insights/")

  const navBarClass = `nav-bar ${scrolled ? "nav-scrolled" : ""}`

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: "18px var(--grid-gap)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }

  return (
    <>
      <nav style={navStyle} className={`nav-desktop ${navBarClass}`}>
        <Link
          to="/"
          className="nav-logo"
          style={{
            fontFamily: "Syne",
            fontWeight: 800,
            fontSize: 20,
            color: "var(--accent)",
            letterSpacing: "-0.02em",
            transition: "opacity 0.2s ease",
          }}
        >
          AMPLIFIED
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => { setTransOpen(true); setGrowthOpen(false) }}
            onMouseLeave={() => setTransOpen(false)}
          >
            <button
              type="button"
              className="nav-trigger"
              aria-expanded={transOpen}
              aria-haspopup="true"
              style={{
                background: "none",
                border: "none",
                fontFamily: "DM Sans",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 0",
              }}
            >
              Digital Transformation
              <span className="nav-chevron" aria-hidden>▾</span>
            </button>
            {transOpen && (
              <div
                className="nav-dropdown"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  marginTop: 4,
                  minWidth: 340,
                  background: "var(--surface)",
                  padding: "8px 0",
                  borderRadius: 4,
                }}
              >
                {TRANSFORMATION_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={pathname === item.href ? "nav-dropdown-active" : ""}
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      color: "var(--text-primary)",
                      fontSize: 14,
                    }}
                  >
                    <div style={{ fontWeight: 500 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{item.desc}</div>
                  </Link>
                ))}
                <div style={{ borderTop: "1px solid var(--border)", margin: "6px 12px 6px" }} />
                <Link
                  to="/how-we-work"
                  className={pathname === "/how-we-work" ? "nav-dropdown-active" : ""}
                  style={{
                    display: "block",
                    padding: "12px 20px",
                    color: "var(--accent)",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  How We Work →
                </Link>
              </div>
            )}
          </div>
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => { setGrowthOpen(true); setTransOpen(false) }}
            onMouseLeave={() => setGrowthOpen(false)}
          >
            <button
              type="button"
              className="nav-trigger"
              aria-expanded={growthOpen}
              aria-haspopup="true"
              style={{
                background: "none",
                border: "none",
                fontFamily: "DM Sans",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 0",
              }}
            >
              Digital Growth
              <span className="nav-chevron" aria-hidden>▾</span>
            </button>
            {growthOpen && (
              <div
                className="nav-dropdown"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  marginTop: 4,
                  minWidth: 320,
                  background: "var(--surface)",
                  padding: "8px 0",
                  borderRadius: 4,
                }}
              >
                {GROWTH_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={pathname === item.href ? "nav-dropdown-active" : ""}
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      color: "var(--text-primary)",
                      fontSize: 14,
                    }}
                  >
                    <div style={{ fontWeight: 500 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{item.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/insights"
            className={`nav-link ${isInsightsActive ? "active" : ""}`}
            style={{ fontFamily: "DM Sans", fontSize: 14, fontWeight: 500, padding: "8px 0" }}
          >
            Insights
          </Link>
          <Link
            to="/contact"
            className="btn-accent"
            style={{
              background: "var(--accent)",
              color: "#0A0A0A",
              fontFamily: "Syne",
              fontWeight: 700,
              fontSize: 14,
              padding: "12px 22px",
              borderRadius: 4,
              marginLeft: 8,
            }}
          >
            Contact →
          </Link>
        </div>
      </nav>

      <nav style={{ ...navStyle, padding: "16px var(--grid-gap)" }} className={`nav-mobile ${navBarClass}`}>
        <Link to="/" style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 18, color: "var(--accent)", letterSpacing: "-0.02em" }}>
          AMPLIFIED
        </Link>
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-hamburger"
          style={{
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            padding: 10,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <span style={{ display: "block", width: 22, height: 2, background: "currentColor", transition: "transform 0.25s ease, opacity 0.25s ease", transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "currentColor", transition: "opacity 0.2s ease", opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "currentColor", transition: "transform 0.25s ease", transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {mobileOpen && (
        <div
          className="nav-overlay"
          style={{
            position: "fixed",
            inset: 0,
            top: 0,
            zIndex: 999,
            background: "var(--bg)",
            padding: "88px 24px 32px",
            overflow: "auto",
          }}
        >
          <div className="nav-overlay-section">
            <p className="font-mono" style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: 12 }}>DIGITAL TRANSFORMATION</p>
            {TRANSFORMATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: pathname === item.href ? "var(--accent)" : "var(--text-primary)",
                  fontWeight: pathname === item.href ? 600 : 400,
                  fontSize: 17,
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/how-we-work"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                marginTop: 4,
                color: pathname === "/how-we-work" ? "var(--accent)" : "var(--accent)",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              How We Work →
            </Link>
          </div>
          <div className="nav-overlay-section">
            <p className="font-mono" style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: 12 }}>DIGITAL GROWTH</p>
            {GROWTH_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: pathname === item.href ? "var(--accent)" : "var(--text-primary)",
                  fontWeight: pathname === item.href ? 600 : 400,
                  fontSize: 17,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="nav-overlay-section" style={{ borderBottom: "none", marginBottom: 24 }}>
            <Link
              to="/insights"
              onClick={() => setMobileOpen(false)}
              style={{
                color: isInsightsActive ? "var(--accent)" : "var(--text-primary)",
                fontWeight: isInsightsActive ? 600 : 400,
                fontSize: 17,
              }}
            >
              Insights
            </Link>
          </div>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-accent"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--accent)",
              color: "#0A0A0A",
              fontFamily: "Syne",
              fontWeight: 700,
              fontSize: 15,
              padding: "16px 32px",
              borderRadius: 4,
            }}
          >
            Contact →
          </Link>
        </div>
      )}
    </>
  )
}
