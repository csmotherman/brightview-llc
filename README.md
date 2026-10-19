# BrightView LLC — homepage redesign (review branch)

BrightView is a family-owned Michigan window-cleaning, pressure-washing and holiday-lighting business. This is a page-by-page website build, not a quote-management application.

## Homepage

- Compact header and restrained desktop hero using the real `Hero-HomePage.png` photo. On mobile the photo comes first. The hero is designed to fit in a typical desktop viewport without scrolling.
- A smaller, all-navy service-first headline; short supporting description, one main CTA and a quiet secondary work link.
- **Get Free Quote** goes to `/quote`, where BrightView's native form sends lead requests through a protected server-side route. Submissions go to BrightView's Zolato lead board. The site does not run its own CRM, quotes, bookings, or payments.
- Three editorial, image-led service links (instead of boxed marketing cards).
- Authentic before/after photos displayed independently, **Before on the left, After on the right**, across screen sizes. No drag/slide effect. Each photo can be opened full-size.
- A short factual family-owned introduction and a minimal final contact call-to-action.
- Generic three-column process filler, redundant badges/trust strip, decorative effects, and developer-facing copy have been removed.

## Independent pages

Routes below remain placeholders unless noted:

- `/services`
- `/services/window-cleaning`
- `/services/pressure-washing`
- `/services/holiday-lights`
- `/our-work`
- `/about`
- `/reviews`
- `/service-areas`
- `/faq`
- `/contact` (redirects to `/quote`)
- `/quote` (custom BrightView lead intake, with multi-service selection)

## Run and check

```bash
npm ci
npm run dev
npm run build
```

## Still needed before launch

- Configure `ZOLATO_INTAKE_WEBHOOK_URL` as a server-side deployment environment variable (and `ZOLATO_INTAKE_SECRET` only if set in Zolato); ensure the webhook accepts the documented JSON field shape. The quote API intentionally returns 503 without the URL. Before public launch, configure edge rate-limiting/CAPTCHA to supplement the honeypot.
- Test a lead through `/quote` in a deployment preview and verify it appears in Zolato's **Recent activity** and lead board before going live. Confirm notification settings inside Zolato.
- Collect a genuine team/owners photo, verified reviews, and verified service-area details before adding public-facing claims.
- Review the actual desktop/mobile layouts and image performance. Original PNGs are large, though Next.js optimizes them for delivery.
- Review each reserved page before publishing. The whole site remains `noindex` until launch readiness is confirmed.

BrightView has a native multi-service quote form backed by the server-side `/api/quote` route, which forwards leads to Zolato. No local database, custom lead storage, pricing, scheduling, booking, or payment flow is implemented. Never commit the Zolato intake webhook URL or optional header secret. No invented reviews, ratings, credentials, staff imagery or precise coverage claims.

## New homepage reference layout (pending review)

A screenshot-guided homepage design uses deep evergreen, cream and champagne-gold. The opening slideshow features holiday lighting first using real BrightView pictures, then pressure washing and windows. A transparent header overlays the large image; four project-image service tiles overlap the hero; below, a compact process and genuine before/after comparison sit next to a factual trust panel. There are **no** invented metrics/testimonials and no booking integration. Update seasonal hero slides in `src/content/home-feature-slides.ts`. The 4th Gutter Cleaning card is linked to existing additional project evidence, not a standalone booking flow. All new work is subject to visual review before merge.
