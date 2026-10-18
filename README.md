# BrightView LLC — Fresh Foundation

This repository is deliberately reset to a **minimal, working Next.js App Router scaffold**.

**This change does not build the website.** The homepage is an intentional holding screen. Each page will be designed, implemented, and reviewed separately.

## Run locally

```bash
npm ci
npm run dev
```

## Current scope

- Basic responsive shell (header, content container, footer, skip link).
- Brand identity and the original logo preserved in `public/brand/`.
- Small reusable design-token layer; no complex theme or prebuilt page templates.
- Reserved page directories; no unfinished pages linked in navigation.
- Development-stage `noindex` metadata to prevent accidental search indexing.
- No quote form, CRM, webhook, booking, pricing, database, authentication or payment integration.

## Next steps, one page at a time

1. Design and implement the homepage in `src/app/page.tsx`.
2. Implement the three service pages individually.
3. Build project proof, about, reviews, service area, and other pages as real content becomes available.
4. Revisit contact and lead intake **only when requirements are agreed**.

See [docs/SITE_STRUCTURE.md](docs/SITE_STRUCTURE.md) for the directory layout and page ownership rules.

Before public launch: verify business details and imagery, add real navigation only to existing routes, check accessibility and responsive behavior, restore appropriate indexing, and create a sitemap for published pages.
