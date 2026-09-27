import Link from "next/link";
import { Icon } from "./Icons";

export function QuoteCTA({
  eyebrow = "Free quote",
  heading,
  copy,
  buttonLabel = "Get my free quote",
  href = "/quote",
}: {
  eyebrow?: string;
  heading: string;
  copy: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="final-cta">
      <div className="shell final-cta-inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{heading}</h2>
          <p style={{ marginTop: 16 }}>{copy}</p>
        </div>
        <Link className="btn btn-navy" href={href}>
          {buttonLabel}
          <Icon name="arrow" />
        </Link>
      </div>
    </section>
  );
}
