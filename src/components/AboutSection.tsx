import glamcyPic from "@/assets/glamcy_pic.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-3 bg-accent/40 rounded-2xl -rotate-3" />
          <img
            src={glamcyPic}
            alt="Woman using Glamcy face wash"
            className="relative w-full rounded-2xl object-cover"
            style={{ boxShadow: "var(--shadow-premium)" }}
          />
        </div>

        <div className="space-y-6">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">About Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Crafted for Confidence
          </h2>
          <div className="w-16 h-0.5 bg-secondary" />
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            At Glamcy, we believe that every skin deserves luxury. Our Nourishing Face Wash is powered by a unique blend of science and nature — combining 4% Niacinamide, triple-acid power, and soothing botanicals like Aloe Vera and Allantoin.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Whether you're a trendsetter exploring your first skincare routine, a professional who needs fast and effective cleansing, or someone embracing timeless beauty — Glamcy is designed for your lifestyle, not just your age.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { number: "4%", label: "Niacinamide" },
              { number: "100%", label: "Vegan" },
              { number: "3x", label: "Acid Power" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
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
