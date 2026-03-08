import glamcyLogo from "@/assets/glamcy_logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={glamcyLogo} alt="Glamcy" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <span className="font-heading text-xl font-bold text-primary-foreground">Glamcy</span>
              <p className="font-body text-xs text-primary-foreground/60">Even Glam Needs Care</p>
            </div>
          </div>
          <div className="text-center">
            <p className="font-body text-xs text-primary-foreground/60">JAI VIRAT BIOPHARMA</p>
            <p className="font-body text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} Glamcy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
