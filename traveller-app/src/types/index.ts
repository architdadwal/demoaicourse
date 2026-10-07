export type TourCategory =
  | 'destinations'
  | 'paragliding'
  | 'trekking'
  | 'apple-tours'
  | 'spiti-riding'
  | 'sach-pass'
  | 'devotional'

export type TourMode = 'solo' | 'group' | 'both'

export interface Tour {
  id: string
  slug: string
  title: string
  category: TourCategory
  destination: string
  mode: TourMode
  guided: boolean
  selfGuided: boolean
  duration: string
  priceFrom: number
  description: string
  highlights: string[]
  image: string
  difficulty?: 'easy' | 'moderate' | 'challenging' | 'expert'
}

export interface BookingFormData {
  tourId: string
  tourTitle: string
  customerName: string
  customerEmail: string
  customerPhone: string
  tourMode: 'solo' | 'group'
  guided: boolean
  travelersCount: number
  startDate: string
  specialRequests?: string
}

export interface Booking extends BookingFormData {
  id: string
  totalAmount: number
  currency: string
  paymentStatus: 'pending' | 'paid' | 'failed' | 'cancelled'
  razorpayOrderId?: string | null
  razorpayPaymentId?: string | null
  createdAt: string
}

export const CATEGORY_LABELS: Record<TourCategory, string> = {
  destinations: 'Himachal Destinations',
  paragliding: 'Paragliding in Bir',
  trekking: 'Trekking Adventures',
  'apple-tours': 'Apple Orchard Tours',
  'spiti-riding': 'Spiti Remote Riding',
  'sach-pass': 'Sach Pass Trail',
  devotional: 'Kangra Devotional Circuit',
}

export const CATEGORY_DESCRIPTIONS: Record<TourCategory, string> = {
  destinations:
    'Curated solo and group escapes across Manali, Kasol, Spiti, McLeod Ganj and hidden valleys.',
  paragliding: 'Soar over the Dhauladhar from Asia\'s paragliding capital — Bir Billing.',
  trekking:
    'Guided and self-guided treks from Triund to Indrahar, Churdhar, Moral Danda and beyond.',
  'apple-tours':
    'Harvest-season journeys through Kotgarh, Ratnari and Narkanda apple country.',
  'spiti-riding':
    'Motorcycle and 4x4 expeditions through remote Spiti — Kaza, Chandratal, high passes.',
  'sach-pass':
    'The legendary Sach Pass trail — raw Himalaya, minimal crowds, maximum adventure.',
  devotional:
    'Sacred Kangra circuit: Brajeshwari, Baglamukhi, Chamunda, Jwala & Chintapurni Devi.',
}
