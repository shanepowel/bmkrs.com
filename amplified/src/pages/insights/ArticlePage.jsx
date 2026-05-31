import { Link } from "react-router-dom"
import { Nav } from "../../components/layout/Nav"
import { Footer } from "../../components/layout/Footer"
import { PageMeta } from "../../components/shared/PageMeta"

export function ArticlePage({ category, title, description, readTime, path, children }) {
  return (
    <>
      {path && (
        <PageMeta
          title={`${title} | Amplified`}
          description={description || title}
          path={path}
        />
      )}
      <Nav />
      <main style={{ paddingTop: 100 }}>
        <article
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "var(--section-py) var(--grid-gap)",
          }}
        >
          <p className="font-mono" style={{ fontSize: "var(--text-xs)", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>
            {category}
          </p>
          <h1 style={{ fontFamily: "Syne", fontWeight: 800, fontSize: "var(--text-3xl)", marginBottom: 16, lineHeight: 1.2 }}>
            {title}
          </h1>
          {description && (
            <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-lg)", color: "var(--text-muted)", marginBottom: 8 }}>
              {description}
            </p>
          )}
          {readTime && (
            <p style={{ fontFamily: "DM Sans", fontSize: 13, color: "var(--text-muted)", marginBottom: 40 }}>
              {readTime}
            </p>
          )}
          <div
            className="article-body"
            style={{
              fontFamily: "DM Sans",
              fontSize: "var(--text-base)",
              lineHeight: 1.7,
              color: "var(--text-primary)",
            }}
          >
            {children}
          </div>
          <p style={{ marginTop: 48 }}>
            <Link to="/insights" style={{ color: "var(--accent)", fontFamily: "Syne", fontWeight: 600 }}>
              ← Back to Insights
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
