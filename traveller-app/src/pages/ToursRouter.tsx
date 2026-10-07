import { useParams } from 'react-router-dom'
import { TourDetail } from './TourDetail'
import { Tours } from './Tours'
import type { TourCategory } from '../types'

const validCategories: TourCategory[] = [
  'destinations',
  'paragliding',
  'trekking',
  'apple-tours',
  'spiti-riding',
  'sach-pass',
  'devotional',
]

export function ToursRouter() {
  const { segment } = useParams<{ segment?: string }>()

  if (!segment) {
    return <Tours />
  }

  if (validCategories.includes(segment as TourCategory)) {
    return <Tours categoryOverride={segment as TourCategory} />
  }

  return <TourDetail slugOverride={segment} />
}
