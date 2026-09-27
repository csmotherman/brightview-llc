import Image from "next/image";
import Link from "next/link";
import logo from "../brightview-main-logo.png";
import { business } from "../lib/business";
import { services } from "../data/services";
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
        <div className="shell footer-top">
          <div className="footer-brand-block">
            <Link href="/" className="footer-brand">
              <Image src={logo} alt="" className="footer-logo" />
              <span>
                <strong>BRIGHT VIEW LLC</strong>
                <small>{business.tagline}</small>
              </span>
            </Link>
            <p>
              {business.ownership} exterior care serving properties across
              {" "}
              {business.serviceArea ?? business.state}.
            </p>
          </div>

          <div className="footer-columns">
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
              <Link href="/gallery">Before &amp; After</Link>
              <Link href="/about">About</Link>
              <Link href="/quote">Free Quote</Link>
              <a href={business.facebookUrl} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="shell footer-bottom">
          <span>&copy; {new Date().getFullYear()} {business.legalName}.</span>
          <span>{business.ownership} in {business.state}.</span>
        </div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Quick actions">
        <Link href="/quote">
          <span>Get a Free Quote</span>
          <Icon name="arrow" />
        </Link>
      </nav>
    </>
  );
}
