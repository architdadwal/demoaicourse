declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance
  }
}

interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  order_id?: string
  handler: (response: RazorpayResponse) => void
  prefill?: { name?: string; email?: string; contact?: string }
  theme?: { color?: string }
  modal?: { ondismiss?: () => void }
}

interface RazorpayInstance {
  open: () => void
  on: (event: string, handler: (response: RazorpayResponse) => void) => void
}

interface RazorpayResponse {
  razorpay_payment_id: string
  razorpay_order_id: string
  razorpay_signature: string
}

export async function createRazorpayOrder(
  bookingId: string,
  amountInPaise: number
): Promise<{ orderId: string | null; error: string | null }> {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !anonKey) {
    return { orderId: null, error: 'Supabase URL required for Razorpay orders' }
  }

  try {
    const res = await fetch(`${supabaseUrl}/functions/v1/create-razorpay-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${anonKey}`,
      },
      body: JSON.stringify({ bookingId, amount: amountInPaise }),
    })

    const json = await res.json()
    if (!res.ok) {
      return { orderId: null, error: json.error ?? 'Failed to create order' }
    }
    return { orderId: json.orderId, error: null }
  } catch {
    return { orderId: null, error: 'Network error creating payment order' }
  }
}

export function openRazorpayCheckout(params: {
  amount: number
  bookingId: string
  tourTitle: string
  customerName: string
  customerEmail: string
  customerPhone: string
  orderId?: string
  onSuccess: (response: RazorpayResponse) => void
  onDismiss?: () => void
}): { error: string | null } {
  const key = import.meta.env.VITE_RAZORPAY_KEY_ID
  if (!key) {
    return { error: 'Razorpay key not configured (VITE_RAZORPAY_KEY_ID)' }
  }
  if (!window.Razorpay) {
    return { error: 'Razorpay script not loaded' }
  }

  const options: RazorpayOptions = {
    key,
    amount: params.amount,
    currency: 'INR',
    name: 'Yak Moves',
    description: params.tourTitle,
    order_id: params.orderId,
    prefill: {
      name: params.customerName,
      email: params.customerEmail,
      contact: params.customerPhone,
    },
    theme: { color: '#c45c3e' },
    handler: params.onSuccess,
    modal: { ondismiss: params.onDismiss },
  }

  const rzp = new window.Razorpay(options)
  rzp.open()
  return { error: null }
}
