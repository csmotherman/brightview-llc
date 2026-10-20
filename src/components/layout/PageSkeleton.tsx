import { Skeleton } from "@/components/ui/Skeleton";
import styles from "./PageSkeleton.module.css";

/** Route-level loading state shared by every page (used by app/loading.tsx). */
export function PageSkeleton() {
  return (
    <div className={styles.page} role="status" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading…</span>
      <div className={styles.wrap}>
        <div className={styles.intro}>
          <Skeleton variant="line" width={120} />
          <Skeleton variant="title" />
          <Skeleton variant="line" width="80%" />
        </div>
        <div className={styles.surface}>
          <Skeleton variant="block" height={180} round />
          <div className={styles.rows}>
            <Skeleton variant="line" width="92%" />
            <Skeleton variant="line" width="78%" />
            <Skeleton variant="line" width="64%" />
          </div>
        </div>
      </div>
    </div>
  );
}
