import { gutterProject, services } from "./services";

/** Every gallery photo is a real BrightView project photo already used elsewhere on the site (no new or generated images). */
export type GalleryCategory = "windows" | "pressure" | "holiday" | "gutters";
export type GalleryItem = { src: string; alt: string; caption: string; category: GalleryCategory; tag?: "Before" | "After" };

export const galleryFilters: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "windows", label: "Windows" },
  { id: "pressure", label: "Pressure washing" },
  { id: "holiday", label: "Holiday lighting" },
  { id: "gutters", label: "Gutters" },
];

const categoryFor: Record<string, GalleryCategory> = { "window-cleaning": "windows", "pressure-washing": "pressure", "holiday-lights": "holiday" };

const fromServices = services.flatMap((s): GalleryItem[] => {
  const category = categoryFor[s.slug];
  return [
    ...s.comparisons.flatMap((c): GalleryItem[] => [
      { src: c.before.src, alt: c.before.alt, caption: c.title, category, tag: "Before" },
      { src: c.after.src, alt: c.after.alt, caption: c.title, category, tag: "After" },
    ]),
    ...s.finished.map((f): GalleryItem => ({ src: f.src, alt: f.alt, caption: f.label, category })),
  ];
});

export const galleryItems: GalleryItem[] = [
  { src: "/images/Hero-HomePage.png", alt: "A BrightView team member squeegeeing a large window, with fresh suds still on the glass", caption: "Window cleaning in progress", category: "windows" },
  ...fromServices,
  { src: "/images/projects/holiday-lights/HolidayHero.png", alt: "Collage of Michigan homes decorated with BrightView holiday lights at night", caption: "Holiday lighting collage", category: "holiday" },
  { src: gutterProject.before.src, alt: gutterProject.before.alt, caption: gutterProject.title, category: "gutters", tag: "Before" },
  { src: gutterProject.after.src, alt: gutterProject.after.alt, caption: gutterProject.title, category: "gutters", tag: "After" },
];
