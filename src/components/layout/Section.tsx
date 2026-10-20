import type { ReactNode } from "react";
import { PageContainer } from "./PageContainer";
import styles from "./Layout.module.css";

type SectionProps = { children: ReactNode; id?: string; tone?: "plain" | "dark"; narrow?: boolean; bare?: boolean; "aria-labelledby"?: string; "aria-label"?: string };

/** Vertical rhythm + page container. Content sits on a glass panel unless `bare` (for blocks with their own surface). */
export function Section({ children, tone = "plain", narrow, bare, ...rest }: SectionProps) {
  return (
    <section className={tone === "dark" ? styles.dark : styles.section} {...rest}>
      <PageContainer narrow={narrow}>{bare || tone === "dark" ? children : <div className={styles.panel}>{children}</div>}</PageContainer>
    </section>
  );
}

/** Two columns on desktop, stacked on laptop and below. */
export function Split({ children }: { children: ReactNode }) {
  return <div className={styles.split}>{children}</div>;
}

/** 3 → 2 → 1 column responsive grid. */
export function CardGrid({ children, single }: { children: ReactNode; single?: boolean }) {
  return <div className={styles.cards} style={single ? { gridTemplateColumns: "minmax(0, 1fr)" } : undefined}>{children}</div>;
}

/** A row of calls to action beneath a section's copy. */
export function ActionRow({ children }: { children: ReactNode }) {
  return <div className={styles.actions}>{children}</div>;
}
