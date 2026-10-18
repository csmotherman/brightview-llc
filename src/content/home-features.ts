import { site } from "@/config/site";

/**
 * Ordered homepage features. Add news/announcements only after the copy,
 * date-sensitive claims and destination are confirmed by BrightView.
 */
export type HomeFeature = {
  id: string;
  shortLabel: string;
  eyebrow: string;
  headline: string;
  summary: string;
  mainImage: string;
  imagePosition: string;
  mainAlt: string;
  supportingImage: string;
  supportingPosition: string;
  supportingAlt: string;
  primaryLabel: string;
  primaryHref: string;
  primaryExternal?: boolean;
  secondaryLabel: string;
  secondaryHref: string;
  contactNote?: string;
};

export const homeFeatures: HomeFeature[] = [
  {
    id: "christmas-lights",
    shortLabel: "Christmas lighting",
    eyebrow: "Seasonal feature / Holiday lighting",
    headline: "Make the holidays shine.",
    summary: "Christmas lighting for Michigan homes. Explore BrightView's real holiday displays, then get in touch about yours.",
    mainImage: "/images/projects/holiday-lights/House3.png",
    imagePosition: "center 52%",
    mainAlt: "Michigan home with BrightView holiday lights at night",
    supportingImage: "/images/projects/holiday-lights/Trees.png",
    supportingPosition: "center center",
    supportingAlt: "Trees decorated with BrightView holiday lights",
    primaryLabel: "Request Christmas lighting",
    primaryHref: site.facebookUrl,
    primaryExternal: true,
    secondaryLabel: "See holiday photos",
    secondaryHref: "/services#holiday-lights",
    contactNote: "Requests currently open our Facebook page.",
  },
  {
    id: "window-cleaning",
    shortLabel: "Window cleaning",
    eyebrow: "From our work / Window cleaning",
    headline: "A clearer view starts here.",
    summary: "Explore real BrightView window-cleaning projects and the difference clean glass can make.",
    mainImage: "/images/Hero-HomePage.png",
    imagePosition: "center 48%",
    mainAlt: "BrightView worker cleaning a window on a home",
    supportingImage: "/images/projects/window-cleaning/Full House 16-9.png",
    supportingPosition: "center center",
    supportingAlt: "House after BrightView window-cleaning work",
    primaryLabel: "See window cleaning",
    primaryHref: "/services#window-cleaning",
    secondaryLabel: "All services",
    secondaryHref: "/services",
  },
  {
    id: "pressure-washing",
    shortLabel: "Pressure washing",
    eyebrow: "From our work / Pressure washing",
    headline: "A fresh look for the outdoors.",
    summary: "See how cleaning can refresh pavers, porches and other outdoor areas in real BrightView project photos.",
    mainImage: "/images/projects/pressure-washing/Porch.png",
    imagePosition: "center center",
    mainAlt: "Residential porch photographed for a BrightView pressure washing project",
    supportingImage: "/images/projects/pressure-washing/BrickPaver After 4-3.png",
    supportingPosition: "center center",
    supportingAlt: "Brick pavers after BrightView pressure washing",
    primaryLabel: "Explore pressure washing",
    primaryHref: "/services#pressure-washing",
    secondaryLabel: "View all project photos",
    secondaryHref: "/services",
  },
];
