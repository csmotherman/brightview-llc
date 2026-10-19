import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | BrightView LLC",
  description:
    "Explore BrightView's window cleaning, pressure washing and holiday lighting services, with actual project photographs from Michigan.",
};

type Photo = {
  src: string;
  label: string;
  alt: string;
};

type Comparison = {
  title: string;
  before: Photo;
  after: Photo;
};

type Service = {
  slug: string;
  title: string;
  what: string;
  benefit: string;
  comparisons: Comparison[];
  finished: Photo[];
};

const services: Service[] = [
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

const gutterProject: Comparison = {
  title: "Gutter cleaning",
  before: {
    src: "/images/gutter/Gutter Before 4-3.png",
    label: "Before",
    alt: "Gutter before cleaning",
  },
  after: {
    src: "/images/gutter/Gutter After 4-3.png",
    label: "After",
    alt: "Gutter after cleaning",
  },
};

function PhotoTile({ photo }: { photo: Photo }) {
  return (
    <figure className={styles.photoTile}>
      <a
        href={photo.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={"View full-size photo: " + photo.label + " (opens in a new tab)"}
        className={styles.photoLink}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 620px) 48vw, (max-width: 900px) 44vw, 26vw"
        />
        <span className={styles.zoomIcon} aria-hidden="true">↗</span>
      </a>
      <figcaption>{photo.label}</figcaption>
    </figure>
  );
}

function ComparisonGallery({ comparison }: { comparison: Comparison }) {
  return (
    <div className={styles.comparison}>
      <p className={styles.projectLabel}>{comparison.title}</p>
      <div className={styles.comparisonPhotos}>
        <PhotoTile photo={comparison.before} />
        <PhotoTile photo={comparison.after} />
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro} aria-labelledby="services-title">
        <Container>
          <p className={styles.eyebrow}>BRIGHTVIEW LLC / OUR SERVICES</p>
          <div className={styles.introText}>
            <h1 id="services-title">Services &amp; project photos</h1>
            <p>What we do, why it helps, and examples of our work.</p>
          </div>
          <nav className={styles.quickLinks} aria-label="Services on this page">
            {services.map((service) => (
              <a href={"#" + service.slug} key={service.slug}>
                {service.title} <span aria-hidden="true">↘</span>
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <Container>
        {services.map((service) => (
          <section
            key={service.slug}
            id={service.slug}
            className={styles.service}
            aria-labelledby={service.slug + "-title"}
          >
            <div className={styles.serviceDetails}>
              <h2 id={service.slug + "-title"}>{service.title}</h2>
              <div className={styles.descriptionGroup}>
                <div>
                  <h3>What we do</h3>
                  <p>{service.what}</p>
                </div>
                <div>
                  <h3>Why it helps</h3>
                  <p>{service.benefit}</p>
                </div>
              </div>
            </div>
            <div
              className={[
                styles.gallery,
                service.comparisons.length > 0 && service.finished.length > 0
                  ? styles.gallerySplit
                  : "",
              ].filter(Boolean).join(" ")}
            >
              {service.comparisons.length > 0 && (
                <div className={styles.comparisons}>
                  {service.comparisons.map((comparison) => (
                    <ComparisonGallery key={comparison.title} comparison={comparison} />
                  ))}
                </div>
              )}
              {service.finished.length > 0 && (
                <div className={styles.finished}>
                  <p className={styles.projectLabel}>
                    {service.comparisons.length > 0 ? "More project photos" : "Completed projects"}
                  </p>
                  <div className={styles.finishedPhotos}>
                    {service.finished.map((photo) => (
                      <PhotoTile key={photo.src} photo={photo} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        <section className={styles.extraWork} aria-labelledby="extra-title">
          <div className={styles.extraHeading}>
            <h2 id="extra-title">Additional project photos</h2>
            <p>Gutter cleaning</p>
          </div>
          <ComparisonGallery comparison={gutterProject} />
        </section>
      </Container>

      <section className={styles.contact} aria-labelledby="contact-title">
        <Container className={styles.contactInner}>
          <div>
            <h2 id="contact-title">Interested in a service?</h2>
            <p>Tell us what you need, and we'll follow up to discuss your quote.</p>
          </div>
          <Link href="/quote" className="button button--primary">
            Get Free Quote <span aria-hidden="true">↗</span>
          </Link>
        </Container>
      </section>
    </div>
  );
}
