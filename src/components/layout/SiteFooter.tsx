import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div className="footer-brand">
          <Link href="/" aria-label="BrightView homepage"><Image src="/brand/brightview-logo.png" alt="" width={54} height={54} /><strong>BRIGHTVIEW <small>LLC</small></strong></Link>
          <p>Family-owned in Michigan. Window cleaning, pressure washing and holiday lighting.</p>
        </div>
        <div className="footer-links">
          <h2>Explore</h2>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="footer-links">
          <h2>Information</h2>
          <Link href="/service-areas">Service Areas</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-links">
          <h2>Get in touch</h2>
          <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">Message on Facebook ↗</a>
        </div>
      </Container>
      <Container className="footer-bottom">
        <span>© {new Date().getFullYear()} BrightView LLC</span>
        <span>Michigan · Family-owned</span>
      </Container>
    </footer>
  );
}
