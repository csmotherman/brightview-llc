/** Verified asset paths only; project locations, job details and testimonial claims are intentionally omitted. */
export type HomeProject = {
  id: string;
  label: string;
  category: string;
  title: string;
  detail: string;
  before: string;
  after: string;
};

export const homeProjects: HomeProject[] = [
  {
    id: "pavers",
    label: "Brick pavers",
    category: "Pressure washing",
    title: "Bring back the original finish.",
    detail: "See the surface transformation, from one photo to the next.",
    before: "/images/projects/pressure-washing/BrickPaver Before 4-3.png",
    after: "/images/projects/pressure-washing/BrickPaver After 4-3.png",
  },
  {
    id: "windows",
    label: "Windows",
    category: "Window cleaning",
    title: "A clearer view, inside and out.",
    detail: "The kind of change that shows up in every reflection.",
    before: "/images/projects/window-cleaning/Window Before 4-3.png",
    after: "/images/projects/window-cleaning/Window After 4-3.png",
  },
  {
    id: "fence",
    label: "Fence",
    category: "Pressure washing",
    title: "A difference you can see.",
    detail: "Small details contribute to the whole property's appearance.",
    before: "/images/projects/pressure-washing/Fence Before 4-3.png",
    after: "/images/projects/pressure-washing/Fence After 4-3.png",
  },
  {
    id: "gutters",
    label: "Gutters",
    category: "Gutter cleaning",
    title: "Attention to the overlooked spots.",
    detail: "Your real before-and-after photographs tell the story.",
    before: "/images/projects/gutter/Gutter Before 4-3.png",
    after: "/images/projects/gutter/Gutter After 4-3.png",
  },
];
