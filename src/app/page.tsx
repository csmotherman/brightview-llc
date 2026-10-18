import Image from "next/image";
import Link from "next/link";
import { BeforeAfterShowcase } from "@/components/home/BeforeAfterShowcase";
import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";

const services = [
  {
    title: "Window cleaning",
    description: "Glass, frames, and the views that come with them.",
    image: "/images/projects/window-cleaning/Full House 16-9.png",
    alt: "A residential window after cleaning by BrightView",
    href: "/services/window-cleaning",
  },
  {
    title: "Pressure washing",
    description: "A fresh look for pavers and outdoor surfaces.",
    image: "/images/projects/pressure-washing/Porch.png",
    alt: "Brick pavers after a BrightView pressure-washing job",
    href: "/services/pressure-washing",
  },
  {
    title: "Holiday lighting",
    description: "A little more light around the holidays.",
    image: "/images/projects/holiday-lights/House2.png",
    alt: "Residential holiday lights installed on a home",
    href: "/services/holiday-lights",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Container className="hero__inner">
          <div className="hero__copy">
            <p className="hero__eyebrow">BrightView LLC <span aria-hidden="true">/</span> Family-owned in Michigan</p>
            <h1 id="hero-title">Window cleaning &amp; exterior care, done right.</h1>
            <p className="hero__description">
              Window cleaning, pressure washing, and holiday lighting for Michigan homes.
            </p>
            <div className="hero__actions">
              <a
                className="button button--primary"
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Free Quote — contact BrightView on Facebook (opens in a new tab)"
              >
                Get Free Quote <span aria-hidden="true">↗</span>
              </a>
              <a className="button button--secondary" href="#work">
                See our work <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="hero__contact-note">Quote requests currently open our Facebook page.</p>
          </div>
          <div className="hero__image">
            <Image
              src="/images/Hero-HomePage.png"
              alt="A BrightView team member cleaning a residential window"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 56vw"
              className="hero__photo"
            />
          </div>
        </Container>
      </section>

      <section className="section section--services" id="services" aria-labelledby="services-title">
        <Container>
          <div className="section-heading">
            <div>
              <p className="kicker">Our services</p>
              <h2 id="services-title">Three ways we can help.</h2>
            </div>
            <Link href="/services" className="text-link">View all services <span aria-hidden="true">→</span></Link>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <Link href={service.href} className="service__link" aria-label={"Explore " + service.title}>
                  <div className="service__photo">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                  </div>
                  <div className="service__heading">
                    <h3>{service.title}</h3>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <p>{service.description}</p>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--work" id="work" aria-labelledby="work-title">
        <Container>
          <div className="section-heading section-heading--work">
            <div>
              <p className="kicker">Before &amp; after</p>
              <h2 id="work-title">The difference is in the details.</h2>
              <p className="section-heading__intro">A closer look at work from BrightView projects.</p>
            </div>
            <Link href="/services" className="text-link">More project photos <span aria-hidden="true">→</span></Link>
          </div>
          <BeforeAfterShowcase />
        </Container>
      </section>

      <section className="section section--about" aria-labelledby="about-title">
        <Container className="about-preview">
          <div>
            <p className="kicker">The people behind BrightView</p>
            <h2 id="about-title">Family-owned. Michigan based.</h2>
          </div>
          <div className="about-preview__copy">
            <p>BrightView LLC is a family-owned business offering window cleaning, pressure washing, and holiday lighting in Michigan.</p>
            <Link href="/about" className="text-link">Our story <span aria-hidden="true">→</span></Link>
          </div>
        </Container>
      </section>

      <section className="contact-cta" aria-labelledby="contact-title">
        <Container className="contact-cta__inner">
          <div>
            <p className="kicker">Let's talk</p>
            <h2 id="contact-title">Need a hand with your next project?</h2>
            <p>Tell us what you're looking for. For now, you can reach BrightView on Facebook.</p>
          </div>
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary"
            aria-label="Get Free Quote — contact BrightView on Facebook (opens in a new tab)"
          >
            Get Free Quote <span aria-hidden="true">↗</span>
          </a>
        </Container>
      </section>
    </>
  );
}
