"use client";

import Image from "next/image";
import { useState } from "react";
import { homeProjects } from "@/content/home-projects";

export function BeforeAfterShowcase() {
  const [active, setActive] = useState(0);
  const project = homeProjects[active];

  return (
    <div className="showcase">
      <div className="showcase__tabs" role="group" aria-label="Select a photo comparison">
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
          <div className="showcase__photo">
            <Image
              src={project.before}
              alt={"Before: " + project.category.toLowerCase()}
              fill
              sizes="(max-width: 680px) 48vw, 42vw"
            />
          </div>
          <figcaption>Before</figcaption>
        </figure>
        <figure className="showcase__figure">
          <div className="showcase__photo">
            <Image
              src={project.after}
              alt={"After: " + project.category.toLowerCase()}
              fill
              sizes="(max-width: 680px) 48vw, 42vw"
            />
          </div>
          <figcaption>After</figcaption>
        </figure>
      </div>
      <p className="showcase__caption">{project.category}</p>
    </div>
  );
}
