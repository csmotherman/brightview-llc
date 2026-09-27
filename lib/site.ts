export const facebookUrl =
  "https://www.facebook.com/people/Bright-View-LLC/61552396894247/";

export type ServiceSlug =
  | "window-cleaning"
  | "power-washing"
  | "holiday-lighting";

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  kicker: string;
  headline: string;
  summary: string;
  homeCopy: string;
  icon: "window" | "spray" | "lights";
  features: string[];
  process: { title: string; copy: string }[];
  photoHint: string;
};

export const services: Service[] = [
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    shortName: "Windows",
    kicker: "Clear glass. Better light.",
    headline: "Let the view do the talking.",
    summary:
      "Professional window cleaning for Michigan homes and businesses, built around a simple quote and a cleaner, clearer finish.",
    homeCopy:
      "For the glass that frames your home, the difference is in the details.",
    icon: "window",
    features: [
      "Residential and commercial requests",
      "Interior, exterior, or full-property quote options",
      "Screens, sills, and project notes captured up front",
      "One-time or returning service requests",
    ],
    process: [
      {
        title: "Tell us about the property",
        copy: "Share the address, the scope, and anything we should know before quoting.",
      },
      {
        title: "We confirm the quote",
        copy: "Bright View reviews the request and follows up with the next step.",
      },
      {
        title: "We take care of the glass",
        copy: "The job stays straightforward from first contact through completion.",
      },
    ],
    photoHint: "Window cleaning transformation",
  },
  {
    slug: "power-washing",
    name: "Power Washing",
    shortName: "Power Washing",
    kicker: "Curb appeal starts outside.",
    headline: "Bring the exterior back to life.",
    summary:
      "Exterior cleaning for the surfaces around your property that collect dirt, grime, and weather over time.",
    homeCopy:
      "A high-impact reset for the surfaces people notice before they reach the front door.",
    icon: "spray",
    features: [
      "Home exterior cleaning requests",
      "Concrete, walks, patios, and outdoor surfaces",
      "Project scope reviewed before work is scheduled",
      "Quote requests can include multiple areas at once",
    ],
    process: [
      {
        title: "Show us what needs attention",
        copy: "Tell us which exterior surfaces you want cleaned and where the property is located.",
      },
      {
        title: "We review the scope",
        copy: "Bright View confirms the job details and pricing before anything is scheduled.",
      },
      {
        title: "See the difference",
        copy: "A clean exterior creates one of the fastest visual upgrades to a property.",
      },
    ],
    photoHint: "Power washing transformation",
  },
  {
    slug: "holiday-lighting",
    name: "Holiday Lighting",
    shortName: "Holiday Lights",
    kicker: "A brighter Michigan winter.",
    headline: "Make the house the one people remember.",
    summary:
      "Professional holiday-light installation that gives your property a polished seasonal look without making the setup your weekend project.",
    homeCopy:
      "Seasonal curb appeal with a clean layout designed around the property.",
    icon: "lights",
    features: [
      "Residential holiday-light requests",
      "Layouts planned around the property",
      "Professional installation scheduling",
      "Returning-customer details can be saved for future seasons",
    ],
    process: [
      {
        title: "Share the property",
        copy: "Send the address and describe the look or areas you want highlighted.",
      },
      {
        title: "Plan the display",
        copy: "Bright View confirms the scope and seasonal scheduling with you.",
      },
      {
        title: "Enjoy the season",
        copy: "The goal is simple: a clean, intentional display without the ladder-day headache.",
      },
    ],
    photoHint: "Holiday lighting installation",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
