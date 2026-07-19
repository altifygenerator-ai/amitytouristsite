# Amity Arkansas Guide

Next.js visitor guide for Amity, Arkansas and the Natural State Tourism Project.

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env.local` and add the required values.

The existing contact forms use Resend:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `NATURAL_STATE_CONTACT_EMAIL`

The Amity market date poll uses Supabase through a server-only API route:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `MARKET_VOTE_HASH_SALT`

Run `supabase/amity_market_date_votes.sql` once in the Supabase SQL Editor before opening voting. The service-role key must only be added as a server environment variable in Vercel and must never be prefixed with `NEXT_PUBLIC_`.

## Market date poll

Public page:

```text
/amity-market-date-vote
```

The page is intentionally marked `noindex` and is not included in the sitemap because it is a temporary planning poll. It is linked from the homepage, navigation, events page, and footer.

The poll:

- accepts one preferred date
- records the voter role
- allows optional name, business name, and planning notes
- keeps one vote per browser and lets the same browser update its choice
- shows overall and potential-vendor totals after voting
- never exposes names or comments in public results
