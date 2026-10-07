import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getTourBySlug, formatPrice } from '../data/tours'
import { calculateTotal, createBooking } from '../lib/bookings'
import { createRazorpayOrder, openRazorpayCheckout } from '../lib/razorpay'
import { updateBookingPayment } from '../lib/bookings'
import { isSupabaseConfigured } from '../lib/supabase'
import type { BookingFormData } from '../types'

export function TourDetail({ slugOverride }: { slugOverride?: string }) {
  const { segment } = useParams<{ segment?: string }>()
  const slug = slugOverride ?? segment
  const navigate = useNavigate()
  const tour = slug ? getTourBySlug(slug) : undefined

  const [form, setForm] = useState<BookingFormData>({
    tourId: tour?.id ?? '',
    tourTitle: tour?.title ?? '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    tourMode: tour?.mode === 'group' ? 'group' : 'solo',
    guided: true,
    travelersCount: 1,
    startDate: '',
    specialRequests: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!tour) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Tour not found</h1>
        <Link to="/tours" className="mt-4 inline-block text-peak-600 hover:underline">
          ← Back to tours
        </Link>
      </div>
    )
  }

  const currentTour = tour
  const total = calculateTotal(currentTour.priceFrom, form.travelersCount, form.guided)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const payload: BookingFormData = {
      ...form,
      tourId: currentTour.id,
      tourTitle: currentTour.title,
    }

    const { booking, error: bookErr } = await createBooking(payload, total)
    if (bookErr || !booking) {
      setError(bookErr ?? 'Could not create booking')
      setLoading(false)
      return
    }

    const amountPaise = total * 100
    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID

    if (!razorpayKey) {
      navigate(`/booking/success?id=${booking.id}&demo=1`)
      setLoading(false)
      return
    }

    let orderId: string | undefined
    if (isSupabaseConfigured) {
      const { orderId: oid, error: orderErr } = await createRazorpayOrder(
        booking.id,
        amountPaise
      )
      if (orderErr) {
        setError(orderErr)
        setLoading(false)
        return
      }
      orderId = oid ?? undefined
    }

    const { error: payErr } = openRazorpayCheckout({
      amount: amountPaise,
      bookingId: booking.id,
      tourTitle: currentTour.title,
      customerName: form.customerName,
      customerEmail: form.customerEmail,
      customerPhone: form.customerPhone,
      orderId,
      onSuccess: async (response) => {
        await updateBookingPayment(
          booking.id,
          'paid',
          response.razorpay_order_id,
          response.razorpay_payment_id
        )
        navigate(`/booking/success?id=${booking.id}`)
      },
      onDismiss: () => setLoading(false),
    })

    if (payErr) {
      setError(payErr)
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Link to="/tours" className="text-sm font-medium text-rust-600 hover:text-rust-700">
        ← All tours
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <img
            src={tour.image}
            alt={tour.title}
            className="aspect-[16/10] w-full rounded-2xl object-cover shadow-lg"
          />
          <h1 className="mt-6 font-display text-3xl font-bold text-peak-900">{tour.title}</h1>
          <p className="mt-2 text-rust-600">{tour.destination} · {tour.duration}</p>
          <p className="mt-4 text-peak-800/80">{tour.description}</p>
          <h2 className="mt-6 font-semibold text-peak-900">Highlights</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-peak-800/80">
            {tour.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {tour.mode !== 'solo' && (
              <span className="rounded-full bg-peak-100 px-3 py-1 text-xs font-medium text-peak-800">
                Group departures
              </span>
            )}
            {tour.mode !== 'group' && (
              <span className="rounded-full bg-peak-100 px-3 py-1 text-xs font-medium text-peak-800">
                Solo friendly
              </span>
            )}
            {tour.difficulty && (
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
                {tour.difficulty}
              </span>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-peak-100 bg-white p-6 shadow-lg lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-xl font-bold text-peak-900">Book this tour</h2>
          <p className="mt-1 text-sm text-peak-800/60">
            from {formatPrice(tour.priceFrom)} per person
          </p>

          {!isSupabaseConfigured && (
            <p className="mt-3 rounded-lg bg-amber-50 p-3 text-xs text-amber-800">
              Demo mode: configure Supabase in .env to persist bookings.
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-peak-800">Full name</label>
              <input
                required
                className="mt-1 w-full rounded-lg border border-peak-200 px-3 py-2 focus:border-peak-500 focus:outline-none focus:ring-1 focus:ring-peak-500"
                value={form.customerName}
                onChange={(e) => setForm({ ...form, customerName: e.target.value })}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-peak-800">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-peak-200 px-3 py-2 focus:border-peak-500 focus:outline-none"
                  value={form.customerEmail}
                  onChange={(e) => setForm({ ...form, customerEmail: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-peak-800">Phone</label>
                <input
                  type="tel"
                  required
                  className="mt-1 w-full rounded-lg border border-peak-200 px-3 py-2 focus:border-peak-500 focus:outline-none"
                  value={form.customerPhone}
                  onChange={(e) => setForm({ ...form, customerPhone: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-peak-800">Start date</label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                className="mt-1 w-full rounded-lg border border-peak-200 px-3 py-2 focus:border-peak-500 focus:outline-none"
                value={form.startDate}
                onChange={(e) => setForm({ ...form, startDate: e.target.value })}
              />
            </div>
            {tour.mode === 'both' && (
              <div>
                <label className="block text-sm font-medium text-peak-800">Tour type</label>
                <select
                  className="mt-1 w-full rounded-lg border border-peak-200 px-3 py-2"
                  value={form.tourMode}
                  onChange={(e) =>
                    setForm({ ...form, tourMode: e.target.value as 'solo' | 'group' })
                  }
                >
                  <option value="solo">Solo / private</option>
                  <option value="group">Group departure</option>
                </select>
              </div>
            )}
            {tour.guided && tour.selfGuided && (
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.guided}
                    onChange={(e) => setForm({ ...form, guided: e.target.checked })}
                    className="rounded border-peak-300 text-peak-600"
                  />
                  <span className="text-sm">Guided tour (+₹1,500/person)</span>
                </label>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-peak-800">Travelers</label>
              <input
                type="number"
                min={1}
                max={20}
                className="mt-1 w-full rounded-lg border border-peak-200 px-3 py-2"
                value={form.travelersCount}
                onChange={(e) =>
                  setForm({ ...form, travelersCount: parseInt(e.target.value, 10) || 1 })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-peak-800">Special requests</label>
              <textarea
                rows={3}
                className="mt-1 w-full rounded-lg border border-peak-200 px-3 py-2"
                value={form.specialRequests}
                onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
              />
            </div>

            <div className="rounded-xl bg-peak-50 p-4">
              <div className="flex justify-between text-sm">
                <span>Estimated total</span>
                <span className="text-lg font-bold text-peak-800">{formatPrice(total)}</span>
              </div>
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-rust-500 py-3 font-semibold text-white hover:bg-rust-600 disabled:opacity-60"
            >
              {loading ? 'Processing…' : 'Pay with Razorpay'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
