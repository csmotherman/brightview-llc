import type { ServiceSlug } from "./services";

// Real Bright View project photography goes here — see README.md for the
// exact folder structure and how to add an entry. This array is empty on
// purpose: the site never fabricates before/after jobs, so every consumer
// of `projects` must handle the empty-array case gracefully.
export type Project = {
  id: string;
  service: ServiceSlug;
  title: string;
  location?: string;
  description: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export const projects: Project[] = [];

export function getProjectsByService(service: ServiceSlug) {
  return projects.filter((project) => project.service === service);
}
