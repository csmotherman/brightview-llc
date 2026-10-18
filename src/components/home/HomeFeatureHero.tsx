"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeSlides } from "@/content/home-feature-slides";
import { homeProof } from "@/content/home-reference";
import styles from "./HomeFeatureHero.module.css";

const AUTO_MS = 10500;

const careBenefits = [
  "Remove visible dirt and buildup",
  "Enjoy clearer window views",
  "Refresh your home's curb appeal",
  "Bring seasonal lighting to life",
] as const;

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

        <aside className={styles.floating} aria-labelledby="exterior-benefits-heading">
          <div className={styles.benefitPanel}>
            <div className={styles.panelHeading}>
              <p className={styles.panelEyebrow}>WHY IT MATTERS</p>
              <h2 id="exterior-benefits-heading">A little care goes a long way.</h2>
            </div>
            <ul className={styles.benefitList}>
              {careBenefits.map((benefit) => (
                <li key={benefit}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="1" y="1" width="16" height="16" rx="4" />
                      <path d="m4.5 9 3 3 6-6" />
                    </svg>
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
