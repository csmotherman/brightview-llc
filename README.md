# BrightView LLC — Homepage v1

The repository has a **single designed public page:** the homepage at `/`. All other routes remain reserved directories and must be built one at a time, after review.

## Run locally

```bash
npm ci
npm run dev
npm run build
```

## Homepage sections

1. Responsive utility/header with links to **existing homepage sections**, not unfinished routes.
2. Hero using the submitted `public/images/Hero-HomePage.png`.
3. Three core service features: window cleaning, pressure washing, holiday lighting.
4. Accessible, responsive before/after comparison covering window cleaning, pressure-washed brick pavers and fence, and gutter cleaning as project proof (not a confirmed fourth service).
5. Holiday-lighting photo collection.
6. Family-owned story using confirmed facts only. No fictional family/team photography.
7. Contact band linking to the existing BrightView Facebook page (no unfinished quote form).
8. Responsive footer.

### Notes and intentional exclusions

- No Jobber, CRM, booking, pricing, account creation, webhook, quote form, database, or payment system.
- The only external contact path currently used is the existing BrightView Facebook page. Verify it with the owner before going public.
- No service or contact page has been built, so navigation points to homepage anchors.
- The uploaded PNGs are preserved in-place. Next.js `Image` provides responsive delivery and optimization.
- Gutter cleaning is shown as a real photo comparison; whether it's offered as a separately bookable service is not assumed.
- The current site-wide `noindex` remains in place. Restore appropriate indexing and add sitemap only after a public launch review.
- All displayed locations, business credentials, review figures and contact details must be genuine and verified.

## Structure

- `src/app/page.tsx` — homepage composition
- `src/app/globals.css` and `src/styles/tokens.css` — foundational styling
- `src/components/home/BeforeAfterShowcase.tsx` — interactive project comparison
- `src/content/home-projects.ts` — actual project photo paths
- `src/components/layout/` — header, footer and content container
- `src/config/site.ts` — confirmed business identity and existing public contact route
- `public/images/` — original submitted project photographs

See [docs/SITE_STRUCTURE.md](docs/SITE_STRUCTURE.md) for the reserved future routes.
