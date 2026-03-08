import ageGroupPic from "@/assets/all_age_group_pic.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const personas = [
  { title: "The Trendsetter", age: "15+", desc: "For the young explorer discovering her first skincare looks — deep-pore security she needs." },
  { title: "The Professional", age: "20s–30s", desc: "For the woman navigating the city grind — the environmental shield her skin demands." },
  { title: "The Muse", age: "40s+", desc: "For the woman who knows her worth — the moisture sanctuary that keeps her skin resilient." },
];

const AgeGroupSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 space-y-12">
        <div className={`text-center space-y-4 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">
            For Every Lifestyle
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Designed for You
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((p, i) => (
            <div
              key={p.title}
              className={`text-center p-8 rounded-2xl bg-card hover:shadow-lg hover:-translate-y-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ boxShadow: "var(--shadow-premium)", transitionDelay: `${300 + i * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/60 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-2xl font-bold text-primary">{p.age}</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className={`flex justify-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <img
            src={ageGroupPic}
            alt="Glamcy for all age groups - The Trendsetter, The Professional, and The Muse"
            className="w-full max-w-4xl rounded-2xl"
            style={{ boxShadow: "var(--shadow-premium)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AgeGroupSection;
