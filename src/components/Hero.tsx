import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Award, Globe2 } from "lucide-react";

interface HeroProps {
  lang: "en" | "ar";
}

export default function Hero({ lang }: HeroProps) {
  const isAr = lang === "ar";
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-brand-green-950">
      {/* Background imagery with parallax feel */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <div className="relative img-zoom">
            <img
              src="/images/hero-farm.jpg"
              alt="Premium cattle on open pastures"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-linear-to-r from-brand-green-950 via-brand-green-950/85 to-brand-green-950/40"></div>
          </div>
          <div className="relative hidden md:block img-zoom">
            <img
              src="/images/hero-portrait.jpg"
              alt="Prize-winning bull portrait"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-linear-to-l from-brand-green-950 via-brand-green-950/85 to-brand-green-950/40"></div>
          </div>
        </div>
        {/* Vignette */}
        <div className="absolute inset-0 bg-linear-to-b from-brand-green-950/50 via-transparent to-brand-green-950"></div>
        <div className="grain-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-brand-gold-400"></div>
            <span className="text-brand-gold-400 text-xs tracking-[0.3em] font-medium uppercase">
              {isAr ? "تأسست ٢٠٠٨ • حاصلة على ISO 9001" : "Est. 2008 • ISO 9001 Certified"}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-brand-cream leading-[1.02] mb-8"
          >
            {isAr ? (
              <>
                ماشية فاخرة
                <br />
                <span className="shimmer-gold italic">تُصدَّر</span> إلى العالم
              </>
            ) : (
              <>
                Premium Livestock
                <br />
                <span className="shimmer-gold italic">Exported</span> Worldwide
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-brand-cream/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light"
          >
            {isAr
              ? "أبقار وأغنام وماعز وعجول جاموس صحية — تربت بعناية، ومعتمدة للتصدير العالمي، وتُسلَّم بأعلى معايير الاحتراف."
              : "Healthy cows, sheep, goats & buffalo calves — raised with care, certified for global export, and delivered with uncompromising professionalism."}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              to="/livestock"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-brand-gold-400 to-brand-gold-500 text-brand-green-950 font-semibold tracking-wide btn-shine rounded-sm hover:shadow-2xl hover:shadow-brand-gold-500/20 transition-all"
            >
              {isAr ? "اعرض الماشية" : "View Our Livestock"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-brand-cream/30 text-brand-cream hover:border-brand-gold-400 hover:text-brand-gold-400 font-medium tracking-wide transition-all rounded-sm"
            >
              <PlayCircle className="w-4 h-4" />
              {isAr ? "تصفح المعرض" : "Browse Gallery"}
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl border-t border-brand-gold-500/20 pt-8"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-gold-400 shrink-0" />
              <div>
                <div className="text-brand-cream text-sm font-medium">{isAr ? "معتمدة" : "Certified"}</div>
                <div className="text-brand-cream/50 text-xs">{isAr ? "بيطرياً" : "Veterinary"}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-brand-gold-400 shrink-0" />
              <div>
                <div className="text-brand-cream text-sm font-medium">{isAr ? "حلال" : "Halal"}</div>
                <div className="text-brand-cream/50 text-xs">{isAr ? "معتمد" : "Approved"}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe2 className="w-5 h-5 text-brand-gold-400 shrink-0" />
              <div>
                <div className="text-brand-cream text-sm font-medium">16+</div>
                <div className="text-brand-cream/50 text-xs">{isAr ? "دولة" : "Countries"}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-brand-cream/50 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-brand-gold-400 to-transparent"></div>
      </motion.div>
    </section>
  );
}
