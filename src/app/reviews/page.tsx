import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuoteBand } from "@/components/layout/QuoteBand";
import { CardGrid, Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { reviews } from "@/content/reviews";
import styles from "./reviews.module.css";

export const metadata: Metadata = {
  title: "Reviews | BrightView LLC",
  description: "Read what Michigan homeowners say about BrightView LLC.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader eyebrow="BRIGHTVIEW LLC | REVIEWS" title={"Kind Words From\nOur Neighbors."} description="Recommendations from real customers on Facebook." image="/images/projects/pressure-washing/Porch.png" objectPosition="center 55%" />
      <Section>
        <CardGrid>
          {reviews.map((r) => (
            <Card key={r.name} tone="evergreen" as="figure">
              <span className={styles.stars} role="img" aria-label="Recommended">★★★★★</span>
              <blockquote className={styles.quote}>&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className={styles.person}>
                <span className={styles.initials} aria-hidden="true">{r.name.split(" ").map((w) => w[0]).join("")}</span>
                <span><strong>{r.name}</strong><small>Facebook recommendation{r.date ? " \u00b7 " + r.date : ""}</small></span>
              </figcaption>
            </Card>
          ))}
        </CardGrid>
      </Section>
      <QuoteBand title="Join our happy customers." text="Tell us about your project and get a quote." />
    </>
  );
}
