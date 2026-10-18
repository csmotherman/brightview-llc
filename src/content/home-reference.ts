/**
 * PLACEHOLDER COPY taken from the homepage design mock.
 * The review quotes are real. The homeowner count and stats are NOT verified business facts yet:
 * replace them with real reviews and numbers before the site is published.
 */
export const homeProof = {
  homeowners: { count: "200+", label: "Happy Homeowners" },
  // Real Facebook recommendations. Long ones are excerpted with an ellipsis.
  testimonials: [
    { quote: "Hardworking, honest, responsible, great at the job at hand!", name: "Nicole Messing", place: "Facebook recommendation" },
    { quote: "Just had my home and deck power washed - looks fantastic! Very professional, young men who came out in the rain\u2026 took pride in their work. Highly recommend!", name: "Dawn Bostwick", place: "Facebook \u00b7 May 2024" },
    { quote: "They came and cleaned my moms windows, and also power washed her house\u2026 looks amazing. Left everything looking brand new! 10/10!!", name: "Abbey Ryan", place: "Facebook \u00b7 Feb 2024" },
  ],
  stats: [
    { value: "200+", label: "Happy Customers" },
    { value: "5.0", label: "Average Rating" },
    { value: "3+", label: "Years Local" },
  ],
} as const;
