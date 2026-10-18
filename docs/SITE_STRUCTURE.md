# BrightView — Directory Plan

## Purpose
Keep the codebase simple, organized by actual page responsibility, and ready to build one page at a time. This is a structural plan, not a completed site or a commitment to any quote-management service.

## Directory responsibilities

- `src/app/`: Next.js routes. Each reserved route contains only a `.gitkeep` until it is actually built.
- `src/components/layout/`: shared header, footer and content container.
- `src/components/ui/`: small shared controls only when needed.
- `src/components/sections/`: reusable content sections only after repeated usage is proven.
- `src/config/`: confirmed business identity and site-wide configuration.
- `src/content/`: future editorial or project content, once real source material is ready.
- `src/lib/`: shared helpers added on demand.
- `src/styles/`: design tokens and foundational CSS.
- `public/brand/`: original BrightView logo and future approved brand assets.
- `public/images/`: photographs grouped by usage and service; empty until genuine approved assets are available.

## Pages reserved, not yet built

| Route | Role |
| --- | --- |
| `/` | Homepage — next page to design |
| `/services` | All services |
| `/services/window-cleaning` | Window cleaning |
| `/services/pressure-washing` | Pressure washing |
| `/services/holiday-lights` | Holiday lighting |
| `/our-work` | Completed projects and before/after |
| `/about` | Family and business story |
| `/reviews` | Genuine customer reviews |
| `/service-areas` | Verified areas served |
| `/faq` | Service FAQs |
| `/contact` | Contact details and options; method not decided |

No quote/booking route, webhook or payment integration is included. Those decisions are deferred by request.

## Rules for each next page

1. Design it before implementing more pages.
2. Use real business facts. Never invent phone numbers, testimonials, coverage, owners or credentials.
3. Build responsive desktop/mobile views with semantic HTML, accessible focus states and usable text contrast.
4. Keep design components small. No speculative abstractions or unused dependencies.
5. Add navigation links only after their destinations exist.
6. Preserve the original logo; only replace or crop it after explicit review.
7. Keep the site non-indexable until real, publicly ready content exists.
8. Document any new functionality and verify the build before review.
