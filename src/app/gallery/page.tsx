import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import styles from "./gallery.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Project Gallery: Before & After Photos",
  description:
    "Real BrightView project photos: before-and-after window cleaning, pressure washing and gutter cleaning, plus holiday lighting displays.",
  path: "/gallery",
});

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
