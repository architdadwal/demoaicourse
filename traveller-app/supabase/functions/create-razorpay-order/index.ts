// Supabase Edge Function: create Razorpay order
// Deploy: supabase functions deploy create-razorpay-order
// Secrets: RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { bookingId, amount } = await req.json()
    if (!bookingId || !amount) {
      return new Response(JSON.stringify({ error: 'bookingId and amount required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const keyId = Deno.env.get('RAZORPAY_KEY_ID')
    const keySecret = Deno.env.get('RAZORPAY_KEY_SECRET')
    if (!keyId || !keySecret) {
      return new Response(JSON.stringify({ error: 'Razorpay credentials not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const auth = btoa(`${keyId}:${keySecret}`)
    const orderRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(amount),
        currency: 'INR',
        receipt: `yak_${bookingId.slice(0, 8)}`,
        notes: { booking_id: bookingId },
      }),
    })

    const order = await orderRes.json()
    if (!orderRes.ok) {
      return new Response(JSON.stringify({ error: order.error?.description ?? 'Razorpay error' }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )
    await supabase
      .from('bookings')
      .update({ razorpay_order_id: order.id })
      .eq('id', bookingId)

    return new Response(JSON.stringify({ orderId: order.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
