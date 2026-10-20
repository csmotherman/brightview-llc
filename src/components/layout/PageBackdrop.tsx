"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./PageBackdrop.module.css";

/** Background photo for every route except the homepage (which has its own hero). */
export function PageBackdrop() {
  if (usePathname() === "/") return null;
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <Image src="/images/Background.png" alt="" fill priority sizes="100vw" className={styles.photo} />
      <div className={styles.veil} />
    </div>
  );
}
