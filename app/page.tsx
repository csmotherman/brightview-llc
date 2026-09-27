import Image from "next/image";
import logo from "../brightview-main-logo.png";

const services = [
  {
    number: "01",
    title: "Window Cleaning",
    description:
      "A clear, streak-free finish for the windows that shape the view from your home or business.",
    bullets: ["Interior & exterior", "Screens & sills", "Residential & commercial"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 3h16v18H4V3Zm8 0v18M4 12h16" />
        <path d="m7 8 2-2m6 12 2-2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Power Washing",
    description:
      "Bring back the clean look of high-traffic exterior surfaces with professional pressure washing.",
    bullets: ["Homes & siding", "Driveways & walkways", "Patios, decks & more"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 18h5l2-8 5-2 3 2" />
        <path d="m17 5 3 3M3 21h18M8 8l2 2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Holiday Lighting",
    description:
      "Make the season bright without spending your weekend on a ladder. We handle the hard part.",
    bullets: ["Custom installation", "Clean, professional look", "Seasonal takedown"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12c3-5 6 5 9 0s6 5 9 0" />
        <path d="M6 10v5m6-5v5m6-5v5" />
        <circle cx="6" cy="17" r="1.5" />
        <circle cx="12" cy="17" r="1.5" />
        <circle cx="18" cy="17" r="1.5" />
      </svg>
    ),
  },
];

const trustPoints = [
  "Family-owned Michigan business",
  "Free, no-pressure estimates",
  "Clear communication from quote to completion",
  "Careful work around your home and property",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bright View LLC home">
          <Image
            src={logo}
            alt="Bright View LLC"
            priority
            className="brand-logo"
            sizes="(max-width: 700px) 64px, 76px"
          />
          <span className="brand-copy">
            <strong>BRIGHT VIEW</strong>
            <small>LLC</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#why-us">Why Bright View</a>
          <a href="#quote">Free Quote</a>
          <a
            href="https://www.facebook.com/people/Bright-View-LLC/61552396894247/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </nav>

        <a className="header-cta" href="#quote">
          Free Quote
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-menu-panel">
            <a href="#services">Services</a>
            <a href="#why-us">Why Bright View</a>
            <a href="#quote">Get a Free Quote</a>
            <a
              href="https://www.facebook.com/people/Bright-View-LLC/61552396894247/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Family-owned • Michigan
            </div>

            <h1>
              Make your property
              <span> look bright again.</span>
            </h1>

            <p>
              Professional window cleaning, power washing, and holiday lighting
              with the kind of local service that keeps things simple.
            </p>

            <div className="hero-actions">
              <a href="#quote" className="button button-gold">
                Get a Free Quote
                <span aria-hidden="true">→</span>
              </a>
              <a href="#services" className="text-link">
                Explore services
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-proof">
              <div>
                <strong>3</strong>
                <span>Core services</span>
              </div>
              <div>
                <strong>$0</strong>
                <span>To request a quote</span>
              </div>
              <div>
                <strong>MI</strong>
                <span>Locally operated</span>
              </div>
            </div>
          </div>

          <div className="hero-mark" aria-hidden="true">
            <div className="logo-stage">
              <div className="logo-orbit" />
              <Image
                src={logo}
                alt=""
                className="hero-logo"
                priority
                sizes="(max-width: 820px) 78vw, 480px"
              />
            </div>
          </div>
        </div>

        <div className="service-strip" aria-label="Bright View services">
          <span>Window Cleaning</span>
          <i />
          <span>Power Washing</span>
          <i />
          <span>Holiday Lighting</span>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <p className="section-kicker">What we do</p>
          <h2>One call. A noticeably cleaner property.</h2>
          <p>
            Straightforward exterior services for homeowners and businesses who
            want the job done right without the hassle.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-icon">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span>✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a href="#quote">
                Request a quote <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="why-section" id="why-us">
        <div className="why-copy">
          <p className="section-kicker light">Why Bright View</p>
          <h2>Local service should feel easy.</h2>
          <p>
            No complicated process. Tell us what you need, get a free quote,
            and know exactly what comes next.
          </p>

          <div className="trust-list">
            {trustPoints.map((point) => (
              <div key={point}>
                <span>✓</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="process-card">
          <p className="process-label">How it works</p>
          <ol>
            <li>
              <span>1</span>
              <div>
                <strong>Tell us what you need</strong>
                <p>Choose a service and share a few project details.</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <strong>Get your free quote</strong>
                <p>We’ll review the request and follow up with next steps.</p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>Enjoy the Bright View</strong>
                <p>We handle the work while you enjoy the result.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-intro">
          <p className="section-kicker">Free estimate</p>
          <h2>Tell us about your project.</h2>
          <p>
            Start with the basics. Bright View will follow up to finish the
            quote.
          </p>

          <div className="quote-benefits">
            <span>✓ No account required</span>
            <span>✓ No obligation</span>
            <span>✓ Takes about a minute</span>
          </div>
        </div>

        <form className="quote-form">
          <div className="form-row">
            <label>
              Name <span>*</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Phone <span>*</span>
              <input
                type="tel"
                name="phone"
                placeholder="(248) 555-0123"
                inputMode="tel"
                required
              />
            </label>
          </div>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              inputMode="email"
            />
          </label>

          <fieldset>
            <legend>
              What can we help with? <span>*</span>
            </legend>
            <div className="service-options">
              {["Window Cleaning", "Power Washing", "Holiday Lighting"].map(
                (service) => (
                  <label className="service-option" key={service}>
                    <input type="checkbox" name="service" value={service} />
                    <span className="fake-check">✓</span>
                    <span>{service}</span>
                  </label>
                )
              )}
            </div>
          </fieldset>

          <label>
            Service address
            <input
              type="text"
              name="address"
              placeholder="Street address or city"
            />
          </label>

          <label>
            Tell us about the job
            <textarea
              name="message"
              rows={4}
              placeholder="A few details about what you need..."
            />
          </label>

          <button className="button button-blue form-submit" type="submit">
            Request My Free Quote
            <span aria-hidden="true">→</span>
          </button>

          <p className="form-note">
            Pilot form UI — connect this form to Bright View&apos;s preferred
            email or lead system before launch.
          </p>
        </form>
      </section>

      <section className="closing-cta">
        <div>
          <p className="section-kicker light">Bright View LLC</p>
          <h2>Ready for a brighter view?</h2>
          <p>
            Window cleaning, power washing, and holiday lighting for Michigan.
          </p>
        </div>
        <a href="#quote" className="button button-gold">
          Get a Free Quote <span>→</span>
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <Image src={logo} alt="Bright View LLC" className="footer-logo" />
          <div>
            <strong>BRIGHT VIEW LLC</strong>
            <span>Power Washing & Window Cleaning</span>
          </div>
        </div>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#quote">Free Quote</a>
          <a
            href="https://www.facebook.com/people/Bright-View-LLC/61552396894247/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Bright View LLC. All rights reserved.
        </p>
      </footer>

      <div className="mobile-sticky-cta">
        <a href="#services">Services</a>
        <a href="#quote">Get a Free Quote</a>
      </div>
    </main>
  );
}
