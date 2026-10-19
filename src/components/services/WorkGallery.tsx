"use client";

import Image from "next/image";
import { useState } from "react";
import { gutterProject, services } from "@/content/services";
import p from "./WorkGallery.module.css";

type Item = { src: string; alt: string; caption: string; group: string; tag?: string };

const items: Item[] = [
  ...services.flatMap((s): Item[] => [
    ...s.comparisons.flatMap((c) => [
      { src: c.before.src, alt: c.before.alt, caption: c.title, group: s.slug, tag: "Before" },
      { src: c.after.src, alt: c.after.alt, caption: c.title, group: s.slug, tag: "After" },
    ]),
    ...s.finished.map((f) => ({ src: f.src, alt: f.alt, caption: f.label, group: s.slug })),
  ]),
  { src: gutterProject.before.src, alt: gutterProject.before.alt, caption: gutterProject.title, group: "gutters", tag: "Before" },
  { src: gutterProject.after.src, alt: gutterProject.after.alt, caption: gutterProject.title, group: "gutters", tag: "After" },
];

const filters = [
  { id: "all", label: "All" },
  { id: "window-cleaning", label: "Windows" },
  { id: "pressure-washing", label: "Pressure washing" },
  { id: "holiday-lights", label: "Holiday lighting" },
  { id: "gutters", label: "Gutters" },
];

export function WorkGallery() {
  const [active, setActive] = useState("all");
  const shown = items.filter((i) => active === "all" || i.group === active);
  return (
    <>
      <div className={p.chips} role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button key={f.id} type="button" className={p.chip + (active === f.id ? " " + p.chipOn : "")} aria-pressed={active === f.id} onClick={() => setActive(f.id)}>{f.label}</button>
        ))}
      </div>
      <div className={p.grid}>
        {shown.map((i) => (
          <figure key={i.src} className={p.tile}>
            <a className={p.tileLink} href={i.src} target="_blank" rel="noopener noreferrer" aria-label={"View full-size photo: " + i.caption + (i.tag ? " (" + i.tag + ")" : "") + " (opens in a new tab)"}>
              <Image src={i.src} alt={i.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 30vw" />
              {i.tag && <span className={p.pillLabel}>{i.tag}</span>}
            </a>
            <figcaption>{i.caption}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
