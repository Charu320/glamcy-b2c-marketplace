import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const problemTable = [
  { problem: "Dullness & Heavy Makeup", solution: "Triple-Acid Complex (AHA/BHA)", result: "Instant Glow — Makeup is dissolved, and dead skin is swept away." },
  { problem: "Visible Pores & Oiliness", solution: "4% Clinical Niacinamide", result: "Filtered Finish — Pores look tighter and oil is controlled all day." },
  { problem: "Dry, Tight Skin", solution: "Aloe + Ceramides", result: "Bouncy Texture — Your skin feels \"fed\" and hydrated, never stripped." },
  { problem: "Environmental Redness", solution: "Allantoin + Vitamin E", result: "Calm Canvas — Redness from pollution or sun is instantly soothed." },
];

const faqCategories = [
  {
    category: "Product Usage & Basics",
    faqs: [
      { q: "How often should I use Glamcy Face Wash?", a: "For best results, use Glamcy Face Wash twice daily — once in the morning to refresh your skin and once at night to remove dirt, oil, and impurities." },
      { q: "Can I use Glamcy daily?", a: "Yes! Even though it has a \"Scientific Amalgamation\" of three acids, we balanced it with 65% Purified Water and Soothing Aloe, making it gentle enough for every single morning and night." },
      { q: "Which skin type is Glamcy best for?", a: "While formulated to be \"nourishing\" for all skin types, Glamcy is particularly effective for oily and acne-prone skin due to the Salicylic Acid and Tea Tree oil." },
      { q: "Is it okay for sensitive skin?", a: "Absolutely! The Allantoin and Ceramides act as a safety net, ensuring your skin is protected while it's being cleaned." },
      { q: "Will it dry out my skin?", a: "Unlike harsh anti-acne soaps, Glamcy is a Nourishing face wash. The addition of Aloe Vera and Allantoin ensures your skin feels soft and hydrated after every wash." },
      { q: "Is it safe to use around the eyes?", a: "Avoid direct contact with eyes. If contact occurs, rinse thoroughly with water. Because it contains Salicylic Acid, it may cause slight stinging if it gets inside the eye." },
    ],
  },
  {
    category: "Ingredient-Specific Questions",
    faqs: [
      { q: "What's Inside the Amalgamation?", a: "The \"Clean\" Trio — A smart mix of Salicylic, Glycolic, and Lactic acids. They don't just wash your face; they \"unclog\" your day, melting away makeup and pollutants so your pores can breathe. The \"Filter\" Effect (Niacinamide) — a real-life filter that shrinks the look of pores and balances your skin tone. The \"Care\" Complex (Ceramides & Honey) — Ceramides act like a protective shield while Honey and Aloe Vera lock in hydration that lasts 24 hours." },
      { q: "What are the small beads inside the gel?", a: "Those are moisture-rich exfoliating beads designed to break down upon contact with water. They keep the Vitamin E and Nutrients fresh until the second they touch your skin." },
      { q: "What does Niacinamide do in this face wash?", a: "Niacinamide (Vitamin B3) helps to visibly improve enlarged pores, uneven skin tone, and dullness while strengthening the skin's natural barrier." },
      { q: "Is the Salicylic Acid percentage safe for daily use?", a: "Yes, the concentration is balanced with soothing Allantoin and Aloe Vera to ensure it exfoliates effectively without stripping your skin of its natural moisture." },
      { q: "Why is Allantoin included?", a: "Allantoin is a powerhouse soothing agent. It helps to prevent the irritation that can sometimes come with acne-fighting ingredients, keeping your \"Glam\" journey comfortable." },
      { q: "Does it contain artificial fragrances?", a: "We use a minimal, skin-safe fragrance and natural extracts like Tea Tree to provide a refreshing scent without irritation." },
    ],
  },
  {
    category: "Results & Routine",
    faqs: [
      { q: "How long will it take to see results?", a: "Most users notice an immediate \"fresh\" feel after use. For improvements in skin texture and pore size, consistent use over 2-4 weeks is typically required." },
      { q: "Will it help with active acne and blackheads?", a: "Yes! The Salicylic Acid works deep inside the pores to dissolve the \"glue\" holding blackheads together, while Tea Tree oil provides natural antibacterial benefits to target active breakouts." },
      { q: "Can I use Glamcy with my Vitamin C serum?", a: "Yes! In a rinse-off product like a face wash, it is generally perfectly safe to follow up with your favorite Vitamin C serum." },
      { q: "Do I need to wear sunscreen after using this?", a: "Yes! Salicylic Acid is a BHA that exfoliates the skin, which can make you more sensitive to the sun. We always recommend an SPF 30 or higher during the day." },
      { q: "Can I use this as a second cleanse after removing makeup?", a: "Absolutely! Glamcy works excellently as a second-step cleanser to ensure every last trace of oil and makeup is cleared from your pores." },
    ],
  },
  {
    category: "Safety & Quality",
    faqs: [
      { q: "Is Glamcy paraben-free and sulphate-free?", a: "Yes, we pride ourselves on a \"clean\" formulation that avoids harsh surfactants like SLS/SLES." },
      { q: "Can teenagers use Glamcy?", a: "Yes! Glamcy is a great introductory product for teenagers dealing with hormonal breakouts or oily skin." },
    ],
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">
            The Glamcy Amalgamation
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            The Science Behind It
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        {/* Problem-Solution Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problemTable.map((row, i) => (
            <div
              key={row.problem}
              className={`bg-card rounded-xl p-6 space-y-3 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ boxShadow: "var(--shadow-premium)", transitionDelay: `${300 + i * 150}ms` }}
            >
              <p className="font-body text-xs tracking-wider uppercase text-destructive font-semibold">{row.problem}</p>
              <div className="w-8 h-0.5 bg-secondary group-hover:w-full transition-all duration-500" />
              <p className="font-heading text-lg font-bold text-secondary">{row.solution}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{row.result}</p>
            </div>
          ))}
        </div>

        {/* FAQ Accordion by Category */}
        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-heading text-3xl font-bold text-primary text-center mb-10">
            Frequently Asked Questions
          </h3>
          
          {faqCategories.map((cat, catIdx) => (
            <div key={cat.category} className="mb-12">
              <div 
                className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-transparent rounded-xl p-6 mb-6 border border-secondary/20 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: "var(--shadow-premium)" }}
              >
                <h4 className="font-heading text-xl md:text-2xl font-bold text-primary mb-2">
                  {cat.category}
                </h4>
                <div className="w-16 h-0.5 bg-secondary" />
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {cat.faqs.map((faq, i) => (
                  <AccordionItem
                    key={`${catIdx}-${i}`}
                    value={`faq-${catIdx}-${i}`}
                    className="bg-card rounded-xl px-6 border-none hover:shadow-md transition-shadow"
                    style={{ boxShadow: "var(--shadow-premium)" }}
                  >
                    <AccordionTrigger className="font-body text-sm font-semibold text-primary hover:text-secondary hover:no-underline py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
