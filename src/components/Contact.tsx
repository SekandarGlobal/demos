"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-dark-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold-500/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold-500/2 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <ScrollReveal variant="left">
            <div>
              <span className="text-gold-400 text-sm tracking-[0.3em] uppercase">
                Get in Touch
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                <span className="text-gradient-white">Begin Your</span>
                <br />
                <span className="text-gradient">Journey Home</span>
              </h2>
              <div className="h-px w-20 bg-gold-500/50 mb-8" />
              <p className="text-white/50 text-lg leading-relaxed mb-12">
                Whether you&apos;re seeking a penthouse in Manhattan or a villa
                on the Côte d&apos;Azur, our advisors are ready to curate your
                perfect match.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      New York Headquarters
                    </h4>
                    <p className="text-white/40 text-sm">
                      432 Park Avenue, 85th Floor
                      <br />
                      New York, NY 10022
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Private Inquiries
                    </h4>
                    <p className="text-white/40 text-sm">
                      concierge@aurelius-estates.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      24/7 Concierge Line
                    </h4>
                    <p className="text-white/40 text-sm">
                      +1 (212) 555-0199
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column - Form */}
          <ScrollReveal variant="right">
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-2xl bg-dark-800/40 border border-white/5 backdrop-blur-sm"
            >
              <h3 className="font-display text-2xl font-semibold text-white mb-8">
                Request Private Viewing
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="text-white/50 text-sm block mb-2 tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300"
                    placeholder="John Whitmore"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/50 text-sm block mb-2 tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-sm block mb-2 tracking-wide">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300"
                      placeholder="+1 (212) 555-0100"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-sm block mb-2 tracking-wide">
                    Budget Range
                  </label>
                  <select
                    value={formState.budget}
                    onChange={(e) =>
                      setFormState({ ...formState, budget: e.target.value })
                    }
                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300 appearance-none"
                  >
                    <option value="" className="bg-dark-900">
                      Select budget range
                    </option>
                    <option value="10-25" className="bg-dark-900">
                      $10M - $25M
                    </option>
                    <option value="25-50" className="bg-dark-900">
                      $25M - $50M
                    </option>
                    <option value="50-100" className="bg-dark-900">
                      $50M - $100M
                    </option>
                    <option value="100+" className="bg-dark-900">
                      $100M+
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-white/50 text-sm block mb-2 tracking-wide">
                    Tell Us About Your Dream Home
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    rows={4}
                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300 resize-none"
                    placeholder="I'm looking for a waterfront property with..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-magnetic w-full py-4 bg-gold-500 text-dark-950 font-semibold text-sm rounded-xl tracking-wider uppercase hover:bg-gold-400 transition-all duration-300 animate-pulse-glow"
                >
                  {submitted ? "Request Received" : "Request Private Viewing"}
                </button>

                <p className="text-white/20 text-xs text-center">
                  Your information is protected by our NDA policy
                </p>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
