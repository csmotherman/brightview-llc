import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";
import { ServiceExplorer } from "./ServiceExplorer";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Our Services | BrightView LLC",
  description:
    "Explore window cleaning, pressure washing and holiday lighting from family-owned BrightView LLC in Michigan.",
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="services-title">
        <Container className={styles.heroLayout}>
          <div className={styles.heroCopy}>
            <p className={styles.overline}>BRIGHTVIEW LLC <span aria-hidden="true">/</span> OUR SERVICES</p>
            <h1 id="services-title">
              Clear windows.<br />
              Clean surfaces.<br />
              <span>Bright nights.</span>
            </h1>
            <p className={styles.heroDescription}>
              Window cleaning, pressure washing and holiday lighting for Michigan
              homes. A family-owned business with work you can see.
            </p>
            <a className={styles.heroJump} href="#explore-services">
              Find your service
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className={styles.heroGallery} aria-label="BrightView project photography">
            <div className={styles.heroMainPhoto}>
              <Image
                src="/images/projects/window-cleaning/Full House 16-9.png"
                alt="House photographed as part of BrightView's window cleaning work"
                fill
                priority
                sizes="(max-width: 800px) 72vw, 36vw"
              />
            </div>
            <div className={styles.heroSidePhoto}>
              <Image
                src="/images/projects/holiday-lights/House2.png"
                alt="Home illuminated with holiday lighting"
                fill
                priority
                sizes="(max-width: 800px) 30vw, 18vw"
              />
            </div>
            <div className={styles.heroPhotoCredit}>ACTUAL BRIGHTVIEW PROJECTS</div>
          </div>
        </Container>
      </section>

      <ServiceExplorer />

      <section className={styles.proofSection} aria-labelledby="proof-title">
        <Container>
          <div className={styles.proofHeading}>
            <div>
              <p className={styles.overline}>THE WORK / UP CLOSE</p>
              <h2 id="proof-title">See what a proper clean can uncover.</h2>
            </div>
            <p>
              A pair of original photographs from a BrightView brick-paver project.
              Before on the left, after on the right.
            </p>
          </div>
          <div className={styles.proofPhotos}>
            <figure>
              <a
                className={styles.proofPhoto}
                href="/images/projects/pressure-washing/BrickPaver Before 4-3.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open full-size before photograph of brick pavers (opens in a new tab)"
              >
                <Image
                  src="/images/projects/pressure-washing/BrickPaver Before 4-3.png"
                  alt="Brick pavers before pressure washing"
                  fill
                  sizes="(max-width: 680px) 48vw, 42vw"
                />
                <span className={styles.expandIcon} aria-hidden="true">↗</span>
              </a>
              <figcaption><span>01</span> Before</figcaption>
            </figure>
            <figure>
              <a
                className={styles.proofPhoto}
                href="/images/projects/pressure-washing/BrickPaver After 4-3.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open full-size after photograph of brick pavers (opens in a new tab)"
              >
                <Image
                  src="/images/projects/pressure-washing/BrickPaver After 4-3.png"
                  alt="The same brick pavers after pressure washing"
                  fill
                  sizes="(max-width: 680px) 48vw, 42vw"
                />
                <span className={styles.expandIcon} aria-hidden="true">↗</span>
              </a>
              <figcaption><span>02</span> After</figcaption>
            </figure>
          </div>
          <p className={styles.proofFootnote}>BRICK PAVERS <span aria-hidden="true">—</span> TAP A PHOTO TO SEE IT FULL SIZE</p>
        </Container>
      </section>

      <section className={styles.nightSection} aria-labelledby="night-title">
        <Container className={styles.nightLayout}>
          <div className={styles.nightCopy}>
            <p className={styles.nightOverline}>AFTER DARK / HOLIDAY LIGHTING</p>
            <h2 id="night-title">A different kind of curb appeal.</h2>
            <p>Browse the holiday lights we&apos;ve helped bring to Michigan homes.</p>
            <Link href="/services/holiday-lights" className={styles.nightLink}>
              Explore holiday lighting <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className={styles.nightPhoto}>
            <Image
              src="/images/projects/holiday-lights/House3.png"
              alt="House with warm holiday lights photographed at night"
              fill
              sizes="(max-width: 760px) 100vw, 58vw"
            />
          </div>
        </Container>
      </section>

      <section className={styles.contactSection} aria-labelledby="contact-title">
        <Container className={styles.contactLayout}>
          <div>
            <p className={styles.overline}>HAVE SOMETHING IN MIND?</p>
            <h2 id="contact-title">Tell us what your place needs.</h2>
            <p>Reach out about windows, an outdoor surface or holiday lighting.</p>
          </div>
          <div className={styles.contactAction}>
            <a
              className="button button--primary"
              href={site.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Free Quote — contact BrightView on Facebook (opens in a new tab)"
            >
              Get Free Quote <span aria-hidden="true">↗</span>
            </a>
            <p>Quote requests currently open our Facebook page.</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
