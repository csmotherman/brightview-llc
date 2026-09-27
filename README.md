# Bright View LLC

A mobile-first Next.js website for Bright View LLC, a family-owned Michigan
window cleaning, power washing, and holiday lighting business.

Design system: **Great Lakes Clarity** — navy, bright blue, water blue, and
gold, built around a recurring window-pane motif (clean glass, reflection,
sunlight) instead of a generic home-services template.

## Structure

```
lib/business.ts     Central business facts (name, phone, email, service area, socials)
data/services.ts     Service copy, coverage, process, FAQs
data/projects.ts     Real before/after project photography (empty until added)
components/          Header, mobile nav sheet, BeforeAfterSlider, ServiceStory, etc.
app/                 Next.js App Router pages
```

Single source of truth for business facts lives in `lib/business.ts`. Fields
that aren't confirmed yet (phone, email, service area, Google rating, owner
photo, etc.) are left `undefined`, and every component that reads them hides
the related UI rather than rendering a placeholder or invented value.

## Adding real project photography

See `public/projects/README.md` for the exact steps. Short version: drop
matched before/after images into `public/projects/<service>/` and add an
entry to the `projects` array in `data/projects.ts`. The homepage, service
pages, and `/gallery` all read from that one array — until a service has at
least one entry, its before/after section shows an honest "portfolio in
progress" state instead of a fake or placeholder job.

## Quote form setup

Set this environment variable in Vercel:

```
BRIGHTVIEW_QUOTE_WEBHOOK=https://your-webhook-endpoint
```

The app POSTs quote data to that URL. This can point to an email workflow,
Make, Zapier, a CRM later, or another lead destination without redesigning
the customer-facing form. Until the variable is configured, the form clearly
directs customers to Bright View's Facebook page instead of silently
dropping a lead.

## Run locally

```bash
npm install
npm run dev
```

## Still needed from Bright View before final public launch

- Business phone number and/or lead email (if they should be displayed —
  `lib/business.ts`)
- Confirmed service area / city list (`lib/business.ts` → `serviceArea`)
- Real before-and-after project photography (`data/projects.ts`)
- Owner/family photo for `/about` (`lib/business.ts` → `ownerPhotoSrc`)
- Google Business URL, review rating/count, if Bright View wants them shown
- Whether Bright View is licensed/insured, if that should be stated
- The `BRIGHTVIEW_QUOTE_WEBHOOK` destination for live quote leads
