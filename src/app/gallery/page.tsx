import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import styles from "./gallery.module.css";

export const metadata: Metadata = {
  title: "Gallery | BrightView LLC",
  description: "Project photos from BrightView LLC: window cleaning, pressure washing, gutter cleaning and holiday lighting.",
};

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>GALLERY</p>
          <h1>Our work, up close.</h1>
          <p>Photos from BrightView projects. Select any photo to enlarge it.</p>
        </header>
        <div className={styles.glass}>
          <GalleryGrid />
        </div>
      </div>
    </div>
  );
}
