export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{ padding: 22 }}>
          <span className="badge">404</span>
          <h1 className="h1" style={{ fontSize: 44, marginTop: 12 }}>
            Page not found
          </h1>
          <p className="lead">
            The page you’re looking for doesn’t exist. Use the navigation to continue.
          </p>
          <div style={{ height: 14 }} />
          <a className="btn btnPrimary" href="#/">
            Go home
          </a>
        </div>
      </div>
    </section>
  )
}

