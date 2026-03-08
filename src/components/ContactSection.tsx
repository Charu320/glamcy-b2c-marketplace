import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 space-y-4 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">Get in Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">Contact Us</h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className={`grid md:grid-cols-2 gap-12 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-primary">Email</h3>
                <p className="font-body text-sm text-muted-foreground">truecare@glamcy.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-primary">Phone</h3>
                <p className="font-body text-sm text-muted-foreground">+91 8708609349</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-primary">Address</h3>
                <p className="font-body text-sm text-muted-foreground">JAI VIRAT BIOPHARMA</p>
                <p className="font-body text-sm text-muted-foreground">2, Lajpat Nagar Pulliya, Hisar-125001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-primary">Website</h3>
                <a href="https://www.glamcy.in" className="font-body text-sm text-secondary hover:underline">www.glamcy.in</a>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all">
                  <Icon className="text-primary-foreground" size={18} />
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3.5 rounded-lg bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3.5 rounded-lg bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-5 py-3.5 rounded-lg bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none transition-all"
            />
            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-secondary text-secondary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              Join the Glamcy Glow Family
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
