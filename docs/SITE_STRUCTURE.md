# BrightView — Page-by-page plan

Only the homepage is designed and filled in. All routes below exist as deliberately sparse placeholders that will be built individually after review.

- / — homepage: compact above-the-fold desktop hero, trust facts, 3 service teasers, side-by-side real before/after, contact steps, family introduction, and Facebook CTA.
- /services — all services (placeholder)
- /services/window-cleaning — window cleaning (placeholder)
- /services/pressure-washing — pressure washing (placeholder)
- /services/holiday-lights — holiday lighting (placeholder)
- /our-work — projects (placeholder; homepage shows a preview only)
- /about — family story (placeholder)
- /reviews — genuine reviews (placeholder; do not fabricate)
- /service-areas — verified service locations (placeholder; do not invent)
- /faq — answers to actual customer questions (placeholder)
- /contact — final contact options, to be decided (placeholder)

The placeholder pages share one small component in src/components/layout/PlaceholderPage.tsx. No duplicate service/portfolio/story page content is embedded in the homepage.

## Rules

1. One page at a time after approval.
2. Existing real photographs and approved BrightView logo only.
3. Before-and-after photos must always display in independent frames, Before left / After right, even on mobile.
4. Don't introduce pricing, quote-management, Jobber, CRM, authentication, or other integrations.
5. Don't invent claims, credentials, ratings, photos, phone numbers or coverage zones.
6. Keep noindex until final site launch is approved and all public pages are ready.
7. Ensure responsive layout and a build before merging.
