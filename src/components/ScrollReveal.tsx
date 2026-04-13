"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal observer. Adds the `visible` class to elements
 * with `animate-on-scroll` when they enter the viewport (one-shot).
 *
 * Respects prefers-reduced-motion by immediately revealing all targets.
 * Renders nothing to the DOM.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(".animate-on-scroll");
    if (targets.length === 0) return;

    // If user prefers reduced motion, reveal everything immediately
    // (the CSS already sets opacity:1 / transform:none, but we need to
    // add the class so elements aren't stuck at opacity:0 before the
    // media query kicks in during hydration).
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      targets.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
