"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryEntries, gallerySections, galleryTree, type GalleryEntry, type GalleryGroup, type GallerySub } from "@/content/gallery";
import styles from "./GalleryGrid.module.css";

type Selection = { group: "all" | GalleryGroup; sub?: GallerySub };

const matches = (e: GalleryEntry, s: Selection) => (s.group === "all" || e.group === s.group) && (!s.sub || e.sub === s.sub);

/** Sectioned, filterable gallery (tree filter + lightbox). Without JavaScript every photo is a plain link to the full-size image. */
export function GalleryGrid() {
  const [sel, setSel] = useState<Selection>({ group: "all" });
  const [open, setOpen] = useState<GalleryEntry | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const visible = galleryEntries.filter((e) => matches(e, sel));
  const sections = gallerySections.map((s) => ({ ...s, entries: visible.filter((e) => e.sub === s.id) })).filter((s) => s.entries.length > 0);
  const activeGroup = galleryTree.find((n) => n.id === sel.group);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const step = (dir: number) => setOpen((cur) => {
    if (!cur) return cur;
    const i = visible.findIndex((e) => e.id === cur.id);
    return visible[(i + dir + visible.length) % visible.length];
  });
  const index = open ? visible.findIndex((e) => e.id === open.id) : -1;
  let first = true; // the first screen of photos loads eagerly; everything else is lazy

  return (
    <>
      <div className={styles.tree}>
        <div className={styles.filters} role="group" aria-label="Filter by category">
          {galleryTree.map((n) => (
            <button key={n.id} type="button" className={sel.group === n.id ? styles.chipOn : styles.chip} aria-pressed={sel.group === n.id} onClick={() => setSel({ group: n.id })}>{n.label}</button>
          ))}
        </div>
        {activeGroup?.children && (
          <div className={`${styles.filters} ${styles.subFilters}`} role="group" aria-label="Filter exterior cleaning by service">
            {activeGroup.children.map((c) => (
              <button key={c.id} type="button" className={sel.sub === c.id ? styles.subOn : styles.sub} aria-pressed={sel.sub === c.id} onClick={() => setSel(sel.sub === c.id ? { group: "exterior" } : { group: "exterior", sub: c.id })}>{c.label}</button>
            ))}
          </div>
        )}
      </div>

      {sections.map((section) => (
        <section key={section.id} className={styles.section} aria-labelledby={`g-${section.id}`}>
          <h2 id={`g-${section.id}`}>{section.title}</h2>
          <ul className={styles.grid}>
            {section.entries.map((entry) => {
              const priority = first;
              first = false;
              const isPair = entry.photos.length === 2;
              return (
                <li key={entry.id} className={isPair ? styles.pair : styles.single}>
                  <a href={entry.photos[0].src} className={styles.tile} onClick={(e) => { e.preventDefault(); setOpen(entry); }} aria-label={`View larger: ${entry.caption}${isPair ? " (before and after)" : ""}`}>
                    {entry.photos.map((p) => (
                      <span key={p.src} className={styles.half}>
                        <Image src={p.src} alt={p.alt} fill quality={70} priority={priority} sizes={isPair ? "(max-width: 900px) 46vw, 22vw" : "(max-width: 900px) 92vw, 30vw"} />
                        {p.tag && <span className={styles.tag}>{p.tag}</span>}
                      </span>
                    ))}
                    <span className={styles.caption}>{entry.caption}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <dialog ref={dialog} className={styles.lightbox} aria-label="Photo viewer" onClose={() => setOpen(null)} onClick={(e) => { if (e.target === dialog.current) setOpen(null); }}
        onKeyDown={(e) => { if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); }}>
        {open && (
          <figure className={styles.figure}>
            <div className={open.photos.length === 2 ? `${styles.frame} ${styles.frameTwo}` : styles.frame}>
              {open.photos.map((p) => (
                <span key={p.src} className={styles.pane}>
                  <Image src={p.src} alt={p.alt} fill quality={80} sizes={open.photos.length === 2 ? "46vw" : "90vw"} priority />
                  {p.tag && <span className={styles.tag}>{p.tag}</span>}
                </span>
              ))}
            </div>
            <figcaption>{open.caption}{open.photos.length === 2 ? " · Before & after" : ""} <span>{index + 1} / {visible.length}</span></figcaption>
          </figure>
        )}
        <button type="button" className={`${styles.ctl} ${styles.prev}`} aria-label="Previous" onClick={() => step(-1)}>‹</button>
        <button type="button" className={`${styles.ctl} ${styles.next}`} aria-label="Next" onClick={() => step(1)}>›</button>
        <button type="button" className={`${styles.ctl} ${styles.close}`} aria-label="Close" onClick={() => setOpen(null)}>×</button>
      </dialog>
    </>
  );
}
