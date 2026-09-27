# Bright View LLC

A mobile-first Next.js website for Bright View LLC, a family-owned Michigan window cleaning, power washing, and holiday lighting business.

## What is built

- High-conversion mobile-first homepage
- Dedicated service directory
- Individual pages for:
  - Window Cleaning
  - Power Washing
  - Holiday Lighting
- Dedicated Before & After gallery
- About page
- Focused free-quote page
- Accessible responsive navigation
- Persistent mobile quote CTA
- LocalBusiness structured data
- Real-work photo placeholders instead of fake stock transformations
- Quote endpoint designed to forward leads to an external webhook

## Quote form setup

Set this environment variable in Vercel:

```
BRIGHTVIEW_QUOTE_WEBHOOK=https://your-webhook-endpoint
```

The app POSTs quote data to that URL. This can point to an email workflow, Make, Zapier, a CRM later, or another lead destination without redesigning the customer-facing form.

Until the variable is configured, the form clearly directs customers to Bright View's Facebook page instead of silently dropping a lead.

## Before / after photos

See `public/work/README.md`.

The reusable `BeforeAfter` component already supports real image paths. The visible placeholders are intentional so the pilot never passes stock imagery off as Bright View's own work.

## Run locally

```bash
npm install
npm run dev
```

## Still needed before final public launch

- Confirm exact service area
- Confirm business phone number / lead email if those should be displayed
- Add real Bright View before-and-after photography
- Add verified customer reviews when available
- Configure the quote webhook
