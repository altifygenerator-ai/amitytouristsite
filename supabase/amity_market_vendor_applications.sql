-- Amity Saturday Market vendor applications
-- Safe to run in the same Supabase project used by the market-date vote.
-- This creates one new table and indexes only; it does not alter other project tables.

create extension if not exists pgcrypto;

create table if not exists public.amity_market_vendor_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  contact_name text not null,
  business_name text,
  phone text not null,
  email text not null,
  website text,
  vendor_category text not null,
  products_description text not null,
  booth_size text not null default '10x10',
  is_food_vendor boolean not null default false,
  food_setup_details text,
  needs_electricity boolean not null default false,
  electricity_details text,
  has_canopy boolean not null default true,
  has_tables_chairs boolean not null default true,
  interested_table_chair_rental boolean not null default false,
  direct_sales_company text,
  special_setup_needs text,
  notes text,
  status text not null default 'new' check (status in ('new','contacted','approved','payment_pending','confirmed','waitlisted','declined','cancelled')),
  payment_status text not null default 'pending_details' check (payment_status in ('pending_details','payment_pending','paid','waived')),
  permit_status text not null default 'pending_details' check (permit_status in ('pending_details','vendor_responsible','sponsor_covered','paid','not_required')),
  booth_number text,
  admin_notes text,
  payment_email_sent_at timestamptz,
  ip_hash text,
  source text not null default 'website'
);

create index if not exists amity_market_vendor_status_idx
  on public.amity_market_vendor_applications (status, created_at desc);

create index if not exists amity_market_vendor_email_idx
  on public.amity_market_vendor_applications (lower(email));

create index if not exists amity_market_vendor_power_idx
  on public.amity_market_vendor_applications (needs_electricity) where needs_electricity = true;

alter table public.amity_market_vendor_applications enable row level security;

-- No public RLS policies are created. The Next.js server routes use the existing
-- server-only Supabase secret/service-role key, while browsers never receive that key.
