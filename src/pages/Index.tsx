import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import AgeGroupSection from "@/components/AgeGroupSection";
import PromiseSection from "@/components/PromiseSection";
import FAQSection from "@/components/FAQSection";
import ExpertTipsSection from "@/components/ExpertTipsSection";
import ShopSection from "@/components/ShopSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <AgeGroupSection />
      <PromiseSection />
      <FAQSection />
      <ExpertTipsSection />
      <ShopSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
