import type { Metadata } from "next";
import Link from "next/link";
import { BeforeAfter } from "../../components/BeforeAfter";
import { Icon } from "../../components/Icons";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "Bright View LLC project gallery prepared for real before-and-after window cleaning, power washing, and holiday lighting work.",
};

const projects = [
  { title: "Exterior reset", service: "Power Washing" },
  { title: "Clearer glass", service: "Window Cleaning" },
  { title: "Seasonal curb appeal", service: "Holiday Lighting" },
  { title: "Driveway refresh", service: "Power Washing" },
  { title: "Whole-home windows", service: "Window Cleaning" },
  { title: "Holiday roofline", service: "Holiday Lighting" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero gallery-hero">
        <div className="page-hero-inner">
          <p className="eyebrow eyebrow-light">Before & after</p>
          <h1>The work should sell the work.</h1>
          <p>
            This gallery is intentionally built for matched Bright View project
            photos. No borrowed stock transformations and no fake results.
          </p>
        </div>
      </section>

      <section className="gallery-grid section-shell">
        {projects.map((project, index) => (
          <BeforeAfter
            key={`${project.service}-${index}`}
            title={project.title}
            service={project.service}
            priority={index === 0}
          />
        ))}
      </section>

      <section className="photo-guidance section-shell">
        <div className="photo-guidance-icon">
          <Icon name="camera" />
        </div>
        <div>
          <p className="eyebrow eyebrow-dark">For the strongest gallery</p>
          <h2>Same angle. Same framing. Real transformation.</h2>
          <p>
            Capture the before photo, complete the job, then take the after
            photo from the same spot. That makes the result instantly readable
            on a phone.
          </p>
        </div>
        <Link className="button button-navy" href="/quote">
          Request a quote
          <Icon name="arrow" />
        </Link>
      </section>
    </>
  );
}
