import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServiceExplorer } from "@/components/services/ServiceExplorer";
import styles from "./services.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Exterior Cleaning & Lighting Services",
  description:
    "Window cleaning, pressure washing, soft washing, roof and gutter cleaning, and holiday lighting from BrightView. See what each service involves.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>OUR SERVICES</p>
          <h1>Everything your exterior needs.</h1>
          <p>Explore what each service does, why it matters for your home, and how to get started.</p>
        </header>
        <ServiceExplorer />
      </div>
    </div>
  );
}
