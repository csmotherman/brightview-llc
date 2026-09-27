import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../../components/Icons";
import { services } from "../../lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Bright View LLC window cleaning, power washing, and holiday lighting services in Michigan.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero-services">
        <div className="page-hero-inner">
          <p className="eyebrow eyebrow-light">Bright View services</p>
          <h1>Three services. One cleaner-looking property.</h1>
          <p>
            Start with what you need today. If the project includes more than
            one service, the quote form can capture that too.
          </p>
        </div>
      </section>

      <section className="service-directory section-shell">
        {services.map((service, index) => (
          <article className="directory-card" key={service.slug}>
            <div className="directory-index">0{index + 1}</div>
            <div className="directory-icon">
              <Icon name={service.icon} />
            </div>
            <div className="directory-copy">
              <p>{service.kicker}</p>
              <h2>{service.name}</h2>
              <span>{service.summary}</span>
              <ul>
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature}>
                    <Icon name="check" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="directory-actions">
              <Link href={`/services/${service.slug}`}>
                Explore {service.shortName}
                <Icon name="arrow" />
              </Link>
              <Link href={`/quote?service=${service.slug}`}>Free quote</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="simple-cta section-shell">
        <div>
          <p className="eyebrow eyebrow-dark">Not sure where it fits?</p>
          <h2>Describe the project. We&apos;ll sort out the service.</h2>
        </div>
        <Link className="button button-navy" href="/quote">
          Request a quote
          <Icon name="arrow" />
        </Link>
      </section>
    </>
  );
}
