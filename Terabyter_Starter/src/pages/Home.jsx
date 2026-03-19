const services = [
  {
    title: 'Websites that convert',
    desc: 'Fast, responsive landing pages and business sites that look premium and drive leads.',
  },
  {
    title: 'Web applications',
    desc: 'Dashboards, portals, and product MVPs with clean UI and scalable architecture.',
  },
  {
    title: 'Marketing & growth',
    desc: 'SEO foundations, analytics, and campaigns that turn traffic into customers.',
  },
]

const steps = [
  {
    title: 'Discover',
    desc: 'We align on goals, audience, and success metrics.',
  },
  { title: 'Design', desc: 'Modern UI/UX with clear messaging and strong hierarchy.' },
  { title: 'Build', desc: 'Performance-first implementation and QA across devices.' },
  { title: 'Launch', desc: 'Deploy, monitor, iterate, and grow with confidence.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            <div className="card heroCard">
              <span className="badge">Terabyte digital services</span>
              <h1 className="h1">
                Build a premium digital presence—designed to win globally.
              </h1>
              <p className="lead">
                Terabyte helps brands and startups go from idea to impact with modern
                websites, high-performing web applications, and international-ready
                marketing foundations.
              </p>
              {/* <p className="muted" style={{ marginTop: 10, maxWidth: 720 }}>
                Whether you’re targeting a local market or a global audience, we focus
                on performance, SEO, conversion, and clean UX—so your product feels
                credible everywhere it shows up.
              </p> */}

              <div className="heroActions">
                <a className="btn btnPrimary" href="#/contact">
                  Start a project
                </a>
                <a className="btn" href="#/services">
                  Explore services
                </a>
              </div>

              <div className="heroMeta">
                <span>Performance-focused</span>
                <span aria-hidden="true">•</span>
                <span>Modern UI/UX</span>
                <span aria-hidden="true">•</span>
                <span>Clear communication</span>
              </div>
            </div>

            <aside className="card statCard" aria-label="Highlights">
              <div>
                <div className="badge">Why Terabyte</div>
                <div style={{ marginTop: 14, color: 'rgba(255,255,255,0.9)' }}>
                  Shipping quality work with a simple, transparent process.
                </div>
              </div>

              <div className="statRow">
                <div className="stat">
                  <div className="statLabel">Typical timeline</div>
                  <div className="statValue">2–6 weeks</div>
                </div>
                <div className="stat">
                  <div className="statLabel">Kickoff</div>
                  <div className="statValue">24–48h</div>
                </div>
              </div>

              <div className="statRow">
                <div className="stat">
                  <div className="statLabel">Deliverables</div>
                  <div className="statValue">Design + Build</div>
                </div>
                <div className="stat">
                  <div className="statLabel">Support</div>
                  <div className="statValue">Ongoing</div>
                </div>
              </div>

              <a className="btn" href="#/work" style={{ justifyContent: 'center' }}>
                View sample work
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Services built for momentum</h2>
          <p className="lead">
            Everything you need to launch, iterate, and scale—without the chaos.
          </p>

          <div style={{ height: 18 }} />
          <div className="grid3">
            {services.map((s) => (
              <div key={s.title} className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.92)' }}>
                  {s.title}
                </div>
                <div className="muted" style={{ marginTop: 8 }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: 22 }}>
            <h2 className="h2" style={{ marginBottom: 8 }}>
              A simple process, designed to ship
            </h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Clear milestones, weekly updates, and quality checks at every step.
            </p>

            <div style={{ height: 16 }} />
            <div className="grid4">
              {steps.map((step) => (
                <div
                  key={step.title}
                  style={{
                    padding: 16,
                    borderRadius: 16,
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.92)' }}>
                    {step.title}
                  </div>
                  <div className="muted" style={{ marginTop: 8, fontSize: 14 }}>
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ height: 16 }} />
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn btnPrimary" href="#/contact">
                Get an estimate
              </a>
              <a className="btn" href="#/about">
                Learn about Terabyte
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

