import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "../../../components/Icons";
import { ServiceMotif } from "../../../components/ServiceMotif";
import { ProjectGallery } from "../../../components/ProjectGallery";
import { HowItWorks } from "../../../components/HowItWorks";
import { getService, services } from "../../../data/services";
import { getProjectsByService } from "../../../data/projects";

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
    description: service.seoDescription,
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

  const otherServices = services.filter((item) => item.slug !== service.slug);
  const projects = getProjectsByService(service.slug);

  return (
    <>
      <section
        className={`service-detail-hero ${
          service.mood === "evening" ? "service-detail-holiday-lighting" : ""
        }`}
      >
        <div className="shell service-detail-hero-inner">
          <div>
            <span className="numeral service-detail-number">{service.number}</span>
            <p className="eyebrow eyebrow-light">{service.kicker}</p>
            <h1>{service.headline}</h1>
            <p>{service.dek}</p>
            <div className="hero-actions">
              <Link className="btn btn-gold" href={`/quote?service=${service.slug}`}>
                Get a free quote
                <Icon name="arrow" />
              </Link>
              <Link className="btn btn-outline-light" href="/gallery">
                See project gallery
              </Link>
            </div>
          </div>
          <div className="service-detail-motif">
            <ServiceMotif icon={service.icon} />
          </div>
        </div>
      </section>

      <section className="shell service-features">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">What the request can cover</p>
          <h2 style={{ color: "var(--navy)" }}>Start with the scope. Keep it simple.</h2>
        </div>
        <div className="feature-list-grid">
          {service.coverage.map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell why-section">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Why it matters</p>
        </div>
        <p className="why-copy">{service.whyItMatters}</p>
      </section>

      <section className="shell section">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">{service.name} results</p>
          <h2 style={{ color: "var(--navy)" }}>Real jobs, matched shots.</h2>
        </div>
        <ProjectGallery projects={projects} />
      </section>

      <HowItWorks
        steps={service.process}
        heading={`From “I need this done” to a finished ${service.name.toLowerCase()} job.`}
      />

      <section className="shell faq-section">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Common questions</p>
          <h2 style={{ color: "var(--navy)" }}>{service.name} FAQ</h2>
        </div>
        <div className="faq-list">
          {service.faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="shell cross-links">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Also explore</p>
        </div>
        <div className="cross-links-row">
          {otherServices.map((item) => (
            <Link className="cross-link-card" key={item.slug} href={`/services/${item.slug}`}>
              {item.name}
              <Icon name="arrow" />
            </Link>
          ))}
        </div>
      </section>

      <section className="shell">
        <section className="simple-cta">
          <div>
            <p className="eyebrow eyebrow-dark">Ready when you are</p>
            <h2 style={{ color: "var(--navy)" }}>Get a {service.name.toLowerCase()} quote.</h2>
          </div>
          <Link className="btn btn-navy" href={`/quote?service=${service.slug}`}>
            Start free quote
            <Icon name="arrow" />
          </Link>
        </section>
      </section>
    </>
  );
}
