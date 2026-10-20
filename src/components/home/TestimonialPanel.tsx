"use client";

import { useState } from "react";
import { homeProof } from "@/content/home-reference";
import styles from "./TestimonialPanel.module.css";

/** Real Facebook recommendations, one at a time. No ratings or counts are claimed. */
export function TestimonialPanel() {
  const list = homeProof.testimonials;
  const [index, setIndex] = useState(0);
  const go = (step: number) => setIndex((index + step + list.length) % list.length);

  return (
    <aside className={styles.card} aria-label="Customer recommendations">
      <p className={styles.eyebrow}>WHAT NEIGHBORS SAY</p>
      {/* Every quote shares one grid cell, so the card keeps the height of the longest quote. */}
      <div className={styles.stack} aria-live="polite">
        {list.map((item, i) => (
          <figure key={item.name} className={i === index ? styles.on : styles.off} aria-hidden={i !== index}>
            <blockquote className={styles.quote}>&ldquo;{item.quote}&rdquo;</blockquote>
            <figcaption className={styles.person}>
              <span className={styles.initials} aria-hidden="true">{item.name.split(" ").map((w) => w[0]).join("")}</span>
              <span><strong>{item.name}</strong><small>{item.place}</small></span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className={styles.pager}>
        <span className={styles.count} aria-hidden="true">{index + 1} / {list.length}</span>
        <span className={styles.buttons}>
          <button type="button" aria-label="Previous recommendation" onClick={() => go(-1)}>‹</button>
          <button type="button" aria-label="Next recommendation" onClick={() => go(1)}>›</button>
        </span>
      </div>
    </aside>
  );
}
