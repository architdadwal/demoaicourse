const projects = [
  {
    title: 'SaaS marketing site',
    desc: 'A conversion-focused site with clear positioning, fast performance, and analytics.',
    tags: ['Landing', 'SEO', 'Analytics'],
  },
  {
    title: 'Operations dashboard',
    desc: 'A clean admin dashboard with role-based access patterns and data visualizations.',
    tags: ['Web app', 'UX', 'Integrations'],
  },
  {
    title: 'E-commerce storefront refresh',
    desc: 'UI polish + performance improvements to reduce bounce and improve checkout completion.',
    tags: ['UI refresh', 'Performance', 'CRO'],
  },
]

export default function Work() {
  return (
    <>
      <section className="pageHeader">
        <div className="container">
          <div className="card pageHeaderCard">
            <span className="badge">Work</span>
            <h1 className="h1" style={{ fontSize: 44, marginTop: 12 }}>
              A few examples of what we can build.
            </h1>
            <p className="lead">
              Replace these placeholders with real case studies when you’re ready.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid3">
            {projects.map((p) => (
              <article key={p.title} className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 800, color: 'rgba(255,255,255,0.92)' }}>
                  {p.title}
                </div>
                <div className="muted" style={{ marginTop: 8 }}>
                  {p.desc}
                </div>
                <div className="pillList" style={{ marginTop: 14 }}>
                  {p.tags.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div style={{ height: 18 }} />
          <div className="card" style={{ padding: 22 }}>
            <h2 className="h2" style={{ marginBottom: 8 }}>
              Want something similar?
            </h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Tell us what you’re building and we’ll recommend the best approach.
            </p>
            <div style={{ height: 14 }} />
            <a className="btn btnPrimary" href="#/contact">
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

