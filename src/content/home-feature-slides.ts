/**
 * Homepage hero slides. Only real BrightView photography and verified service copy.
 * `position` / `positionMobile` are the photo focal points (CSS object-position) for the
 * desktop right-hand photo panel and the mobile top photo band; tune them per image.
 * `why` is the compact "Why it matters" card shown beside the hero for that slide.
 */
export const homeSlides = [
  {
    key: "windows",
    title: "Clearer Windows.\nBrighter Views.",
    description:
      "Clear windows make a difference inside and out. Take a look at our residential window-cleaning work.",
    image: "/images/Hero-HomePage.png",
    alt: "BrightView team member cleaning a residential window",
    position: "32% 40%",
    positionMobile: "24% 40%",
    cta: "Get Free Quote",
    href: "/quote",
    secondary: "Explore Window Cleaning",
    secondaryHref: "/services#window-cleaning",
    photoLabel: "WINDOW CLEANING",
    why: {
      title: "Why clean glass matters",
      points: ["More natural light indoors", "Clearer views, inside and out", "Dirt and buildup removed"],
    },
  },
  {
    key: "pressure",
    title: "Fresh Surfaces.\nBetter Curb Appeal.",
    description:
      "Refresh patios, porches and suitable outdoor surfaces by removing visible grime and seasonal buildup.",
    image: "/images/projects/pressure-washing/Porch.png",
    alt: "BrightView pressure-washing project showing a porch step with cleaned and uncleaned sections",
    position: "50% 50%",
    positionMobile: "50% 44%",
    cta: "Get Free Quote",
    href: "/quote",
    secondary: "Explore Pressure Washing",
    secondaryHref: "/services#pressure-washing",
    photoLabel: "PRESSURE WASHING",
    why: {
      title: "Why clean outdoor surfaces",
      points: ["Less visible dirt and buildup", "A refreshed look for patios and porches", "More inviting outdoor spaces"],
    },
  },
  {
    key: "gutters",
    title: "Clear Gutters.\nRainwater Flowing.",
    description:
      "Leaves and debris can block gutter channels. BrightView clears buildup to help rainwater move toward the downspouts.",
    image: "/images/projects/gutter/Gutter After 4-3.png",
    alt: "A gutter photographed after a BrightView gutter-cleaning project",
    position: "50% 46%",
    positionMobile: "50% 48%",
    cta: "Get Free Quote",
    href: "/quote",
    secondary: "Explore Gutter Cleaning",
    secondaryHref: "/services#gutter-cleaning",
    photoLabel: "GUTTER CLEANING",
    why: {
      title: "Why clear gutters matter",
      points: ["Fewer clogs from leaves and debris", "Help water move toward downspouts", "One less seasonal chore"],
    },
  },
] as const;
