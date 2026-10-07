import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-peak-800 bg-peak-900 text-cream-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold text-white">Yak Moves</p>
          <p className="mt-2 text-sm text-cream-100/70">
            Curated solo & group journeys across Himachal — Manali, Spiti, Bir, Baglamukhi, and
            trails less travelled.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-cream-100/70">
            <li><Link to="/locations" className="hover:text-rust-300">All Locations</Link></li>
            <li><Link to="/locations/baglamukhi" className="hover:text-rust-300">Baglamukhi</Link></li>
            <li><Link to="/tours/destinations" className="hover:text-rust-300">Destinations</Link></li>
            <li><Link to="/tours/trekking" className="hover:text-rust-300">Trekking</Link></li>
            <li><Link to="/tours/sach-pass" className="hover:text-rust-300">Sach Pass</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-cream-100/70">
            <li>📍 Shimla, Himachal Pradesh</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ hello@yakmoves.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-cream-100/50">
        © {new Date().getFullYear()} Yak Moves. All rights reserved.
      </div>
    </footer>
  )
}
