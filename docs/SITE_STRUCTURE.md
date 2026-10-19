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
| /quote | Native BrightView quote form with multi-select services; secure server-side forwarding to Zolato |
| /contact | Redirects to the active `/quote` form |

## Services gallery inventory

- Window cleaning: 1 matched before-and-after pair + 1 complete-house image.
- Pressure washing: brick-paver and fence matched before-and-after pairs + 1 porch photo.
- Holiday lighting: 3 completed-house photos + 1 tree-lighting photo.
- Additional project evidence: 1 gutter-cleaning matched before-and-after pair, separated from the three confirmed advertised services rather than treating it as a newly confirmed bookable service.
- The shared homepage hero is not duplicated as a services project photo.

Each image is shown without a swipe control, and each opens the original file in a new browser tab. Before is always left; after is always right, including on small screens. The page uses no service-selection JS or homepage-style promotional hero.

The bottom Get Free Quote button routes to `/quote`. Website leads go to BrightView's Zolato lead board using the server-side API route. No client-exposed webhook, scheduling, automatic prices, or payments are implemented.

## Build order

1. Window cleaning
2. Pressure washing
3. Holiday lighting
4. Our Work
5. About
6. Verified reviews, service areas, FAQ
7. Contact
8. Quote form (now integrated with Zolato)

Keep the site noindex until launch approval.

## Screenshot-inspired homepage refresh (review branch)

- Homepage follows the supplied layout reference: photographic evergreen-toned hero with transparent navigation, cream-gold quote button, four photo service tiles, and a cream lower strip with process / real before-after / dark proof panel.
- Real photography from the repo only; no placeholder cards, external image hotlinks or simulated reviews.
- Existing BrightView logo preserved. The screenshot's example three faces, 200+ happy customers, quoted testimonial, 5.0 rating and other unverified superlatives were deliberately not reproduced.
- Holiday lighting is the first hero feature during the current season; subsequent slides feature pressure washing and window cleaning. Slideshow controls include pause/play, previous/next and accessible direct selection. Quote requests use `/quote` and BrightView's native form routed to Zolato, **not an online booking system**.
- Four service tiles visually match the sample. Window, pressure and holiday lighting are the three confirmed core services. The Gutter Cleaning tile links only to the genuine additional-project photos already on /services; don't imply a separate gutter quote flow until scope is confirmed.
- The right-hand proof panel shows real photograph counts, existing categories, and verified family-owned Michigan context instead of invented reviews.
- Screenshot imagery itself is used for layout inspiration only, not as a production image; no fabricated before/after property photograph.
- The previous slideshow PR #5 is superseded by this visual refresh. Keep the remaining service-page PR #4 independently reviewable.
