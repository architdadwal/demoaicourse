import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { fetchAllBookings } from '../lib/bookings'
import { formatPrice } from '../data/tours'
import type { Booking } from '../types'

export function Admin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [session, setSession] = useState<boolean>(false)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setSession(true)
        loadBookings()
      }
    })
  }, [])

  async function loadBookings() {
    setLoading(true)
    const { bookings: data, error: err } = await fetchAllBookings()
    setBookings(data)
    setError(err)
    setLoading(false)
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (!supabase) {
      setError('Supabase not configured')
      return
    }
    setLoading(true)
    setError(null)
    const { error: authErr } = await supabase.auth.signInWithPassword({ email, password })
    if (authErr) {
      setError(authErr.message)
      setLoading(false)
      return
    }
    setSession(true)
    await loadBookings()
  }

  async function handleLogout() {
    await supabase?.auth.signOut()
    setSession(false)
    setBookings([])
  }

  const filtered =
    filter === 'all' ? bookings : bookings.filter((b) => b.paymentStatus === filter)

  const stats = {
    total: bookings.length,
    paid: bookings.filter((b) => b.paymentStatus === 'paid').length,
    pending: bookings.filter((b) => b.paymentStatus === 'pending').length,
    revenue: bookings
      .filter((b) => b.paymentStatus === 'paid')
      .reduce((s, b) => s + b.totalAmount, 0),
  }

  if (!isSupabaseConfigured) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20">
        <h1 className="font-display text-2xl font-bold">Admin Dashboard</h1>
        <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
          Add <code className="rounded bg-amber-100 px-1">VITE_SUPABASE_URL</code> and{' '}
          <code className="rounded bg-amber-100 px-1">VITE_SUPABASE_ANON_KEY</code> to your{' '}
          <code className="rounded bg-amber-100 px-1">.env</code> file, run the SQL schema in
          Supabase, and create an admin user via Authentication.
        </p>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="mx-auto max-w-md px-4 py-20">
        <h1 className="font-display text-2xl font-bold text-peak-900">Yak Moves Admin</h1>
        <p className="mt-2 text-sm text-peak-800/60">Sign in with your Supabase admin account</p>
        <form onSubmit={handleLogin} className="mt-8 space-y-4 rounded-2xl border border-peak-100 bg-white p-6 shadow-sm">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-peak-200 px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              required
              className="mt-1 w-full rounded-lg border border-peak-200 px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-rust-500 py-2.5 font-semibold text-white hover:bg-rust-600 disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-peak-900">Bookings Dashboard</h1>
          <p className="text-sm text-peak-800/60">Yak Moves — live from Supabase</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={loadBookings}
            className="rounded-lg border border-peak-300 px-4 py-2 text-sm font-medium text-peak-800 hover:bg-peak-50"
          >
            Refresh
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg bg-peak-800 px-4 py-2 text-sm font-medium text-white hover:bg-peak-900"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total bookings', value: stats.total },
          { label: 'Paid', value: stats.paid },
          { label: 'Pending', value: stats.pending },
          { label: 'Revenue (paid)', value: formatPrice(stats.revenue) },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-peak-100 bg-white p-4 shadow-sm">
            <p className="text-xs font-medium uppercase text-peak-800/50">{s.label}</p>
            <p className="mt-1 text-2xl font-bold text-peak-900">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {['all', 'paid', 'pending', 'failed', 'cancelled'].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize ${
              filter === f
                ? 'bg-rust-500 text-white'
                : 'bg-peak-100 text-peak-800 hover:bg-peak-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {loading && <p className="mt-6 text-sm text-peak-800/60">Loading…</p>}
      {error && <p className="mt-6 text-sm text-red-600">{error}</p>}

      <div className="mt-6 overflow-x-auto rounded-xl border border-peak-100 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-peak-100 bg-peak-50/50">
            <tr>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Customer</th>
              <th className="px-4 py-3 font-semibold">Tour</th>
              <th className="px-4 py-3 font-semibold">Mode</th>
              <th className="px-4 py-3 font-semibold">Start</th>
              <th className="px-4 py-3 font-semibold">Amount</th>
              <th className="px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-peak-800/50">
                  No bookings yet
                </td>
              </tr>
            ) : (
              filtered.map((b) => (
                <tr key={b.id} className="border-b border-peak-50 hover:bg-peak-50/30">
                  <td className="px-4 py-3 whitespace-nowrap">
                    {new Date(b.createdAt).toLocaleDateString('en-IN')}
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium">{b.customerName}</div>
                    <div className="text-xs text-peak-800/50">{b.customerEmail}</div>
                    <div className="text-xs text-peak-800/50">{b.customerPhone}</div>
                  </td>
                  <td className="px-4 py-3">{b.tourTitle}</td>
                  <td className="px-4 py-3 capitalize">
                    {b.tourMode}
                    {b.guided ? ' · guided' : ''}
                    <br />
                    <span className="text-xs text-peak-800/50">{b.travelersCount} pax</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{b.startDate}</td>
                  <td className="px-4 py-3 font-medium">{formatPrice(b.totalAmount)}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
                        b.paymentStatus === 'paid'
                          ? 'bg-peak-100 text-peak-800'
                          : b.paymentStatus === 'pending'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {b.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
