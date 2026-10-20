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

/** "The BrightView approach": who we are and how a project starts. Truthful until real company history is supplied. */
export const aboutStory = {
  kicker: "THE BRIGHTVIEW APPROACH",
  heading: "A family business, kept personal.",
  paragraphs: [
    "BrightView is a family-owned Michigan business. We clean windows and exterior surfaces, clear gutters, clean roofs, and supply, install and take down holiday lighting.",
    "Every project starts with listening. Tell us what you'd like done, and we'll follow up with a quote before any work is scheduled.",
  ],
  image: {
    src: "/images/projects/pressure-washing/Porch.png",
    alt: "A concrete porch step photographed mid-clean: one half is washed and light, the other half still shows weathering and algae",
  },
  caption: "A porch step, mid-clean.",
} as const;

/** Three distinct commitments; each is something the site itself already shows or states. */
export const aboutPrinciples = {
  kicker: "WHAT YOU CAN EXPECT",
  heading: "Straightforward, from the first message.",
  items: [
    { title: "Real work", body: "Every photograph on this site is from an actual BrightView project. We'd rather show what we've done than make promises." },
    { title: "Care for the surface", body: "Windows, pavers, siding and roofs aren't all treated alike. We consider the material and its condition before choosing an approach." },
    { title: "A clear next step", body: "Requesting a quote is free, with no payment or booking required. We review the details and follow up." },
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
