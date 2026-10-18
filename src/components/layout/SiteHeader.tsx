"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/config/site";
import { Container } from "./Container";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#results" },
  { label: "Holiday Lights", href: "/#holiday-lights" },
  { label: "Our Story", href: "/#our-story" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="utility-bar">
        <Container className="utility-bar__inner">
          <span><span className="utility-bar__dot" aria-hidden="true" /> Family-owned &amp; Michigan proud</span>
          <span>Window cleaning <span aria-hidden="true">/</span> Pressure washing <span aria-hidden="true">/</span> Holiday lights</span>
        </Container>
      </div>
      <header className="site-header">
        <Container className="site-header__inner">
          <Link href="/" className="site-brand" aria-label="BrightView LLC home" onClick={() => setMenuOpen(false)}>
            <Image src="/brand/brightview-logo.png" width={72} height={72} alt="" className="site-brand__logo" priority />
            <span className="site-brand__text"><strong>BRIGHTVIEW</strong><small>LLC <span aria-hidden="true">·</span> MICHIGAN</small></span>
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
          <a className="header-contact" href={site.facebookUrl} target="_blank" rel="noopener noreferrer">
            Message BrightView <span aria-hidden="true">↗</span>
          </a>
          <button className="menu-toggle" type="button" aria-controls="mobile-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </Container>
        <nav className={menuOpen ? "mobile-nav mobile-nav--open" : "mobile-nav"} id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!menuOpen}>
          {navItems.map((item) => <Link key={item.href} href={item.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>{item.label}<span aria-hidden="true">↗</span></Link>)}
          <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Message BrightView <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
    </>
  );
}
