const serviceCards = [
  {
    title: 'Website design & development',
    desc: 'Landing pages, multi-page sites, and redesigns with modern UX and strong messaging.',
    items: ['Responsive UI', 'SEO-ready structure', 'Fast load times', 'CMS-friendly'],
  },
  {
    title: 'Web application development',
    desc: 'Product MVPs, dashboards, admin panels, and internal tools built for maintainability.',
    items: ['React-based UI', 'API integration', 'Auth-ready architecture', 'Testing & QA'],
  },
  {
    title: 'Marketing services',
    desc: 'Foundations and campaigns that make it easier to attract and convert customers.',
    items: ['SEO baseline', 'Analytics setup', 'Conversion tracking', 'Content support'],
  },
]

const addOns = [
  'Brand refresh',
  'Copywriting support',
  'Performance audits',
  'Accessibility improvements',
  'Ongoing maintenance',
]

export default function Services() {
  return (
    <>
      <section className="pageHeader">
        <div className="container">
          <div className="card pageHeaderCard">
            <span className="badge">Services</span>
            <h1 className="h1" style={{ fontSize: 44, marginTop: 12 }}>
              Everything you need to launch and grow.
            </h1>
            <p className="lead">
              Choose a focused engagement or combine services for an end-to-end build.
            </p>
            <div className="pillList" aria-label="Service tags">
              <span className="pill">Websites</span>
              <span className="pill">Web apps</span>
              <span className="pill">Marketing</span>
              <span className="pill">Maintenance</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid3">
            {serviceCards.map((s) => (
              <div key={s.title} className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 800, color: 'rgba(255,255,255,0.92)' }}>
                  {s.title}
                </div>
                <div className="muted" style={{ marginTop: 8 }}>
                  {s.desc}
                </div>
                <ul style={{ margin: '14px 0 0', paddingLeft: 18, color: 'rgba(255,255,255,0.78)' }}>
                  {s.items.map((it) => (
                    <li key={it} style={{ marginTop: 6 }}>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: 22 }}>
            <h2 className="h2" style={{ marginBottom: 8 }}>
              Add-ons
            </h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Flexible options to match your team and timeline.
            </p>
            <div className="pillList" aria-label="Add-ons">
              {addOns.map((x) => (
                <span key={x} className="pill">
                  {x}
                </span>
              ))}
            </div>
            <div style={{ height: 16 }} />
            <a className="btn btnPrimary" href="#/contact">
              Request pricing
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

