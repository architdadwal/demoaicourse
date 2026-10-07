# Yak Moves — Himachal Travel Web App

React + Vite travel website for **Yak Moves**, featuring solo & group tours across Himachal Pradesh, online booking, Razorpay payments, and an admin dashboard backed by Supabase.

## Features

- **Tour catalog** — destinations (Manali, Kasol, Spiti, McLeod Ganj…), trekking, Bir paragliding, apple orchard tours, Spiti motorcycle/4x4 rides, Sach Pass, Kangra devotional circuit
- **Guided & self-guided**, solo & group options on applicable tours
- **Booking flow** with traveler details and date selection
- **Razorpay** checkout (via Supabase Edge Function for secure order creation)
- **Admin dashboard** — view/filter bookings, revenue stats (Supabase Auth)

## Quick start

```bash
npm install
cp .env.example .env
# Add your Supabase and Razorpay test keys to .env
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Without `.env`, the app runs in **demo mode** (bookings are not persisted; payment skips to success).

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. Run `supabase/schema.sql` in the SQL Editor.
3. Copy **Project URL** and **anon key** into `.env`.
4. Create an admin user: **Authentication → Users → Add user**.
5. Sign in at `/admin` with that account.

## Razorpay setup

1. Create a [Razorpay](https://razorpay.com) account and get **Test** API keys.
2. Add `VITE_RAZORPAY_KEY_ID` to `.env` (public key only).
3. Deploy the edge function for order creation:

```bash
npx supabase login
npx supabase link --project-ref your-project-ref
npx supabase secrets set RAZORPAY_KEY_ID=rzp_test_xxx RAZORPAY_KEY_SECRET=your_secret
npx supabase functions deploy create-razorpay-order
```

The function uses `RAZORPAY_KEY_SECRET` server-side — never expose it in the frontend.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   Layout, Header, Footer, TourCard
  data/         tours.ts — all tour content
  lib/          supabase, bookings, razorpay
  pages/        Home, Tours, TourDetail, Admin, Contact
supabase/
  schema.sql
  functions/create-razorpay-order/
```

## License

Private — Yak Moves © 2026
