import { ShoppingCart } from "lucide-react";
import marketingPic from "@/assets/marketing_campaign_pic.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stores = [
  {
    name: "Amazon",
    url: "https://www.amazon.in",
    color: "bg-secondary",
  },
  {
    name: "Flipkart",
    url: "https://www.flipkart.com",
    color: "bg-primary",
  },
  {
    name: "Nykaa",
    url: "https://www.nykaa.com",
    color: "bg-accent",
  },
  {
    name: "Myntra",
    url: "https://www.myntra.com",
    color: "bg-primary",
  },
];

const ShopSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="shop" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">
            Your Daily Ritual
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Shop Glamcy
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Available on your favourite e-commerce platforms. Click below to order now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <img
              src={marketingPic}
              alt="Glamcy marketing campaign"
              className="w-full rounded-2xl hover:scale-[1.02] transition-transform duration-500"
              style={{ boxShadow: "var(--shadow-premium)" }}
            />
          </div>

          <div className="space-y-6">
            {stores.map((store, i) => (
              <a
                key={store.name}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 bg-background rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
                style={{ boxShadow: "var(--shadow-premium)", transitionDelay: `${400 + i * 150}ms` }}
              >
                <div className={`w-12 h-12 ${store.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <ShoppingCart className="text-primary-foreground" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-primary">{store.name}</h3>
                  <p className="font-body text-xs text-muted-foreground">Shop on {store.name}</p>
                </div>
                <span className="font-body text-sm text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                  Visit →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
