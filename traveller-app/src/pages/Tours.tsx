import { CategoryHero } from '../components/CategoryHero'
import { TourCard } from '../components/TourCard'
import { tours, getToursByCategory } from '../data/tours'
import type { TourCategory } from '../types'

export function Tours({ categoryOverride }: { categoryOverride?: TourCategory }) {
  const cat = categoryOverride

  const list = cat ? getToursByCategory(cat) : tours

  return (
    <>
      <CategoryHero category={cat} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="mb-8 text-peak-800/60">
          {list.length} tour{list.length !== 1 ? 's' : ''} available
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>
    </>
  )
}
