# BrightView site structure

| Route | Purpose |
| --- | --- |
| / | Homepage: seasonal feature hero, service tiles, process, real before/after slider, review panel |
| /services | All core-service descriptions with every real project photo |
| /services/window-cleaning, /pressure-washing, /holiday-lights | Per-service detail pages (shared `ServiceDetail`) |
| /our-work | Filterable gallery of all project photos |
| /about | Family-owned overview and service links |
| /reviews | Real Facebook recommendations (`src/content/reviews.ts`) |
| /service-areas | Michigan service-area contact prompt (no town list is claimed) |
| /faq | Common questions |
| /quote | Native multi-service quote form → `/api/quote` → Zolato |
| /contact | Redirects to /quote |

## Content rules

- Use only real BrightView photographs and verified facts. No invented reviews, pricing, certifications or coverage areas.
- `src/content/home-reference.ts` holds the homepage "200+ happy homeowners" and the review-panel stats (200+ / 5.0 / 3+ years). They are **not verified business facts**; confirm or remove them before launch.
- Gutter cleaning appears only as additional project evidence, not as a confirmed core service.
- Core services (also the quote form's options): Window Cleaning, Pressure Washing, Holiday Lighting.
- Keep the site `noindex` until launch approval.
