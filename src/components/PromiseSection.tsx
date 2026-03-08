import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Shield, Beaker } from "lucide-react";

const PromiseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-card relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary via-transparent to-accent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">
            The Glamcy Glow Family
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Our Promise to You
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />

          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            We won't promise you "overnight miracles." We promise you <span className="text-secondary font-semibold">Scientific Integrity</span>. We promise that every time you wash off your day, you are giving your skin a <span className="text-secondary font-semibold">molecular hug</span>.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8">
            {[
              { icon: Heart, label: "You bring the Ambition" },
              { icon: Shield, label: "You bring the Glamour" },
              { icon: Beaker, label: "We bring the Care" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col items-center gap-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${600 + i * 200}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/60 flex items-center justify-center">
                  <item.icon className="text-primary" size={24} />
                </div>
                <p className="font-body text-sm text-muted-foreground font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <p className={`font-heading text-2xl md:text-3xl font-bold text-primary italic transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            "Together We Can!"
          </p>

          <p className="font-body text-sm text-muted-foreground">
            — Sanjay Wadhwa, Founder – Glamcy Glow Family
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
