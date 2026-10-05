# Amity visitor optimization — 2026-10-05

Source: 575e4ca. Homepage, food and things-to-do titles/descriptions now identify Amity and its Lower Caddo role clearly. A small homepage chooser uses existing button-row and secondary buttons for river access, food, local stops and community events. Food and river-access closing links help visitors choose an itinerary or local next stop. The smaller guide retains its quiet local identity; no filters, planner, maps or additional SEO pages.

Verification:
- Production build and `tsc --noEmit`: pass. No lint script is configured.
- 8 routes × 1440, 1280, 768, 360 and 390px = 40 production browser checks: HTTP 200, no overflow, missing jump targets or uncaught runtime errors.
- 22 discovered internal destinations return successfully. Home, food listings, things to do, river access/itinerary, events, nearby guides, local businesses, mobile menu and footer inspected.
- New link targets are at least 44px and have scoped visible keyboard focus. River View remains a smaller direct website ad; no Spotlight route/link is introduced. Existing tracking, market registration/voting and event submission flows are unchanged.
- External partner images/local analytics can fail in the execution environment. No live submissions, emails or database writes were made. Confirm populated events, remote assets and delivery in an environment-backed preview before release.

No comparable recent Amity Search Console export was available, so no baseline metrics or traffic uplift are asserted.
