"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import styles from "./SiteHeader.module.css";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Service Area", href: "/service-areas" },
];

const isActive = (href: string, path: string) => (href === "/" ? path === "/" : path === href || path.startsWith(href + "/"));

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const close = () => setMenuOpen(false);

  // A native modal traps focus and makes the background inert, unlike the old dropdown.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (menuOpen && !dialog.open) dialog.showModal();
    if (!menuOpen && dialog.open) dialog.close();
  }, [menuOpen]);

  // iOS Safari can still scroll behind a modal; preserve the exact scroll position.
  useEffect(() => {
    if (!menuOpen) return;
    const body = document.body;
    const scrollY = window.scrollY;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = "-" + scrollY + "px";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      body.style.overflow = previous.overflow;
      const html = document.documentElement;
      const scrolling = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = scrolling;
    };
  }, [menuOpen]);

  // Keep the drawer in sync with client-side navigation and desktop breakpoints.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const onResize = () => { if (mq.matches) close(); };
    mq.addEventListener("change", onResize);
    return () => mq.removeEventListener("change", onResize);
  }, []);

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
            </Link>
          ))}
        </nav>
        <Button href="/quote" variant="gold" size="sm" arrow className={styles.quote}>Get a Quote</Button>
        <button ref={toggleRef} type="button" className={styles.toggle} aria-label="Open menu" aria-controls="mobile-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
          <span /><span /><span />
        </button>
      </div>
      <dialog
        ref={dialogRef}
        className={styles.drawer}
        onCancel={close}
        onClose={() => { setMenuOpen(false); toggleRef.current?.focus(); }}
        onClick={(event) => { if (event.target === dialogRef.current) close(); }}
        aria-label="BrightView mobile menu"
      >
        <div className={styles.drawerPanel}>
          <div className={styles.drawerHeader}>
            <span className={styles.drawerEyebrow}>BRIGHTVIEW <span aria-hidden="true">/</span> MENU</span>
            <button autoFocus type="button" className={styles.drawerClose} aria-label="Close menu" onClick={close}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav id="mobile-nav" className={styles.mobileNav} aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link href={item.href} key={item.href} onClick={close} aria-current={isActive(item.href, pathname) ? "page" : undefined}>
                <span>{item.label}</span><span className={styles.navArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
          <div className={styles.drawerFooter}>
            <Button href="/quote" variant="gold" block arrow onClick={close}>Get a Quote</Button>
          </div>
        </div>
      </dialog>
    </header>
  );
}
