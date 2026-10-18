"use client";

import { useState } from "react";
import { homeProof } from "@/content/home-reference";
import styles from "./TestimonialPanel.module.css";

export function TestimonialPanel() {
  const list = homeProof.testimonials;
  const [index, setIndex] = useState(0);
  const item = list[index];
  const go = (step: number) => setIndex((index + step + list.length) % list.length);

  return (
    <aside className={styles.panel} aria-label="Customer feedback">
      <div className={styles.top}>
        <span className={styles.stars} role="img" aria-label="5 out of 5 stars">★★★★★</span>
        <span className={styles.nav}>
          <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)}>‹</button>
          <button type="button" aria-label="Next testimonial" onClick={() => go(1)}>›</button>
        </span>
      </div>
      <blockquote className={styles.quote}>&ldquo;{item.quote}&rdquo;</blockquote>
      <div className={styles.person}>
        <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
          <rect width="40" height="40" fill="#b9c9d4" />
          <circle cx="20" cy="16" r="7" fill="#e9c4a4" />
          <path d="M13 15c0-6 4-8 8-8s6 3 6 8c-2-3-4-4-7-4s-5 1-7 4z" fill="#4a3426" />
          <path d="M6 40c1-8 6-12 14-12s13 4 14 12z" fill="#1f3b63" />
        </svg>
        <span><strong>{item.name}</strong><small>{item.place}</small></span>
      </div>
      <div className={styles.dots} aria-hidden="true">
        <i className={styles.on} /><i /><i />
      </div>
      <dl className={styles.stats}>
        {homeProof.stats.map((stat) => (
          <div key={stat.label}><dt>{stat.value}</dt><dd>{stat.label}</dd></div>
        ))}
      </dl>
    </aside>
  );
}
