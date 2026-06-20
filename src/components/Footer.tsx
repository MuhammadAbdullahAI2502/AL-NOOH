import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Socials = [
  {
    name: "Instagram",
    d: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
  },
  {
    name: "LinkedIn",
    d: "M4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2 6v11H3V9h3zm5 0v11h-3V9h3zm0-3V3h-3v3h3zm5 3c-2 0-3 1-3 1V9h-3v11h3v-6c0-1 1-2 2-2s2 1 2 2v6h3v-6c0-3-2-5-4-5z",
  },
  {
    name: "Twitter",
    d: "M22 5.9a8 8 0 0 1-2.4.7A4.1 4.1 0 0 0 21.4 4a8.3 8.3 0 0 1-2.6 1A4.1 4.1 0 0 0 11.8 8 11.6 11.6 0 0 1 3.3 4a4.1 4.1 0 0 0 1.3 5.5A4 4 0 0 1 2.8 9v.1a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 17.7 11.6 11.6 0 0 0 8.3 20c7.5 0 11.6-6.3 11.6-11.7v-.5A8.2 8.2 0 0 0 22 5.9z",
  },
  {
    name: "Facebook",
    d: "M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.9 1.9-1.9H17V2.1c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8V10H6v4h3.5v8H13z",
  },
];

interface FooterProps {
  lang: "en" | "ar";
}

export default function Footer({ lang }: FooterProps) {
  const isAr = lang === "ar";
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-ink-900 text-brand-cream/70 border-t border-brand-gold-500/20">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full border border-brand-gold-500/60 flex items-center justify-center bg-linear-to-br from-brand-green-800 to-brand-green-950">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-gold-400" fill="currentColor">
                  <path d="M12 2L9 6H6l3 4-3 4h3l3 4 3-4h3l-3-4 3-4h-3L12 2z" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl text-brand-cream">AL NOOH</span>
                <span className="text-[10px] tracking-[0.3em] text-brand-gold-400 font-medium">
                  LIVESTOCK EXPORTS
                </span>
              </div>
            </div>
            <p className="text-brand-cream/60 leading-relaxed mb-6 max-w-md font-light">
              {isAr
                ? "شركة رائدة عالمياً في تصدير الماشية الحية ومنتجات اللحوم الحلال، تخدم المشترين عبر الشرق الأوسط وآسيا وأفريقيا منذ عام ٢٠٠٨."
                : "A world-class exporter of live livestock and halal meat products, serving buyers across the Middle East, Asia, and Africa since 2008."}
            </p>
            <div className="flex gap-3 mb-7">
              {Socials.map((S) => (
                <a
                  key={S.name}
                  href="#"
                  className="w-10 h-10 rounded-full border border-brand-cream/15 hover:border-brand-gold-400 hover:text-brand-gold-400 flex items-center justify-center transition-all"
                  aria-label={S.name}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d={S.d} />
                  </svg>
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+923209792921" className="flex items-center gap-3 hover:text-brand-gold-400 transition-colors">
                <Phone className="w-4 h-4 text-brand-gold-400 shrink-0" />
                +923209792921
              </a>
              <a href="mailto:yasiriqbal.thebest@gmail.com" className="flex items-center gap-3 hover:text-brand-gold-400 transition-colors">
                <Mail className="w-4 h-4 text-brand-gold-400 shrink-0" />
                yasiriqbal.thebest@gmail.com
              </a>
              <span className="flex items-center gap-3 text-brand-cream/60">
                <MapPin className="w-4 h-4 text-brand-gold-400 shrink-0" />
                Dubai, UAE
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-brand-gold-400 font-semibold mb-5">
              {isAr ? "الماشية" : "Livestock"}
            </div>
            <ul className="space-y-3 text-sm">
              {[
                { l: isAr ? "الأبقار" : "Cows & Cattle", h: "/livestock" },
                { l: isAr ? "الأغنام" : "Sheeps", h: "/livestock" },
                { l: isAr ? "الماعز" : "Goats", h: "/livestock" },
                { l: isAr ? "العجول والجاموس" : "Calves & Buffalo", h: "/livestock" },
                { l: isAr ? "لحوم حلال للمطاعم" : "Halal Meat for Restaurants", h: "/restaurants" },
              ].map((l) => (
                <li key={l.l}>
                  <Link to={l.h} className="hover:text-brand-gold-400 transition-colors inline-flex items-center gap-1 group">
                    {l.l}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-brand-gold-400 font-semibold mb-5">
              {isAr ? "الشركة" : "Company"}
            </div>
            <ul className="space-y-3 text-sm">
              {[
                { l: isAr ? "من نحن" : "About", h: "/about" },
                { l: isAr ? "الرعاية الصحية" : "Health & Care", h: "/#health" },
                { l: isAr ? "العملية" : "Export Process", h: "/process" },
                { l: isAr ? "الشحن" : "Logistics", h: "/#logistics" },
                { l: isAr ? "المعرض" : "Gallery", h: "/gallery" },
                { l: isAr ? "اتصل بنا" : "Contact", h: "/contact" },
              ].map((x) => (
                <li key={x.l}>
                  <Link to={x.h} className="hover:text-brand-gold-400 transition-colors">
                    {x.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-brand-gold-400 font-semibold mb-5">
              {isAr ? "النشرة التجارية" : "Trade Newsletter"}
            </div>
            <p className="text-sm text-brand-cream/60 mb-4 leading-relaxed font-light">
              {isAr
                ? "تحديثات أسبوعية عن الأسعار، توافر الماشية، ومواعيد التصدير."
                : "Weekly pricing updates, livestock availability, and export schedules."}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder={isAr ? "بريدك الإلكتروني" : "your@email.com"}
                className="flex-1 bg-brand-ink-800 border border-brand-cream/10 focus:border-brand-gold-500 outline-none px-4 py-3 text-brand-cream text-sm placeholder:text-brand-cream/30"
              />
              <button
                type="submit"
                className="px-5 bg-brand-gold-500 text-brand-green-950 text-sm font-semibold hover:bg-brand-gold-400 transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center gap-4 py-6 border-y border-brand-cream/10 mb-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-brand-gold-400 font-medium mr-2">
            {isAr ? "الشهادات" : "Certifications"}
          </span>
          {["ISO 9001", "OIE Compliant", "Halal Certified", "HACCP", "GCC Approved"].map((c) => (
            <span key={c} className="text-xs text-brand-cream/50 px-3 py-1 border border-brand-cream/10 rounded-full">
              {c}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-brand-cream/40">
          <div>
            © {year} Al Nooh Livestock Exports. {isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-gold-400 transition-colors">
              {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
            </a>
            <a href="#" className="hover:text-brand-gold-400 transition-colors">
              {isAr ? "الشروط" : "Terms of Service"}
            </a>
            <a href="#" className="hover:text-brand-gold-400 transition-colors">
              {isAr ? "سياسة التصدير" : "Export Policy"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
