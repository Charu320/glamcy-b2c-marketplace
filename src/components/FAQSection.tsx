import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const problemTable = [
  { problem: "Dullness & Heavy Makeup", solution: "Triple-Acid Complex (AHA/BHA)", result: "Instant Glow — Makeup is dissolved, dead skin is swept away." },
  { problem: "Visible Pores & Oiliness", solution: "4% Clinical Niacinamide", result: "Filtered Finish — Pores look tighter, oil is controlled all day." },
  { problem: "Dry, Tight Skin", solution: "Aloe + Ceramides", result: "Bouncy Texture — Your skin feels hydrated, never stripped." },
  { problem: "Environmental Redness", solution: "Allantoin + Vitamin E", result: "Calm Canvas — Redness from pollution or sun is instantly soothed." },
];

const faqs = [
  { q: "How often should I use Glamcy Face Wash?", a: "For best results, use Glamcy Face Wash twice daily — once in the morning to refresh your skin and once at night to remove dirt, oil, and impurities." },
  { q: "Can I use Glamcy daily?", a: "Yes! Even though it has a \"Scientific Amalgamation\" of three acids, we balanced it with 65% Purified Water and Soothing Aloe, making it gentle enough for every single morning and night." },
  { q: "Which skin type is Glamcy best for?", a: "While formulated to be \"nourishing\" for all skin types, Glamcy is particularly effective for oily and acne-prone skin due to the Salicylic Acid and Tea Tree oil." },
  { q: "Is it okay for sensitive skin?", a: "Absolutely! The Allantoin and Ceramides act as a safety net, ensuring your skin is protected while it's being cleaned." },
  { q: "Will it dry out my skin?", a: "Unlike harsh anti-acne soaps, Glamcy is a Nourishing face wash. The addition of Aloe Vera and Allantoin ensures your skin feels soft and hydrated after every wash." },
  { q: "What are the small beads inside the gel?", a: "Those are moisture-rich exfoliating beads designed to break down upon contact with water. They keep the Vitamin E and Nutrients fresh until the second they touch your skin." },
  { q: "Is Glamcy paraben-free and sulphate-free?", a: "Yes, we pride ourselves on a \"clean\" formulation that avoids harsh surfactants like SLS/SLES." },
  { q: "How long to see results?", a: "Most users notice an immediate \"fresh\" feel after use. For improvements in skin texture and pore size, consistent use over 2-4 weeks is typically required." },
  { q: "Can teenagers use Glamcy?", a: "Yes! Glamcy is a great introductory product for teenagers dealing with hormonal breakouts or oily skin." },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 space-y-4 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">
            The Glamcy Amalgamation
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            The Science Behind It
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        {/* Problem-Solution Table */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {problemTable.map((row, i) => (
            <div
              key={row.problem}
              className="bg-card rounded-xl p-6 space-y-3 hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-premium)", transitionDelay: `${400 + i * 100}ms` }}
            >
              <p className="font-body text-xs tracking-wider uppercase text-destructive font-semibold">{row.problem}</p>
              <p className="font-heading text-lg font-bold text-secondary">{row.solution}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{row.result}</p>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-heading text-3xl font-bold text-primary text-center mb-8">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl px-6 border-none" style={{ boxShadow: "var(--shadow-premium)" }}>
                <AccordionTrigger className="font-body text-sm font-semibold text-primary hover:text-secondary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
