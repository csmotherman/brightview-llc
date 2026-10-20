"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { serviceDetails } from "@/content/service-details";
import styles from "@/app/services/services.module.css";

/** Four selectable cards; details appear only for the chosen service. Deep links (/services#gutter-cleaning) preselect. */
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

  const current = serviceDetails.find((s) => s.id === selected);

  return (
    <>
      <ul className={styles.cards} aria-label="Services">
        {serviceDetails.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              className={`${styles.glass} ${styles.card}${s.id === selected ? " " + styles.cardOn : ""}`}
              aria-pressed={s.id === selected}
              aria-controls="service-detail"
              onClick={() => toggle(s.id)}
            >
              <Image src={s.symbol} alt="" width={120} height={120} className={styles.symbol} />
              <span className={styles.cardTitle}>{s.name}</span>
              <span className={styles.cardBlurb}>{s.blurb}</span>
              <span className={styles.more}>{s.id === selected ? "Hide details" : "Learn more"} <span aria-hidden="true">{s.id === selected ? "↑" : "↓"}</span></span>
            </button>
          </li>
        ))}
      </ul>

      <div id="service-detail" aria-live="polite">
        {current && (
          <section className={`${styles.glass} ${styles.detail}`} aria-labelledby="service-detail-title">
            <div className={styles.head}>
              <Image src={current.symbol} alt="" width={96} height={96} className={styles.symbol} />
              <h2 id="service-detail-title">{current.name}</h2>
              <p>{current.blurb}</p>
              <Button href="/quote" arrow>Get Free Quote</Button>
            </div>
            <div className={styles.body}>
              <div className={styles.block}><h3>What we do</h3><p>{current.what}</p></div>
              <div className={styles.block}><h3>How it works</h3><ol>{current.how.map((step) => <li key={step}>{step}</li>)}</ol></div>
              <div className={styles.block}><h3>Why get it</h3><ul>{current.why.map((reason) => <li key={reason}>{reason}</li>)}</ul></div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
