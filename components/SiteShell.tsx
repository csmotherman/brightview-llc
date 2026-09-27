import Image from "next/image";
import Link from "next/link";
import logo from "../brightview-main-logo.png";
import { facebookUrl, services } from "../lib/site";
import { Header } from "./Header";
import { Icon } from "./Icons";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand-block">
            <Link href="/" className="footer-brand">
              <Image src={logo} alt="" className="footer-logo" />
              <span>
                <strong>BRIGHT VIEW LLC</strong>
                <small>Power Washing • Window Cleaning • Holiday Lighting</small>
              </span>
            </Link>
            <p>
              Family-owned exterior care serving homes and businesses within
              Bright View&apos;s Michigan service area.
            </p>
          </div>

          <div className="footer-nav-group">
            <p>Services</p>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.name}
              </Link>
            ))}
          </div>

          <div className="footer-nav-group">
            <p>Explore</p>
            <Link href="/gallery">Before & After</Link>
            <Link href="/about">About</Link>
            <Link href="/quote">Free Quote</Link>
            <a href={facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bright View LLC.</span>
          <span>Michigan family-owned business.</span>
        </div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Quick actions">
        <Link href="/services">
          <span>Services</span>
        </Link>
        <Link className="mobile-action-primary" href="/quote">
          <span>Free Quote</span>
          <Icon name="arrow" />
        </Link>
      </nav>
    </>
  );
}
