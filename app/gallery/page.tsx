import type { Metadata } from "next";
import { ProjectGallery } from "../../components/ProjectGallery";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "Real Bright View LLC before-and-after project photography for window cleaning, power washing, and holiday lighting in Michigan.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-inner">
          <p className="eyebrow eyebrow-light">Before &amp; after</p>
          <h1>The work should sell the work.</h1>
          <p>
            Real Bright View jobs, matched shot for shot. No borrowed stock
            transformations and no filler photos.
          </p>
        </div>
      </section>

      <section className="shell section">
        <ProjectGallery projects={projects} showFilters />
      </section>
    </>
  );
}
