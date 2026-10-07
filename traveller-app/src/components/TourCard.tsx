import { Link } from 'react-router-dom'
import type { Tour } from '../types'
import { formatPrice } from '../data/tours'

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-peak-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1">
          {tour.guided && (
            <span className="rounded-full bg-peak-700/90 px-2 py-0.5 text-xs font-medium text-white">
              Guided
            </span>
          )}
          {tour.selfGuided && (
            <span className="rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-peak-800">
              Self-guided
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-rust-600">
          {tour.destination}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-peak-900">{tour.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-peak-800/70">{tour.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-peak-800/50">{tour.duration}</p>
            <p className="font-semibold text-peak-700">
              from {formatPrice(tour.priceFrom)}
              <span className="text-xs font-normal text-peak-800/50"> / person</span>
            </p>
          </div>
          <Link
            to={`/tours/${tour.slug}`}
            className="rounded-lg bg-rust-500 px-3 py-2 text-sm font-semibold text-white hover:bg-rust-600"
          >
            Book
          </Link>
        </div>
      </div>
    </article>
  )
}
