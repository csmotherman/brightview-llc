import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { QuoteForm } from "@/components/quote/QuoteForm";
import styles from "./quote.module.css";

export const metadata: Metadata = {
  title: "Request a Free Quote | BrightView LLC",
  description:
    "Request a free quote for Michigan window cleaning, pressure washing, or holiday lighting. Select one or more services.",
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="BRIGHTVIEW LLC | GET A QUOTE"
        title={"A brighter home\nstarts here."}
        description="Tell us about your property and choose everything you need. We'll review your request and follow up."
        image="/images/projects/holiday-lights/House3.png"
        objectPosition="center 45%"
      />
      <Section aria-label="Quote request">
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
      </Section>
    </>
  );
}
