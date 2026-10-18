"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeSlides } from "@/content/home-feature-slides";
import { heroBenefits, homeProof } from "@/content/home-reference";
import styles from "./HomeFeatureHero.module.css";

const AUTO_MS = 10500;

function BenefitIcon({ icon }: { icon: string }) {
  const c = { width: 30, height: 30, viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  if (icon === "sun") return <svg {...c}><circle cx="16" cy="16" r="5.5" /><path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M25.2 6.8l-2.8 2.8M9.6 22.4l-2.8 2.8" /></svg>;
  if (icon === "sparkle") return <svg {...c}><path d="M12 5l2 6 6 2-6 2-2 6-2-6-6-2 6-2zM24 17l1 3 3 1-3 1-1 3-1-3-3-1 3-1zM23 4l.8 2.2L26 7l-2.2.8L23 10l-.8-2.2L20 7l2.2-.8z" /></svg>;
  if (icon === "shield") return <svg {...c}><path d="M16 3.5l10 3.7v7.6c0 6-4.2 10.4-10 13.2C10.2 25.2 6 20.8 6 14.8V7.2z" /><path d="M16 10v9M11.5 14.5h9" /></svg>;
  if (icon === "house") return <svg {...c}><path d="M4 15.5L16 5l12 10.5M7 13.5V27h6v-7h6v7h6V13.5" /></svg>;
  return <svg {...c}><path d="M5 27V16h5v11M13.5 27V8h5v19M22 27V13h5v14" fill="currentColor" stroke="none" /></svg>;
}

function Avatar({ tone }: { tone: string }) {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <rect width="40" height="40" fill={tone} />
      <circle cx="20" cy="16" r="7" fill="#e9c4a4" />
      <path d="M13 15c0-6 4-8 8-8s6 3 6 8c-2-3-4-4-7-4s-5 1-7 4z" fill="#4a3426" />
      <path d="M6 40c1-8 6-12 14-12s13 4 14 12z" fill="#e8ecee" />
    </svg>
  );
}

export function HomeFeatureHero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [pausedByUser, setPausedByUser] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setPlaying(false);
    const onChange = () => { if (mq.matches) setPlaying(false); };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onChange = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);

  useEffect(() => {
    if (!playing || hovered || pausedByUser || !visible) return;
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % homeSlides.length);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [playing, hovered, pausedByUser, visible]);

  const choose = (index: number) => {
    setActive((index + homeSlides.length) % homeSlides.length);
    setPausedByUser(true);
    setPlaying(false);
  };

  const slide = homeSlides[active];

  return (
    <section
      className={styles.hero}
      aria-label="BrightView featured services and seasonal highlights"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setPausedByUser(true)}
    >
      <div className={styles.photographs}>
        {homeSlides.map((item, index) => (
          <div
            key={item.key}
            className={index === active ? styles.photoActive : styles.photo}
            aria-hidden={index !== active}
          >
            <Image
              src={item.image}
              alt={index === active ? item.alt : ""}
              fill
              priority={index === 0}
              sizes="100vw"
              className={item.flip ? styles.flip : undefined}
              style={{ objectPosition: item.objectPosition }}
            />
          </div>
        ))}
      </div>
      <div className={styles.tint} aria-hidden="true" />
      <div className={styles.fade} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.message} role="group" aria-roledescription="slide" aria-label={"Feature " + String(active + 1) + " of " + String(homeSlides.length)} aria-live={playing ? "off" : "polite"}>
          <span className={styles.pill}><i aria-hidden="true" /> {slide.eyebrow}</span>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <div className={styles.actions}>
            {slide.external ? (
              <a className={styles.mainAction} href={slide.href} target="_blank" rel="noopener noreferrer" aria-label={slide.cta + " — contact BrightView on Facebook in a new tab"}>{slide.cta} <span aria-hidden="true">→</span></a>
            ) : (
              <Link className={styles.mainAction} href={slide.href}>{slide.cta} <span aria-hidden="true">→</span></Link>
            )}
            <Link href={slide.secondaryHref} className={styles.secondaryAction}>{slide.secondary} <span className={styles.circleArrow} aria-hidden="true">→</span></Link>
          </div>

          <div className={styles.proofRow}>
            <div className={styles.homeowners}>
              <span className={styles.faces} aria-hidden="true">
                <Avatar tone="#b9c9d4" /><Avatar tone="#c8b8a4" /><Avatar tone="#a9bfae" />
              </span>
              <span><strong>{homeProof.homeowners.count}</strong><small>{homeProof.homeowners.label}</small></span>
            </div>
            <div className={styles.controls} role="group" aria-label="Choose a featured story">
              <button type="button" aria-label="Previous slide" onClick={() => choose(active - 1)}>‹</button>
              {homeSlides.map((item, index) => (
                <button
                  type="button"
                  key={item.key}
                  className={index === active ? styles.dotOn : styles.dot}
                  aria-current={index === active ? "true" : undefined}
                  aria-label={"Show " + item.photoLabel.toLowerCase() + " feature"}
                  onClick={() => choose(index)}
                />
              ))}
              <button type="button" aria-label="Next slide" onClick={() => choose(active + 1)}>›</button>
              <button type="button" onClick={() => { setPlaying((p) => !p); setPausedByUser(false); }} aria-label={playing ? "Pause slideshow" : "Play slideshow"}>{playing ? "Ⅱ" : "▶"}</button>
            </div>
          </div>
        </div>

        <aside className={styles.floating} aria-label="Why choose BrightView">
          {heroBenefits.map((item) => (
            <Link key={item.title} href={item.href} className={"lead" in item ? styles.glassLead : styles.glassCard}>
              <span className={"lead" in item ? styles.sunIcon : styles.benefitIcon}><BenefitIcon icon={item.icon} /></span>
              {"lead" in item ? (
                <span className={styles.leadText}>{item.title}<br />{item.sub}</span>
              ) : (
                <span className={styles.cardText}>{item.title}</span>
              )}
              <span className={styles.circle} aria-hidden="true">→</span>
            </Link>
          ))}
        </aside>
      </div>
    </section>
  );
}
