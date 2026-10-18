# BrightView LLC — homepage redesign (review branch)

BrightView is a family-owned Michigan window-cleaning, pressure-washing and holiday-lighting business. This is a page-by-page website build, not a quote-management application.

## Homepage

- Compact header and restrained desktop hero using the real `Hero-HomePage.png` photo. On mobile the photo comes first. The hero is designed to fit in a typical desktop viewport without scrolling.
- A smaller, all-navy service-first headline; short supporting description, one main CTA and a quiet secondary work link.
- **Get Free Quote** temporarily opens the existing BrightView Facebook page (a new tab). The page explicitly says so. There is no quote form, automatic estimate, account, or CRM.
- Three editorial, image-led service links (instead of boxed marketing cards).
- Authentic before/after photos displayed independently, **Before on the left, After on the right**, across screen sizes. No drag/slide effect. Each photo can be opened full-size.
- A short factual family-owned introduction and a minimal final contact call-to-action.
- Generic three-column process filler, redundant badges/trust strip, decorative effects, and developer-facing copy have been removed.

## Independent pages

The Services catalog is complete; a focused Window Cleaning page is drafted. Other routes remain simple placeholders:

- `/services` (built)
- `/services/window-cleaning` (draft)
- `/services/pressure-washing`
- `/services/holiday-lights`
- `/our-work`
- `/about`
- `/reviews`
- `/service-areas`
- `/faq`
- `/contact`

## Run and check

```bash
npm ci
npm run dev
npm run build
```

## Still needed before launch

- Verify the existing Facebook URL with BrightView, and replace the temporary quote link once the real quote/contact flow is approved.
- Collect a genuine team/owners photo, verified reviews, and verified service-area details before adding public-facing claims.
- Review the actual desktop/mobile layouts and image performance. Original PNGs are large, though Next.js optimizes them for delivery.
- Review each reserved page before publishing. The whole site remains `noindex` until launch readiness is confirmed.

No Jobber, CRM, pricing, scheduling, booking, payments, database or quote intake is implemented. No invented reviews, ratings, credentials, staff imagery or precise coverage claims.
