import { gutterProject, services } from "./services";

/**
 * Gallery content. Every photo is a real BrightView project photo already used elsewhere on the site (no new or
 * generated images). Before/after photos are stored as one pair so they always render side by side.
 */
export type GalleryGroup = "exterior" | "holiday";
export type GallerySub = "windows" | "pressure" | "gutters" | "holiday";
export type GalleryPhoto = { src: string; alt: string; tag?: "Before" | "After" };
export type GalleryEntry = { id: string; group: GalleryGroup; sub: GallerySub; caption: string; photos: [GalleryPhoto] | [GalleryPhoto, GalleryPhoto] };

const bySlug = (slug: string) => services.find((s) => s.slug === slug)!;
const pair = (id: string, group: GalleryGroup, sub: GallerySub, c: { title: string; before: { src: string; alt: string }; after: { src: string; alt: string } }): GalleryEntry => ({
  id, group, sub, caption: c.title,
  photos: [{ src: c.before.src, alt: c.before.alt, tag: "Before" }, { src: c.after.src, alt: c.after.alt, tag: "After" }],
});
const single = (group: GalleryGroup, sub: GallerySub, p: { src: string; alt: string; label: string }): GalleryEntry => ({ id: p.src, group, sub, caption: p.label, photos: [{ src: p.src, alt: p.alt }] });

const windows = bySlug("window-cleaning");
const pressure = bySlug("pressure-washing");
const holiday = bySlug("holiday-lights");

export const galleryEntries: GalleryEntry[] = [
  ...windows.comparisons.map((c, i) => pair(`windows-pair-${i}`, "exterior", "windows", c)),
  { id: "window-hero", group: "exterior", sub: "windows", caption: "Window cleaning in progress", photos: [{ src: "/images/Hero-HomePage.png", alt: "A BrightView team member squeegeeing a large window, with fresh suds still on the glass" }] },
  ...windows.finished.map((p) => single("exterior", "windows", p)),
  ...pressure.comparisons.map((c, i) => pair(`pressure-pair-${i}`, "exterior", "pressure", c)),
  ...pressure.finished.map((p) => single("exterior", "pressure", p)),
  pair("gutters-pair", "exterior", "gutters", gutterProject),
  ...holiday.finished.map((p) => single("holiday", "holiday", { ...p, label: "Holiday lighting" })),
];

/** The filter tree: top-level groups, with sub-filters nested under Exterior Cleaning. */
export const galleryTree: { id: "all" | GalleryGroup; label: string; children?: { id: GallerySub; label: string }[] }[] = [
  { id: "all", label: "All" },
  { id: "exterior", label: "Exterior Cleaning", children: [{ id: "windows", label: "Windows" }, { id: "pressure", label: "Pressure Washing" }, { id: "gutters", label: "Gutters" }] },
  { id: "holiday", label: "Holiday Lighting" },
];

export const gallerySections: { id: GallerySub; group: GalleryGroup; title: string }[] = [
  { id: "windows", group: "exterior", title: "Window Cleaning" },
  { id: "pressure", group: "exterior", title: "Pressure Washing" },
  { id: "gutters", group: "exterior", title: "Gutter Cleaning" },
  { id: "holiday", group: "holiday", title: "Holiday Lighting" },
];
