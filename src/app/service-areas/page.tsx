import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServiceAreaMap } from "@/components/service-area/ServiceAreaMap";
import styles from "./service-areas.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Service Area: Southeast Michigan",
  description:
    "BrightView proudly serves communities throughout Southeast Michigan. Request a free quote with your address and we will confirm availability for your location.",
  path: "/service-areas",
});

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
