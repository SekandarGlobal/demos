"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Properties", href: "#properties" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#agents" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-950/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-2xl font-bold tracking-tight"
        >
          <span className="text-gradient">Aurelius</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-gold-400 transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-magnetic px-6 py-2.5 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm rounded-full hover:bg-gold-500/20 hover:border-gold-400/50 transition-all duration-300 tracking-wide uppercase"
          >
            Book a Viewing
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 bg-white/80 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 bg-white/80 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 bg-white/80 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4 bg-dark-950/95 backdrop-blur-xl border-t border-white/5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-gold-400 transition-colors duration-300 tracking-wide uppercase text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
