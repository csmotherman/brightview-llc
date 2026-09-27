import Image from "next/image";
import Link from "next/link";
import logo from "../brightview-main-logo.png";
import { BeforeAfter } from "../components/BeforeAfter";
import { Icon } from "../components/Icons";
import { services, facebookUrl } from "../lib/site";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bright View LLC",
    description:
      "Family-owned Michigan window cleaning, power washing, and holiday lighting business.",
    areaServed: {
      "@type": "State",
      name: "Michigan",
    },
    sameAs: [facebookUrl],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="home-hero">
        <div className="home-hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Family-owned • Michigan
          </div>

          <h1>
            The kind of clean
            <span>you notice from the curb.</span>
          </h1>

          <p className="hero-lede">
            Window cleaning, power washing, and holiday lighting with a simple
            process and a sharp eye for the details people actually see.
          </p>

          <div className="hero-actions">
            <Link className="button button-gold" href="/quote">
              Get a free quote
              <Icon name="arrow" />
            </Link>
            <Link className="button button-ghost-light" href="/gallery">
              See the difference
            </Link>
          </div>

          <div className="hero-service-list" aria-label="Bright View services">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Icon name={service.icon} />
                <span>{service.shortName}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Bright View brand">
          <div className="hero-visual-grid" />
          <div className="hero-logo-halo" />
          <div className="hero-logo-card">
            <span className="hero-card-kicker">Michigan exterior care</span>
            <Image
              src={logo}
              alt="Bright View LLC - Power Washing and Window Cleaning"
              priority
              className="hero-logo"
              sizes="(max-width: 720px) 72vw, 480px"
            />
            <div className="hero-card-footer">
              <span>Windows</span>
              <i />
              <span>Exterior</span>
              <i />
              <span>Holiday</span>
            </div>
          </div>
          <div className="hero-badge hero-badge-left">
            <Icon name="spark" />
            <span>
              <strong>Bright results</strong>
              built for curb appeal
            </span>
          </div>
          <div className="hero-badge hero-badge-right">
            <span className="michigan-mini">MI</span>
            <span>
              <strong>Local</strong>
              family-owned
            </span>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span>Scroll to explore</span>
          <i />
        </div>
      </section>

      <section className="statement-band">
        <p>Clear glass.</p>
        <span />
        <p>Clean surfaces.</p>
        <span />
        <p>Brighter seasons.</p>
      </section>

      <section className="home-services section-shell">
        <div className="section-intro section-intro-split">
          <div>
            <p className="eyebrow eyebrow-dark">Three ways to brighten the property</p>
            <h2>Exterior care without the runaround.</h2>
          </div>
          <p>
            Pick the service. Tell us about the property. Bright View handles
            the next step without forcing you through an account, app, or
            complicated booking flow.
          </p>
        </div>

        <div className="service-showcase">
          {services.map((service, index) => (
            <Link
              className={`service-showcase-card service-card-${index + 1}`}
              href={`/services/${service.slug}`}
              key={service.slug}
            >
              <div className="service-showcase-top">
                <span className="service-index">0{index + 1}</span>
                <span className="service-icon">
                  <Icon name={service.icon} />
                </span>
              </div>
              <div className="service-showcase-copy">
                <p>{service.kicker}</p>
                <h3>{service.name}</h3>
                <span>{service.homeCopy}</span>
              </div>
              <div className="service-showcase-link">
                Explore service
                <Icon name="arrow" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="results-section">
        <div className="section-shell">
          <div className="results-heading">
            <div>
              <p className="eyebrow eyebrow-light">Proof belongs in the photos</p>
              <h2>Before. After. Bright View.</h2>
            </div>
            <p>
              This section is already built for real project photography.
              Replace the reserved frames with matched before-and-after shots
              as soon as they are available.
            </p>
          </div>

          <div className="featured-result">
            <BeforeAfter
              title="Featured Bright View transformation"
              service="Power Washing"
            />
          </div>

          <div className="results-footer">
            <div>
              <Icon name="camera" />
              <span>
                <strong>Real work only.</strong>
                No stock-photo gallery pretending to be a completed job.
              </span>
            </div>
            <Link href="/gallery">
              Open the before & after gallery
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section className="standard-section section-shell">
        <div className="standard-heading">
          <span className="big-number">04</span>
          <div>
            <p className="eyebrow eyebrow-dark">The Bright View standard</p>
            <h2>A small-business experience that should actually feel personal.</h2>
          </div>
        </div>

        <div className="standard-grid">
          <article>
            <span><Icon name="message" /></span>
            <strong>Simple from the first message</strong>
            <p>
              A quote request asks for only what helps Bright View understand
              the job. No customer account and no unnecessary steps.
            </p>
          </article>
          <article>
            <span><Icon name="map" /></span>
            <strong>Built around the property</strong>
            <p>
              Every request starts with the service and location, so the
              conversation stays focused on the actual project.
            </p>
          </article>
          <article>
            <span><Icon name="camera" /></span>
            <strong>Results you can see</strong>
            <p>
              The site is designed around authentic before-and-after work, not
              generic home-service stock imagery.
            </p>
          </article>
          <article>
            <span><Icon name="shield" /></span>
            <strong>Local and straightforward</strong>
            <p>
              Bright View is family-owned in Michigan, with a direct path from
              browsing a service to requesting a quote.
            </p>
          </article>
        </div>
      </section>

      <section className="seasonal-section section-shell">
        <div className="seasonal-card">
          <div className="seasonal-lights" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, index) => (
              <i key={index} />
            ))}
          </div>
          <div className="seasonal-copy">
            <p className="eyebrow eyebrow-light">Holiday lighting</p>
            <h2>Michigan gets dark early. Your house doesn&apos;t have to.</h2>
            <p>
              A dedicated seasonal service for a polished holiday display
              without turning setup into your weekend project.
            </p>
            <Link className="button button-gold" href="/services/holiday-lighting">
              Explore holiday lighting
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="seasonal-mark">
            <Icon name="lights" />
          </div>
        </div>
      </section>

      <section className="home-quote-cta">
        <div className="section-shell quote-cta-inner">
          <div>
            <p className="eyebrow eyebrow-dark">Free quote</p>
            <h2>Tell us what needs a brighter view.</h2>
            <p>
              Choose the service, send the basics, and Bright View can take it
              from there.
            </p>
          </div>
          <Link className="button button-navy" href="/quote">
            Start my quote
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
    </>
  );
}
