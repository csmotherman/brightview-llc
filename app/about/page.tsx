import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../../components/Icons";
import { business } from "../../lib/business";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bright View LLC is a family-owned Michigan business offering window cleaning, power washing, and holiday lighting.",
};

export default function AboutPage() {
  const hasOwnerPhoto = Boolean(business.ownerPhotoSrc);

  return (
    <>
      <section className="about-hero">
        <div className="shell">
          <p className="eyebrow eyebrow-light">
            {business.ownership} &middot; {business.state}
          </p>
          <h1>A local business should feel local.</h1>
          <p>
            Bright View LLC serves {business.serviceArea ?? business.state} with
            window cleaning, power washing, and holiday lighting — with a
            direct, uncomplicated path from &ldquo;I need this done&rdquo; to
            a real quote.
          </p>
        </div>
      </section>

      <section className="shell about-principles">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">What Bright View is building around</p>
          <h2 style={{ color: "var(--navy)" }}>
            Make the property look better. Make the experience easier.
          </h2>
        </div>

        <div className="principle-list">
          <article>
            <span className="numeral">01</span>
            <h3>Family-owned</h3>
            <p>
              Bright View is a Michigan family business, not a national lead
              marketplace routing your request somewhere else.
            </p>
          </article>
          <article>
            <span className="numeral">02</span>
            <h3>Property-first</h3>
            <p>
              Quotes start with what the property actually needs, instead of
              forcing a package that may not fit.
            </p>
          </article>
          <article>
            <span className="numeral">03</span>
            <h3>Visual results</h3>
            <p>
              As the gallery grows, real project photography stays at the
              center of the brand — not stock imagery.
            </p>
          </article>
        </div>
      </section>

      <section className="shell about-story">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">The story</p>
          <h2 style={{ color: "var(--navy)" }}>Owned and run locally.</h2>
        </div>

        {hasOwnerPhoto ? (
          <div className="about-story-with-photo">
            <div className="about-owner-photo">
              <Image
                src={business.ownerPhotoSrc as string}
                alt={business.ownerPhotoAlt ?? "Bright View LLC owner"}
                width={640}
                height={800}
              />
            </div>
            <p>
              Bright View LLC is family-owned and based in {business.state}.
              The company takes on window cleaning, power washing, and
              holiday lighting work directly — no subcontracted crews routed
              through a national franchise.
            </p>
          </div>
        ) : (
          <p>
            Bright View LLC is family-owned and based in {business.state}.
            The company takes on window cleaning, power washing, and holiday
            lighting work directly — no subcontracted crews routed through a
            national franchise.
          </p>
        )}

        <Link className="text-link" href="/quote" style={{ marginTop: 26 }}>
          Request a free quote
          <Icon name="arrow" />
        </Link>
      </section>
    </>
  );
}
