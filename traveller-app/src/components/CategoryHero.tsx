import type { TourCategory } from '../types'
import { CATEGORY_DESCRIPTIONS, CATEGORY_LABELS } from '../types'

const gradients: Record<TourCategory, string> = {
  destinations: 'from-peak-700 to-peak-900',
  paragliding: 'from-sky-700 to-peak-900',
  trekking: 'from-stone-700 to-peak-900',
  'apple-tours': 'from-amber-800 to-rust-900',
  'spiti-riding': 'from-amber-900 to-peak-900',
  'sach-pass': 'from-slate-700 to-peak-900',
  devotional: 'from-rust-700 to-peak-900',
}

export function CategoryHero({ category }: { category?: TourCategory }) {
  if (!category) {
    return (
      <section className="bg-gradient-to-br from-peak-800 via-peak-700 to-peak-900 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">All Himachal Tours</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Browse every Yak Moves experience — destinations, treks, rides, and sacred circuits.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      className={`bg-gradient-to-br ${gradients[category]} px-4 py-14 text-white sm:px-6`}
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          {CATEGORY_LABELS[category]}
        </h1>
        <p className="mt-3 max-w-2xl text-white/85">{CATEGORY_DESCRIPTIONS[category]}</p>
      </div>
    </section>
  )
}
