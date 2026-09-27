import Image from "next/image";
import Link from "next/link";
import logo from "../brightview-main-logo.png";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { business } from "../lib/business";
import { Icon } from "../components/Icons";
import { WindowMotif } from "../components/WindowMotif";
import { ServiceStory } from "../components/ServiceStory";
import { ProjectGallery } from "../components/ProjectGallery";
import { HowItWorks } from "../components/HowItWorks";
import { QuoteCTA } from "../components/QuoteCTA";
import { Roofline } from "../components/Roofline";

const homeSteps = [
  {
    title: "Tell us what needs attention",
    copy: "Pick a service, share the property, and describe the job in a couple of lines.",
  },
  {
    title: "Bright View reviews the request",
    copy: "We confirm scope and pricing before anything gets scheduled — no surprises.",
  },
  {
    title: "The work gets scheduled",
    copy: "Pick a time that works. No account, no app, no back-and-forth required.",
  },
  {
    title: "Enjoy the result",
    copy: "A property that looks the way it's supposed to — from the street and up close.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow eyebrow-light hero-eyebrow">
              {business.ownership} &middot; {business.state}
            </p>
            <h1>
              A cleaner property <em>changes the whole view.</em>
            </h1>
            <p className="hero-dek">{business.tagline}. A simple quote, a direct process, and results you can see from the curb.</p>

            <div className="hero-actions">
              <Link className="btn btn-gold" href="/quote">
                Get a free quote
                <Icon name="arrow" />
              </Link>
              <Link className="btn btn-outline-light" href="/gallery">
                See our work
              </Link>
            </div>

            <div className="hero-service-rail">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Icon name={service.icon} />
                  {service.shortName}
                </Link>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <WindowMotif className="hero-pane" />
            <div className="hero-logo-tag">
              <Image src={logo} alt="" width={26} height={26} priority />
              <span>Michigan exterior care</span>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-rail" aria-label="Bright View at a glance">
        <span className="trust-rail-item">
          <Icon name="shield" />
          {business.ownership}
        </span>
        <span className="trust-rail-item">
          <Icon name="mapPin" />
          {business.state}
        </span>
        <span className="trust-rail-item">
          <Icon name="message" />
          Free Quotes
        </span>
        <span className="trust-rail-item">
          <Icon name="window" />
          3 Core Services
        </span>
      </div>

      <section className="section">
        <div className="shell section-head">
          <p className="eyebrow eyebrow-dark">Three ways to brighten the property</p>
          <h2 style={{ color: "var(--navy)" }}>Pick the service. Skip the runaround.</h2>
        </div>
      </section>

      <ServiceStory />

      <section className="section band-paper">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow eyebrow-dark">Proof belongs in the photos</p>
            <h2 style={{ color: "var(--navy)" }}>Before. After. Bright View.</h2>
          </div>
          <ProjectGallery projects={projects.slice(0, 3)} />
        </div>
      </section>

      <section className="section band-navy">
        <div className="shell">
          <div className="section-head section-head-invert">
            <p className="eyebrow eyebrow-light">Why Bright View</p>
            <h2>A small-business experience, on purpose.</h2>
          </div>
          <div className="principle-list">
            <article>
              <span className="numeral">01</span>
              <h3>Family-owned</h3>
              <p>
                Bright View is a Michigan family business, not a lead
                marketplace routing your request somewhere else.
              </p>
            </article>
            <article>
              <span className="numeral">02</span>
              <h3>Direct communication</h3>
              <p>
                You hear back from Bright View directly — no call center,
                no automated runaround.
              </p>
            </article>
            <article>
              <span className="numeral">03</span>
              <h3>A simple quote process</h3>
              <p>
                Tell us the job. We confirm the scope. That&apos;s the whole
                process, start to finish.
              </p>
            </article>
          </div>
        </div>
      </section>

      <HowItWorks steps={homeSteps} heading="Four steps, start to finish." />

      <section className="holiday-feature">
        <Roofline className="holiday-feature-roofline" />
        <div className="shell holiday-feature-inner">
          <p className="eyebrow eyebrow-gold">Holiday lighting</p>
          <h2>Michigan gets dark early. Your house doesn&apos;t have to.</h2>
          <p className="dek">
            Bright View plans the layout, handles the install, and takes it
            all down after the season — so the only thing you do is turn it on.
          </p>
          <Link className="btn btn-gold" href="/services/holiday-lighting">
            Explore holiday lighting
            <Icon name="arrow" />
          </Link>
        </div>
      </section>

      <QuoteCTA
        heading="Let's see what Bright View can do for your property."
        copy="Choose the service, send the basics, and Bright View takes it from there."
        buttonLabel="Get my free quote"
      />
    </>
  );
}
