import glamcyPic from "@/assets/glamcy_pic.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <div className="absolute -inset-3 bg-accent/40 rounded-2xl -rotate-3" />
          <img
            src={glamcyPic}
            alt="Woman using Glamcy face wash"
            className="relative w-full rounded-2xl object-cover"
            style={{ boxShadow: "var(--shadow-premium)" }}
          />
        </div>

        <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">About Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Even Glam Needs Care
          </h2>
          <div className="w-16 h-0.5 bg-secondary" />
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Glamcy was created with one thought in mind: <span className="text-secondary font-semibold">Beauty is incomplete without care!</span> We believe beauty isn't just about looking glamorous — it's about caring for the skin beneath the glam. True Glamour isn't just about the finish; it's about the foundation. It begins with a flawless Canvas.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            We looked at the modern woman — the one who wears many hats and occasionally, some high-impact glam. While the world sees her glow, her skin is often working overtime to survive makeup, city pollution, and daily stress. Glamcy is created to be the perfect balance of Style and Skincare.
          </p>
          <p className="font-body text-sm text-muted-foreground italic leading-relaxed">
            Our "Different" is our Scientific Amalgamation — a clinical blend of actives and botanical healers that treats your skin as a living ecosystem.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { number: "4%", label: "Niacinamide" },
              { number: "100%", label: "Vegan" },
              { number: "3x", label: "Acid Power" },
            ].map((stat, i) => (
              <div key={stat.label} className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${800 + i * 150}ms` }}>
                <div className="font-heading text-3xl font-bold text-secondary">{stat.number}</div>
                <div className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
