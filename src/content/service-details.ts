/**
 * Services page copy. Descriptions stay within what BrightView has verified about its work:
 * no pricing, timelines, guarantees, products or coverage claims. The process steps match the
 * homepage ("request a quote → we follow up → schedule your service").
 */
type Photo = { src: string; alt: string; label?: string };

/**
 * Services page copy. `photos.top` is the full-product shot; `photos.bottom` holds up to two more
 * (before/after where we have them). Anything missing renders as a blank frame, so add real photos here.
 */
export const serviceDetails: readonly {
  id: string;
  photos: { top: Photo | null; bottom: readonly Photo[] };
  symbol: string;
  name: string;
  definition: string;
  what: string;
  how: readonly string[];
  why: readonly string[];
}[] = [
  {
    id: "window-cleaning",
    photos: { top: { src: "/images/projects/window-cleaning/Full House 16-9.png", alt: "House photographed after BrightView window-cleaning work" }, bottom: [{ src: "/images/projects/window-cleaning/Window Before 4-3.png", alt: "Residential window before cleaning", label: "Before" }, { src: "/images/projects/window-cleaning/Window After 4-3.png", alt: "Same residential window after cleaning", label: "After" }] },
    definition: "Cleaning the glass on your home so it looks clear and cared for.",
    symbol: "/images/windowsymbol.png",
    name: "Window Cleaning",
    what: "We clean residential windows so the glass looks clear and cared for.",
    how: ["Tell us about your home with a free quote request.", "We follow up with the details and a quote.", "We schedule your visit and clean your windows."],
    why: ["A clearer view, more natural light", "A fresher-looking exterior", "Visible dirt and buildup removed"],
  },
  {
    id: "pressure-washing",
    photos: { top: { src: "/images/projects/pressure-washing/Porch.png", alt: "Porch photographed as part of a BrightView pressure-washing project" }, bottom: [{ src: "/images/projects/pressure-washing/BrickPaver Before 4-3.png", alt: "Brick pavers before pressure washing", label: "Before" }, { src: "/images/projects/pressure-washing/BrickPaver After 4-3.png", alt: "Same brick pavers after pressure washing", label: "After" }] },
    definition: "High-pressure cleaning of exterior surfaces like brick pavers, fences and porches.",
    symbol: "/images/powerwashsymbol.png",
    name: "Pressure Washing",
    what: "We clean exterior surfaces such as brick pavers, fences and porch areas.",
    how: ["Tell us which surfaces you'd like cleaned.", "We follow up with the details and a quote.", "We schedule your visit and wash the surfaces."],
    why: ["Removes visible dirt and buildup", "Refreshes the look of outdoor spaces", "Brings back the surface's original finish"],
  },
  {
    id: "soft-washing",
    photos: { top: null, bottom: [] },
    definition: "Low-pressure cleaning for exterior surfaces that need a gentler touch.",
    symbol: "/images/softwashsymbol.svg",
    name: "Soft Washing",
    what: "We clean exterior surfaces with a low-pressure wash, a gentler approach for surfaces that shouldn't take a high-pressure blast.",
    how: ["Tell us which surfaces you'd like cleaned.", "We follow up with the details and a quote.", "We schedule your visit and soft wash the surfaces."],
    why: ["A gentler way to clean", "Removes visible dirt and buildup", "Refreshes your home's exterior"],
  },
  {
    id: "roof-cleaning",
    photos: { top: null, bottom: [] },
    definition: "Cleaning your roof so your home looks fresher from the street.",
    symbol: "/images/roofsymbol.svg",
    name: "Roof Cleaning",
    what: "We clean your roof so it looks cleaner and better cared for from the street.",
    how: ["Tell us about your home with a free quote request.", "We follow up with the details and a quote.", "We schedule your visit and clean the roof."],
    why: ["Removes visible dirt, streaks and buildup", "A fresher look for your whole home", "Better curb appeal"],
  },
  {
    id: "gutter-cleaning",
    photos: { top: null, bottom: [{ src: "/images/projects/gutter/Gutter Before 4-3.png", alt: "Gutter before cleaning", label: "Before" }, { src: "/images/projects/gutter/Gutter After 4-3.png", alt: "Same gutter after cleaning", label: "After" }] },
    definition: "Clearing built-up debris so water can flow away from your home.",
    symbol: "/images/guttersymbol.png",
    name: "Gutter Cleaning",
    what: "We clear built-up debris from gutters so water can flow away from your home.",
    how: ["Tell us about your home with a free quote request.", "We follow up with the details and a quote.", "We schedule your visit and clean the gutters."],
    why: ["Helps water move the way it should", "Protects your home's exterior", "Cleaner, tidier roofline"],
  },
  {
    id: "holiday-lighting",
    photos: { top: { src: "/images/projects/holiday-lights/House1.png", alt: "BrightView holiday lighting on a house" }, bottom: [{ src: "/images/projects/holiday-lights/House3.png", alt: "Home illuminated with holiday lights at night" }, { src: "/images/projects/holiday-lights/Trees.png", alt: "Trees decorated with holiday lights" }] },
    definition: "Outdoor decorative lighting, installed and taken down for you.",
    symbol: "/images/lightsymbol.png",
    name: "Holiday Lighting",
    what: "We help homes get ready for the holiday season with outdoor decorative lighting, installed and taken down for you.",
    how: ["Tell us what you have in mind with a quote request.", "We follow up with the details and a quote.", "We install your lighting, and take it down after the season."],
    why: ["A festive look that stands out after dark", "Warm, welcoming curb appeal", "Less ladder work for you"],
  },
];
