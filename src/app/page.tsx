import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { BeforeAfterShowcase } from "@/components/home/BeforeAfterShowcase";
import { site } from "@/config/site";

const services = [
  {
    number: "01",
    eyebrow: "EVERY PANE, A BETTER VIEW",
    title: "Window Cleaning",
    description: "Clearer glass, better light, and a home that feels refreshed.",
    image: "/images/projects/window-cleaning/Full House 16-9.png",
    alt: "Residential home photographed for BrightView's window cleaning work",
    href: "#results",
    action: "See the difference",
  },
  {
    number: "02",
    eyebrow: "A FRESH START OUTSIDE",
    title: "Pressure Washing",
    description: "A satisfying reset for the exterior surfaces you see every day.",
    image: "/images/projects/pressure-washing/BrickPaver After 4-3.png",
    alt: "Clean brick pavers after pressure washing",
    href: "#results",
    action: "Explore our results",
  },
  {
    number: "03",
    eyebrow: "MADE FOR THE SEASON",
    title: "Holiday Lighting",
    description: "Bring a little more magic to your home when the nights get longer.",
    image: "/images/projects/holiday-lights/House1.png",
    alt: "Home decorated with holiday lights",
    href: "#holiday-lights",
    action: "View holiday projects",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <Container className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__mark" aria-hidden="true" />FAMILY-OWNED IN MICHIGAN</p>
            <h1 id="hero-heading">Make your home <em>look its best.</em></h1>
            <p className="hero__lead">Window cleaning, pressure washing, and holiday lighting from a local, family-owned team. Good work makes a visible difference.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#services">Explore Our Services <span aria-hidden="true">↗</span></a>
              <a className="button button--outline" href="#results">See Our Work <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero__signature"><span aria-hidden="true" />Taking pride in Michigan homes.</div>
          </div>
          <div className="hero__visual">
            <Image src="/images/Hero-HomePage.png" alt="Residential home featured in BrightView's exterior cleaning work" fill priority sizes="(max-width: 900px) 100vw, 56vw" className="hero__photo" />
            <div className="hero__photo-caption"><span>BRIGHTVIEW</span><span>MICHIGAN · EXTERIOR CARE</span></div>
          </div>
        </Container>
      </section>

      <div className="service-rail" aria-label="BrightView at a glance">
        <Container className="service-rail__inner">
          <span><b>01</b> FAMILY-OWNED</span>
          <span><b>02</b> MICHIGAN BASED</span>
          <span><b>03</b> EVERY SEASON</span>
        </Container>
      </div>

      <section className="section section--services" id="services" aria-labelledby="services-heading">
        <Container>
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" aria-hidden="true" /> WHAT WE DO</p>
              <h2 id="services-heading">A little care goes <em>a long way.</em></h2>
            </div>
            <p>From bright windows to refreshed outdoor surfaces and beautifully lit evenings, we help bring out the best in your home.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card__image">
                  <Image src={service.image} alt={service.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" />
                  <span className="service-card__index">{service.number} / 03</span>
                </div>
                <div className="service-card__body">
                  <p className="small-label">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.href} className="service-card__link">{service.action}<span aria-hidden="true">↗</span></a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--results" id="results" aria-labelledby="results-heading">
        <Container>
          <div className="section-heading section-heading--results">
            <div>
              <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" aria-hidden="true" /> THE PROOF IS IN THE PICTURES</p>
              <h2 id="results-heading">Real work. <em>Visible results.</em></h2>
            </div>
            <p>No stock before-and-afters here. Explore photographs from BrightView's work by moving the slider across each pair.</p>
          </div>
          <BeforeAfterShowcase />
        </Container>
      </section>

      <section className="section section--holiday" id="holiday-lights" aria-labelledby="holiday-heading">
        <Container className="holiday">
          <div className="holiday__heading">
            <p className="eyebrow eyebrow--light"><span className="eyebrow__mark" aria-hidden="true" /> HOLIDAY LIGHTING</p>
            <h2 id="holiday-heading">When the nights get longer, <em>let home shine.</em></h2>
            <p>Beautiful lighting turns the everyday into something worth looking forward to. Take a look at BrightView's holiday work.</p>
            <a href="#contact" className="text-link text-link--light">Talk to us about holiday lights <span aria-hidden="true">↗</span></a>
          </div>
          <div className="holiday__gallery" aria-label="BrightView holiday-lighting photos">
            <div className="holiday__photo holiday__photo--main">
              <Image src="/images/projects/holiday-lights/House2.png" alt="House with holiday lights installed along the roofline" fill sizes="(max-width: 800px) 100vw, 62vw" />
            </div>
            <div className="holiday__photo holiday__photo--upper">
              <Image src="/images/projects/holiday-lights/Trees.png" alt="Trees illuminated with holiday lights" fill sizes="(max-width: 800px) 50vw, 25vw" />
            </div>
            <div className="holiday__photo holiday__photo--lower">
              <Image src="/images/projects/holiday-lights/House3.png" alt="Home decorated with holiday lights" fill sizes="(max-width: 800px) 50vw, 25vw" />
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--story" id="our-story" aria-labelledby="story-heading">
        <Container className="story">
          <div className="story__seal" aria-hidden="true">
            <div className="story__seal-inner">
              <span>ROOTED IN</span>
              <strong>MICHIGAN.</strong>
              <i />
              <span>BUILT AROUND HOME.</span>
            </div>
          </div>
          <div className="story__copy">
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" aria-hidden="true" /> A DIFFERENT KIND OF LOCAL</p>
            <h2 id="story-heading">Family-owned. <em>Home-focused.</em></h2>
            <p>BrightView is a family-owned business serving Michigan with window cleaning, pressure washing, and seasonal holiday lighting.</p>
            <p>We believe the small details are the ones that make a place feel cared for. And we want that care to come through in the work we do.</p>
            <div className="story__tag"><span aria-hidden="true">✳</span> A family name behind the work.</div>
          </div>
        </Container>
      </section>

      <section className="contact-band" id="contact" aria-labelledby="contact-heading">
        <Container className="contact-band__inner">
          <div>
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" aria-hidden="true" /> HAVE A PROJECT IN MIND?</p>
            <h2 id="contact-heading">Let's make your place <em>look brighter.</em></h2>
            <p>We'd love to hear what you're working on. For now, you can reach BrightView directly on Facebook.</p>
          </div>
          <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="button button--navy">Message BrightView <span aria-hidden="true">↗</span></a>
        </Container>
      </section>
    </>
  );
}
