import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Verified Provenance",
    description:
      "Every property undergoes rigorous verification with complete title history, structural assessments, and legal clearances.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "White-Glove Service",
    description:
      "Dedicated concierge from first viewing to closing day. Private tours, legal coordination, and post-purchase support.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global Network",
    description:
      "Access off-market properties across 40+ countries through our exclusive network of estate owners and developers.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Smart Investment",
    description:
      "Data-driven market analysis and ROI projections to ensure your acquisition appreciates for generations.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Virtual Showings",
    description:
      "Immersive 3D tours and cinematic property films let you explore every detail from anywhere in the world.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Absolute Privacy",
    description:
      "Discretion guaranteed. NDA-protected transactions for high-profile clients who value absolute confidentiality.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-dark-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <ScrollReveal variant="left">
            <div>
              <span className="text-gold-400 text-sm tracking-[0.3em] uppercase">
                Why Aurelius
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                <span className="text-gradient-white">
                  Redefining Luxury
                </span>
                <br />
                <span className="text-gradient">Real Estate</span>
              </h2>
              <div className="h-px w-20 bg-gold-500/50 mb-8" />
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                For over three decades, Aurelius Estates has been the trusted
                advisor for the world&apos;s most discerning buyers. We don&apos;t
                just sell properties &mdash; we curate legacies.
              </p>
              <p className="text-white/40 leading-relaxed mb-6">
                Our portfolio represents less than 1% of properties that apply
                for representation. Each home is selected for its architectural
                significance, location prestige, and enduring value.
              </p>

              {/* Brand philosophy */}
              <div className="glass-gold rounded-xl p-6 mt-8">
                <p className="text-gold-300/80 text-sm leading-relaxed italic font-display">
                  &ldquo;I founded Aurelius on a simple belief: the right home
                  doesn&apos;t just shelter a family &mdash; it defines a
                  generation. We represent buyers who understand that, and
                  properties worthy of it.&rdquo;
                </p>
                <p className="text-gold-400/60 text-xs mt-3 tracking-wider uppercase">
                  &mdash; Marcus R. Thornton, Founding Director, 1991
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/5">
                <div
                  className="h-96 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80')",
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-gold rounded-xl p-6 animate-float">
                <div className="font-display text-3xl font-bold text-gradient">
                  34
                </div>
                <div className="text-white/50 text-sm">
                  Years in Operation
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl" />
            </div>
          </ScrollReveal>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group p-8 rounded-2xl bg-dark-800/30 border border-white/5 hover:border-gold-500/20 hover:bg-dark-800/50 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 group-hover:scale-110 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
