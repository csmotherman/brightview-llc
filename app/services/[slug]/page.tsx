import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BeforeAfter } from "../../../components/BeforeAfter";
import { Icon } from "../../../components/Icons";
import { getService, services } from "../../../lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service" };
  }

  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return (
    <>
      <section className={`service-detail-hero service-detail-${service.slug}`}>
        <div className="service-detail-copy">
          <span className="service-detail-icon">
            <Icon name={service.icon} />
          </span>
          <p className="eyebrow eyebrow-light">{service.kicker}</p>
          <h1>{service.headline}</h1>
          <p>{service.summary}</p>
          <div className="hero-actions">
            <Link
              className="button button-gold"
              href={`/quote?service=${service.slug}`}
            >
              Get a free quote
              <Icon name="arrow" />
            </Link>
            <Link className="button button-ghost-light" href="/gallery">
              See project gallery
            </Link>
          </div>
        </div>

        <div className="service-detail-panel">
          <span className="detail-panel-number">
            0{services.findIndex((item) => item.slug === service.slug) + 1}
          </span>
          <Icon name={service.icon} />
          <p>{service.name}</p>
          <small>Michigan service requests</small>
        </div>
      </section>

      <section className="service-features section-shell">
        <div className="section-intro section-intro-split">
          <div>
            <p className="eyebrow eyebrow-dark">What the request can cover</p>
            <h2>Start with the scope. Keep the process simple.</h2>
          </div>
          <p>
            You do not need to know every measurement before reaching out.
            Give Bright View enough context to understand the property and
            follow up about the details.
          </p>
        </div>

        <div className="feature-list-grid">
          {service.features.map((feature, index) => (
            <div key={feature}>
              <span>0{index + 1}</span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-result section-shell">
        <div className="service-result-heading">
          <div>
            <p className="eyebrow eyebrow-dark">Reserved for real work</p>
            <h2>{service.photoHint}</h2>
          </div>
          <p>
            Matched before-and-after photos can drop directly into this
            component without redesigning the page.
          </p>
        </div>
        <BeforeAfter
          title={`${service.name} project`}
          service={service.name}
        />
      </section>

      <section className="process-section">
        <div className="section-shell process-inner">
          <div className="process-heading">
            <p className="eyebrow eyebrow-light">How it works</p>
            <h2>Three steps between “I need this done” and getting started.</h2>
          </div>
          <div className="process-steps">
            {service.process.map((step, index) => (
              <article key={step.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="simple-cta section-shell">
        <div>
          <p className="eyebrow eyebrow-dark">Ready when you are</p>
          <h2>Get a {service.name.toLowerCase()} quote.</h2>
        </div>
        <Link
          className="button button-navy"
          href={`/quote?service=${service.slug}`}
        >
          Start free quote
          <Icon name="arrow" />
        </Link>
      </section>
    </>
  );
}
