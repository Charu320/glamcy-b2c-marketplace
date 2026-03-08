import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, Droplets, Thermometer, Hand, Sun, Leaf, Smartphone, BedDouble, ShieldCheck } from "lucide-react";

const tips = [
  { icon: Clock, title: "The 60-Second Rule", desc: "Most people wash their face for only 10–15 seconds. Massage Glamcy into your skin for a full 60 seconds to let Salicylic Acid and Niacinamide dissolve sebum properly.", number: "01" },
  { icon: Droplets, title: "Don't Dry Completely", desc: "Leave skin slightly damp before applying your next product. Damp skin acts like a sponge, absorbing serums and moisturizers much more effectively.", number: "02" },
  { icon: Thermometer, title: "Cold Water Splash", desc: "Lukewarm water breaks down oils during your wash, but finishing with cold water helps seal the skin's appearance and reduces morning puffiness.", number: "03" },
  { icon: Hand, title: "Your Neck Counts", desc: "A common mistake is stopping at the jawline. Always extend your cleansing routine down to your neck and décolletage — they age just as quickly.", number: "04" },
  { icon: Leaf, title: "Soothing Matters in Acne Care", desc: "Don't 'attack' breakouts with harsh chemicals. Allantoin and Aloe Vera (found in Glamcy) calm inflammation while active acids do the heavy lifting. A calm skin barrier heals 2x faster.", number: "05" },
  { icon: Leaf, title: "Tea Tree Spot-Check", desc: "Feel a blind pimple forming? Glamcy's Tea Tree Oil has natural antibacterial properties that can neutralize the bump before it fully surfaces.", number: "06" },
  { icon: Smartphone, title: "Clean Your Tech", desc: "Your phone screen carries more bacteria than most surfaces. Wipe your phone daily with an alcohol swab and use earbuds for long calls to prevent cheek breakouts.", number: "07" },
  { icon: BedDouble, title: "The Pillowcase Protocol", desc: "Change your pillowcase at least twice a week. Silk or satin prevents 'sleep lines,' and a fresh pillowcase keeps your skin off a week's worth of oils and dust.", number: "08" },
  { icon: ShieldCheck, title: "Sunscreen is Non-Negotiable", desc: "Even staying indoors, UV rays penetrate windows. If you use a brightening or exfoliating wash, your 'fresh' skin needs SPF protection to prevent dark spots.", number: "09" },
];

const ExpertTipsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="tips" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">
            The Glamcy Glow Series
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Expert Tips
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Pro skincare secrets to maximise your Glamcy experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tips.map((tip, i) => (
            <div
              key={tip.title}
              className={`group relative p-6 rounded-2xl bg-background hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ boxShadow: "var(--shadow-premium)", transitionDelay: `${200 + i * 80}ms` }}
            >
              {/* Tip number watermark */}
              <span className="absolute top-4 right-4 font-heading text-4xl font-bold text-secondary/10 group-hover:text-secondary/25 transition-colors">
                {tip.number}
              </span>
              <div className="w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center mb-4 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
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
