export type ServiceSlug = "window-cleaning" | "power-washing" | "holiday-lighting";

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  number: string;
  kicker: string;
  headline: string;
  dek: string;
  seoDescription: string;
  icon: "window" | "spray" | "lights";
  coverage: string[];
  whyItMatters: string;
  process: { title: string; copy: string }[];
  faqs: { question: string; answer: string }[];
  mood: "day" | "evening";
};

export const services: Service[] = [
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    shortName: "Windows",
    number: "01",
    kicker: "Clear glass, better light",
    headline: "See your property the way it was meant to be seen.",
    dek: "Streak-free interior and exterior glass, screens, and sills — cleaned with the kind of attention that shows up the moment the sun hits it.",
    seoDescription:
      "Professional window cleaning for Michigan homes and businesses. Interior, exterior, screens, and sills — request a free quote from Bright View LLC.",
    icon: "window",
    coverage: [
      "Interior and exterior glass",
      "Screens and sills",
      "Residential and commercial properties",
      "One-time or recurring visits",
    ],
    whyItMatters:
      "Dirty glass is the fastest way to make a well-kept property look tired. Clean windows change the light inside a house and the first impression outside it — with less effort than most people expect.",
    process: [
      {
        title: "Tell us about the property",
        copy: "Share the address and the scope — how many windows, interior, exterior, or both.",
      },
      {
        title: "Bright View confirms the quote",
        copy: "We review the details and follow up with pricing and timing.",
      },
      {
        title: "The glass gets done right",
        copy: "Panes, sills, and screens — cleaned and left the way you'd do it yourself, if you had the time.",
      },
    ],
    faqs: [
      {
        question: "Do you clean interior and exterior glass?",
        answer:
          "Yes. Tell us which you want when you request a quote — interior, exterior, or both.",
      },
      {
        question: "Do you clean screens too?",
        answer: "Screens and sills are part of a standard window cleaning visit.",
      },
      {
        question: "Is this a one-time service or recurring?",
        answer:
          "Either. Some properties book a single visit, others set up a recurring schedule. Let us know your preference in the quote request.",
      },
    ],
    mood: "day",
  },
  {
    slug: "power-washing",
    name: "Power Washing",
    shortName: "Power Washing",
    number: "02",
    kicker: "Curb appeal starts at the surface",
    headline: "The fastest visible upgrade a property can get.",
    dek: "Siding, concrete, walks, and patios — reset to the color and texture they had before years of Michigan weather got to them.",
    seoDescription:
      "Exterior power washing and pressure washing in Michigan — siding, driveways, patios, and walkways. Request a free quote from Bright View LLC.",
    icon: "spray",
    coverage: [
      "House siding and exteriors",
      "Driveways, walkways, and patios",
      "Decks and outdoor surfaces",
      "Multi-surface projects in one visit",
    ],
    whyItMatters:
      "Dirt, algae, and salt residue build up gradually enough that most people stop noticing — until it's gone. Power washing is the highest-impact reset available for the surfaces people see before they ever reach the front door.",
    process: [
      {
        title: "Show us what needs attention",
        copy: "Tell us which surfaces and where the property is located.",
      },
      {
        title: "Bright View reviews the scope",
        copy: "We confirm the job details and pricing before anything gets scheduled.",
      },
      {
        title: "Watch the reset happen",
        copy: "A clean exterior is one of the fastest transformations a property can go through.",
      },
    ],
    faqs: [
      {
        question: "What surfaces can you power wash?",
        answer:
          "Siding, driveways, walkways, patios, and decks are the most common requests. Tell us what you have in mind and we'll confirm it fits.",
      },
      {
        question: "Can I combine multiple areas in one quote?",
        answer: "Yes — describe everything you'd like done and we'll scope it as one project.",
      },
      {
        question: "Will it damage my siding or concrete?",
        answer:
          "Pressure and technique are matched to the surface. We'll talk through anything sensitive before starting.",
      },
    ],
    mood: "day",
  },
  {
    slug: "holiday-lighting",
    name: "Holiday Lighting",
    shortName: "Holiday Lights",
    number: "03",
    kicker: "A brighter Michigan evening",
    headline: "The house people slow down for.",
    dek: "Professional installation, planned around your roofline, so the display looks intentional — and you're not the one on the ladder.",
    seoDescription:
      "Professional holiday light installation in Michigan. Bright View LLC plans and installs your display so you don't spend a weekend on a ladder.",
    icon: "lights",
    coverage: [
      "Roofline and eave installation",
      "Layout planned around the property",
      "Professional install and takedown",
      "Return-season details saved for next year",
    ],
    whyItMatters:
      "Michigan gets dark early for months. A well-planned display is one of the few upgrades that makes a whole street notice — without you spending a weekend on a ladder in the cold to get it.",
    process: [
      {
        title: "Share the property",
        copy: "Send the address and describe the look or areas you want highlighted.",
      },
      {
        title: "Bright View plans the layout",
        copy: "We confirm the scope, style, and scheduling with you before install day.",
      },
      {
        title: "Enjoy the season",
        copy: "A clean, intentional display — with the ladder work handled for you.",
      },
    ],
    faqs: [
      {
        question: "How far in advance should I book?",
        answer:
          "Earlier is better — send a request as soon as you're thinking about it and we'll work out timing together.",
      },
      {
        question: "Do you take the lights down afterward?",
        answer: "Yes, takedown is part of the service.",
      },
      {
        question: "Can I reuse the same layout next year?",
        answer:
          "We keep your property details on file so returning customers can skip straight to scheduling.",
      },
    ],
    mood: "evening",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
