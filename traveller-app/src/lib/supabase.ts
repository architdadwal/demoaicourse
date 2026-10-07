import { createClient } from '@supabase/supabase-js'
import type { Booking } from '../types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null

export type DbBooking = {
  id: string
  tour_id: string
  tour_title: string
  customer_name: string
  customer_email: string
  customer_phone: string
  tour_mode: string
  guided: boolean
  travelers_count: number
  start_date: string
  special_requests: string | null
  total_amount: number
  currency: string
  payment_status: string
  razorpay_order_id: string | null
  razorpay_payment_id: string | null
  created_at: string
}

export function mapDbBooking(row: DbBooking): Booking {
  return {
    id: row.id,
    tourId: row.tour_id,
    tourTitle: row.tour_title,
    customerName: row.customer_name,
    customerEmail: row.customer_email,
    customerPhone: row.customer_phone,
    tourMode: row.tour_mode as 'solo' | 'group',
    guided: row.guided,
    travelersCount: row.travelers_count,
    startDate: row.start_date,
    specialRequests: row.special_requests ?? undefined,
    totalAmount: Number(row.total_amount),
    currency: row.currency,
    paymentStatus: row.payment_status as Booking['paymentStatus'],
    razorpayOrderId: row.razorpay_order_id,
    razorpayPaymentId: row.razorpay_payment_id,
    createdAt: row.created_at,
  }
}
