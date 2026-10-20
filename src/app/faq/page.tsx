import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/content/faq";
import styles from "../info-pages.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about BrightView exterior cleaning, holiday lighting, free quote requests and our Southeast Michigan service area.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>GOOD TO KNOW</p>
          <h1>Frequently asked questions.</h1>
          <p>A few helpful answers about our services and how to get started.</p>
        </header>

        <section className={styles.glass} aria-label="Common questions">
          <div className={styles.sectionHeader}>
            <h2>Questions & answers</h2>
            <p>Select a question to see the answer.</p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.question} className={styles.faqItem}>
                <summary>
                  <span>{item.question}</span>
                  <span aria-hidden="true" className={styles.plus}>+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.bottomCta} aria-label="Need more help">
          <div>
            <h2>Still have a question?</h2>
            <p>Reach out directly, or request a free quote for your project.</p>
          </div>
          <div className={styles.ctaButtons}>
            <Link className={styles.textLink} href="/contact">Contact us ↗</Link>
            <Button href="/quote" arrow>Get a Free Quote</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
