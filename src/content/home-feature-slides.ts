import { site } from "@/config/site";

/**
 * Seasonal features use only BrightView's existing imagery and verified copy.
 * Keep the holiday promotion first until the business decides to rotate it out.
 */
export const homeSlides = [
  {
    key: "holiday",
    eyebrow: "HOLIDAY SEASON | BRIGHTVIEW",
    title: "Holiday Lights\nAre Here.",
    description:
      "Bring a little more light to your Michigan home. Explore our real holiday lighting displays and tell us what you have in mind.",
    image: "/images/projects/holiday-lights/House1.png",
    alt: "BrightView holiday lights decorating a Michigan house at night",
    objectPosition: "center 22%",
    flip: true,
    cta: "Request Holiday Lighting",
    href: site.facebookUrl,
    external: true,
    secondary: "See Our Work",
    secondaryHref: "/#results",
    photoLabel: "HOLIDAY LIGHTING",
  },
  {
    key: "exterior",
    eyebrow: "A FRESH FIRST IMPRESSION",
    title: "Curb Appeal\nRestored.",
    description:
      "From pavers and porches to outdoor surfaces, see what a proper clean can change. Real projects, real results.",
    image: "/images/projects/pressure-washing/BrickPaver After 4-3.png",
    alt: "Brick pavers after BrightView pressure washing",
    objectPosition: "center center",
    flip: false,
    cta: "Explore Pressure Washing",
    href: "/services#pressure-washing",
    external: false,
    secondary: "See Before & After",
    secondaryHref: "#results",
    photoLabel: "PRESSURE WASHING",
  },
  {
    key: "windows",
    eyebrow: "CLEARER VIEWS START HERE",
    title: "Clearer Windows.\nBrighter Views.",
    description:
      "Clear windows make a difference inside and out. Take a look at our residential window-cleaning work.",
    image: "/images/Hero-HomePage.png",
    alt: "BrightView team member cleaning a residential window",
    objectPosition: "center 48%",
    flip: false,
    cta: "Explore Window Cleaning",
    href: "/services#window-cleaning",
    external: false,
    secondary: "See Our Results",
    secondaryHref: "#results",
    photoLabel: "WINDOW CLEANING",
  },
] as const;
