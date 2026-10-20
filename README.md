# BrightView LLC website

Family-owned Michigan window cleaning, pressure washing and holiday lighting. Next.js (App Router) + plain CSS Modules, no UI framework.

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # type-checks and builds
```

## Architecture

```text
src/
├── app/                    routes; each page composes shared components
│   ├── layout.tsx          the one site layout: skip link, header, <main>, footer
│   ├── globals.css         imports the design system (tokens + base) only
│   ├── page.tsx            homepage (+ home.module.css, page-specific)
│   ├── services/ about/ gallery/ reviews/ service-areas/ faq/ quote/
│   ├── contact/            redirects to /quote
│   └── api/quote/route.ts  server-side validation + Zolato forwarding
├── components/
│   ├── layout/             SiteHeader, SiteFooter, PageHeader, PageContainer, Section (+Split, CardGrid, ActionRow), QuoteBand
│   ├── ui/                 Button, Card, SectionHeading, Pill, FormField (Input, Textarea, CheckboxOption)
│   ├── home/ services/ quote/   feature components used by one area
├── config/site.ts          verified business facts
├── content/                page copy and photo inventories
├── lib/quote-services.ts   service list + limits shared by the form and the API
└── styles/
    ├── tokens.css          design tokens (single source of truth)
    └── base.css            reset, global typography, focus, reduced motion
```

## Design system

| Concern | Where it lives |
| --- | --- |
| Colors (evergreen / cream / champagne gold), semantic roles | `src/styles/tokens.css` |
| Fonts (Inter + Playfair Display), type scale, spacing, radii, shadows, glass | `src/styles/tokens.css` (fonts are loaded in `app/layout.tsx`) |
| Page width and gutters (`--content-max`, `--edge`) | `tokens.css`, applied by `PageContainer` / `Section` |
| Buttons (`primary`, `gold`, `outline`; `md`, `sm`) | `components/ui/Button` |
| Surfaces (`evergreen`, `light`, `glass`) | `components/ui/Card` |
| Section intro (eyebrow + heading + lead) | `components/ui/SectionHeading` |
| Form fields and multi-select checkboxes | `components/ui/FormField` |
| Navigation and footer | `components/layout/SiteHeader`, `SiteFooter` |
| Photographic page intro | `components/layout/PageHeader` |
| Closing call to action | `components/layout/QuoteBand` |

Rules: pages never define their own button, heading scale, colors or container widths. Page-specific layout stays in that page's CSS Module and reads tokens. Breakpoints are fixed at **1100px / 900px / 520px** (documented in `tokens.css`); the homepage lower row also uses one layout-specific 1280px break.

## Quote form and Zolato intake

`/quote` is a native form that posts to `/api/quote`, which validates the request and forwards it server-side to Zolato. `/contact` redirects to `/quote`. Customers never leave BrightView.

Local setup: copy `.env.example` to `.env.local` (or `.env`) in **this** directory, set `ZOLATO_INTAKE_WEBHOOK_URL`, and restart `npm run dev` (Next reads env files only at startup). Never prefix it with `NEXT_PUBLIC_`.

Built in: origin/JSON/size checks, allowlisted services, honeypot, best-effort per-instance rate limiting and duplicate suppression, no sensitive data in logs. Before public launch add edge rate limiting or CAPTCHA (e.g. Cloudflare Turnstile) and set the env var in the hosting provider. Live delivery to Zolato must be verified with one approved test lead.

The site is `noindex` until launch approval (`app/layout.tsx`).
