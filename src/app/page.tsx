import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";

/* Deliberately not a homepage design. The homepage is the next step. */
export default function HomePage() {
  return (
    <section className="foundation" aria-labelledby="page-title">
      <Container>
        <p className="foundation__eyebrow">{site.ownership} · {site.region}</p>
        <h1 id="page-title">{site.name}</h1>
        <p className="foundation__description">
          Window cleaning, pressure washing &amp; holiday lighting.
        </p>
        <div className="foundation__rule" aria-hidden="true" />
        <p className="foundation__subtle">New website foundation in progress.</p>
      </Container>
    </section>
  );
}
