import { useMemo, useState } from 'react'

const navItems = [
  { href: '#/', label: 'Home', path: '/' },
  { href: '#/about', label: 'About', path: '/about' },
  { href: '#/services', label: 'Services', path: '/services' },
  { href: '#/work', label: 'Work', path: '/work' },
  { href: '#/contact', label: 'Contact', path: '/contact' },
]

function isActive(currentPath, itemPath) {
  return currentPath === itemPath
}

export default function SiteHeader({ path }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const mobileItems = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        active: isActive(path, item.path),
      })),
    [path],
  )

  return (
    <header className="header">
      <a className="skipLink" href="#/contact">
        Skip to contact
      </a>

      <div className="container">
        <div className="headerInner">
          <a className="brand" href="#/" onClick={() => setMobileOpen(false)}>
            <span className="brandMark" aria-hidden="true" />
            <span>Terabyte</span>
          </a>

          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.href}
                data-active={isActive(path, item.path)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="headerCtas">
            <a className="btn btnPrimary" href="#/contact">
              Get a quote <span className="kbd">24–48h</span>
            </a>
            <button
              className="btn mobileToggle"
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className="mobilePanel"
        style={{ display: mobileOpen ? 'block' : 'none' }}
      >
        <div className="container">
          <div className="mobilePanelInner" aria-label="Mobile navigation">
            {mobileItems.map((item) => (
              <a
                key={item.path}
                href={item.href}
                data-active={item.active}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

