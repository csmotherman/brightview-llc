/**
 * About page content. Only claims the business has confirmed: family-owned, Michigan, the six services, real project
 * photos, and real customer recommendations (quoted from reviews.ts, never edited). No founding story, years in
 * business, team size, project counts, awards, licenses, guarantees or service areas.
 */
export const aboutHero = {
  eyebrow: "FAMILY-OWNED. MICHIGAN-BASED.",
  headline: "Built on hard work. Known for the details.",
  intro:
    "BrightView is a family-owned Michigan exterior cleaning and holiday lighting business. From crystal-clear windows to refreshed outdoor spaces and professionally installed holiday displays, our work is about helping properties look their best.",
  image: { src: "/images/Hero-HomePage.png", alt: "A BrightView team member squeegeeing a large window, with fresh suds still on the glass" },
} as const;

export const aboutStory = {
  heading: "A little care goes a long way.",
  paragraphs: [
    "BrightView was built around a simple idea: the details make the difference. A cleaner window changes the way a room feels. A freshly washed exterior gives a property new life. And a thoughtfully installed holiday display can transform the way a home looks after dark.",
    "Whether we're cleaning glass, washing exterior surfaces or installing seasonal lighting, our focus is on the work itself and the difference it makes for the people who trust us with their property.",
  ],
  image: {
    src: "/images/projects/pressure-washing/Porch.png",
    alt: "A concrete porch step photographed mid-clean: one half is washed and light, the other half still shows weathering and algae",
  },
  pullQuote: "The details make the difference.",
  caption: "A porch step, mid-clean.",
} as const;

export const aboutPrinciples = {
  heading: "The details are what matter.",
  items: [
    { title: "Care in the details", body: "The finishing touches matter. From cleaner glass to refreshed exterior surfaces, we focus on the details that make the finished work stand out." },
    { title: "Real work. Real results.", body: "The photographs you see are from actual BrightView projects. We'd rather show what we've done than make promises we can't prove." },
    { title: "A personal approach", body: "As a family-owned business, BrightView brings a personal approach to the work. Each project begins with understanding what the customer needs." },
    { title: "More ways to care for your property", body: "Windows, exterior washing, gutters, roofs and seasonal lighting — services that help properties look their best throughout the year." },
  ],
} as const;

export const aboutWork = {
  heading: "The work speaks for itself.",
  items: [
    { service: "Window Cleaning", caption: "Clearer windows. Brighter views.", src: "/images/projects/window-cleaning/Full House 16-9.png", alt: "A lakeside home photographed after BrightView window cleaning, its many windows reflecting the sky", position: "50% 38%" },
    { service: "Exterior Washing", caption: "A fresh look for the spaces around your home.", src: "/images/projects/pressure-washing/BrickPaver After 4-3.png", alt: "A curved brick-paver step and patio at a back door, photographed after BrightView exterior washing", position: "50% 62%" },
    { service: "Holiday Lighting", caption: "Making the season a little brighter.", src: "/images/projects/holiday-lights/House3.png", alt: "A brick home at night with warm white holiday lights along the roofline, wreaths and wrapped trees", position: "50% 58%" },
  ],
} as const;

export const aboutTrust = { heading: "A reputation built one job at a time." } as const;

/** Grouped from serviceDetails (names, symbols and /services#anchors) so the About page cannot drift from the Services page. */
export const aboutYearRound = {
  heading: "Here for more than one season.",
  intro: "BrightView takes care of exterior cleaning and maintenance projects as well as holiday decorating, so the same team can help your property look its best in every season.",
  groups: [
    { title: "Exterior Cleaning", ids: ["window-cleaning", "pressure-washing", "soft-washing", "roof-cleaning", "gutter-cleaning"] },
    { title: "Seasonal Lighting", ids: ["holiday-lighting"], note: "Our own lights, professionally installed, and taken down for you after the season." },
  ],
} as const;

export const aboutCta = {
  eyebrow: "YOUR PROPERTY. OUR ATTENTION TO DETAIL.",
  headline: "Ready for a brighter view?",
  copy: "Tell us what your home or property needs. From windows and exterior cleaning to holiday lighting, we'd be happy to hear about your project.",
} as const;
