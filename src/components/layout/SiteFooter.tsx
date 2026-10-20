import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" aria-label="BrightView homepage"><Image src="/brand/brightview-logo.png" alt="" width={54} height={54} /><strong>BRIGHTVIEW <small>LLC</small></strong></Link>
          <p>Family-owned in Michigan. Window cleaning, pressure washing and holiday lighting.</p>
        </div>
        <div className={styles.links}>
          <h2>Explore</h2>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
        </div>
        <div className={styles.links}>
          <h2>Information</h2>
          <Link href="/service-areas">Service Areas</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.links}>
          <h2>Get in touch</h2>
          <Link href="/quote">Get a Free Quote</Link>
          <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">Message on Facebook ↗</a>
        </div>
      </div>
      <div className={styles.bottomRule}>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} BrightView LLC</span>
          <span>Michigan · Family-owned</span>
        </div>
      </div>
    </footer>
  );
}
