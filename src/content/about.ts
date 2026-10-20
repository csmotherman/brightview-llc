/**
 * About page content. Only claims the business has confirmed: family-owned, Michigan, the six services, real project
 * photos, and real customer recommendations (quoted from reviews.ts, never edited). No founding story, years in
 * business, team size, project counts, awards, licenses, guarantees or service areas.
 */
export const aboutHero = {
  eyebrow: "FAMILY-OWNED. MICHIGAN-BASED.",
  headline: "Built on hard work. Known for the details.",
  intro:
    "BrightView is a family-owned Michigan business that looks after the outside of your home, from windows and exterior surfaces to gutters, roofs and professionally installed holiday lighting.",
  image: { src: "/images/Hero-HomePage.png", alt: "A BrightView team member squeegeeing a large window, with fresh suds still on the glass" },
} as const;

/** "The BrightView approach": how customers are treated and what happens after a quote request (no services list; the hero covers that). */
export const aboutStory = {
  kicker: "THE BRIGHTVIEW APPROACH",
  heading: "A family business, kept personal.",
  paragraphs: [
    "As a family-owned business, we keep things personal. Tell us about your property and what you'd like done, and we'll take the time to review the details.",
    "After you request a quote, we follow up to talk through your project. Submitting a request doesn't book or purchase anything, so you can ask questions before deciding.",
  ],
  image: {
    src: "/images/projects/pressure-washing/Porch.png",
    alt: "A concrete porch step photographed mid-clean: one half is washed and light, the other half still shows weathering and algae",
  },
  caption: "A porch step, mid-clean.",
} as const;

/** Three distinct commitments. Only claims the site itself already states; no inspection or assessment procedure is implied. */
export const aboutPrinciples = {
  kicker: "WHAT YOU CAN EXPECT",
  heading: "Straightforward, from the first message.",
  items: [
    { title: "Our work speaks for itself", body: "Explore examples of our exterior cleaning and holiday lighting, alongside feedback from real customers. See what BrightView is all about before requesting a quote." },
    { title: "Right approach, right surface", body: "Glass, pavers, siding and roofs aren't all cleaned the same way. Different surfaces call for different cleaning approaches." },
    { title: "Free to ask", body: "Requesting a quote is free, with no payment or booking required." },
  ],
} as const;

export const aboutWork = {
  heading: "The work speaks for itself.",
  items: [
    { service: "Window Cleaning", caption: "Clearer windows. Brighter views.", src: "/images/projects/window-cleaning/Full House 16-9.png", alt: "A large stone-and-siding home with a pergola and covered patio, photographed after BrightView window cleaning, its many windows reflecting the sky and a lake", position: "50% 38%" },
    { service: "Exterior Washing", caption: "A fresh look for the spaces around your home.", src: "/images/projects/pressure-washing/BrickPaver After 4-3.png", alt: "A curved brick-paver step and patio at a back door, photographed after BrightView exterior washing", position: "50% 62%" },
    { service: "Holiday Lighting", caption: "Making the season a little brighter.", src: "/images/projects/holiday-lights/House3.png", alt: "A brick home at night with warm white holiday lights along the roofline, wreaths and wrapped trees", position: "50% 58%" },
  ],
} as const;

export const aboutTrust = { heading: "A reputation built one job at a time." } as const;

/** Grouped from serviceDetails (names, symbols and /services#anchors) so the About page cannot drift from the Services page. */
export const aboutYearRound = {
  heading: "Here for more than one season.",
  intro: "Exterior cleaning and maintenance through the year, plus holiday lighting when the season arrives.",
  groups: [
    { title: "Exterior Cleaning", ids: ["window-cleaning", "pressure-washing", "soft-washing", "roof-cleaning", "gutter-cleaning"] },
    { title: "Seasonal Lighting", ids: ["holiday-lighting"], note: "Our own lights, professionally installed, and taken down for you after the season." },
  ],
} as const;

export const aboutCta = {
  headline: "Ready for a brighter view?",
  copy: "Tell us what your home needs and we'll follow up with a quote.",
} as const;
