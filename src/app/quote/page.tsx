import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import styles from "./quote.module.css";

const ZOLATO_FORM_URL = "https://zolato.ai/f/-gKnYkijEhKCoC0JTUERFOwb";

export const metadata: Metadata = {
  title: "Request a Free Quote | BrightView LLC",
  description:
    "Tell BrightView about your Michigan window cleaning, pressure washing, or holiday lighting project. Request a free quote online.",
};

export default function QuotePage() {
  return (
    <section className={styles.page} aria-labelledby="quote-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>BRIGHTVIEW LLC / GET STARTED</p>
          <h1 id="quote-title">A brighter home starts here.</h1>
          <p className={styles.lead}>
            Tell us a little about your property and the work you need. We&apos;ll
            review your request and follow up about your project.
          </p>
          <div className={styles.details}>
            <h2>What can we help with?</h2>
            <p>Window cleaning, pressure washing, and holiday lighting.</p>
            <h2>What happens after you submit?</h2>
            <p>Your request goes directly to the BrightView team for review. We&apos;ll be in touch about next steps.</p>
          </div>
          <Link className={styles.backLink} href="/services">Explore our services <span aria-hidden="true">↗</span></Link>
        </div>

        <div className={styles.formCard} aria-label="Quote request form">
          <div className={styles.formIntro}>
            <p className={styles.cardEyebrow}>FREE QUOTE REQUEST</p>
            <h2>Tell us about your project.</h2>
            <p>Complete the form below to send your request to BrightView.</p>
          </div>
          <iframe
            src={ZOLATO_FORM_URL + "?embed=1"}
            className={styles.formFrame}
            title="BrightView free quote request form"
            loading="eager"
          />
          <p className={styles.formFallback}>
            Having trouble viewing the form?{" "}
            <a href={ZOLATO_FORM_URL} target="_blank" rel="noopener noreferrer">
              Open it in a new tab <span aria-hidden="true">↗</span>
            </a>
          </p>
          <Script src="https://zolato.ai/embed/form.js" strategy="afterInteractive" />
        </div>
      </div>
    </section>
  );
}
