import { supabase, isSupabaseConfigured, mapDbBooking } from './supabase'
import type { Booking, BookingFormData } from '../types'

export function calculateTotal(
  priceFrom: number,
  travelersCount: number,
  guided: boolean
): number {
  const guidedPremium = guided ? 1500 : 0
  return (priceFrom + guidedPremium) * travelersCount
}

export async function createBooking(
  data: BookingFormData,
  totalAmount: number
): Promise<{ booking: Booking | null; error: string | null }> {
  if (!isSupabaseConfigured || !supabase) {
    return {
      booking: {
        id: crypto.randomUUID(),
        ...data,
        totalAmount,
        currency: 'INR',
        paymentStatus: 'pending',
        createdAt: new Date().toISOString(),
      },
      error: null,
    }
  }

  const { data: row, error } = await supabase
    .from('bookings')
    .insert({
      tour_id: data.tourId,
      tour_title: data.tourTitle,
      customer_name: data.customerName,
      customer_email: data.customerEmail,
      customer_phone: data.customerPhone,
      tour_mode: data.tourMode,
      guided: data.guided,
      travelers_count: data.travelersCount,
      start_date: data.startDate,
      special_requests: data.specialRequests ?? null,
      total_amount: totalAmount,
      currency: 'INR',
      payment_status: 'pending',
    })
    .select()
    .single()

  if (error) return { booking: null, error: error.message }
  return { booking: mapDbBooking(row), error: null }
}

export async function fetchAllBookings(): Promise<{
  bookings: Booking[]
  error: string | null
}> {
  if (!isSupabaseConfigured || !supabase) {
    return { bookings: [], error: 'Supabase is not configured' }
  }

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return { bookings: [], error: error.message }
  return { bookings: (data ?? []).map(mapDbBooking), error: null }
}

export async function updateBookingPayment(
  bookingId: string,
  paymentStatus: Booking['paymentStatus'],
  razorpayOrderId?: string,
  razorpayPaymentId?: string
): Promise<{ error: string | null }> {
  if (!isSupabaseConfigured || !supabase) {
    return { error: null }
  }

  const { error } = await supabase
    .from('bookings')
    .update({
      payment_status: paymentStatus,
      razorpay_order_id: razorpayOrderId ?? null,
      razorpay_payment_id: razorpayPaymentId ?? null,
    })
    .eq('id', bookingId)

  return { error: error?.message ?? null }
}
