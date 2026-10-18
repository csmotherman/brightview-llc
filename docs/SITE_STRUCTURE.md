# BrightView — build pages one by one

The homepage and Services overview have been designed. All remaining routes stay as deliberately sparse placeholders until approved.

| Route | Purpose / status |
| --- | --- |
| / | Designed homepage with real BrightView project photography |
| /services | **Designed**: editorial photo-led hero, accessible interactive service-selector, real matched before/after evidence, seasonal photo feature, Facebook contact |
| /services/window-cleaning | Window cleaning detail — placeholder |
| /services/pressure-washing | Pressure washing detail — placeholder |
| /services/holiday-lights | Holiday lighting detail — placeholder |
| /our-work | Project portfolio — placeholder |
| /about | Verified family story and genuine team photos — placeholder |
| /reviews | Verified customer testimonials — placeholder |
| /service-areas | Confirmed service-area locations — placeholder |
| /faq | Genuine FAQs — placeholder |
| /contact | Quote/contact flow to be decided last — placeholder |

## Services page interactions
- Hero photographed diptych uses existing BrightView window-cleaning and holiday-lighting photos.
- Three clear selectable service rows update the preview image and explanation. Buttons have aria-pressed states, support keyboard/touch interaction, and preserve visible navigation to full service pages.
- Transitions are restrained (image crossfades / active row highlight) and disabled when reduced motion is requested.
- Matched before and after photographs are displayed simultaneously and independently (BEFORE left, AFTER right). No swipe slider. Each links to a larger version of that original photo.
- Holiday lighting gets a large nighttime image feature.
- Get Free Quote currently opens the existing BrightView Facebook page in a new tab; no form/CRM/Jobber or scheduling system.
- All images in this design are from the existing repo. No invented job details, pricing, reviews, licenses, insurance or specific service areas.
- Layout styling is scoped to the Services page; no homepage CSS changes.

## Build order
1. Window cleaning
2. Pressure washing
3. Holiday lighting
4. Our Work
5. About
6. Verified reviews, service areas, FAQ
7. Contact
8. Quote form **last**

Keep noindex until launch approval.
