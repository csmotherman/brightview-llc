import styles from "./GlassPage.module.css";

/** Empty page ready to be built: background photo + a single glass surface. `title` is screen-reader only. */
export function GlassPage({ title }: { title: string }) {
  return (
    <div className={styles.page}>
      <h1 className="sr-only">{title}</h1>
      <div className={styles.content}>
        <div className={styles.surface} />
      </div>
    </div>
  );
}
