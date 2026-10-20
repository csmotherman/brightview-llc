"use client";

import { useEffect } from "react";

/**
 * Progressive-enhancement scroll reveal. The server renders every block fully visible, so nothing depends on JavaScript.
 * After hydration, blocks marked data-reveal that are still below the fold are armed (hidden) and then faded in as they
 * enter the viewport. Does nothing at all for visitors who prefer reduced motion or browsers without IntersectionObserver.
 */
export function RevealOnScroll() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const below = targets.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.in = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    for (const el of below) {
      el.dataset.armed = "true";
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
  return null;
}
