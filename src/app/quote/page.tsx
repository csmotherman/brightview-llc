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
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.pageIntro}>
          <p className={styles.eyebrow}>GET A QUOTE</p>
          <h1>A brighter home starts here.</h1>
          <p>Tell us about your property and choose everything you need. We&apos;ll review your request and follow up.</p>
        </header>
        <div className={styles.layout}>
          <QuoteForm />
          <aside className={styles.details}>
            <h2>One request. Multiple services.</h2>
            <p>Need windows cleaned and your driveway washed? Select both — there&apos;s no need to submit twice.</p>
            <h2>What happens next?</h2>
            <p>We&apos;ll review the details and contact you to discuss a quote. Submitting does not book or purchase a service.</p>
            <Link className={styles.backLink} href="/services">Explore our services <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
