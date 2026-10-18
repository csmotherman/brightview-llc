import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link href="/" aria-label="BrightView LLC homepage">
              <Image src="/brand/brightview-logo.png" width={72} height={72} alt="" />
              <span><strong>BRIGHTVIEW</strong><small>FAMILY-OWNED IN MICHIGAN</small></span>
            </Link>
            <p>Window cleaning, pressure washing, and holiday lighting from a family-owned Michigan business.</p>
          </div>
          <div className="site-footer__column">
            <h2>Explore</h2>
            <Link href="/#services">Our services</Link>
            <Link href="/#results">Before &amp; after</Link>
            <Link href="/#holiday-lights">Holiday lights</Link>
            <Link href="/#our-story">Our story</Link>
          </div>
          <div className="site-footer__column">
            <h2>Get in touch</h2>
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">Message on Facebook <span aria-hidden="true">↗</span></a>
            <p>Serving Michigan homeowners.</p>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} BrightView LLC. All rights reserved.</span>
          <span>Made for Michigan homes.</span>
        </div>
      </Container>
    </footer>
  );
}
