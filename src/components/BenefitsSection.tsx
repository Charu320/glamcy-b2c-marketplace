import benefitPic from "@/assets/benefit_description.jpg";
import { Droplets, Sparkles, FlaskConical, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: FlaskConical, title: "4% Niacinamide", desc: "Brightens skin, reduces pores, and evens out skin tone." },
  { icon: Sparkles, title: "Triple-Acid Power", desc: "Salicylic, Glycolic & Lactic acids for deep yet gentle exfoliation." },
  { icon: Droplets, title: "Hydrated Glow", desc: "Aloe Vera & Allantoin keep skin moisturized — never stripped." },
  { icon: ShieldCheck, title: "Melts Makeup & Impurities", desc: "Effortlessly removes makeup while nourishing your skin barrier." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">
            Powered by Science & Nature
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Why Glamcy?
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-background rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow" style={{ boxShadow: "var(--shadow-premium)" }}>
                <div className="w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center">
                  <b.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
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
