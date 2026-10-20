/**
 * Services page copy. Descriptions stay within what BrightView has verified about its work:
 * no pricing, timelines, guarantees, products or coverage claims. The process steps match the
 * homepage ("request a quote → we follow up → schedule your service").
 */
export const serviceDetails = [
  {
    id: "window-cleaning",
    symbol: "/images/windowsymbol.png",
    name: "Window Cleaning",
    blurb: "Clear glass, brighter views.",
    what: "We clean residential windows so the glass looks clear and cared for.",
    how: ["Tell us about your home with a free quote request.", "We follow up with the details and a quote.", "We schedule your visit and clean your windows."],
    why: ["A clearer view, more natural light", "A fresher-looking exterior", "Visible dirt and buildup removed"],
  },
  {
    id: "pressure-washing",
    symbol: "/images/powerwashsymbol.png",
    name: "Pressure Washing",
    blurb: "Driveways, patios and more.",
    what: "We clean exterior surfaces such as brick pavers, fences and porch areas.",
    how: ["Tell us which surfaces you'd like cleaned.", "We follow up with the details and a quote.", "We schedule your visit and wash the surfaces."],
    why: ["Removes visible dirt and buildup", "Refreshes the look of outdoor spaces", "Brings back the surface's original finish"],
  },
  {
    id: "gutter-cleaning",
    symbol: "/images/guttersymbol.png",
    name: "Gutter Cleaning",
    blurb: "Keep water moving.",
    what: "We clear built-up debris from gutters so water can flow away from your home.",
    how: ["Tell us about your home with a free quote request.", "We follow up with the details and a quote.", "We schedule your visit and clean the gutters."],
    why: ["Helps water move the way it should", "Protects your home's exterior", "Cleaner, tidier roofline"],
  },
  {
    id: "holiday-lighting",
    symbol: "/images/lightsymbol.png",
    name: "Holiday Lighting",
    blurb: "Installation & takedown.",
    what: "We help homes get ready for the holiday season with outdoor decorative lighting, installed and taken down for you.",
    how: ["Tell us what you have in mind with a quote request.", "We follow up with the details and a quote.", "We install your lighting, and take it down after the season."],
    why: ["A festive look that stands out after dark", "Warm, welcoming curb appeal", "Less ladder work for you"],
  },
] as const;
