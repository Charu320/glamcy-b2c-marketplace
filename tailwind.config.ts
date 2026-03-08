import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "hero-float": {
          "0%, 100%": { 
            transform: "translateY(0) rotate(0deg) scale(1)",
            filter: "brightness(1) drop-shadow(0 0 20px rgba(43, 65%, 52%, 0.3))"
          },
          "25%": { 
            transform: "translateY(-15px) rotate(-2deg) scale(1.02)",
            filter: "brightness(1.05) drop-shadow(0 0 30px rgba(43, 65%, 52%, 0.4))"
          },
          "50%": { 
            transform: "translateY(-20px) rotate(0deg) scale(1.03)",
            filter: "brightness(1.1) drop-shadow(0 0 40px rgba(43, 65%, 52%, 0.5))"
          },
          "75%": { 
            transform: "translateY(-15px) rotate(2deg) scale(1.02)",
            filter: "brightness(1.05) drop-shadow(0 0 30px rgba(43, 65%, 52%, 0.4))"
          },
        },
        "product-glow": {
          "0%, 100%": { 
            boxShadow: "0 20px 60px -15px hsl(18 30% 23% / 0.15), 0 0 40px rgba(43, 65%, 52%, 0.2)"
          },
          "50%": { 
            boxShadow: "0 20px 60px -15px hsl(18 30% 23% / 0.15), 0 0 60px rgba(43, 65%, 52%, 0.4)"
          },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7", textShadow: "0 0 20px hsl(43 65% 52% / 0.5)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        float: "float 4s ease-in-out infinite",
        "hero-float": "hero-float 8s ease-in-out infinite",
        "product-glow": "product-glow 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-out",
      },
      perspective: {
        "1000": "1000px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
