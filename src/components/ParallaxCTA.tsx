"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function ParallaxCTA() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 scale-125"
        style={{ transform: `translateY(${offset * 0.15}px) scale(1.2)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-dark-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/50 to-dark-950" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-gold mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm tracking-widest uppercase">
              Limited Availability
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gradient-white">Your Dream Home</span>
            <br />
            <span className="text-gradient">Awaits Discovery</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Only 12 exclusive properties are added to our portfolio each quarter.
            Schedule your private consultation before our next collection is
            fully reserved.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <a
            href="#contact"
            className="btn-magnetic group inline-flex items-center gap-3 px-10 py-4 bg-gold-500 text-dark-950 font-semibold text-sm rounded-full tracking-wider uppercase hover:bg-gold-400 transition-all duration-300 animate-pulse-glow"
          >
            Schedule Private Consultation
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
