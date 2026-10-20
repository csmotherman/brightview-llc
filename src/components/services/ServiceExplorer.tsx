"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { serviceDetails } from "@/content/service-details";
import styles from "@/app/services/services.module.css";

type Photo = { src: string; alt: string; label?: string };

/** One photo frame. Only rendered for real project photos; services without photos get a text-first panel. */
function Frame({ photo, className }: { photo: Photo; className: string }) {
  return (
    <figure className={`${className} ${styles.filled}`}>
      <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1100px) 90vw, 32vw" />
      {photo.label && <figcaption className={styles.tag}>{photo.label}</figcaption>}
    </figure>
  );
}

/** Accordion list: one line per service, details (with photo frames) open on click. Deep links (#roof-cleaning) preselect. */
export function ServiceExplorer() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      setSelected(serviceDetails.some((s) => s.id === id) ? id : null);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const toggle = (id: string) => {
    const next = selected === id ? null : id;
    setSelected(next);
    history.replaceState(null, "", next ? "#" + next : window.location.pathname);
  };

  return (
    <ul className={`${styles.glass} ${styles.list}`} aria-label="Services">
      {serviceDetails.map((s) => {
        const open = s.id === selected;
        const photos = [s.photos.top, ...s.photos.bottom].filter((p): p is Photo => Boolean(p));
        return (
          <li key={s.id} id={s.id} className={open ? styles.itemOpen : styles.item}>
            <h2 className={styles.rowHeading}>
              <button type="button" className={styles.row} aria-expanded={open} aria-controls={s.id + "-panel"} onClick={() => toggle(s.id)}>
                <Image src={s.symbol} alt="" width={64} height={64} sizes="64px" loading="eager" className={styles.symbol} />
                <span className={styles.rowText}>
                  <span className={styles.rowTitle}>{s.name}</span>
                  <span className={styles.rowDef}>{s.definition}</span>
                </span>
                <span className={styles.chevron} aria-hidden="true">{open ? "−" : "+"}</span>
              </button>
            </h2>
            {open && (
              <div id={s.id + "-panel"} className={photos.length ? styles.panel : `${styles.panel} ${styles.panelText}`} role="region" aria-label={s.name + " details"}>
                {photos.length > 0 && (
                  <div className={styles.photos}>
                    {/* A full-product shot spans the top; before/after pairs sit side by side beneath (or alone, for gutters). */}
                    {s.photos.top && <Frame photo={s.photos.top} className={styles.photoTop} />}
                    {s.photos.bottom.map((p) => <Frame key={p.src} photo={p} className={styles.photo} />)}
                  </div>
                )}
                <div className={styles.info}>
                  <div className={styles.story}>
                    <h3>{s.headline}</h3>
                    <p>{s.what}</p>
                  </div>
                  <div className={[styles.block, styles.importance].join(" ")}>
                    <h3>Why it matters</h3>
                    <p>{s.importance}</p>
                  </div>
                  <div className={styles.block}>
                    <h3>Benefits for your home</h3>
                    <ul>{s.why.map((reason) => <li key={reason}>{reason}</li>)}</ul>
                  </div>
                  <div className={styles.block}>
                    <h3>How to get started</h3>
                    <ol>{s.how.map((step) => <li key={step}>{step}</li>)}</ol>
                  </div>
                  <div className={styles.cta}><Button href="/quote" arrow>Request a Free Quote</Button></div>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
