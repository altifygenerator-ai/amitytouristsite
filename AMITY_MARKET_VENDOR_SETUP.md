# Amity Saturday Market vendor registration setup

## 1. Run the SQL once
Open the Supabase SQL Editor for the existing Amity project and run:

`supabase/amity_market_vendor_applications.sql`

It creates only `public.amity_market_vendor_applications` plus indexes and RLS. It does not alter the existing market-vote table or other project tables.

## 2. Existing Vercel environment variables
The vendor system uses the same server-side Supabase variables already used by the date vote:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `MARKET_VOTE_HASH_SALT`

## 3. Add the admin password
Add this server-only Vercel environment variable:

- `MARKET_ADMIN_PASSWORD`

Choose a strong password. Do not use `NEXT_PUBLIC_`.

Optional but recommended:

- `MARKET_ADMIN_SESSION_SECRET`

If omitted, the server uses the existing `MARKET_VOTE_HASH_SALT` to sign the admin session cookie.

## 4. Email
If these existing Resend settings are present, applicants receive a confirmation and Natural State receives a new-application notice:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `NATURAL_STATE_CONTACT_EMAIL`

The admin dashboard can later send the finalized payment / City permit instructions to approved vendors.

## Routes

Public event page:
`/amity-saturday-market`

Vendor application:
`/amity-saturday-market/vendor-registration`

Admin login:
`/admin/amity-market/login`

Admin dashboard:
`/admin/amity-market`

## Payment behavior
No payment is collected by this build. New applications start with payment and City permit details marked as pending. Once the final fee structure is settled, use the admin email panel to send instructions and update each vendor's payment/permit status.
