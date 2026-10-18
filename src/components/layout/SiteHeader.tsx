"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Holiday Lights", href: "/services/holiday-lights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link href="/" className="site-brand" aria-label="BrightView LLC home" onClick={() => setMenuOpen(false)}>
          <Image src="/brand/brightview-logo.png" width={62} height={62} alt="" className="site-brand__logo" priority />
          <span className="site-brand__text"><strong>BRIGHTVIEW</strong><small>LLC · MICHIGAN</small></span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-contact" href="/contact">
          Get Free Quote <span aria-hidden="true">↗</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </Container>
      <nav id="mobile-nav" className={menuOpen ? "mobile-nav mobile-nav--open" : "mobile-nav"} aria-label="Mobile navigation">
        {nav.map((item) => <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>{item.label}</Link>)}
        <Link href="/contact" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>Get Free Quote ↗</Link>
      </nav>
    </header>
  );
}
