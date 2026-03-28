import ScrollReveal from "./ScrollReveal";

const agents = [
  {
    name: "Marcus R. Thornton",
    role: "Founding Director & Principal Broker",
    license: "Licensed RE Broker, NY #10401327639",
    specialty: "Ultra-Luxury Penthouses & Manhattan Townhouses",
    bio: "Founded Aurelius Estates in 1991 after a decade at Sotheby's International Realty. Marcus has personally closed over $2.4B in transactions and maintains direct relationships with developers at every major supertall tower in Manhattan.",
    office: "New York",
    officeAddress: "432 Park Avenue, 85th Floor, New York, NY 10022",
    phone: "+1 (212) 555-0142",
    email: "m.thornton@aurelius-estates.com",
    sales: "$2.4B",
    certifications: ["Licensed RE Broker (NY, CT)", "Certified Luxury Home Marketing Specialist", "Institute for Luxury Home Marketing Member"],
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Isabelle Fontaine-Duval",
    role: "Senior Advisor, Europe & Mediterranean",
    license: "Licensed Agent, Monaco",
    specialty: "European Châteaux, Riviera Villas & London Townhouses",
    bio: "Born in Monaco, educated at Sciences Po Paris. Isabelle spent eight years at Knight Frank's international desk before joining Aurelius in 2004. She maintains an off-market network spanning the French Riviera, Lake Como, and Mayfair.",
    office: "Monaco",
    officeAddress: "Le Mirabeau, 1 Avenue Princesse Grace, Monaco 98000",
    phone: "+377 93 50 12 34",
    email: "i.fontaine@aurelius-estates.com",
    sales: "$1.8B",
    certifications: ["Licensed Agent (Monaco)", "RICS Associate", "FNAIM International"],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Daniel K. Adeyemi",
    role: "Director, Middle East & Asia-Pacific",
    license: "RERA Certified, Dubai",
    specialty: "New Development, Branded Residences & Investment Acquisitions",
    bio: "Daniel bridges East and West, connecting institutional and private investors with landmark developments across Dubai, Singapore, and Hong Kong. Fluent in English, Arabic, Mandarin, and French, he manages cross-border transactions for a global client base.",
    office: "Dubai",
    officeAddress: "Burj Khalifa District, Level 45, Dubai, UAE",
    phone: "+971 4 555 0193",
    email: "d.adeyemi@aurelius-estates.com",
    sales: "$2.1B",
    certifications: ["RERA Certified (Dubai)", "Certified International Property Specialist", "CEPI-CEI Member"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Elena Castellanos-Vasquez",
    role: "Lead Advisor, West Coast & Latin America",
    license: "DRE Licensed, CA #02089145",
    specialty: "Waterfront Estates, Malibu & Pacific Palisades",
    bio: "Elena represents the entertainment industry's top directors, producers, and tech founders in their coastal acquisitions. A Malibu native, she has closed over 40 transactions along the Pacific Coast Highway corridor in the last decade alone.",
    office: "Los Angeles",
    officeAddress: "23733 Malibu Road, Suite 200, Malibu, CA 90265",
    phone: "+1 (310) 555-0261",
    email: "e.vasquez@aurelius-estates.com",
    sales: "$1.5B",
    certifications: ["DRE Licensed (California)", "Certified Luxury Home Marketing Specialist", "NAR Member"],
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    social: { linkedin: "#", instagram: "#" },
  },
];

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Agents() {
  return (
    <section id="agents" className="relative py-24 md:py-32 bg-dark-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(229,175,53,0.03),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold-400 text-sm tracking-[0.3em] uppercase">
              Our Advisors
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              <span className="text-gradient-white">Meet the</span>{" "}
              <span className="text-gradient">Team</span>
            </h2>
            <div className="line-reveal h-px bg-gold-500/50 mx-auto" />
            <p className="text-white/40 text-lg max-w-2xl mx-auto mt-8">
              Each advisor is a licensed professional with a minimum of 15 years
              in ultra-luxury real estate and a verified track record of $1B+ in
              closed transactions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="agent-card group rounded-2xl overflow-hidden bg-dark-800/30 border border-white/5 hover:border-gold-500/20 transition-all duration-500">
                {/* Photo */}
                <div className="relative h-80 overflow-hidden">
                  <div
                    className="agent-photo absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    style={{ backgroundImage: `url('${agent.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

                  {/* Social links overlay */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={agent.social.linkedin}
                      className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold-400 hover:bg-white/10 transition-all duration-300"
                      aria-label={`${agent.name} LinkedIn`}
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href={agent.social.instagram}
                      className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold-400 hover:bg-white/10 transition-all duration-300"
                      aria-label={`${agent.name} Instagram`}
                    >
                      <InstagramIcon />
                    </a>
                  </div>

                  {/* Sales badge */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="px-3 py-1.5 bg-gold-500/90 text-dark-950 text-xs font-semibold rounded-full tracking-wider uppercase">
                      {agent.sales} Career Volume
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-gold-400 transition-colors duration-300">
                    {agent.name}
                  </h3>
                  <p className="text-gold-400/80 text-sm font-medium mt-1">
                    {agent.role}
                  </p>
                  <p className="text-white/30 text-xs mt-1 tracking-wide uppercase">
                    {agent.specialty}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed mt-4">
                    {agent.bio}
                  </p>

                  {/* Certifications */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {agent.certifications.map((cert, i) => (
                      <span key={i} className="text-[10px] text-white/25 border border-white/10 rounded-full px-2.5 py-1 tracking-wide">
                        {cert}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-5 border-t border-white/5 space-y-2">
                    <p className="text-white/20 text-[10px] tracking-wider uppercase mb-2">
                      {agent.office} Office &middot; {agent.license}
                    </p>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-2 text-white/30 text-xs hover:text-gold-400 transition-colors duration-300"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {agent.email}
                    </a>
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center gap-2 text-white/30 text-xs hover:text-gold-400 transition-colors duration-300"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {agent.phone}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
