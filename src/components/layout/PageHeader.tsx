import Image from "next/image";
import type { ReactNode } from "react";
import { Pill } from "@/components/ui/Pill";
import styles from "./PageHeader.module.css";

type Props = { eyebrow: string; title: string; description?: string; image: string; objectPosition?: string; children?: ReactNode };

/** Photographic page introduction that sits behind the transparent site header. */
export function PageHeader({ eyebrow, title, description, image, objectPosition = "center", children }: Props) {
  return (
    <section className={styles.hero}>
      <Image src={image} alt="" fill priority sizes="100vw" className={styles.photo} style={{ objectPosition }} />
      <div className={styles.tint} aria-hidden="true" />
      <div className={styles.fade} aria-hidden="true" />
      <div className={styles.inner}>
        <Pill>{eyebrow}</Pill>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {children && <div className={styles.extra}>{children}</div>}
      </div>
    </section>
  );
}
