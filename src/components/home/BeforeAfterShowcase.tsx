"use client";

import Image from "next/image";
import { useState } from "react";
import { homeProjects } from "@/content/home-projects";

export function BeforeAfterShowcase() {
  const [active, setActive] = useState(0);
  const project = homeProjects[active];

  return (
    <div className="showcase">
      <div className="showcase__tabs" role="group" aria-label="Choose a before and after project">
        {homeProjects.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={active === index ? "showcase__tab showcase__tab--active" : "showcase__tab"}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="showcase__pair" aria-live="polite">
        <figure className="showcase__figure">
          <a
            className="showcase__photo"
            href={project.before}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={"Open full-size before photograph of " + project.category.toLowerCase()}
          >
            <Image
              src={project.before}
              alt={"Before BrightView's " + project.category.toLowerCase() + " work"}
              fill
              sizes="(max-width: 680px) 48vw, 42vw"
            />
          </a>
          <figcaption>Before</figcaption>
        </figure>
        <figure className="showcase__figure">
          <a
            className="showcase__photo"
            href={project.after}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={"Open full-size after photograph of " + project.category.toLowerCase()}
          >
            <Image
              src={project.after}
              alt={"After BrightView's " + project.category.toLowerCase() + " work"}
              fill
              sizes="(max-width: 680px) 48vw, 42vw"
            />
          </a>
          <figcaption>After</figcaption>
        </figure>
      </div>
      <p className="showcase__caption">{project.category} <span>· Click either photo to enlarge</span></p>
    </div>
  );
}
