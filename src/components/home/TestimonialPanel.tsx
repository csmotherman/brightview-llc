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
        <span className={styles.initials} aria-hidden="true">{item.name.split(" ").map((w) => w[0]).join("")}</span>
        <span><strong>{item.name}</strong><small>{item.place}</small></span>
      </div>
      <div className={styles.dots} aria-hidden="true">
        {list.map((_, i) => <i key={i} className={i === index ? styles.on : undefined} />)}
      </div>
      <dl className={styles.stats}>
        {homeProof.stats.map((stat) => (
          <div key={stat.label}><dt>{stat.value}</dt><dd>{stat.label}</dd></div>
        ))}
      </dl>
    </aside>
  );
}
