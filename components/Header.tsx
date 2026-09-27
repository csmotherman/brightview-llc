"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../brightview-main-logo.png";
import { services } from "../lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="topline">
        <span>Family-owned in Michigan</span>
        <span className="topline-separator" />
        <Link href="/quote">Free quotes</Link>
      </div>

      <header className="site-header">
        <Link className="brand" href="/" aria-label="Bright View LLC home">
          <Image
            src={logo}
            alt=""
            priority
            className="brand-mark"
            sizes="58px"
          />
          <span className="brand-type">
            <strong>BRIGHT VIEW</strong>
            <small>LLC</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="nav-services">
            <Link href="/services">Services</Link>
            <div className="nav-dropdown">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <span>{service.name}</span>
                  <small>{service.kicker}</small>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/gallery">Results</Link>
          <Link href="/about">About</Link>
        </nav>

        <Link className="header-quote" href="/quote">
          Get a free quote
        </Link>

        <button
          className={`menu-button ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-drawer ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          <Link href="/">Home</Link>
          <div className="mobile-service-label">Services</div>
          {services.map((service) => (
            <Link
              className="mobile-service-link"
              key={service.slug}
              href={`/services/${service.slug}`}
            >
              {service.name}
            </Link>
          ))}
          <Link href="/gallery">Before & After</Link>
          <Link href="/about">About Bright View</Link>
        </nav>

        <div className="drawer-bottom">
          <p>Have a property in mind?</p>
          <Link className="button button-gold button-wide" href="/quote">
            Request a free quote
          </Link>
        </div>
      </div>
    </>
  );
}
