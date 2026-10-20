# BrightView site structure

| Route | Purpose |
| --- | --- |
| / | Homepage: two-slide hero (window cleaning, holiday lighting), service tiles, process, real before/after slider, recommendation card |
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
- The homepage review card (`src/content/home-reference.ts`) shows only real Facebook recommendations. The earlier placeholder "200+ homeowners", 5.0 rating and "3+ years" stats were removed as unverified; add numbers back only if BrightView confirms them.
- Gutter cleaning appears only as additional project evidence, not as a confirmed core service.
- Core services (also the quote form's options): Window Cleaning, Pressure Washing, Holiday Lighting.
- Keep the site `noindex` until launch approval.
