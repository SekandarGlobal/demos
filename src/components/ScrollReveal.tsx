"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealVariant = "up" | "left" | "right" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const variantClass = {
      up: "reveal",
      left: "reveal-left",
      right: "reveal-right",
      scale: "reveal-scale",
    }[variant];

    el.classList.add(variantClass);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("visible");
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [variant, delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
