const values = [
  {
    title: 'Clarity',
    desc: 'Simple plans, clear timelines, and no surprises.',
  },
  {
    title: 'Craft',
    desc: 'Polished UI, clean code, and attention to the details that matter.',
  },
  {
    title: 'Speed',
    desc: 'Fast feedback loops so you can ship and learn quickly.',
  },
]

export default function About() {
  return (
    <>
      <section className="pageHeader">
        <div className="container">
          <div className="card pageHeaderCard">
            <span className="badge">About Terabyte</span>
            <h1 className="h1" style={{ fontSize: 44, marginTop: 12 }}>
              A small team with a product mindset.
            </h1>
            <p className="lead">
              Terabyte helps companies launch modern digital experiences: websites,
              web applications, and marketing systems that are easy to manage and
              built for growth.
            </p>
            <div className="pillList" aria-label="Capabilities">
              <span className="pill">UI/UX design</span>
              <span className="pill">React apps</span>
              <span className="pill">Performance</span>
              <span className="pill">SEO foundations</span>
              <span className="pill">Analytics</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">What we believe</h2>
          <p className="lead">
            Great work is predictable when the process is tight and communication is
            consistent.
          </p>
          <div style={{ height: 18 }} />
          <div className="grid3">
            {values.map((v) => (
              <div key={v.title} className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.92)' }}>
                  {v.title}
                </div>
                <div className="muted" style={{ marginTop: 8 }}>
                  {v.desc}
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
              Ready to build?
            </h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Tell us what you’re working on and we’ll respond with next steps.
            </p>
            <div style={{ height: 14 }} />
            <a className="btn btnPrimary" href="#/contact">
              Contact Terabyte
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

