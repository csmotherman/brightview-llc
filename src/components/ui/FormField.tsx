import type { ComponentProps, ReactNode } from "react";
import styles from "./FormField.module.css";

/** Label + control + inline error. Pair with Input / Textarea. */
export function FormField({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: ReactNode }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>{label}{required && <> <span className={styles.required} aria-hidden="true">*</span></>}</label>
      {children}
      {error && <p id={id + "-error"} className={styles.error}>{error}</p>}
    </div>
  );
}

type Invalid = { invalid?: boolean };
const invalidProps = (id: string | undefined, invalid?: boolean) => (invalid && id ? { "aria-invalid": true, "aria-describedby": id + "-error" } : {});

export function Input({ invalid, ...props }: ComponentProps<"input"> & Invalid) {
  return <input {...props} className={styles.control} {...invalidProps(props.id, invalid)} />;
}

export function Textarea({ invalid, ...props }: ComponentProps<"textarea"> & Invalid) {
  return <textarea {...props} className={styles.control} {...invalidProps(props.id, invalid)} />;
}

export function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return <p id={id} className={styles.error}>{children}</p>;
}

/** Large tappable checkbox with a title and description (used for multi-select services). */
export function CheckboxOption({ title, description, ...props }: { title: string; description?: string } & Omit<ComponentProps<"input">, "type" | "title">) {
  return (
    <label className={styles.option}>
      <input type="checkbox" {...props} />
      <span className={styles.box} aria-hidden="true">✓</span>
      <span className={styles.optionCopy}><strong>{title}</strong>{description && <small>{description}</small>}</span>
    </label>
  );
}

export const formStyles = { legend: styles.legend, required: styles.required };
