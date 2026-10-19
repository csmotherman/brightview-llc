"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import styles from "./SiteHeader.module.css";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", menu: true },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "Service Area", href: "/service-areas" },
];

const isActive = (href: string, path: string) => (href === "/" ? path === "/" : path === href || path.startsWith(href + "/"));

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="BrightView LLC home" onClick={close}>
          <Image src="/brand/brightview-logo.png" width={62} height={62} alt="BrightView logo" className={styles.logo} priority />
          <span className={styles.brandText}><strong>BRIGHTVIEW</strong><small>EXTERIOR CLEANING</small></span>
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {nav.map((item) => (
            <Link href={item.href} key={item.href} aria-current={isActive(item.href, pathname) ? "page" : undefined}>
              {item.label}
              {item.menu && <svg className={styles.chevron} width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            </Link>
          ))}
        </nav>
        <Button href="/quote" variant="gold" size="sm" arrow className={styles.quote}>Get a Quote</Button>
        <button type="button" className={styles.toggle} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-controls="mobile-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
      <nav id="mobile-nav" className={menuOpen ? styles.mobileNav + " " + styles.mobileOpen : styles.mobileNav} aria-label="Mobile navigation">
        {nav.map((item) => <Link href={item.href} key={item.href} onClick={close} aria-current={isActive(item.href, pathname) ? "page" : undefined}>{item.label}</Link>)}
        <Button href="/quote" variant="gold" block arrow onClick={close} data-button>Get a Quote</Button>
      </nav>
    </header>
  );
}
