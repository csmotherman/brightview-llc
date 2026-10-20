import type { Metadata } from "next";
import { ServiceExplorer } from "@/components/services/ServiceExplorer";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | BrightView LLC",
  description:
    "BrightView's window cleaning, pressure washing, gutter cleaning and holiday lighting services for Michigan homes: what we do, how it works and why it helps.",
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>OUR SERVICES</p>
          <h1>Everything your exterior needs.</h1>
          <p>Select a service to see what we do, how it works and why it&apos;s worth it.</p>
        </header>
        <ServiceExplorer />
      </div>
    </div>
  );
}
