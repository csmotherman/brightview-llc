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
  headline: string;
  what: string;
  importance: string;
  how: readonly string[];
  why: readonly string[];
}[] = [
  {
    id: "window-cleaning",
    photos: { top: { src: "/images/projects/window-cleaning/Full House 16-9.png", alt: "House photographed after BrightView window-cleaning work" }, bottom: [{ src: "/images/projects/window-cleaning/Window Before 4-3.png", alt: "Residential window before cleaning", label: "Before" }, { src: "/images/projects/window-cleaning/Window After 4-3.png", alt: "Same residential window after cleaning", label: "After" }] },
    definition: "Cleaner glass, clearer views and a brighter-looking home.",
    headline: "Let the light in. Love the view again.",
    symbol: "/images/windowsymbol.png",
    name: "Window Cleaning",
    what: "Windows frame the view outside, but dust, pollen, water marks and everyday grime gradually leave the glass looking dull. BrightView cleans residential window glass to lift that visible film and bring back a fresher, clearer appearance. From the kitchen window you look through every morning to the windows guests see from the street, the difference is in the details.",
    importance: "Natural light and an unobstructed view are two of the best features windows bring to a home. When the glass is hazy or spotted, you notice the buildup instead of the view. Regular cleaning helps you enjoy the windows you already have without spending a weekend working through each pane.",
    how: ["Tell us about your windows and home in a free quote request.", "We follow up to discuss the scope and prepare a quote.", "Once scheduled, we clean the agreed-upon window glass."],
    why: ["Enjoy clearer views and less visible haze.", "Make your home feel brighter and more inviting.", "Refresh your home's look without replacing the windows."],
  },
  {
    id: "pressure-washing",
    photos: { top: { src: "/images/projects/pressure-washing/Porch.png", alt: "Porch photographed as part of a BrightView pressure-washing project" }, bottom: [{ src: "/images/projects/pressure-washing/BrickPaver Before 4-3.png", alt: "Brick pavers before pressure washing", label: "Before" }, { src: "/images/projects/pressure-washing/BrickPaver After 4-3.png", alt: "Same brick pavers after pressure washing", label: "After" }] },
    definition: "Refresh pavers, patios, porches and other suitable outdoor surfaces.",
    headline: "Give the spaces outside your home a fresh start.",
    symbol: "/images/powerwashsymbol.png",
    name: "Pressure Washing",
    what: "Outdoor surfaces take a beating from Michigan's changing seasons. Dirt, mud and weather-related buildup settle into pavers, patios, porches and other hardier surfaces, hiding the color and texture underneath. BrightView pressure washing targets visible grime on suitable materials so your outdoor spaces look cared for again. It's the kind of refresh you notice when you pull into the driveway or step onto the patio.",
    importance: "A discolored walkway or grimy porch can distract from the entire house, even when everything else looks great. Cleaning those high-visibility surfaces freshens curb appeal and makes paths and gathering spots more enjoyable. Not every surface needs the same pressure, so material and condition matter.",
    how: ["Tell us which outdoor surfaces need attention.", "We review the project details and prepare a quote.", "We schedule the agreed-upon pressure-washing work."],
    why: ["Lift visible dirt and seasonal buildup.", "Refresh the appearance of suitable pavers and hard surfaces.", "Make outdoor spaces feel ready to enjoy again."],
  },
  {
    id: "soft-washing",
    photos: { top: null, bottom: [] },
    definition: "A lower-pressure clean for exterior surfaces that need a gentler touch.",
    headline: "The right clean isn't always the strongest spray.",
    symbol: "/images/softwashsymbol.svg",
    name: "Soft Washing",
    what: "Hardscape and delicate exterior finishes shouldn't be treated the same way. Some siding, trim and other surfaces benefit from a lower-pressure approach instead of a forceful spray. BrightView soft washing is a gentler cleaning option for appropriate exterior surfaces, helping address visible dirt and buildup while avoiding the aggressive pressure used for hardscape cleaning.",
    importance: "Excessive water pressure can damage certain siding products and other finishes. That's why choosing an approach suited to the material is important. A gentler wash can be a smarter fit for surfaces where the goal is a cleaner exterior, not maximum spraying force.",
    how: ["Let us know which exterior materials need cleaning.", "We follow up to talk through the project and prepare a quote.", "We schedule the agreed-upon low-pressure cleaning."],
    why: ["A gentler option for appropriate exterior materials.", "Reduce the dull appearance of grime and buildup.", "Freshen your home's exterior without an aggressive blast."],
  },
  {
    id: "roof-cleaning",
    photos: { top: null, bottom: [] },
    definition: "Address visible roof stains and buildup with attention to the material.",
    headline: "Your roof is part of the first impression.",
    symbol: "/images/roofsymbol.svg",
    name: "Roof Cleaning",
    what: "A roof takes up a large part of your home's appearance from the street. Dark streaks, discoloration and debris can make it look tired even when the rest of the exterior is well maintained. BrightView offers roof cleaning for suitable roof surfaces. On some asphalt-shingle roofs, dark streaks are caused by algae rather than ordinary dirt.",
    importance: "Roof cleaning needs more care than an ordinary driveway wash. Asphalt-shingle manufacturers warn that high-pressure washing can damage roofing materials. The right approach depends on the roof's construction and condition, not simply how dark the stains look.",
    how: ["Describe your roof material and any visible staining.", "We follow up to talk through your project and prepare a quote.", "We schedule the agreed-upon work."],
    why: ["Address distracting streaks and discoloration.", "Refresh the look of a prominent part of the home.", "Better curb appeal when your home is seen from the street."],
  },
  {
    id: "gutter-cleaning",
    photos: { top: null, bottom: [{ src: "/images/projects/gutter/Gutter Before 4-3.png", alt: "Gutter before cleaning", label: "Before" }, { src: "/images/projects/gutter/Gutter After 4-3.png", alt: "Same gutter after cleaning", label: "After" }] },
    definition: "Clear leaves and debris so gutters can carry rainwater as intended.",
    headline: "Keep rainwater moving, not spilling over.",
    symbol: "/images/guttersymbol.png",
    name: "Gutter Cleaning",
    what: "Gutters are easy to forget until a heavy rain sends water pouring over the edge. Leaves, twigs and other debris build up along the roofline and interfere with the path water is supposed to follow. BrightView clears accumulated debris from gutter channels so rainwater has a better route toward the downspouts. It's straightforward maintenance with a practical purpose.",
    importance: "When gutters are clogged, water can overflow next to the house instead of moving through the intended drainage system. That may leave unwanted water near siding, walkways or the foundation. Clearing debris supports proper drainage, although cleaning alone cannot repair damaged gutters or fix drainage design problems.",
    how: ["Tell us about your gutters and areas needing attention.", "We review the scope and provide a quote.", "We schedule the gutter-debris cleaning."],
    why: ["Help rainwater move toward the downspouts.", "Reduce overflow caused by built-up leaves and debris.", "Take an important seasonal chore off your list."],
  },
  {
    id: "holiday-lighting",
    photos: { top: { src: "/images/projects/holiday-lights/House1.png", alt: "BrightView holiday lighting on a house" }, bottom: [{ src: "/images/projects/holiday-lights/House3.png", alt: "Home illuminated with holiday lights at night" }, { src: "/images/projects/holiday-lights/Trees.png", alt: "Trees decorated with holiday lights" }] },
    definition: "We supply the lights, install your display and handle post-season takedown.",
    headline: "We bring the lights. You enjoy the holidays.",
    symbol: "/images/lightsymbol.png",
    name: "Holiday Lighting",
    what: "A beautiful holiday display should start with excitement, not another shopping trip. BrightView supplies the lights for your installation, so you don't have to buy your own sets or spend a weekend sorting tangled strands. Tell us about the look you have in mind; we'll discuss the display, handle the installation and return for takedown after the season. You get the festive welcome without taking on the setup and removal yourself.",
    importance: "Outdoor lighting involves more than hanging a few strings: there are rooflines, ladders, winter weather and electrical-safety considerations. Having the lights supplied and the installation handled for you removes two big DIY hurdles—finding the materials and putting them up. Spend more time enjoying the season and less time planning the ladder work.",
    how: ["Tell us about your home and the holiday look you want.", "We discuss the display and prepare a quote; BrightView provides the lights.", "We install the agreed-upon display and return for takedown."],
    why: ["BrightView provides the lights—no need to buy your own.", "Installation and after-season takedown handled for you.", "A festive, welcoming exterior without the DIY setup."],
  },
];
