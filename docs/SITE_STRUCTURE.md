# BrightView — build pages one by one

The homepage and main `/services` catalog are designed. All other routes remain blank placeholders until individually built and approved.

| Route | Purpose / status |
| --- | --- |
| / | Homepage preview of the business and selected real project photos |
| /services | **Built**: compact core-service descriptions, benefits, every uploaded job/photo pair and finished-project image, contact link |
| /services/window-cleaning | Window cleaning detail — placeholder |
| /services/pressure-washing | Pressure washing detail — placeholder |
| /services/holiday-lights | Holiday lighting detail — placeholder |
| /our-work | Full project portfolio — placeholder |
| /about | Verified family story and genuine team photos — placeholder |
| /reviews | Verified customer testimonials — placeholder |
| /service-areas | Confirmed service-area locations — placeholder |
| /faq | Genuine FAQs — placeholder |
| /contact | Contact / quote flow to be decided last — placeholder |

## Services gallery inventory

- Window cleaning: 1 matched before-and-after pair + 1 complete-house image.
- Pressure washing: brick-paver and fence matched before-and-after pairs + 1 porch photo.
- Holiday lighting: 3 completed-house photos + 1 tree-lighting photo.
- Additional project evidence: 1 gutter-cleaning matched before-and-after pair, separated from the three confirmed advertised services rather than treating it as a newly confirmed bookable service.
- The shared homepage hero is not duplicated as a services project photo.

Each image is shown without a swipe control, and each opens the original file in a new browser tab. Before is always left; after is always right, including on small screens. The page uses no service-selection JS or homepage-style promotional hero.

The bottom Get Free Quote button currently opens the verified BrightView Facebook page in a new tab. No quote form, pricing, scheduling, CRM or Jobber integration has been implemented.

## Build order

1. Window cleaning
2. Pressure washing
3. Holiday lighting
4. Our Work
5. About
6. Verified reviews, service areas, FAQ
7. Contact
8. Quote form **last**

Keep the site noindex until launch approval.

## Homepage seasonal features

The homepage hero now rotates through three real-photo features, with Christmas / holiday lighting in the first position. The other features direct visitors to the existing Services catalog. The seasonal call-to-action contacts BrightView via its existing Facebook page; it does **not** claim that appointments or bookings can be completed online.

The content and order live in `src/content/home-features.ts`. Replace or retire seasonal copy manually when appropriate; add actual business announcements only once verified. The carousel auto-rotates with pause, slide selection and previous/next controls, and respects reduced-motion settings. No artificial reviews, dates, deals or inventory claims have been introduced.
