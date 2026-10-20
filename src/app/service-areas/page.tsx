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
          <p className={styles.eyebrow}>WHERE WE WORK</p>
          <h1>Proudly serving Southeast Michigan.</h1>
          <p>BrightView is a family-owned Michigan business. See the general region we serve, then request a quote for your address.</p>
        </header>
        <div className={styles.glass}>
          <ServiceAreaMap />
        </div>
      </div>
    </div>
  );
}
