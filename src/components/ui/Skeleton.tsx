import type { CSSProperties } from "react";
import styles from "./Skeleton.module.css";

type Props = { variant?: "line" | "title" | "block"; width?: string | number; height?: string | number; round?: boolean; className?: string };

/** Decorative loading placeholder. Hidden from assistive tech; pair with an aria-busy region. */
export function Skeleton({ variant = "line", width, height, round, className }: Props) {
  const style: CSSProperties = { width, height };
  const cls = [styles.block, variant === "line" && styles.line, variant === "title" && styles.title, round && styles.round, className].filter(Boolean).join(" ");
  return <span className={cls} style={style} aria-hidden="true" />;
}
