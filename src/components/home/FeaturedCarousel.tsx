"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { homeFeatures } from "@/content/home-features";
import styles from "./FeaturedCarousel.module.css";

const ROTATION_MS = 8500;

export function FeaturedCarousel() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      if (mediaQuery.matches) setIsPlaying(false);
    };
    syncMotion();
    mediaQuery.addEventListener("change", syncMotion);
    return () => mediaQuery.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => setPageVisible(document.visibilityState === "visible");
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    if (!isPlaying || hovered || !pageVisible) return;
    const interval = window.setInterval(() => {
      setActive((previous) => (previous + 1) % homeFeatures.length);
    }, ROTATION_MS);
    return () => window.clearInterval(interval);
  }, [isPlaying, hovered, pageVisible]);

  const selectSlide = (index: number) => {
    setActive((index + homeFeatures.length) % homeFeatures.length);
    setIsPlaying(false);
  };

  const slide = homeFeatures[active];
  const paddedSlide = String(active + 1).padStart(2, "0");

  return (
    <section
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured BrightView updates"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setIsPlaying(false)}
    >
      <div className={styles.stage}>
        <div className={styles.backgrounds}>
          {homeFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={[styles.background, index === active ? styles.backgroundActive : ""].filter(Boolean).join(" ")}
              aria-hidden={index !== active}
            >
              <div className={styles.mainPhoto}>
                <Image
                  src={feature.mainImage}
                  alt={index === active ? feature.mainAlt : ""}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 700px) 100vw, 77vw"
                  style={{ objectPosition: feature.imagePosition }}
                />
              </div>
              <div className={styles.sidePhoto}>
                <Image
                  src={feature.supportingImage}
                  alt={index === active ? feature.supportingAlt : ""}
                  fill
                  sizes="23vw"
                  style={{ objectPosition: feature.supportingPosition }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className={styles.copy}
          role="group"
          aria-roledescription="slide"
          aria-label={String(active + 1) + " of " + String(homeFeatures.length) + ": " + slide.shortLabel}
          aria-live={isPlaying && !hovered ? "off" : "polite"}
          aria-atomic="true"
        >
          <p className={styles.eyebrow}>
            <span className={styles.featureMark} aria-hidden="true" />
            {slide.eyebrow}
          </p>
          <h1>{slide.headline}</h1>
          <p className={styles.summary}>{slide.summary}</p>
          <div className={styles.actions}>
            {slide.primaryExternal ? (
              <a
                href={slide.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary"
                aria-label={slide.primaryLabel + " — opens BrightView's Facebook page in a new tab"}
              >
                {slide.primaryLabel} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <Link href={slide.primaryHref} className="button button--primary">
                {slide.primaryLabel} <span aria-hidden="true">↗</span>
              </Link>
            )}
            <Link href={slide.secondaryHref} className={styles.secondaryLink}>
              {slide.secondaryLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
          {slide.contactNote && <p className={styles.contactNote}>{slide.contactNote}</p>}
        </div>

        <div className={styles.imageAttribution} aria-hidden="true">
          Real BrightView project photography
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.controlLabel}>
          <span className={styles.current}>{paddedSlide}</span>
          <span className={styles.separator}>/</span>
          <span>0{homeFeatures.length}</span>
        </div>
        <div className={styles.slideSelectors} role="group" aria-label="Choose a featured update">
          {homeFeatures.map((feature, index) => (
            <button
              type="button"
              key={feature.id}
              className={[styles.slideSelector, index === active ? styles.selectorActive : ""].filter(Boolean).join(" ")}
              aria-label={"Show " + feature.shortLabel + " feature"}
              aria-current={index === active ? "true" : undefined}
              onClick={() => selectSlide(index)}
            >
              <span className={styles.selectorNumber}>0{index + 1}</span>
              <span>{feature.shortLabel}</span>
            </button>
          ))}
        </div>
        <div className={styles.transport}>
          <button
            type="button"
            className={styles.transportButton}
            aria-label={isPlaying ? "Pause automatic slide rotation" : "Resume automatic slide rotation"}
            onClick={() => setIsPlaying((previous) => !previous)}
          >
            <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
          </button>
          <button type="button" className={styles.transportButton} aria-label="Previous feature" onClick={() => selectSlide(active - 1)}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" className={styles.transportButton} aria-label="Next feature" onClick={() => selectSlide(active + 1)}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
