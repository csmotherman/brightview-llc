import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { reviews } from "@/content/reviews";
import { site } from "@/config/site";
import styles from "../info-pages.module.css";

export const metadata: Metadata = {
  title: "Customer Reviews | BrightView LLC",
  description: "Read customer recommendations for BrightView's window cleaning and exterior washing, originally shared on Facebook.",
};

export default function ReviewsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>KIND WORDS</p>
          <h1>What customers are saying.</h1>
          <p>Real recommendations shared by BrightView customers on Facebook.</p>
        </header>

        <section className={styles.glass} aria-labelledby="reviews-heading">
          <div className={styles.sectionHeader}>
            <h2 id="reviews-heading">Customer feedback</h2>
            <p>The recommendations below are reproduced from BrightView’s existing Facebook review records.</p>
          </div>
          <div className={styles.reviewGrid}>
            {reviews.map((review) => (
              <figure key={review.name} className={styles.reviewCard}>
                <blockquote><p>“{review.quote}”</p></blockquote>
                <figcaption>
                  <strong>{review.name}</strong>
                  <span>{review.date ? `${review.date} · Facebook recommendation` : "Facebook recommendation"}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <a className={styles.facebookLink} href={site.facebookUrl} target="_blank" rel="noopener noreferrer">
            Visit BrightView on Facebook <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className={styles.bottomCta} aria-label="See our work">
          <div>
            <h2>See the work for yourself.</h2>
            <p>Browse project photos, or tell us what your home needs.</p>
          </div>
          <div className={styles.ctaButtons}>
            <Link className={styles.textLink} href="/gallery">View gallery ↗</Link>
            <Button href="/quote" arrow>Get a Free Quote</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
