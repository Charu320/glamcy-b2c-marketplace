import { ShoppingCart } from "lucide-react";
import marketingPic from "@/assets/marketing_campaign_pic.jpg";

const stores = [
  {
    name: "Amazon",
    url: "https://www.amazon.in",
    color: "bg-[hsl(43_65%_52%)]",
  },
  {
    name: "Flipkart",
    url: "https://www.flipkart.com",
    color: "bg-primary",
  },
  {
    name: "Nykaa",
    url: "https://www.nykaa.com",
    color: "bg-[hsl(340_60%_55%)]",
  },
  {
    name: "Myntra",
    url: "https://www.myntra.com",
    color: "bg-[hsl(350_70%_50%)]",
  },
];

const ShopSection = () => {
  return (
    <section id="shop" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
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
          <img
            src={marketingPic}
            alt="Glamcy marketing campaign"
            className="w-full rounded-2xl"
            style={{ boxShadow: "var(--shadow-premium)" }}
          />

          <div className="space-y-6">
            {stores.map((store) => (
              <a
                key={store.name}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-background rounded-xl hover:shadow-lg transition-all group"
                style={{ boxShadow: "var(--shadow-premium)" }}
              >
                <div className={`w-12 h-12 ${store.color} rounded-full flex items-center justify-center`}>
                  <ShoppingCart className="text-primary-foreground" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-primary">{store.name}</h3>
                  <p className="font-body text-xs text-muted-foreground">Shop on {store.name}</p>
                </div>
                <span className="font-body text-sm text-secondary font-semibold group-hover:translate-x-1 transition-transform">
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
