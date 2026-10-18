import Image from "next/image";
import Link from "next/link";
import { BeforeAfterShowcase } from "@/components/home/BeforeAfterShowcase";
import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";

const services = [
  {
    title: "Window cleaning",
    description: "Clear windows and a brighter view of your home.",
    image: "/images/projects/window-cleaning/Full House 16-9.png",
    alt: "BrightView residential window-cleaning project",
    href: "/services/window-cleaning",
  },
  {
    title: "Pressure washing",
    description: "Refresh the exterior surfaces around your property.",
    image: "/images/projects/pressure-washing/BrickPaver After 4-3.png",
    alt: "Brick pavers after pressure washing",
    href: "/services/pressure-washing",
  },
  {
    title: "Holiday lighting",
    description: "Seasonal lighting for homes across Michigan.",
    image: "/images/projects/holiday-lights/House1.png",
    alt: "Home decorated with holiday lights",
    href: "/services/holiday-lights",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Container className="hero__inner">
          <div className="hero__copy">
            <p className="hero__eyebrow">Family-owned in Michigan</p>
            <h1 id="hero-title">Make your home <span>look its best.</span></h1>
            <p className="hero__description">
              Window cleaning, pressure washing and holiday lighting from a local,
              family-owned team.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href={site.facebookUrl} target="_blank" rel="noopener noreferrer">
                Message BrightView <span aria-hidden="true">↗</span>
              </a>
              <a className="button button--secondary" href="#work">
                See our work <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="hero__image">
            <Image
              src="/images/Hero-HomePage.png"
              alt="BrightView window cleaning in progress"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 52vw"
              className="hero__photo"
            />
          </div>
        </Container>
      </section>

      <div className="facts-strip">
        <Container className="facts-strip__inner">
          <span>Family-owned</span>
          <span>Michigan based</span>
          <span>Real project photos</span>
        </Container>
      </div>

      <section className="section" id="services" aria-labelledby="services-title">
        <Container>
          <div className="section-heading">
            <div>
              <p className="kicker">What we do</p>
              <h2 id="services-title">Care for the outside of your home.</h2>
            </div>
            <Link href="/services" className="text-link">All services <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <Link href={service.href} className="service-card__link" aria-label={"Explore " + service.title}>
                  <div className="service-card__image">
                    <Image src={service.image} alt={service.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 950px) 50vw, 33vw" />
                  </div>
                  <div className="service-card__content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="service-card__arrow" aria-hidden="true">→</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--work" id="work" aria-labelledby="work-title">
        <Container>
          <div className="section-heading">
            <div>
              <p className="kicker">Before &amp; after</p>
              <h2 id="work-title">See the difference.</h2>
              <p className="section-heading__intro">Actual BrightView projects, shown side by side. No slider and no stock photography.</p>
            </div>
            <Link href="/our-work" className="text-link">More of our work <span aria-hidden="true">↗</span></Link>
          </div>
          <BeforeAfterShowcase />
        </Container>
      </section>

      <section className="section section--steps" aria-labelledby="steps-title">
        <Container>
          <p className="kicker">Simple to get started</p>
          <h2 id="steps-title" className="steps-title">Let's talk about your project.</h2>
          <div className="steps-grid">
            <div className="step"><span>01</span><h3>Reach out</h3><p>Send BrightView a message about the service you need.</p></div>
            <div className="step"><span>02</span><h3>Share the details</h3><p>Tell us about your property and what you're looking to have done.</p></div>
            <div className="step"><span>03</span><h3>Make a plan</h3><p>We'll discuss the next steps for your project.</p></div>
          </div>
        </Container>
      </section>

      <section className="section section--about" aria-labelledby="about-title">
        <Container className="about-preview">
          <div>
            <p className="kicker">Our story</p>
            <h2 id="about-title">A Michigan family business.</h2>
          </div>
          <div className="about-preview__copy">
            <p>BrightView LLC is family-owned and based in Michigan. We clean windows,
              pressure wash outdoor surfaces and help homes get ready for the holiday season.</p>
            <Link href="/about" className="text-link">About BrightView <span aria-hidden="true">↗</span></Link>
          </div>
        </Container>
      </section>

      <section className="contact-cta" aria-labelledby="contact-title">
        <Container className="contact-cta__inner">
          <div>
            <p className="kicker">Get in touch</p>
            <h2 id="contact-title">Have a project in mind?</h2>
            <p>Tell us what you need. We'd be glad to hear from you.</p>
          </div>
          <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="button button--primary">
            Message BrightView <span aria-hidden="true">↗</span>
          </a>
        </Container>
      </section>
    </>
  );
}
