"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/config/site";
import { Container } from "./Container";

const nav = [
  { label: "Services", href: "/services" },
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
        <a
          className="header-contact"
          href={site.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Free Quote — contact BrightView on Facebook (opens in a new tab)"
        >
          Get Free Quote <span aria-hidden="true">↗</span>
        </a>
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
        <Link href="/" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>Home</Link>
        {nav.map((item) => <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>{item.label}</Link>)}
        <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1} aria-label="Get Free Quote on BrightView's Facebook page (opens in a new tab)">Get Free Quote ↗</a>
      </nav>
    </header>
  );
}
