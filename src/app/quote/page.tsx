import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/quote/QuoteForm";
import styles from "./quote.module.css";

export const metadata: Metadata = {
  title: "Request a Free Quote | BrightView LLC",
  description:
    "Request a free quote for Michigan window cleaning, pressure washing, or holiday lighting. Select one or more services.",
};

export default function QuotePage() {
  return (
    <section className={styles.page} aria-labelledby="quote-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>BRIGHTVIEW LLC / GET STARTED</p>
          <h1 id="quote-title">A brighter home starts here.</h1>
          <p className={styles.lead}>
            Tell us about your property and choose everything you need help with.
            We&apos;ll review your request and follow up about your project.
          </p>
          <div className={styles.details}>
            <h2>One request. Multiple services.</h2>
            <p>Need windows cleaned and your driveway washed? Select both — there&apos;s no need to submit twice.</p>
            <h2>What happens next?</h2>
            <p>We&apos;ll review the details and contact you to discuss a quote. Submitting does not book or purchase a service.</p>
          </div>
          <Link className={styles.backLink} href="/services">Explore our services <span aria-hidden="true">↗</span></Link>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
