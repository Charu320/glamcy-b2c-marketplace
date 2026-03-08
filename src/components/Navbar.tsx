import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import glamcyLogo from "@/assets/glamcy_logo.jpeg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Benefits", href: "/benefits" },
    { label: "FAQs", href: "/faqs" },
    { label: "Tips", href: "/tips" },
    { label: "Shop Now", href: "/shop" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={glamcyLogo} alt="Glamcy Logo" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-heading text-2xl font-bold text-primary tracking-wide">Glamcy</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`font-body text-sm font-medium transition-colors tracking-wide uppercase ${
                  isActive(link.href)
                    ? "text-secondary"
                    : "text-muted-foreground hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-sm font-medium transition-colors tracking-wide uppercase ${
                    isActive(link.href)
                      ? "text-secondary"
                      : "text-muted-foreground hover:text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
