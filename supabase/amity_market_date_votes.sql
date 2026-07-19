-- Run this once in the Supabase SQL Editor for the Amity site project.
create table if not exists public.amity_market_date_votes (
  id uuid primary key default gen_random_uuid(),
  device_id text not null unique,
  date_choice text not null check (date_choice in ('2026-09-19', '2026-10-10', '2026-11-07')),
  voter_type text not null check (voter_type in ('Potential vendor', 'Local resident', 'Local business', 'Possible sponsor', 'Planning to attend')),
  name text,
  business_name text,
  comment text,
  ip_hash text,
  user_agent text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists amity_market_votes_date_idx
  on public.amity_market_date_votes (date_choice);

create index if not exists amity_market_votes_role_idx
  on public.amity_market_date_votes (voter_type);

alter table public.amity_market_date_votes enable row level security;

-- No public policies are created. The Next.js API route uses the Supabase
-- service-role key on the server, so names and comments are never exposed
-- through the browser or Supabase's anonymous API.
