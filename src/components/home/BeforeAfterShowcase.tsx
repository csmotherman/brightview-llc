"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { homeProjects } from "@/content/home-projects";
import styles from "./BeforeAfterShowcase.module.css";

export function BeforeAfterShowcase() {
  const [active, setActive] = useState(0);
  const [split, setSplit] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const project = homeProjects[active];

  const moveTo = (clientX: number) => {
    const box = frame.current?.getBoundingClientRect();
    if (!box) return;
    setSplit(Math.min(96, Math.max(4, ((clientX - box.left) / box.width) * 100)));
  };

  return (
    <div className={styles.showcase}>
      <div
        ref={frame}
        className={styles.frame}
        onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); moveTo(e.clientX); }}
        onPointerMove={(e) => { if (e.currentTarget.hasPointerCapture(e.pointerId)) moveTo(e.clientX); }}
      >
        <Image className={styles.photo} src={project.before} alt={"Before BrightView's " + project.category.toLowerCase() + " work"} fill sizes="(max-width: 780px) 100vw, 34vw" />
        <div className={styles.afterLayer} style={{ clipPath: "inset(0 0 0 " + split + "%)" }}>
          <Image className={styles.photo} src={project.after} alt={"After BrightView's " + project.category.toLowerCase() + " work"} fill sizes="(max-width: 780px) 100vw, 34vw" />
        </div>
        <span className={styles.label}>Before</span>
        <span className={styles.labelAfter}>After</span>
        <span className={styles.divider} style={{ left: split + "%" }} aria-hidden="true">
          <span className={styles.handle}>‹ ›</span>
        </span>
        <input
          className={styles.range}
          type="range"
          min={4}
          max={96}
          value={split}
          onChange={(e) => setSplit(Number(e.target.value))}
          aria-label={"Compare before and after: " + project.category.toLowerCase()}
        />
      </div>
      <div className={styles.tabs} role="group" aria-label="Choose a before and after project">
        {homeProjects.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={active === index ? styles.tabOn : styles.tab}
            aria-pressed={active === index}
            onClick={() => { setActive(index); setSplit(50); }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
