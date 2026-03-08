import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, Droplets, Thermometer, Hand, Sun, Leaf } from "lucide-react";

const tips = [
  { icon: Clock, title: "The 60-Second Rule", desc: "Massage Glamcy into your skin for a full 60 seconds. This lets Salicylic Acid and Niacinamide actually work, dissolving sebum properly before rinsing." },
  { icon: Droplets, title: "Don't Dry Completely", desc: "Leave skin slightly damp before applying your next product. Damp skin acts like a sponge, absorbing serums and moisturizers much more effectively." },
  { icon: Thermometer, title: "Cold Water Splash", desc: "Finish with a splash of cold water to seal the skin's appearance and reduce morning puffiness by stimulating blood flow." },
  { icon: Hand, title: "Your Neck Counts", desc: "Always extend your cleansing routine down to your neck and décolletage. These areas show signs of aging just as quickly as your face." },
  { icon: Sun, title: "Sunscreen is Non-Negotiable", desc: "Even indoors, UV rays penetrate windows. If using a brightening wash, your skin needs SPF protection to prevent dark spots." },
  { icon: Leaf, title: "Tea Tree Spot-Check", desc: "Feel a blind pimple forming? Glamcy's Tea Tree Oil has natural antibacterial properties that can help neutralize the bump before it surfaces." },
];

const ExpertTipsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="tips" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 space-y-4 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">
            The Glamcy Glow Series
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Expert Tips
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tips.map((tip, i) => (
            <div
              key={tip.title}
              className={`group p-6 rounded-2xl bg-background hover:shadow-lg hover:-translate-y-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ boxShadow: "var(--shadow-premium)", transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <tip.icon className="text-primary group-hover:text-secondary transition-colors" size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">{tip.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTipsSection;
