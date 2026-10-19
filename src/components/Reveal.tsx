"use client";

import { useEffect } from "react";

/** Mount once per page. Adds `is-visible` to every `.reveal` / `.reveal-text` element as it scrolls into view. */
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-text");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}

/** Letter-by-letter blur-in. Put it inside an element with the `reveal-text` class. */
export function BlurText({
  text,
  className = "",
  offset = 0,
}: {
  text: string;
  className?: string;
  offset?: number;
}) {
  let i = offset;
  return (
    <span className={className} aria-hidden="true">
      {text.split(" ").map((word, w, words) => (
        <span key={w}>
          <span className="inline-block whitespace-nowrap">
            {[...word].map((ch, c) => (
              <span
                key={c}
                className="blur-char"
                style={{ "--i": i++ } as React.CSSProperties}
              >
                {ch}
              </span>
            ))}
          </span>
          {w < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
