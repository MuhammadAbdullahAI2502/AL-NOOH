import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

interface NavbarProps {
  lang: "en" | "ar";
  setLang: (l: "en" | "ar") => void;
}

const pageLinks = [
  { to: "/", label: "Home" },
  { to: "/livestock", label: "Livestock" },
  { to: "/restaurants", label: "For Restaurants" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-brand-green-950/95 backdrop-blur-md border-b ${
        scrolled
          ? "border-brand-gold-500/20 py-3 shadow-lg shadow-brand-green-950/20"
          : "border-brand-gold-500/0 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-full border border-brand-gold-500/60 flex items-center justify-center bg-linear-to-br from-brand-green-800 to-brand-green-950 group-hover:border-brand-gold-400 transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-gold-400" fill="currentColor">
                <path d="M12 2L9 6H6l3 4-3 4h3l3 4 3-4h3l-3-4 3-4h-3L12 2z" opacity="0.9" />
              </svg>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-brand-gold-400 border-2 border-brand-green-950"></div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg md:text-xl font-semibold text-brand-cream tracking-wide">AL NOOH</span>
            <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-brand-gold-400 font-medium">LIVESTOCK EXPORTS</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {pageLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? "text-brand-cream" : "text-brand-cream/80 hover:text-brand-gold-400"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-brand-gold-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-gold-500/30 text-brand-cream/80 hover:text-brand-gold-400 hover:border-brand-gold-400 transition-all text-xs font-medium"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "العربية" : "English"}</span>
          </button>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-brand-gold-500 to-brand-gold-600 text-brand-green-950 text-sm font-semibold rounded-sm hover:from-brand-gold-400 hover:to-brand-gold-500 transition-all btn-shine tracking-wide"
          >
            {lang === "en" ? "Request Quote" : "عرض سعر"}
            <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-cream border border-brand-gold-500/30 rounded-sm"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-brand-green-950 border-t border-brand-gold-500/20"
          >
            <nav className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-4">
              {pageLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-brand-cream/90 hover:text-brand-gold-400 transition-colors py-2 border-b border-brand-gold-500/10"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-brand-gold-500 text-brand-green-950 font-semibold text-sm rounded-sm"
              >
                {lang === "en" ? "Request Quote" : "عرض سعر"}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
