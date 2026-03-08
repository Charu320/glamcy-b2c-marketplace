import benefitPic from "@/assets/benefit_description.jpg";
import { Droplets, Sparkles, FlaskConical, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  { icon: FlaskConical, title: "Filtered Skin Texture", desc: "Powered by Salicylic Acid and Niacinamide, Glamcy targets active acne, dissolves deep-seated blackheads and minimizes the appearance of pores." },
  { icon: Sparkles, title: "Soothing Shield", desc: "Unlike harsh acne washes, our formula features Allantoin and Aloe Vera — prevents redness and ensures your skin feels plumpy and hydrated, never tight." },
  { icon: Droplets, title: "Derma Friendly", desc: "Formulated for all skin types, especially oily and acne-prone skin. Free from harsh parabens and sulphates." },
  { icon: ShieldCheck, title: "Luxury in Every Drop", desc: "Our rich, creamy lather gently lifts away environmental pollutants and excess oil while restoring your skin's natural pH balance." },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="benefits" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto pl-8 md:pl-12 pr-4">
        <div className={`text-center mb-16 space-y-4 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">
            Powered by Science & Nature
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Why Buy Glamcy?
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            We aren't just another SKU — we are a new sub-category: <span className="text-secondary font-semibold">Urban Recovery!</span> A masterfully balanced formula designed for skin that demands both high performance and deep soothing care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`bg-background rounded-xl p-6 space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ boxShadow: "var(--shadow-premium)", transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center">
                  <b.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className={`flex justify-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <img
              src={benefitPic}
              alt="Glamcy product benefits overview"
              className="w-full max-w-md rounded-2xl"
              style={{ boxShadow: "var(--shadow-premium)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
