create table if not exists contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  first_name  text not null,
  last_name   text not null,
  company     text not null,
  email       text not null,
  interests   text[] not null default '{}',
  message     text not null
);

-- Only the service-role key (used server-side) can insert.
-- Disable all public access.
alter table contact_submissions enable row level security;

create policy "service role only"
  on contact_submissions
  for all
  using (false);
