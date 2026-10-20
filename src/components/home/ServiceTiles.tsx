import Image from "next/image";
import Link from "next/link";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import styles from "./ServiceTiles.module.css";

const tiles = [
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
    image: "/images/projects/gutter/Gutter After 4-3.png",
    alt: "Gutter photographed after cleaning",
    icon: "gutter",
    href: "/services#gutter-cleaning",
  },
  {
    name: "Holiday Lighting",
    caption: "Professional installation & takedown.",
    image: "/images/projects/holiday-lights/House2.png",
    alt: "Home decorated with multicolor holiday lights on the rooflines, garage and tree",
    position: "center 44%",
    icon: "lights",
    href: "/services#holiday-lighting",
  },
] as const;

/** Four photo tiles that overlap the bottom of the hero. */
export function ServiceTiles() {
  return (
    <section className={styles.band} aria-label="Explore BrightView services">
      <div className={styles.grid}>
        {tiles.map((service) => (
          <Link href={service.href} key={service.name} className={styles.card} aria-label={"See " + service.name + " project photos"}>
            <Image src={service.image} alt={service.alt} fill sizes="(max-width: 900px) 50vw, 24vw" style={"position" in service ? { objectPosition: service.position } : undefined} />
            <div className={styles.info}>
              <span className={styles.icon}><ServiceIcon icon={service.icon} /></span>
              <div className={styles.copy}>
                <h2>{service.name}</h2>
                <p>{service.caption}</p>
              </div>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
