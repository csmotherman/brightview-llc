"use client";

import Image from "next/image";
import { useState } from "react";
import { homeProjects } from "@/content/home-projects";

export function BeforeAfterShowcase() {
  const [active, setActive] = useState(0);
  const [reveal, setReveal] = useState(50);
  const project = homeProjects[active];

  function chooseProject(index: number) {
    setActive(index);
    setReveal(50);
  }

  return (
    <div className="showcase">
      <div className="showcase__tabs" role="group" aria-label="Choose a before and after project">
        {homeProjects.map((item, index) => (
          <button key={item.id} type="button" className={index === active ? "showcase__tab showcase__tab--active" : "showcase__tab"} aria-pressed={index === active} onClick={() => chooseProject(index)}>
            <span>{item.label}</span>
            <span className="showcase__tab-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="showcase__main">
        <div className="compare" style={{ "--reveal": reveal + "%" } as React.CSSProperties}>
          <Image key={project.id + "-before"} src={project.before} alt={"Before " + project.category.toLowerCase()} fill sizes="(max-width: 840px) 100vw, 60vw" className="compare__photo" />
          <div className="compare__after" style={{ clipPath: "inset(0 " + (100 - reveal) + "% 0 0)" }}>
            <Image key={project.id + "-after"} src={project.after} alt={"After " + project.category.toLowerCase()} fill sizes="(max-width: 840px) 100vw, 60vw" className="compare__photo" />
          </div>
          <div className="compare__label compare__label--left" aria-hidden="true">AFTER</div>
          <div className="compare__label compare__label--right" aria-hidden="true">BEFORE</div>
          <div className="compare__divider" aria-hidden="true"><span>↔</span></div>
          <input className="compare__range" type="range" min="0" max="100" step="1" value={reveal} onChange={(event) => setReveal(Number(event.target.value))} aria-label={"Reveal before and after photographs of " + project.category.toLowerCase()} />
        </div>
        <aside className="showcase__details" aria-live="polite">
          <span className="small-label">PROJECT {String(active + 1).padStart(2, "0")} / {String(homeProjects.length).padStart(2, "0")}</span>
          <span className="showcase__category">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.detail}</p>
          <div className="showcase__instruction"><span className="showcase__instruction-icon" aria-hidden="true">↔</span> Drag the handle to compare</div>
        </aside>
      </div>
    </div>
  );
}
