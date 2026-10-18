# BrightView LLC — homepage and reserved pages

A Next.js website built page by page for BrightView LLC, a family-owned Michigan window cleaning, pressure washing and holiday lighting business.

## Current scope

The **homepage** is the only page with full content:
- Compact navigation and a desktop hero designed to remain in the first screen, with a subtle image-edge fade and a verified, minimal trust line (uses the supplied real hero photo).
- Three service teasers linking to their separate pages.
- Actual matched before/after photographs shown simultaneously: **Before on the left, After on the right**, with category buttons. No swipe, drag handle or split-image overlay.
- Brief how-it-works, family-owned introduction and contact call to action.
- Get Free Quote labels in the header, hero and bottom CTA link to the existing /contact placeholder until the quote feature is built. No form, quote processing, CRM or pricing yet. The existing Facebook link remains in the footer.

The routes below are accessible **blank placeholders** with just a page title, a coming-soon line and a link back home. They will be built independently later:

/services
/services/window-cleaning
/services/pressure-washing
/services/holiday-lights
/our-work
/about
/reviews
/service-areas
/faq
/contact

## Run

npm ci
npm run dev
npm run build

## Boundaries

- **Do not** implement Jobber, CRM, payments, quotes, scheduling, forms, pricing or other integrations.
- No invented testimonials, star ratings, insurance/licensing promises, phone numbers or specific service areas.
- Photos are existing images in public/images; no AI-generated or stock visuals.
- Gutter photos are portfolio evidence, not a new confirmed bookable service.
- Site remains noindex until business details, pages and launch have been reviewed.
- This branch is for review only; do not merge or deploy until approved.
