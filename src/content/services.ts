/** Verified service copy and real project photos shared by /services, service pages and /our-work. */
export type Photo = {
  src: string;
  label: string;
  alt: string;
};

export type Comparison = {
  title: string;
  before: Photo;
  after: Photo;
};

export type Service = {
  slug: string;
  title: string;
  what: string;
  benefit: string;
  comparisons: Comparison[];
  finished: Photo[];
};

export const services: Service[] = [
  {
    slug: "window-cleaning",
    title: "Window cleaning",
    what: "We clean residential windows so the glass looks clear and cared for.",
    benefit: "A clearer view, more natural light, and a fresher-looking exterior.",
    comparisons: [
      {
        title: "Window cleaning",
        before: {
          src: "/images/projects/window-cleaning/Window Before 4-3.png",
          label: "Before",
          alt: "Residential window before cleaning",
        },
        after: {
          src: "/images/projects/window-cleaning/Window After 4-3.png",
          label: "After",
          alt: "Same residential window after cleaning",
        },
      },
    ],
    finished: [
      {
        src: "/images/projects/window-cleaning/Full House 16-9.png",
        label: "Completed home",
        alt: "House photographed after BrightView window-cleaning work",
      },
    ],
  },
  {
    slug: "pressure-washing",
    title: "Pressure washing",
    what: "We clean exterior surfaces such as brick pavers, fences and porch areas.",
    benefit: "Helps remove visible dirt and buildup to refresh the appearance of outdoor spaces.",
    comparisons: [
      {
        title: "Brick pavers",
        before: {
          src: "/images/projects/pressure-washing/BrickPaver Before 4-3.png",
          label: "Before",
          alt: "Brick pavers before pressure washing",
        },
        after: {
          src: "/images/projects/pressure-washing/BrickPaver After 4-3.png",
          label: "After",
          alt: "Same brick pavers after pressure washing",
        },
      },
      {
        title: "Fence",
        before: {
          src: "/images/projects/pressure-washing/Fence Before 4-3.png",
          label: "Before",
          alt: "Fence before cleaning",
        },
        after: {
          src: "/images/projects/pressure-washing/Fence After 4-3.png",
          label: "After",
          alt: "Same fence after cleaning",
        },
      },
    ],
    finished: [
      {
        src: "/images/projects/pressure-washing/Porch.png",
        label: "Porch project",
        alt: "Porch photographed as part of a BrightView pressure-washing project",
      },
    ],
  },
  {
    slug: "holiday-lights",
    title: "Holiday lighting",
    what: "We help homes get ready for the holiday season with outdoor decorative lighting.",
    benefit: "A festive look that makes the home stand out after dark.",
    comparisons: [],
    finished: [
      {
        src: "/images/projects/holiday-lights/House1.png",
        label: "Holiday lighting / 01",
        alt: "BrightView holiday lighting on a house",
      },
      {
        src: "/images/projects/holiday-lights/House2.png",
        label: "Holiday lighting / 02",
        alt: "BrightView holiday lighting display on a home",
      },
      {
        src: "/images/projects/holiday-lights/House3.png",
        label: "Holiday lighting / 03",
        alt: "Home illuminated with holiday lights at night",
      },
      {
        src: "/images/projects/holiday-lights/Trees.png",
        label: "Trees",
        alt: "Trees decorated with holiday lights",
      },
    ],
  },
];

export const gutterProject: Comparison = {
  title: "Gutter cleaning",
  before: {
    src: "/images/projects/gutter/Gutter Before 4-3.png",
    label: "Before",
    alt: "Gutter before cleaning",
  },
  after: {
    src: "/images/projects/gutter/Gutter After 4-3.png",
    label: "After",
    alt: "Gutter after cleaning",
  },
};

