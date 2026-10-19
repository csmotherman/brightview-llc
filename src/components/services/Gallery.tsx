import Image from "next/image";
import type { ReactNode } from "react";
import type { Comparison, Photo } from "@/content/services";
import styles from "./Gallery.module.css";

export function PhotoTile({ photo }: { photo: Photo }) {
  return (
    <figure className={styles.photoTile}>
      <a
        href={photo.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={"View full-size photo: " + photo.label + " (opens in a new tab)"}
        className={styles.photoLink}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 900px) 48vw, 26vw"
        />
        <span className={styles.zoomIcon} aria-hidden="true">↗</span>
      </a>
      <figcaption>{photo.label}</figcaption>
    </figure>
  );
}

export function ComparisonGallery({ comparison }: { comparison: Comparison }) {
  return (
    <div className={styles.comparison}>
      <p className={styles.projectLabel}>{comparison.title}</p>
      <div className={styles.comparisonPhotos}>
        <PhotoTile photo={comparison.before} />
        <PhotoTile photo={comparison.after} />
      </div>
    </div>
  );
}

export function ComparisonStack({ comparisons }: { comparisons: Comparison[] }) {
  return <div className={styles.comparisons}>{comparisons.map((c) => <ComparisonGallery key={c.title} comparison={c} />)}</div>;
}

export function ProjectLabel({ children }: { children: ReactNode }) {
  return <p className={styles.projectLabel}>{children}</p>;
}

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  return <div className={styles.photoGrid}>{photos.map((photo) => <PhotoTile key={photo.src} photo={photo} />)}</div>;
}
