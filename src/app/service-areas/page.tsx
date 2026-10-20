import type { Metadata } from "next";
import { ServiceAreaMap } from "@/components/service-area/ServiceAreaMap";
import styles from "./service-areas.module.css";

export const metadata: Metadata = {
  title: "Service Area | BrightView LLC",
  description: "BrightView LLC proudly serves communities throughout Southeast Michigan. Reach out for a free quote and we'll confirm availability for your location.",
};

export default function ServiceAreasPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>SERVICE AREA</p>
          <h1>Where we work.</h1>
          <p>Proudly serving communities throughout Southeast Michigan.</p>
        </header>
        <div className={styles.glass}>
          <ServiceAreaMap />
        </div>
      </div>
    </div>
  );
}
