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
    key: "holiday",
    title: "Holiday Lights\nAre Here.",
    description:
      "Bring a little more light to your Michigan home. Explore our real holiday lighting displays and tell us what you have in mind.",
    image: "/images/projects/holiday-lights/House3.png",
    alt: "Brick Michigan home with BrightView holiday lighting on the roofline, trees and landscaping at night",
    position: "50% 52%",
    positionMobile: "50% 45%",
    cta: "Get Free Quote",
    href: "/quote",
    secondary: "See Our Work",
    secondaryHref: "/#results",
    photoLabel: "HOLIDAY LIGHTING",
    why: {
      title: "Why professional lighting",
      points: ["Installation and takedown handled", "Warm, welcoming curb appeal", "Less ladder work for you"],
    },
  },
] as const;
