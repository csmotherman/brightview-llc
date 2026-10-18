import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";
import styles from "./window-cleaning.module.css";

export const metadata: Metadata = {
  title: "Window Cleaning | BrightView LLC",
  description:
    "Residential window cleaning from BrightView LLC, a family-owned Michigan business. See real before-and-after photos and learn how to get in touch.",
};

const project = [
  {
    label: "Before",
    image: "/images/projects/window-cleaning/Window Before 4-3.png",
    alt: "Residential window before BrightView cleaning",
  },
  {
    label: "After",
    image: "/images/projects/window-cleaning/Window After 4-3.png",
    alt: "The same residential window after BrightView cleaning",
  },
] as const;

export default function WindowCleaningPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro} aria-labelledby="page-title">
        <Container>
          <Link className={styles.back} href="/services">
            <span aria-hidden="true">←</span> All services
          </Link>
          <div className={styles.introGrid}>
            <div className={styles.introCopy}>
              <p className={styles.eyebrow}>BRIGHTVIEW / WINDOW CLEANING</p>
              <h1 id="page-title">Clearer windows. A better view.</h1>
              <p className={styles.introLead}>
                Residential window cleaning that helps bring back clear glass and
                a cleaner look to your home.
              </p>
              <a
                href={site.facebookUrl}
                className="button button--primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Free Quote — contact BrightView on Facebook (opens in a new tab)"
              >
                Get Free Quote <span aria-hidden="true">↗</span>
              </a>
              <p className={styles.note}>Quote requests currently open our Facebook page.</p>
            </div>
            <div className={styles.introPhoto}>
              <Image
                src="/images/projects/window-cleaning/Full House 16-9.png"
                alt="BrightView's residential window-cleaning project at a house"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 49vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.details} aria-labelledby="why-title">
        <Container className={styles.detailsGrid}>
          <div>
            <p className={styles.eyebrow}>THE BENEFITS</p>
            <h2 id="why-title">Why have your windows cleaned?</h2>
          </div>
          <div className={styles.benefitItems}>
            <div>
              <h3>See more clearly</h3>
              <p>Removing visible dirt and marks improves the view through the glass.</p>
            </div>
            <div>
              <h3>Enjoy the natural light</h3>
              <p>Cleaner glass lets the daylight come through without the same buildup in the way.</p>
            </div>
            <div>
              <h3>Freshen up the exterior</h3>
              <p>Clean windows are a small detail that can make the whole house look more cared for.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.work} aria-labelledby="work-title">
        <Container>
          <div className={styles.workHeading}>
            <div>
              <p className={styles.eyebrow}>REAL BRIGHTVIEW WORK</p>
              <h2 id="work-title">Before &amp; after</h2>
            </div>
            <p>Two photos from the same window-cleaning project. Open either for a closer look.</p>
          </div>
          <div className={styles.photoPair}>
            {project.map((photo) => (
              <figure key={photo.label}>
                <a
                  href={photo.image}
                  className={styles.photo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"Open full-size " + photo.label.toLowerCase() + " window photograph in a new tab"}
                >
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 680px) 48vw, 44vw"
                  />
                  <span aria-hidden="true">↗</span>
                </a>
                <figcaption>{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.contact} aria-labelledby="contact-title">
        <Container className={styles.contactGrid}>
          <div>
            <p className={styles.eyebrow}>GET IN TOUCH</p>
            <h2 id="contact-title">Tell us about your windows.</h2>
            <p>
              When you reach out, it helps to mention roughly how many windows
              need attention, the home&apos;s number of stories, and the areas
              you want cleaned. We can discuss the exact service scope with you.
            </p>
          </div>
          <div className={styles.contactAction}>
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary"
              aria-label="Get Free Quote — contact BrightView on Facebook (opens in a new tab)"
            >
              Get Free Quote <span aria-hidden="true">↗</span>
            </a>
            <Link href="/services">← Back to all services</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
