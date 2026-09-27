import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "../../brightview-main-logo.png";
import { Icon } from "../../components/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bright View LLC is a family-owned Michigan window cleaning, power washing, and holiday lighting business.",
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-copy">
          <p className="eyebrow eyebrow-light">Family-owned • Michigan</p>
          <h1>A local business should feel local.</h1>
          <p>
            Bright View LLC serves Michigan customers with window cleaning,
            power washing, and holiday lighting — with a direct, uncomplicated
            path from “I need this done” to a real quote.
          </p>
        </div>
        <div className="about-logo-panel">
          <Image src={logo} alt="Bright View LLC" priority />
        </div>
      </section>

      <section className="about-principles section-shell">
        <div className="section-intro section-intro-split">
          <div>
            <p className="eyebrow eyebrow-dark">What Bright View is building around</p>
            <h2>Make the property look better. Make the experience easier.</h2>
          </div>
          <p>
            The website is intentionally simple because the service should be
            too: understand the job, communicate clearly, and make it easy to
            take the next step.
          </p>
        </div>

        <div className="principle-grid">
          <article>
            <span>01</span>
            <h3>Family-owned</h3>
            <p>
              Bright View is a Michigan family business, not a national lead
              marketplace routing your request somewhere else.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Property-first</h3>
            <p>
              Quotes begin with what the customer actually needs at the
              property instead of forcing a package that may not fit.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Visual results</h3>
            <p>
              As the gallery grows, real project photography will stay at the
              center of the brand.
            </p>
          </article>
        </div>
      </section>

      <section className="owner-photo-section section-shell">
        <div className="owner-photo-placeholder">
          <Icon name="camera" />
          <strong>Owner / family photo reserved here</strong>
          <span>
            Add one authentic Bright View team photo instead of a generic
            contractor stock image.
          </span>
        </div>
        <div className="owner-photo-copy">
          <p className="eyebrow eyebrow-dark">The story belongs to the owner</p>
          <h2>Leave room for the part only Bright View can tell.</h2>
          <p>
            This section is ready for the company&apos;s actual origin,
            background, and family story once it is confirmed. The site will
            not invent a fake “founded with one bucket and a dream” paragraph.
          </p>
          <Link className="text-arrow-link" href="/quote">
            Request a free quote
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
    </>
  );
}
