import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal } from "@/components/motion/reveal";
import { stats } from "@/data/stats";

export function SocialProof() {
  return (
    <section className="relative bg-navy py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.id} delay={index * 0.1} className="text-center">
            <AnimatedCounter
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              className="block font-heading text-3xl font-extrabold text-gold sm:text-4xl"
            />
            <p className="mt-2 text-sm text-white/65 sm:text-base">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
