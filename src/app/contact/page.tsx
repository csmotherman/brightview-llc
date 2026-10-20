import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import styles from "../info-pages.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Call, email or message BrightView LLC about window cleaning, exterior washing and holiday lighting in Southeast Michigan. Quote requests are free.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>GET IN TOUCH</p>
          <h1>We’d love to hear from you.</h1>
          <p>Have a question or a project in mind? Contact BrightView whichever way works best for you.</p>
        </header>

        <section className={styles.glass} aria-labelledby="contact-heading">
          <div className={styles.sectionHeader}>
            <h2 id="contact-heading">Contact BrightView</h2>
            <p>Call, send an email or connect with us on Facebook.</p>
          </div>
          <div className={styles.contactGrid}>
            <a className={styles.contactCard} href={`tel:${site.phone}`}>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.12.96.35 1.91.68 2.82a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.28-1.24a2 2 0 0 1 2.11-.45c.91.33 1.86.56 2.82.68A2 2 0 0 1 22 16.9Z" />
                </svg>
              </span>
              <span className={styles.contactLabel}>Call us</span>
              <strong>{site.phoneDisplay}</strong>
              <span className={styles.contactAction}>Call BrightView <span aria-hidden="true">↗</span></span>
            </a>

            <a className={styles.contactCard} href={`mailto:${site.email}`}>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                  <path d="m3.5 7 8.5 6 8.5-6" />
                </svg>
              </span>
              <span className={styles.contactLabel}>Email us</span>
              <strong className={styles.emailText}>{site.email}</strong>
              <span className={styles.contactAction}>Write an email <span aria-hidden="true">↗</span></span>
            </a>

            <a className={styles.contactCard} href={site.facebookUrl} target="_blank" rel="noopener noreferrer">
              <span className={`${styles.contactIcon} ${styles.facebookIcon}`} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.2 21v-7.8h2.6l.4-3.1h-3V8.1c0-.9.3-1.5 1.6-1.5h1.6V3.8c-.7-.1-1.4-.2-2.2-.2-2.6 0-4.3 1.6-4.3 4.5v2H8.2v3.1h2.7V21h3.3Z" />
                </svg>
              </span>
              <span className={styles.contactLabel}>Find us on Facebook</span>
              <strong>Bright View LLC</strong>
              <span className={styles.contactAction}>Open Facebook <span aria-hidden="true">↗</span></span>
            </a>
          </div>
        </section>

        <section className={styles.bottomCta} aria-label="Request a quote">
          <div>
            <h2>Ready for a quote?</h2>
            <p>Our free quote form is separate from contacting us. No payment or booking is required.</p>
          </div>
          <div className={styles.ctaButtons}>
            <Link className={styles.textLink} href="/faq">Read FAQs ↗</Link>
            <Button href="/quote" arrow>Request a Free Quote</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
