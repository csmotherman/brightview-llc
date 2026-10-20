import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { HomeFeatureHero } from "@/components/home/HomeFeatureHero";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { ServiceTiles } from "@/components/home/ServiceTiles";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/Skeleton";
import styles from "./home.module.css";

// Interactive lower-row widgets load as separate chunks, so the hero and service tiles paint first.
const BeforeAfterShowcase = dynamic(() => import("@/components/home/BeforeAfterShowcase").then((m) => m.BeforeAfterShowcase), {
  loading: () => <Skeleton variant="block" height="100%" round />,
});
const TestimonialPanel = dynamic(() => import("@/components/home/TestimonialPanel").then((m) => m.TestimonialPanel), {
  loading: () => <Skeleton variant="block" height="100%" round />,
});

export const metadata: Metadata = pageMetadata({
  title: "BrightView LLC | Exterior Cleaning in Southeast Michigan",
  description:
    "Family-owned Michigan window cleaning, pressure washing, gutter, soft wash, roof cleaning and holiday lighting. See real project photos and get a free quote.",
  path: "/",
  absoluteTitle: true,
});

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
