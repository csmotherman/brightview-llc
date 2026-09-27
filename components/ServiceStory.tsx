import Link from "next/link";
import { services } from "../data/services";
import { Icon } from "./Icons";
import { ServiceMotif } from "./ServiceMotif";

export function ServiceStory() {
  return (
    <section className="service-story">
      {services.map((service) => (
        <article
          key={service.slug}
          className={service.mood === "evening" ? "service-story-holiday" : undefined}
        >
          <div className="shell service-story-inner">
            <div className="service-story-copy">
              <span className="numeral service-story-number">{service.number}</span>
              <p className="eyebrow" style={service.mood === "evening" ? { color: "var(--gold)" } : undefined}>
                {service.kicker}
              </p>
              <h3>{service.name}</h3>
              <p className="service-story-dek">{service.dek}</p>
              <ul className="service-story-list">
                {service.coverage.map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="service-story-actions">
                <Link className="text-link" href={`/services/${service.slug}`}>
                  Explore {service.shortName}
                  <Icon name="arrow" />
                </Link>
                <Link
                  className={service.mood === "evening" ? "text-link text-link-light" : "text-link"}
                  href={`/quote?service=${service.slug}`}
                >
                  Free quote
                </Link>
              </div>
            </div>
            <div className="service-story-visual">
              <ServiceMotif icon={service.icon} />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
