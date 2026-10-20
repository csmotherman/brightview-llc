import type { Metadata } from "next";
import { HomeFeatureHero } from "@/components/home/HomeFeatureHero";
import { BeforeAfterShowcase } from "@/components/home/BeforeAfterShowcase";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { ServiceTiles } from "@/components/home/ServiceTiles";
import { TestimonialPanel } from "@/components/home/TestimonialPanel";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "BrightView LLC | Exterior Cleaning & Holiday Lighting",
  description: "Family-owned Michigan window cleaning, pressure washing and holiday lighting. See genuine project results and contact BrightView about your home.",
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HomeFeatureHero />
      <ServiceTiles />

      <section className={styles.showcase} id="results" aria-label="How it works and project results">
        <div className={styles.grid}>
          <ProcessSteps />
          <div className={styles.result}>
            <h2 className="sr-only">Actual before and after project photos</h2>
            <BeforeAfterShowcase />
          </div>
          <TestimonialPanel />
        </div>
      </section>
    </div>
  );
}
