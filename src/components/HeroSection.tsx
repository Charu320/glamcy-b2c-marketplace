import slantedPic from "@/assets/slanted_pic.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Decorative shimmer */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-shimmer bg-[length:200%_100%]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-secondary/20 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-32 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">
            Even Glam Needs Care
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary leading-tight">
            Redefine<br />Your <span className="text-secondary animate-pulse-glow">Glow</span>
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            A nourishing face wash enriched with Niacinamide, Salicylic Acid & Allantoin. 
            Deep cleansing that hydrates — experience the luxury of true clarity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-block px-8 py-3.5 bg-secondary text-secondary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 hover:scale-105 transition-all"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="inline-block px-8 py-3.5 border-2 border-primary text-primary font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all"
            >
              Learn More
            </a>
          </div>
          <div className="flex gap-8 pt-4">
            {["Deep Cleansing", "Peach Extract", "Exfoliating Beads"].map((item, i) => (
              <div key={item} className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
                <span className="text-secondary text-lg">◆</span>
                <span className="font-body text-xs tracking-wider uppercase text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-3xl group-hover:bg-secondary/20 transition-all duration-700" />
            <img
              src={slantedPic}
              alt="Glamcy Nourishing Face Wash product with packaging"
              className="relative w-full max-w-md rounded-2xl animate-hero-float"
              style={{ boxShadow: "var(--shadow-premium)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
