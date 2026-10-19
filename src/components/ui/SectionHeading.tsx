import type { ElementType, ReactNode } from "react";
import styles from "./SectionHeading.module.css";

type Props = { eyebrow?: string; title: ReactNode; lead?: ReactNode; as?: ElementType; id?: string; onDark?: boolean };

/** Eyebrow + heading + lead: the one section-introduction pattern. */
export function SectionHeading({ eyebrow, title, lead, as: Heading = "h2", id, onDark }: Props) {
  return (
    <div className={onDark ? styles.onDark : undefined}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Heading id={id} className={styles.title}>{title}</Heading>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  );
}
