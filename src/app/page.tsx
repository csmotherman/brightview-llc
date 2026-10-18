import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HomeFeatureHero } from "@/components/home/HomeFeatureHero";
import { BeforeAfterShowcase } from "@/components/home/BeforeAfterShowcase";
import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "BrightView LLC | Exterior Cleaning & Holiday Lighting",
  description: "Family-owned Michigan window cleaning, pressure washing and holiday lighting. See genuine project results and contact BrightView about your home.",
};

const featuredServices = [
  {
    name: "Window Cleaning",
    caption: "Clear glass. Brighter views.",
    image: "/images/projects/window-cleaning/Full House 16-9.png",
    alt: "Home photographed following BrightView window-cleaning work",
    icon: "window",
    href: "/services#window-cleaning",
  },
  {
    name: "Pressure Washing",
    caption: "Pavers, patios and more.",
    image: "/images/projects/pressure-washing/Porch.png",
    alt: "Real BrightView pressure-washing project on a porch",
    icon: "wash",
    href: "/services#pressure-washing",
  },
  {
    name: "Gutter Cleaning",
    caption: "View a real project result.",
    image: "/images/gutter/Gutter After 4-3.png",
    alt: "Gutter photographed after cleaning",
    icon: "gutter",
    href: "/services#extra-title",
  },
  {
    name: "Holiday Lighting",
    caption: "Light up the season.",
    image: "/images/projects/holiday-lights/House2.png",
    alt: "House decorated with holiday lights from a BrightView project",
    icon: "lights",
    href: "/services#holiday-lights",
  },
] as const;

function ServiceIcon({ icon }: { icon: string }) {
  const common = { width: 30, height: 30, viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  if (icon === "window") return <svg {...common}><rect x="6" y="4" width="20" height="24" rx="1" /><path d="M16 4v24M6 16h20M3 28h26" /></svg>;
  if (icon === "wash") return <svg {...common}><path d="M4 27 21 10l3 3L7 30M20 5l7 7M24 5l3-3M29 12l2-1M14 6l1-4" /></svg>;
  if (icon === "gutter") return <svg {...common}><path d="M4 7h24v6H4zM7 13l2 5m14-5-2 5M15 22c0-2 2-4 2-6 2 3 5 6 5 9a6 6 0 0 1-12 0c0-2 2-5 5-8" /></svg>;
  return <svg {...common}><path d="M11 23c-2-2-4-5-4-9a9 9 0 0 1 18 0c0 4-2 7-4 9H11ZM12 27h8M14 30h4M16 5v4M7 8l-3-3M25 8l3-3" /></svg>;
}

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HomeFeatureHero />

      <section className={styles.serviceBand} aria-label="Explore BrightView services">
        <Container className={styles.servicesGrid}>
          {featuredServices.map((service) => (
            <Link href={service.href} key={service.name} className={styles.serviceCard} aria-label={"See " + service.name + " project photos"}>
              <Image src={service.image} alt={service.alt} fill sizes="(max-width: 650px) 50vw, (max-width: 1000px) 25vw, 24vw" />
              <div className={styles.serviceInfo}>
                <span className={styles.serviceIcon}><ServiceIcon icon={service.icon} /></span>
                <div className={styles.serviceCopy}>
                  <h2>{service.name}</h2>
                  <p>{service.caption}</p>
                </div>
                <span className={styles.cardArrow} aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </Container>
      </section>

      <section className={styles.showcaseSection} id="results" aria-label="How it works and project results">
        <Container className={styles.showcaseGrid}>
          <div className={styles.process}>
            <p className={styles.eyebrow}><span /> OUR PROCESS</p>
            <h2>A Simple Process.<br />A Cleaner Home.</h2>
            <p className={styles.processIntro}>Getting started is easy. Tell us what you need and we&apos;ll talk through the details.</p>
            <div className={styles.steps}>
              <div className={styles.step}><span>1</span><h3>Reach Out</h3><p>Tell us what you would like cleaned.</p></div>
              <div className={styles.step}><span>2</span><h3>Discuss Your Project</h3><p>Share the location and details with us.</p></div>
              <div className={styles.step}><span>3</span><h3>Enjoy The Difference</h3><p>See the results when the work is done.</p></div>
            </div>
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className={styles.processCta} aria-label="Get started — contact BrightView on Facebook in a new tab">
              Get Started Today <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.resultPanel}>
            <h2 className={styles.srOnly}>Actual before and after project photos</h2>
            <BeforeAfterShowcase />
          </div>

          <aside className={styles.proofPanel} aria-labelledby="proof-title">
            <div>
              <p className={styles.proofEyebrow}>THE BRIGHTVIEW DIFFERENCE</p>
              <h2 id="proof-title">Real work. Real results.</h2>
              <p className={styles.proofDescription}>
                A family-owned Michigan business. Browse photos from real cleaning and holiday lighting projects before you reach out.
              </p>
              <Link className={styles.proofLink} href="/services">Explore the photo gallery <span aria-hidden="true">↗</span></Link>
            </div>
            <div className={styles.proofFacts} aria-label="Verified BrightView information">
              <div><strong>14</strong><span>Real project photos</span></div>
              <div><strong>3</strong><span>Core services</span></div>
              <div><strong>MI</strong><span>Family owned</span></div>
            </div>
          </aside>
        </Container>
      </section>
    </div>
  );
}
