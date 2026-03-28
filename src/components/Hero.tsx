"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!loadedRef.current) {
      loadedRef.current = true;
      requestAnimationFrame(() => setLoaded(true));
    }

    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px) scale(1.1)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/60 to-dark-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/70 via-transparent to-dark-950/70" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-40 left-10 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-gold mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm tracking-widest uppercase">
              Est. 1991 &middot; Licensed in NY, CA, FL, CT &middot; Monaco &middot; UAE
            </span>
          </div>
        </div>

        <h1
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-gradient-white">Where Luxury</span>
          <br />
          <span className="text-gradient">Meets Legacy</span>
        </h1>

        <p
          className={`text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Curating the world&apos;s most extraordinary residences for those who
          demand nothing less than perfection.
        </p>

        <div
          className={`transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="btn-magnetic group inline-flex items-center gap-3 px-10 py-4 bg-gold-500 text-dark-950 font-semibold text-sm rounded-full tracking-wider uppercase hover:bg-gold-400 transition-all duration-300 animate-pulse-glow"
          >
            Schedule Private Consultation
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-400/50 to-transparent relative overflow-hidden">
            <div className="w-full h-4 bg-gold-400 absolute animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
