import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="section" aria-labelledby="not-found-heading">
      <Container>
        <p className="eyebrow eyebrow--dark"><span className="eyebrow__mark" aria-hidden="true" /> PAGE NOT FOUND</p>
        <h1 id="not-found-heading" style={{ color: "#071b35", fontSize: "clamp(2.8rem, 7vw, 5rem)", letterSpacing: "-.06em", margin: "0 0 20px" }}>That page isn&apos;t here.</h1>
        <p style={{ color: "#526476", marginBottom: 30, maxWidth: 520, lineHeight: 1.7 }}>We&apos;re building the new BrightView website one page at a time.</p>
        <Link className="button button--primary" href="/">Return to homepage <span aria-hidden="true">↗</span></Link>
      </Container>
    </section>
  );
}
