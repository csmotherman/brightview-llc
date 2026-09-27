import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../../components/Icons";
import { services } from "../../data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Window cleaning, power washing, and holiday lighting in Michigan. Explore Bright View LLC services and request a free quote.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-inner">
          <p className="eyebrow eyebrow-light">Bright View services</p>
          <h1>Three services. One cleaner-looking property.</h1>
          <p>
            Start with what you need today. If the project touches more than
            one service, the quote form can capture that too.
          </p>
        </div>
      </section>

      <section className="shell">
        <div className="service-directory">
          {services.map((service) => (
            <div className="directory-row" key={service.slug}>
              <div>
                <div className="directory-row-top">
                  <span>{service.number}</span>
                  <Icon name={service.icon} className="pane-mark" />
                </div>
                <h2>{service.name}</h2>
                <p>{service.dek}</p>
              </div>
              <div className="directory-row-actions">
                <Link className="text-link" href={`/services/${service.slug}`}>
                  Explore {service.shortName}
                  <Icon name="arrow" />
                </Link>
                <Link className="text-link" href={`/quote?service=${service.slug}`}>
                  Free quote
                  <Icon name="arrow" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <section className="simple-cta">
          <div>
            <p className="eyebrow eyebrow-dark">Not sure where it fits?</p>
            <h2 style={{ color: "var(--navy)" }}>
              Describe the project. We&apos;ll sort out the service.
            </h2>
          </div>
          <Link className="btn btn-navy" href="/quote">
            Request a quote
            <Icon name="arrow" />
          </Link>
        </section>
      </section>
    </>
  );
}
