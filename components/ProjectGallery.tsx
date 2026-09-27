"use client";

import { useState } from "react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { PortfolioEmpty } from "./PortfolioEmpty";
import { services } from "../data/services";
import type { Project } from "../data/projects";

type ProjectGalleryProps = {
  projects: Project[];
  showFilters?: boolean;
};

export function ProjectGallery({ projects, showFilters = false }: ProjectGalleryProps) {
  const [filter, setFilter] = useState<string>("all");

  if (projects.length === 0) {
    return <PortfolioEmpty />;
  }

  const filtered = filter === "all" ? projects : projects.filter((p) => p.service === filter);

  return (
    <div>
      {showFilters && (
        <div
          className="gallery-filters"
          role="tablist"
          aria-label="Filter projects by service"
        >
          <button
            type="button"
            className={`gallery-filter ${filter === "all" ? "is-active" : ""}`}
            onClick={() => setFilter("all")}
            aria-pressed={filter === "all"}
          >
            All
          </button>
          {services.map((service) => (
            <button
              type="button"
              key={service.slug}
              className={`gallery-filter ${filter === service.slug ? "is-active" : ""}`}
              onClick={() => setFilter(service.slug)}
              aria-pressed={filter === service.slug}
            >
              {service.shortName}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <PortfolioEmpty
          heading="No photos in this category yet."
          copy="Check back soon, or browse the other services above."
        />
      ) : (
        <div className="gallery-grid">
          {filtered.map((project, index) => {
            const service = services.find((s) => s.slug === project.service);
            return (
              <BeforeAfterSlider
                key={project.id}
                beforeSrc={project.beforeSrc}
                afterSrc={project.afterSrc}
                beforeAlt={project.beforeAlt}
                afterAlt={project.afterAlt}
                title={project.title}
                service={service?.name ?? project.service}
                location={project.location}
                description={project.description}
                priority={index === 0}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
