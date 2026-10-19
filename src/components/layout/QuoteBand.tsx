import { Button } from "@/components/ui/Button";
import styles from "./QuoteBand.module.css";

/** The closing call to action used at the bottom of content pages. */
export function QuoteBand({ title, text }: { title: string; text: string }) {
  return (
    <section className={styles.band} aria-label="Request a quote">
      <div className={styles.inner}>
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Button href="/quote" variant="gold" arrow>Get a Quote</Button>
      </div>
    </section>
  );
}
