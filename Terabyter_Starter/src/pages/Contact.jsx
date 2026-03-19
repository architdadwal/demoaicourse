import { useMemo, useState } from 'react'

const defaultForm = {
  name: '',
  email: '',
  company: '',
  budget: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(defaultForm)
  const [submitted, setSubmitted] = useState(false)

  const mailto = useMemo(() => {
    const subject = encodeURIComponent('Project inquiry — Terabyte')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nBudget: ${form.budget}\n\nMessage:\n${form.message}\n`,
    )
    return `mailto:hello@terabyte.com?subject=${subject}&body=${body}`
  }, [form])

  function update(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  function onSubmit(e) {
    e.preventDefault()

    const nameOk = form.name.trim().length >= 2
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    const messageOk = form.message.trim().length >= 10

    if (!nameOk || !emailOk || !messageOk) {
      alert('Please add your name, a valid email, and a short message.')
      return
    }

    setSubmitted(true)
  }

  return (
    <>
      <section className="pageHeader">
        <div className="container">
          <div className="card pageHeaderCard">
            <span className="badge">Contact</span>
            <h1 className="h1" style={{ fontSize: 44, marginTop: 12 }}>
              Tell us what you’re building.
            </h1>
            <p className="lead">
              Share a few details and we’ll respond with next steps and a rough estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="card" style={{ padding: 18 }}>
              {!submitted ? (
                <form onSubmit={onSubmit}>
                  <div className="formGrid">
                    <label>
                      <div className="muted" style={{ fontSize: 13, marginBottom: 8 }}>
                        Name
                      </div>
                      <input
                        className="input"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Your name"
                        autoComplete="name"
                        required
                      />
                    </label>

                    <label>
                      <div className="muted" style={{ fontSize: 13, marginBottom: 8 }}>
                        Email
                      </div>
                      <input
                        className="input"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="you@company.com"
                        autoComplete="email"
                        required
                      />
                    </label>

                    <label>
                      <div className="muted" style={{ fontSize: 13, marginBottom: 8 }}>
                        Company (optional)
                      </div>
                      <input
                        className="input"
                        value={form.company}
                        onChange={update('company')}
                        placeholder="Company"
                        autoComplete="organization"
                      />
                    </label>

                    <label>
                      <div className="muted" style={{ fontSize: 13, marginBottom: 8 }}>
                        Budget (optional)
                      </div>
                      <input
                        className="input"
                        value={form.budget}
                        onChange={update('budget')}
                        placeholder="e.g. 50k INR / $1–5k"
                      />
                    </label>
                  </div>

                  <div style={{ height: 12 }} />
                  <label>
                    <div className="muted" style={{ fontSize: 13, marginBottom: 8 }}>
                      Project details
                    </div>
                    <textarea
                      className="input textarea"
                      value={form.message}
                      onChange={update('message')}
                      placeholder="What do you need? Timeline, goals, and any links are helpful."
                      required
                    />
                  </label>

                  <div style={{ height: 14 }} />
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <button className="btn btnPrimary" type="submit">
                      Submit
                    </button>
                    <a className="btn" href={mailto}>
                      Email instead
                    </a>
                  </div>
                  <div className="muted" style={{ marginTop: 10, fontSize: 13 }}>
                    Tip: this demo form doesn’t send data anywhere; use “Email instead” or
                    connect a backend later.
                  </div>
                </form>
              ) : (
                <div>
                  <h2 className="h2" style={{ marginBottom: 8 }}>
                    Thanks — we got it.
                  </h2>
                  <p className="lead" style={{ marginTop: 0 }}>
                    For now, this template uses email. Click below to send your details.
                  </p>
                  <div style={{ height: 14 }} />
                  <a className="btn btnPrimary" href={mailto}>
                    Open email draft
                  </a>
                  <button
                    className="btn"
                    type="button"
                    style={{ marginLeft: 10 }}
                    onClick={() => {
                      setForm(defaultForm)
                      setSubmitted(false)
                    }}
                  >
                    Send another
                  </button>
                </div>
              )}
            </div>

            <aside className="card" style={{ padding: 18 }}>
              <div style={{ fontWeight: 800, color: 'rgba(255,255,255,0.92)' }}>
                Quick info
              </div>
              <div className="muted" style={{ marginTop: 10 }}>
                Email: <span style={{ color: 'rgba(255,255,255,0.86)' }}>hello@terabyte.com</span>
              </div>
              <div className="muted" style={{ marginTop: 10 }}>
                Response time:{' '}
                <span style={{ color: 'rgba(255,255,255,0.86)' }}>within 24–48 hours</span>
              </div>
              <div className="muted" style={{ marginTop: 10 }}>
                Typical deliverables:
              </div>
              <div className="pillList" style={{ marginTop: 10 }}>
                <span className="pill">Design</span>
                <span className="pill">Development</span>
                <span className="pill">SEO</span>
                <span className="pill">Analytics</span>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

