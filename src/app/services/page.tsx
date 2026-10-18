import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | BrightView LLC",
  description:
    "Explore window cleaning, pressure washing, and holiday lighting from family-owned BrightView LLC in Michigan.",
};

const services = [
  {
    id: "window-cleaning",
    number: "01",
    title: "Window cleaning",
    image: "/images/projects/window-cleaning/Window After 4-3.png",
    alt: "Close-up of a window after BrightView's window-cleaning work",
    intro: "Clean windows make a difference to the way your home looks and the views you enjoy every day.",
    details:
      "Whether you're getting the house ready for guests or just want a clearer view, tell us about the windows you need cleaned.",
    href: "/services/window-cleaning",
    linkText: "Explore window cleaning",
  },
  {
    id: "pressure-washing",
    number: "02",
    title: "Pressure washing",
    image: "/images/projects/pressure-washing/Porch.png",
    alt: "Residential porch featured in BrightView's pressure-washing project photographs",
    intro:
      "Outdoor surfaces can collect a lot of dirt and buildup over time. A proper clean can make them look noticeably different.",
    details:
      "From brick pavers to other exterior areas, let us know what you want cleaned and we'll discuss your project.",
    href: "/services/pressure-washing",
    linkText: "Explore pressure washing",
  },
  {
    id: "holiday-lights",
    number: "03",
    title: "Holiday lighting",
    image: "/images/projects/holiday-lights/House3.png",
    alt: "House illuminated with holiday lighting from a BrightView project",
    intro:
      "When the sun sets early, holiday lights can completely change the look and feel of a home.",
    details:
      "Take a look at our past displays and get in touch about the look you have in mind for the season.",
    href: "/services/holiday-lights",
    linkText: "Explore holiday lighting",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro} aria-labelledby="services-title">
        <Container>
          <p className="kicker">BrightView / Services</p>
          <div className={styles.introGrid}>
            <h1 id="services-title">What we do.</h1>
            <div className={styles.introCopy}>
              <p>
                Window cleaning, pressure washing, and holiday lighting for Michigan
                homes. Three services from one family-owned business.
              </p>
              <p className={styles.introDetail}>
                Take a look below and choose the service you&apos;re interested in.
              </p>
            </div>
          </div>
          <nav className={styles.serviceIndex} aria-label="Jump to a service">
            {services.map((service) => (
              <a href={"#" + service.id} key={service.id}>
                <span className={styles.indexNumber}>{service.number}</span>
                <span>{service.title}</span>
                <span className={styles.indexArrow} aria-hidden="true">↘</span>
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <Container>
        <div className={styles.serviceList}>
          {services.map((service, index) => (
            <section
              id={service.id}
              className={[styles.serviceRow, index % 2 === 1 ? styles.reversed : ""].filter(Boolean).join(" ")}
              aria-labelledby={service.id + "-title"}
              key={service.id}
            >
              <div className={styles.photoColumn}>
                <div className={styles.photo}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                </div>
                <p className={styles.photoCaption}>From BrightView&apos;s project photos</p>
              </div>
              <div className={styles.serviceCopy}>
                <p className={styles.serviceNumber}>{service.number} <span aria-hidden="true">/</span> Our services</p>
                <h2 id={service.id + "-title"}>{service.title}</h2>
                <p className={styles.serviceLead}>{service.intro}</p>
                <p className={styles.serviceDetail}>{service.details}</p>
                <Link className={styles.serviceLink} href={service.href}>
                  {service.linkText}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </section>
          ))}
        </div>
      </Container>

      <section className={styles.contact} aria-labelledby="services-contact-title">
        <Container className={styles.contactInner}>
          <div>
            <p className="kicker">Get in touch</p>
            <h2 id="services-contact-title">Have a project in mind?</h2>
            <p>Tell us which service you're interested in and a little about your home.</p>
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
