import { Link, useParams } from 'react-router-dom'
import { getLocationBySlug, getToursForLocation } from '../data/locations'
import { TourCard } from '../components/TourCard'
import { formatPrice } from '../data/tours'

export function LocationDetail() {
  const { slug } = useParams<{ slug: string }>()
  const location = slug ? getLocationBySlug(slug) : undefined

  if (!location) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-peak-900">Location not found</h1>
        <Link to="/locations" className="mt-4 inline-block text-rust-600 hover:underline">
          ← All locations
        </Link>
      </div>
    )
  }

  const relatedTours = getToursForLocation(location.slug)
  const cheapest = relatedTours.length
    ? Math.min(...relatedTours.map((t) => t.priceFrom))
    : null

  return (
    <>
      <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-peak-900/90 via-peak-900/40 to-peak-900/20" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-4 pb-10 sm:px-6">
          <Link
            to="/locations"
            className="text-sm font-medium text-white/80 hover:text-white"
          >
            ← All locations
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-rust-300">
            {location.region}
            {location.altitude && ` · ${location.altitude}`}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
            {location.name}
          </h1>
          <p className="mt-2 text-lg text-rust-200">{location.tagline}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-peak-900">About {location.name}</h2>
            <p className="mt-4 text-lg leading-relaxed text-peak-800/85">{location.description}</p>

            <h3 className="mt-8 font-semibold text-peak-900">Highlights</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {location.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 rounded-lg bg-cream-100 px-4 py-3 text-sm text-peak-800"
                >
                  <span className="text-rust-500">◆</span> {h}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-semibold text-peak-900">Yak Moves experiences here</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {location.experiences.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-peak-200 bg-white px-3 py-1 text-sm text-peak-700"
                >
                  {e}
                </span>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-peak-100 bg-cream-50 p-6 shadow-sm lg:sticky lg:top-24 lg:self-start">
            <h3 className="font-semibold text-peak-900">Plan your visit</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-peak-800/50">Best season</dt>
                <dd className="font-medium text-peak-900">{location.bestSeason}</dd>
              </div>
              {location.altitude && (
                <div>
                  <dt className="text-peak-800/50">Altitude</dt>
                  <dd className="font-medium text-peak-900">{location.altitude}</dd>
                </div>
              )}
              {cheapest !== null && (
                <div>
                  <dt className="text-peak-800/50">Tours from</dt>
                  <dd className="font-semibold text-rust-600">{formatPrice(cheapest)}</dd>
                </div>
              )}
            </dl>
            <Link
              to="/tours"
              className="mt-6 block w-full rounded-xl bg-peak-700 py-3 text-center font-semibold text-white hover:bg-peak-800"
            >
              Browse all tours
            </Link>
            <Link
              to="/contact"
              className="mt-3 block w-full rounded-xl border border-peak-300 py-3 text-center font-semibold text-peak-800 hover:bg-white"
            >
              Ask about {location.name}
            </Link>
          </aside>
        </div>

        {relatedTours.length > 0 && (
          <section className="mt-16 border-t border-peak-100 pt-12">
            <h2 className="font-display text-2xl font-bold text-peak-900">
              Tours visiting {location.name}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
