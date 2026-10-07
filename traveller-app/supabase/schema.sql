-- Yak Moves — Supabase schema
-- Run in Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  tour_id text not null,
  tour_title text not null,
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,
  tour_mode text not null check (tour_mode in ('solo', 'group')),
  guided boolean not null default true,
  travelers_count integer not null default 1 check (travelers_count > 0),
  start_date date not null,
  special_requests text,
  total_amount numeric(12, 2) not null,
  currency text not null default 'INR',
  payment_status text not null default 'pending'
    check (payment_status in ('pending', 'paid', 'failed', 'cancelled')),
  razorpay_order_id text,
  razorpay_payment_id text,
  created_at timestamptz not null default now()
);

create index if not exists bookings_created_at_idx on public.bookings (created_at desc);
create index if not exists bookings_payment_status_idx on public.bookings (payment_status);

alter table public.bookings enable row level security;

-- Anyone can create a booking (public website)
create policy "Public can insert bookings"
  on public.bookings for insert
  to anon, authenticated
  with check (true);

-- Only authenticated admins can read/update (set up Supabase Auth for admin user)
create policy "Admins can read bookings"
  on public.bookings for select
  to authenticated
  using (true);

create policy "Admins can update bookings"
  on public.bookings for update
  to authenticated
  using (true)
  with check (true);

-- Optional: allow service role via edge functions for payment webhooks

comment on table public.bookings is 'Yak Moves tour bookings';
