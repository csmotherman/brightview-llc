"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { homeSlides } from "@/content/home-feature-slides";
import styles from "./HomeFeatureHero.module.css";

const AUTO_MS = 9000;

export function HomeFeatureHero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [pausedByUser, setPausedByUser] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const readyImages = useRef(new Set<number>());
  const queuedSlide = useRef<number | null>(null);

  // Never switch to a slide before its image is decoded, even on a slow connection.
  // All images are requested eagerly below; the first slide alone gets preload priority.
  const showWhenReady = useCallback((index: number) => {
    const next = (index + homeSlides.length) % homeSlides.length;
    if (readyImages.current.has(next)) {
      queuedSlide.current = null;
      setActive(next);
    } else {
      queuedSlide.current = next;
    }
  }, []);

  const onImageReady = (index: number) => {
    readyImages.current.add(index);
    if (queuedSlide.current === index) {
      queuedSlide.current = null;
      setActive(index);
    }
  };

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
      showWhenReady(active + 1);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [playing, hovered, pausedByUser, visible, active, showWhenReady]);

  const choose = (index: number) => {
    showWhenReady(index);
    setPausedByUser(true);
    setPlaying(false);
  };

  const slide = homeSlides[active];

  return (
    <section
      className={styles.hero}
      aria-label="BrightView featured exterior cleaning services"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setPausedByUser(true)}
    >
      <div className={styles.stage}>
        {homeSlides.map((item, index) => (
          <div
            key={item.key}
            className={index === active ? styles.photoActive : styles.photo}
            style={{ "--pos": item.position, "--pos-m": item.positionMobile } as CSSProperties}
            aria-hidden={index !== active}
          >
            <Image
              src={item.image}
              alt={index === active ? item.alt : ""}
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "eager"}
              fetchPriority={index === 0 ? "high" : "auto"}
              onLoad={() => onImageReady(index)}
              sizes="(max-width: 900px) 100vw, 70vw"
            />
          </div>
        ))}
      </div>
      <div className={styles.fade} aria-hidden="true" />

      <div className={styles.heroInner}>
        <div className={styles.message}>
          <div key={slide.key} className={styles.copy} role="group" aria-roledescription="slide" aria-label={"Feature " + String(active + 1) + " of " + String(homeSlides.length)} aria-live={playing ? "off" : "polite"}>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <div className={styles.actions}>
              <Button href={slide.href} variant="gold" arrow>{slide.cta}</Button>
              <Link href={slide.secondaryHref} className={styles.secondaryAction}>{slide.secondary} <span className={styles.circleArrow} aria-hidden="true">→</span></Link>
            </div>
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

        <aside key={slide.key + "-why"} className={styles.why} aria-label={slide.why.title}>
          <p className={styles.whyEyebrow}>WHY IT MATTERS</p>
          <h2>{slide.why.title}</h2>
          <ul>
            {slide.why.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  );
}
