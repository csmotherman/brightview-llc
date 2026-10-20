import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import styles from "./Card.module.css";

type Tone = "evergreen" | "light" | "glass";
type Props = { tone?: Tone; as?: ElementType; className?: string; children: ReactNode } & Record<string, unknown>;

/** Content surface. `evergreen` and `light` for cards on cream, `glass` for the form card over photography. */
export function Card({ tone = "light", as: Tag = "div", className, children, ...rest }: Props) {
  return <Tag className={[styles.card, styles[tone], className].filter(Boolean).join(" ")} {...rest}>{children}</Tag>;
}

/** A card that is a single link. */
export function CardLink({ tone = "evergreen", href, className, children }: { tone?: Tone; href: string; className?: string; children: ReactNode }) {
  return <Link href={href} className={[styles.card, styles[tone], className].filter(Boolean).join(" ")}>{children}</Link>;
}


/** Trailing "Learn more →" style line inside a CardLink. */
export function CardAction({ children }: { children: ReactNode }) {
  return <span className={styles.action}>{children}</span>;
}
