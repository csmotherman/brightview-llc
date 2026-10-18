import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="foundation" aria-labelledby="not-found-title">
      <Container>
        <p className="foundation__eyebrow">404</p>
        <h1 id="not-found-title">Page not found.</h1>
        <p className="foundation__description">
          This page is not available yet.
        </p>
        <p className="foundation__subtle">
          <Link className="foundation__home-link" href="/">Return to BrightView</Link>
        </p>
      </Container>
    </section>
  );
}
