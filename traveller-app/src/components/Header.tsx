import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CATEGORY_LABELS, type TourCategory } from '../types'

const navItems: { path: string; label: string; category?: TourCategory }[] = [
  { path: '/locations', label: 'Locations' },
  { path: '/tours', label: 'All Tours' },
  { path: '/tours/destinations', label: 'Destinations', category: 'destinations' },
  { path: '/tours/trekking', label: 'Trekking', category: 'trekking' },
  { path: '/tours/paragliding', label: 'Paragliding', category: 'paragliding' },
  { path: '/tours/devotional', label: 'Devotional', category: 'devotional' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-peak-200/60 bg-cream-50/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-peak-700 text-lg font-bold text-white">
            🦬
          </span>
          <div className="text-left">
            <span className="font-display text-xl font-bold tracking-tight text-peak-900">
              Yak Moves
            </span>
            <p className="hidden text-xs text-peak-600 sm:block">Himachal · Solo & Group</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-peak-100 text-peak-800'
                    : 'text-peak-700/90 hover:bg-peak-50 hover:text-peak-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-lg border border-peak-300 px-4 py-2 text-sm font-medium text-peak-800 hover:bg-white sm:inline-block"
          >
            Contact
          </Link>
          <Link
            to="/admin"
            className="rounded-lg bg-rust-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rust-600"
          >
            Admin
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-peak-800 xl:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-peak-100 bg-cream-50 px-4 py-3 xl:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-peak-800 hover:bg-peak-50"
              onClick={() => setOpen(false)}
            >
              {item.category ? CATEGORY_LABELS[item.category] : item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 block rounded-lg px-3 py-2 text-sm font-medium text-rust-600"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
