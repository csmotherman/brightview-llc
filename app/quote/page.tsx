import type { Metadata } from "next";
import { QuoteForm } from "../../components/QuoteForm";
import { Icon } from "../../components/Icons";
import { business } from "../../lib/business";

export const metadata: Metadata = {
  title: "Free Quote",
  description:
    "Request a free Bright View LLC quote for window cleaning, power washing, or holiday lighting in Michigan.",
};

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service = "" } = await searchParams;

  return (
    <section className="quote-page">
      <div className="shell quote-page-inner">
        <div className="quote-page-copy">
          <p className="eyebrow eyebrow-light">Free quote request</p>
          <h1>Give us the basics. We&apos;ll take it from there.</h1>
          <p>
            No customer account. No ten-minute intake. Tell Bright View what
            you need and how to reach you.
          </p>

          <div className="quote-promise-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>Short form</strong>
                Only the details that help start the quote.
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Local follow-up</strong>
                Your request goes to Bright View, not a lead marketplace.
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>No account</strong>
                Submit the request and get on with your day.
              </span>
            </div>
          </div>

          <div className="quote-alternate">
            <span>Prefer social?</span>
            <a
              className="text-link text-link-light"
              href={business.facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              Message Bright View on Facebook
              <Icon name="arrow" />
            </a>
          </div>
        </div>

        <div className="quote-form-panel">
          <QuoteForm defaultService={service} />
        </div>
      </div>
    </section>
  );
}
