"use client";

import { useState, useEffect, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "We had three weeks before our relocation from Hong Kong. Aurelius arranged seven off-market viewings across Manhattan and closed on a full-floor unit at 432 Park — sight unseen from my wife, who trusted their judgment completely.",
    name: "T. Nakamura",
    title: "Family Office Principal",
    location: "New York, NY",
    buyerType: "International Relocation",
    propertyClass: "Manhattan Penthouse",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    quote:
      "After twenty years with the same London broker, I gave Aurelius a single mandate: find me a Côte d'Azur estate with a private harbor. They delivered three options in six weeks, each one exceptional. The one we chose wasn't even listed.",
    name: "C. Hargrove",
    title: "Private Investor",
    location: "London, UK",
    buyerType: "Secondary Residence",
    propertyClass: "Mediterranean Estate",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
  },
  {
    quote:
      "Discretion was non-negotiable for us. The entire acquisition — from first showing to closing — was handled under NDA. Our neighbors didn't know we'd moved until we invited them for dinner.",
    name: "A. Chen & M. Park",
    title: "Tech Founders",
    location: "Atherton, CA",
    buyerType: "Primary Residence",
    propertyClass: "Bay Area Estate",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
  },
  {
    quote:
      "I've bought properties in seven countries. Aurelius is the only firm where I felt the advisor genuinely understood what I was looking for before I could articulate it myself.",
    name: "R. Lindqvist",
    title: "Hedge Fund Managing Director",
    location: "Stockholm & Dubai",
    buyerType: "Portfolio Acquisition",
    propertyClass: "Global Residential",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  },
  {
    quote:
      "They found us a home that wasn&apos;t on the market. Their network is unlike anything I&apos;ve experienced — and the entire process from first call to closing took under 45 days.",
    name: "S. Whitfield",
    title: "Managing Partner, Whitfield Capital",
    location: "Greenwich, CT",
    buyerType: "Primary Residence",
    propertyClass: "Connecticut Estate",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,175,53,0.04),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold-400 text-sm tracking-[0.3em] uppercase">
              Client Voices
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              <span className="text-gradient-white">Trusted by the</span>{" "}
              <span className="text-gradient">World&apos;s Elite</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            {/* Quote icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-gold-500/10">
              <svg
                className="w-24 h-24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="text-center py-12">
              <div
                className={`transition-all duration-500 ${
                  isTransitioning
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10 italic">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                <div className="flex flex-col items-center gap-3">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-500/30 p-0.5">
                    <div
                      className="w-full h-full rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${testimonials[active].avatar}')`,
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-gold-400 font-semibold text-lg">
                      {testimonials[active].name}
                    </p>
                    <p className="text-white/40 text-sm mt-1">
                      {testimonials[active].title}
                    </p>
                    <p className="text-white/25 text-xs mt-1">
                      {testimonials[active].buyerType} &middot;{" "}
                      {testimonials[active].propertyClass} &middot;{" "}
                      {testimonials[active].location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-3 mt-10">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isTransitioning) {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setActive(index);
                          setIsTransitioning(false);
                        }, 300);
                      }
                    }}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      index === active
                        ? "w-10 bg-gold-500"
                        : "w-2.5 bg-white/15 hover:bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
