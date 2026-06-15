-- ============================================================
-- GPM Events — Supabase setup
-- Run this once in your Supabase project:
--   Dashboard → SQL Editor → New query → paste → Run
-- ============================================================

-- 1. Events table
create table if not exists public.events (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  event_date  date not null,
  title       text not null,
  location    text,
  time        text,
  description text,
  tag         text,
  image_url   text
);

-- Lock down direct access from the public (anon) key.
-- The website talks to this table only through the server-side
-- service-role key, which bypasses row-level security.
alter table public.events enable row level security;

-- 2. Public storage bucket for event photos / flyers
insert into storage.buckets (id, name, public)
values ('event-images', 'event-images', true)
on conflict (id) do nothing;
