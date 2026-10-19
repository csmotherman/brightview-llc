import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "gold" | "outline";
type Common = { variant?: Variant; size?: "md" | "sm"; block?: boolean; arrow?: boolean; children: ReactNode; className?: string };
type AsLink = Common & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;
type AsButton = Common & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

/** The only button in the site. Renders a Next Link when `href` is given, otherwise a <button>. */
export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", block, arrow, children, className, ...rest } = props;
  const classes = [styles.button, styles[variant], size === "sm" && styles.sm, block && styles.block, className].filter(Boolean).join(" ");
  const content = <>{children}{arrow && <span className={styles.arrow} aria-hidden="true">→</span>}</>;
  if ("href" in rest && rest.href !== undefined) {
    return <Link {...(rest as Omit<AsLink, keyof Common>)} className={classes}>{content}</Link>;
  }
  return <button type="button" {...(rest as Omit<AsButton, keyof Common>)} className={classes}>{content}</button>;
}
