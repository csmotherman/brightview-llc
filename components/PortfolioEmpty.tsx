import Link from "next/link";
import { WindowMotif } from "./WindowMotif";
import { Icon } from "./Icons";

export function PortfolioEmpty({
  heading = "New work goes up here as jobs wrap.",
  copy = "Bright View is building its photo portfolio one property at a time. Request a quote and yours could be one of the first.",
}: {
  heading?: string;
  copy?: string;
}) {
  return (
    <div className="portfolio-empty">
      <WindowMotif />
      <h3>{heading}</h3>
      <p>{copy}</p>
      <Link className="btn btn-navy" href="/quote">
        Get a free quote
        <Icon name="arrow" />
      </Link>
    </div>
  );
}
