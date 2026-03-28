const items = [
  "Manhattan Penthouses",
  "Beverly Hills Estates",
  "Monaco Waterfronts",
  "London Townhouses",
  "Dubai Sky Villas",
  "Malibu Beach Houses",
  "Parisian Apartments",
  "Tokyo Luxury Lofts",
];

export default function MarqueeBanner() {
  return (
    <div className="relative py-6 border-y border-white/5 overflow-hidden bg-dark-900/50">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="text-white/20 text-sm md:text-base tracking-[0.3em] uppercase font-light">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
