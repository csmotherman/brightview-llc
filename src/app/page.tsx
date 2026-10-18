import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HomeFeatureHero } from "@/components/home/HomeFeatureHero";
import { BeforeAfterShowcase } from "@/components/home/BeforeAfterShowcase";
import { TestimonialPanel } from "@/components/home/TestimonialPanel";
import { site } from "@/config/site";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "BrightView LLC | Exterior Cleaning & Holiday Lighting",
  description: "Family-owned Michigan window cleaning, pressure washing and holiday lighting. See genuine project results and contact BrightView about your home.",
};

const featuredServices = [
  {
    name: "Window Cleaning",
    caption: "Streak-free windows, brighter views.",
    image: "/images/projects/window-cleaning/Full House 16-9.png",
    alt: "Home photographed following BrightView window-cleaning work",
    icon: "window",
    href: "/services#window-cleaning",
  },
  {
    name: "Pressure Washing",
    caption: "Driveways, patios, and more.",
    image: "/images/projects/pressure-washing/Porch.png",
    alt: "Real BrightView pressure-washing project on a porch",
    icon: "wash",
    href: "/services#pressure-washing",
  },
  {
    name: "Gutter Cleaning",
    caption: "Keep water moving, protect your home.",
    image: "/images/gutter/Gutter After 4-3.png",
    alt: "Gutter photographed after cleaning",
    icon: "gutter",
    href: "/services#extra-title",
  },
  {
    name: "Holiday Lighting",
    caption: "Professional installation & takedown.",
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
  if (icon === "gutter") return <svg {...common}><path d="M16 3.5c-4.5 6-8 10-8 14.5a8 8 0 0 0 16 0C24 13.5 20.5 9.5 16 3.5Z" /><path d="M12.5 19a3.8 3.8 0 0 0 3.5 3.5" /></svg>;
  return <svg {...common}><path d="M11 23c-2-2-4-5-4-9a9 9 0 0 1 18 0c0 4-2 7-4 9H11ZM12 27h8M14 30h4M16 5v4M7 8l-3-3M25 8l3-3" /></svg>;
}

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HomeFeatureHero />

      <section className={styles.serviceBand} aria-label="Explore BrightView services">
        <div className={styles.servicesGrid}>
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
        </div>
      </section>

      <section className={styles.showcaseSection} id="results" aria-label="How it works and project results">
        <div className={styles.showcaseGrid}>
          <div className={styles.process}>
            <p className={styles.eyebrow}><span /> OUR PROCESS</p>
            <h2>A Simple Process.<br />A Cleaner Home.</h2>
            <p className={styles.processIntro}>Getting started is easy. We handle the details so you can enjoy the results.</p>
            <div className={styles.steps}>
              <div className={styles.step}><span>1</span><h3>Request a Quote</h3><p>Tell us what you need cleaned.</p></div>
              <div className={styles.step}><span>2</span><h3>We&apos;ll Follow Up</h3><p>We&apos;ll review the details and provide a quote.</p></div>
              <div className={styles.step}><span>3</span><h3>Enjoy the Results</h3><p>Schedule your service and see the difference.</p></div>
            </div>
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className={styles.processCta} aria-label="Get started — contact BrightView on Facebook in a new tab">
              Get Started Today <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.resultPanel}>
            <h2 className={styles.srOnly}>Actual before and after project photos</h2>
            <BeforeAfterShowcase />
          </div>

          <div className={styles.testimonial}><TestimonialPanel /></div>
        </div>
      </section>
    </div>
  );
}
