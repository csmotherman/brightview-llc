"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryFilters, galleryItems, type GalleryCategory } from "@/content/gallery";
import styles from "./GalleryGrid.module.css";

type Filter = "all" | GalleryCategory;

/** Filterable photo grid with a keyboard-friendly lightbox. Without JavaScript every tile is a plain link to the full-size photo. */
export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const shown = galleryItems.filter((i) => filter === "all" || i.category === filter);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  const step = (dir: number) => setOpen((i) => (i === null ? i : (i + dir + shown.length) % shown.length));
  const current = open !== null ? shown[open] : null;

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter photos">
        {galleryFilters.map((f) => (
          <button key={f.id} type="button" className={f.id === filter ? styles.chipOn : styles.chip} aria-pressed={f.id === filter} onClick={() => { setFilter(f.id); setOpen(null); }}>{f.label}</button>
        ))}
      </div>

      <ul className={styles.grid}>
        {shown.map((item, i) => (
          <li key={item.src}>
            <a href={item.src} className={styles.tile} onClick={(e) => { e.preventDefault(); setOpen(i); }} aria-label={`View larger: ${item.caption}${item.tag ? ` (${item.tag})` : ""}`}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 520px) 100vw, (max-width: 1100px) 50vw, 32vw" />
              {item.tag && <span className={styles.tag}>{item.tag}</span>}
              <span className={styles.caption}>{item.caption}</span>
            </a>
          </li>
        ))}
      </ul>

      <dialog ref={dialog} className={styles.lightbox} aria-label="Photo viewer" onClose={() => setOpen(null)} onClick={(e) => { if (e.target === dialog.current) setOpen(null); }}
        onKeyDown={(e) => { if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); }}>
        {current && (
          <figure className={styles.figure}>
            <div className={styles.frame}>
              <Image src={current.src} alt={current.alt} fill sizes="90vw" priority />
            </div>
            <figcaption>{current.caption}{current.tag ? ` · ${current.tag}` : ""} <span>{(open ?? 0) + 1} / {shown.length}</span></figcaption>
          </figure>
        )}
        <button type="button" className={`${styles.ctl} ${styles.prev}`} aria-label="Previous photo" onClick={() => step(-1)}>‹</button>
        <button type="button" className={`${styles.ctl} ${styles.next}`} aria-label="Next photo" onClick={() => step(1)}>›</button>
        <button type="button" className={`${styles.ctl} ${styles.close}`} aria-label="Close" onClick={() => setOpen(null)}>×</button>
      </dialog>
    </>
  );
}
