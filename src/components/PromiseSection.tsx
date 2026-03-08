import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Shield, Beaker, Star, Sparkles, Crown } from "lucide-react";

const PromiseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-card relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary via-transparent to-accent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">
            Welcome to The Inner Circle
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            The Glamcy Glow Family
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />

          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            When we formulated the Nourishing Face Wash, we envisioned more than just a product — we envisioned a <span className="text-secondary font-semibold">community</span> of people who prioritize self-care without compromise.
          </p>

          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            By joining the Glamcy Glow Family, you aren't just a customer — you are a <span className="text-secondary font-semibold">Founding Member</span>. This is our private community where clinical science meets daily luxury. Enjoy early access to our newest formulations, member-only pricing, and skincare secrets curated just for you.
          </p>

          {/* Promise pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {[
              { icon: Heart, title: "You bring the Ambition", desc: "Dream big. Your confidence starts with how you feel in your own skin." },
              { icon: Crown, title: "You bring the Glamour", desc: "Own every room. Glamour isn't just about looks — it's about presence." },
              { icon: Beaker, title: "We bring the Care", desc: "Scientific Integrity. Every wash is a molecular hug for your skin." },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`flex flex-col items-center gap-4 p-6 rounded-2xl bg-background/50 hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${600 + i * 200}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/60 flex items-center justify-center group">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Belief statement */}
          <div className={`pt-8 space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`} style={{ transitionDelay: "1200ms" }}>
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="text-secondary" size={20} />
              <p className="font-heading text-2xl md:text-3xl font-bold text-primary italic">
                "Even Glam Needs Care"
              </p>
              <Sparkles className="text-secondary" size={20} />
            </div>
            <p className="font-heading text-xl md:text-2xl font-bold text-secondary">
              Together We Can!
            </p>
            <p className="font-body text-sm text-muted-foreground pt-2">
              — Sanjay Wadhwa, Founder – Glamcy Glow Family
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
