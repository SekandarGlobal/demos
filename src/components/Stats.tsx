import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 2500, suffix: "+", label: "Properties Sold", decimals: 0 },
  { value: 4.2, suffix: "B", label: "In Sales Volume", prefix: "$", decimals: 1 },
  { value: 98, suffix: "%", label: "Client Satisfaction", decimals: 0 },
  { value: 35, suffix: "+", label: "Years of Excellence", decimals: 0 },
];

export default function Stats() {
  return (
    <section className="relative py-24 bg-dark-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,175,53,0.03),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="text-center group">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-3">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                    duration={2500}
                  />
                </div>
                <div className="h-px w-12 bg-gold-500/30 mx-auto mb-3 group-hover:w-20 transition-all duration-500" />
                <p className="text-white/40 text-sm tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
