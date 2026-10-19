import type { ReactNode } from "react";
import styles from "./Layout.module.css";

/** Centers content at the shared site width with the responsive page gutter. */
export function PageContainer({ children, className, narrow }: { children: ReactNode; className?: string; narrow?: boolean }) {
  return <div className={[styles.container, narrow && styles.narrow, className].filter(Boolean).join(" ")}>{children}</div>;
}
