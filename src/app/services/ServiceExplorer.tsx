"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import styles from "./services.module.css";

const services = [
  {
    id: "window-cleaning",
    number: "01",
    name: "Window cleaning",
    tease: "Bring more light back inside.",
    description: "Clean windows make the view from inside — and the first impression outside — feel different.",
    image: "/images/projects/window-cleaning/Window After 4-3.png",
    alt: "Clean glass after a BrightView window-cleaning project",
    href: "/services/window-cleaning",
    action: "Explore window cleaning",
  },
  {
    id: "pressure-washing",
    number: "02",
    name: "Pressure washing",
    tease: "Give outdoor surfaces a fresh look.",
    description: "See how pressure washing changes the look of pavers, porches and other exterior surfaces.",
    image: "/images/projects/pressure-washing/Porch.png",
    alt: "Residential porch from BrightView's pressure washing projects",
    href: "/services/pressure-washing",
    action: "Explore pressure washing",
  },
  {
    id: "holiday-lights",
    number: "03",
    name: "Holiday lighting",
    tease: "Make the nights something special.",
    description: "From rooflines to trees, explore the holiday lights BrightView has brought to homes.",
    image: "/images/projects/holiday-lights/Trees.png",
    alt: "Trees illuminated with holiday lights",
    href: "/services/holiday-lights",
    action: "Explore holiday lighting",
  },
] as const;

export function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const selected = services[active];

  return (
    <section id="explore-services" className={styles.explorer} aria-labelledby="explorer-title">
      <Container>
        <div className={styles.explorerHeading}>
          <p className={styles.explorerOverline}>01—03 / SELECT A SERVICE</p>
          <h2 id="explorer-title">What can we take care of?</h2>
          <p>Choose a service to preview actual BrightView project photography.</p>
        </div>
        <div className={styles.explorerGrid}>
          <div className={styles.explorerChoices} role="group" aria-label="Preview a BrightView service">
            {services.map((service, index) => (
              <button
                type="button"
                key={service.id}
                className={[
                  styles.explorerChoice,
                  index === active ? styles.explorerChoiceActive : "",
                ].filter(Boolean).join(" ")}
                aria-pressed={index === active}
                aria-controls="service-preview"
                onClick={() => setActive(index)}
              >
                <span className={styles.choiceNumber}>{service.number}</span>
                <span className={styles.choiceText}>
                  <strong>{service.name}</strong>
                  <small>{service.tease}</small>
                </span>
                <span className={styles.choiceArrow} aria-hidden="true">{index === active ? "↗" : "+"}</span>
              </button>
            ))}
            <div className={styles.explorerHint}>SELECT A SERVICE TO CHANGE THE PHOTO <span aria-hidden="true">↗</span></div>
          </div>
          <div className={styles.explorerPreview} id="service-preview">
            <div className={styles.previewImage}>
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={[styles.previewLayer, index === active ? styles.previewLayerActive : ""].filter(Boolean).join(" ")}
                  aria-hidden={index !== active}
                >
                  <Image
                    src={service.image}
                    alt={index === active ? service.alt : ""}
                    fill
                    sizes="(max-width: 760px) 100vw, 51vw"
                  />
                </div>
              ))}
              <span className={styles.previewImageTag} aria-hidden="true">BRIGHTVIEW / REAL PROJECT PHOTO</span>
            </div>
            <div className={styles.previewInfo} aria-live="polite" aria-atomic="true">
              <div className={styles.previewDetails}>
                <span className={styles.previewCounter}>{selected.number} / 03</span>
                <p>{selected.description}</p>
              </div>
              <Link href={selected.href} className={styles.previewLink}>
                {selected.action} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
