import { Link, useSearchParams } from 'react-router-dom'

export function BookingSuccess() {
  const [params] = useSearchParams()
  const id = params.get('id')
  const demo = params.get('demo')

  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-peak-100 text-3xl">
        ✓
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold text-peak-900">Booking confirmed!</h1>
      <p className="mt-3 text-peak-800/70">
        {demo
          ? 'Demo booking saved locally. Connect Supabase and Razorpay for live payments.'
          : 'Thank you for choosing Yak Moves. We\'ve received your payment and will contact you shortly.'}
      </p>
      {id && (
        <p className="mt-2 font-mono text-sm text-peak-800/50">Reference: {id}</p>
      )}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          to="/tours"
          className="rounded-xl bg-rust-500 px-6 py-3 font-semibold text-white hover:bg-rust-600"
        >
          Browse more tours
        </Link>
        <Link
          to="/"
          className="rounded-xl border border-peak-300 px-6 py-3 font-semibold text-peak-800 hover:bg-peak-50"
        >
          Home
        </Link>
      </div>
    </div>
  )
}
