/**
 * PLACEHOLDER COPY taken from the homepage design mock.
 * The testimonial, rating and counts are NOT verified business facts yet:
 * replace them with real reviews and numbers before the site is published.
 */
export const homeProof = {
  homeowners: { count: "200+", label: "Happy Homeowners" },
  testimonials: [
    {
      quote: "Our driveway and patio look brand new! Professional, on time, and great to work with. Highly recommend BrightView!",
      name: "Sarah M.",
      place: "Clarkston, MI",
    },
  ],
  stats: [
    { value: "200+", label: "Happy Customers" },
    { value: "5.0", label: "Average Rating" },
    { value: "3+", label: "Years Local" },
  ],
} as const;

export const heroBenefits = [
  { icon: "sun", title: "CLEANER HOMES", sub: "BRIGHTER NEIGHBORHOODS", href: "/services", lead: true },
  { icon: "sparkle", title: "Removes Dirt & Grime", href: "/services#pressure-washing" },
  { icon: "shield", title: "Prevents Costly Damage", href: "/services#extra-title" },
  { icon: "house", title: "Boosts Curb Appeal", href: "/services#window-cleaning" },
  { icon: "chart", title: "Increases Property Value", href: "/services" },
] as const;
