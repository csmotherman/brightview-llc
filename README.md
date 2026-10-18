# BrightView LLC — homepage redesign (review branch)

BrightView is a family-owned Michigan window-cleaning, pressure-washing and holiday-lighting business. This is a page-by-page website build, not a quote-management application.

## Homepage

- **Featured homepage slideshow:** a seasonal Christmas-lighting feature leads, followed by Window Cleaning and Pressure Washing. All photos are existing BrightView project assets, including paired editorial images on desktop.
- Slide headlines, images, order, actions and destinations are maintained in `src/content/home-features.ts` so future verified news, seasonal campaigns or announcements can replace the featured items without editing the carousel component.
- Autoplay advances about every 8.5 seconds; visitors can pause/play, use arrows or choose a slide. Rotation pauses on hover and stops on keyboard focus; reduced-motion preference disables automatic rotation.
- Christmas-lighting CTA temporarily opens BrightView's Facebook page for inquiries; **there is no online booking flow** until the quote system is designed and approved.
- **Get Free Quote** temporarily opens the existing BrightView Facebook page (a new tab). The page explicitly says so. There is no quote form, automatic estimate, account, or CRM.
- Three editorial, image-led service links (instead of boxed marketing cards).
- Authentic before/after photos displayed independently, **Before on the left, After on the right**, across screen sizes. No drag/slide effect. Each photo can be opened full-size.
- A short factual family-owned introduction and a minimal final contact call-to-action.
- Generic three-column process filler, redundant badges/trust strip, decorative effects, and developer-facing copy have been removed.

## Independent pages

All routes below remain simple placeholders so they can be designed one at a time:

- `/services`
- `/services/window-cleaning`
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

## Changing featured updates

Edit `src/content/home-features.ts` to reorder, replace, or retire seasonal stories. Only publish verified announcements and use approved real imagery. For the Christmas-lighting feature, replace the temporary Facebook CTA with the actual booking destination only after the owner approves and builds that flow. The slideshow is separate from the homepage service/portfolio previews.
