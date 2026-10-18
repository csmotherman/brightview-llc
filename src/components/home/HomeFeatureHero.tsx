"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeSlides } from "@/content/home-feature-slides";
import styles from "./HomeFeatureHero.module.css";

const AUTO_MS = 10500;

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
              style={{ objectPosition: item.objectPosition }}
            />
          </div>
        ))}
      </div>
      <div className={styles.tint} aria-hidden="true" />
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
          {slide.key === "holiday" && <small className={styles.finePrint}>Holiday lighting inquiries currently open our Facebook page.</small>}

          <div className={styles.controls}>
        <div className={styles.controlsInner}>
          <div className={styles.slides} role="group" aria-label="Choose a featured story">
            {homeSlides.map((item, index) => (
              <button
                type="button"
                key={item.key}
                className={index === active ? styles.selected : ""}
                aria-current={index === active ? "true" : undefined}
                onClick={() => choose(index)}
                aria-label={"Show " + item.photoLabel.toLowerCase() + " feature"}
              >
                <span>{"0" + String(index + 1)}</span> {item.key === "holiday" ? "HOLIDAY" : item.key === "exterior" ? "PRESSURE" : "WINDOWS"}
              </button>
            ))}
          </div>
          <div className={styles.arrows}>
            <button type="button" onClick={() => {
              setPlaying((p) => !p);
              setPausedByUser(false);
            }} aria-label={playing ? "Pause slideshow" : "Play slideshow"} title={playing ? "Pause slideshow" : "Play slideshow"}>{playing ? "Ⅱ" : "▶"}</button>
            <button type="button" aria-label="Previous slide" onClick={() => choose(active - 1)}>←</button>
            <button type="button" aria-label="Next slide" onClick={() => choose(active + 1)}>→</button>
          </div>
        </div>
      </div>
        </div>

        <aside className={styles.floating} aria-label="Why explore BrightView">
          <div className={styles.glassIntro}>
            <span className={styles.sunIcon} aria-hidden="true">☼</span>
            <p>FAMILY-OWNED<br/><strong>EXTERIOR CARE IN MICHIGAN</strong></p>
          </div>
          <div className={styles.glassList}>
            <p className={styles.floatingTitle}>THE BRIGHTVIEW DIFFERENCE</p>
            <p><span aria-hidden="true">✧</span> Clearer Window Views</p>
            <p><span aria-hidden="true">◇</span> Refreshed Outdoor Areas</p>
            <p><span aria-hidden="true">✳</span> Holiday-Ready Homes</p>
            <p><span aria-hidden="true">▤</span> Real Project Photos</p>
          </div>
        </aside>
      </div>

    </section>
  );
}
