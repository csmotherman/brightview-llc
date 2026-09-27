"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../brightview-main-logo.png";
import { services } from "../data/services";
import { WindowMotif } from "./WindowMotif";

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
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Bright View LLC home">
          <Image src={logo} alt="" priority className="brand-mark" sizes="50px" />
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
          <Link href="/gallery">Before &amp; After</Link>
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

      <div
        className={`nav-sheet ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <WindowMotif className="nav-sheet-motif" />

        <nav className="nav-sheet-links" aria-label="Mobile navigation">
          <Link href="/">Home</Link>
          <div className="nav-service-label">Services</div>
          {services.map((service) => (
            <Link
              className="nav-service-link"
              key={service.slug}
              href={`/services/${service.slug}`}
            >
              {service.name}
            </Link>
          ))}
          <Link href="/gallery">Before &amp; After</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="nav-sheet-bottom">
          <p>Have a property in mind?</p>
          <Link className="btn btn-gold btn-wide" href="/quote">
            Request a free quote
          </Link>
        </div>
      </div>
    </>
  );
}
