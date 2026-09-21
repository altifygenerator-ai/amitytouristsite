Amity Arkansas maintenance update — September 20, 2026

This ZIP is an overlay update for the current GitHub repository:
altifygenerator-ai/amitytouristsite (master)

Copy/extract these files over the matching paths in the current repo.
Unchanged files and public images stay exactly as they are in Git.

Updated:
- app/page.tsx
- app/events/page.tsx
- app/amity-saturday-market/page.tsx
- app/amity-saturday-market/vendor-registration/page.tsx
- app/amity-market-date-vote/page.tsx
- app/api/amity-market/vendors/route.ts
- app/sitemap.ts

Changes:
- Removed active September 19 market messaging from public pages.
- Reframed the market page as postponed / new date TBD while preserving the URL.
- Removed the scheduled Event JSON-LD from the market page.
- Paused the public vendor form and blocked direct API submissions while paused.
- Reframed the old date-vote page as a noindex archive.
- Replaced dynamic new Date() sitemap lastModified values with a stable review date.
- Lowered the postponed market page sitemap priority/frequency.

No database schema, admin dashboard, payment logic, or existing vendor records were changed.
