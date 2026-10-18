import Link from "next/link";
import { Container } from "./Container";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="placeholder-page" aria-labelledby="placeholder-title">
      <Container>
        <p className="kicker">BrightView LLC</p>
        <h1 id="placeholder-title">{title}</h1>
        <p>We're building this page. Check back soon.</p>
        <Link href="/" className="text-link">← Back to homepage</Link>
      </Container>
    </section>
  );
}
