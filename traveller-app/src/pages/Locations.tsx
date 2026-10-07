import { Link } from 'react-router-dom'
import { locations } from '../data/locations'
import { images } from '../data/images'

export function Locations() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images.hero}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-peak-900/95 via-peak-800/85 to-peak-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-rust-300">
            Explore Himachal
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Our Locations
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            From Parvati&apos;s pine valleys to Spiti&apos;s cold desert and Kangra&apos;s sacred
            shrines — every place Yak Moves operates, with local guides who call these mountains
            home.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="mb-8 max-w-3xl text-peak-800/80">
          Click any destination for photos, seasonal advice, highlights, and tours that visit that
          area — including Baglamukhi on our Kangra devotional circuit.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}`}
              className="group overflow-hidden rounded-2xl border border-peak-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-peak-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-rust-200">
                    {loc.region}
                  </p>
                  <h2 className="font-display text-xl font-bold text-white">{loc.name}</h2>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-rust-600">{loc.tagline}</p>
                <p className="mt-2 line-clamp-2 text-sm text-peak-800/70">{loc.description}</p>
                <p className="mt-3 text-sm font-semibold text-peak-700 group-hover:text-rust-600">
                  Read more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
