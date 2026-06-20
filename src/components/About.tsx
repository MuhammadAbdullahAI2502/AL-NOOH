import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AboutProps {
  lang: "en" | "ar";
}

export default function About({ lang }: AboutProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-brand-cream overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Stats banner - top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-gold-500/20 mb-20 border border-brand-gold-500/20"
        >
          {[
            { num: "17+", label: isAr ? "سنوات خبرة" : "Years of Export" },
            { num: "16", label: isAr ? "دولة مخدومة" : "Countries Served" },
            { num: "50K+", label: isAr ? "حيوان مُصدَّر" : "Animals Exported" },
            { num: "99.8%", label: isAr ? "معدل صحة الوصول" : "Arrival Health Rate" },
          ].map((s) => (
            <div key={s.label} className="bg-brand-cream px-6 py-8 text-center">
              <div className="font-serif text-4xl md:text-5xl text-brand-green-800 mb-2">{s.num}</div>
              <div className="text-xs tracking-[0.2em] uppercase text-brand-ink-700/60">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="img-zoom rounded-sm overflow-hidden shadow-xl shadow-brand-green-900/10">
                  <img
                    src="/images/hero-farm.jpg"
                    alt="Farm landscape"
                    loading="lazy"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="img-zoom rounded-sm overflow-hidden shadow-xl shadow-brand-green-900/10">
                  <img
                    src="https://images.pexels.com/photos/15272846/pexels-photo-15272846.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600"
                    alt="Sheep grazing"
                    loading="lazy"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="img-zoom rounded-sm overflow-hidden shadow-xl shadow-brand-green-900/10">
                  <img
                    src="/images/hero-portrait.jpg"
                    alt="Bull portrait"
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="img-zoom rounded-sm overflow-hidden shadow-xl shadow-brand-green-900/10">
                  <img
                    src="https://images.pexels.com/photos/7807849/pexels-photo-7807849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600"
                    alt="Goats"
                    loading="lazy"
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-8 bg-brand-green-900 text-brand-cream p-6 shadow-2xl border border-brand-gold-500/40 max-w-[220px] animate-float-slow">
              <div className="font-serif text-4xl text-gold-gradient mb-1">2008</div>
              <div className="text-xs tracking-[0.2em] uppercase text-brand-cream/70">
                {isAr ? "تقليد من التميز" : "A Tradition of Excellence"}
              </div>
            </div>
          </motion.div>

          {/* Right: Short teaser text + CTA to full About page */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="gold-divider mb-5">
              <span className="text-xs tracking-[0.3em] uppercase text-brand-gold-600 font-medium">
                {isAr ? "من نحن" : "About Al Nooh"}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green-900 leading-[1.05] mb-6">
              {isAr ? (
                <>شريككم الموثوق في صادرات <em className="text-brand-red-600">الماشية الفاخرة</em></>
              ) : (
                <>Your Trusted Partner in <em className="text-brand-red-600">Premium Livestock</em> Export</>
              )}
            </h2>
            <p className="text-brand-ink-700/80 text-lg leading-relaxed mb-8 font-light">
              {isAr
                ? "نربط المزارع العائلية الموثوقة بالمستوردين والمطاعم والمسالخ عبر الشرق الأوسط وآسيا وأفريقيا، مع رعاية بيطرية ومستندات تصدير كاملة في كل خطوة."
                : "We connect trusted family farms with importers, restaurants, and slaughterhouses across the Middle East, Asia, and Africa — backed by veterinary care and complete export documentation at every step."}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-green-950 text-brand-cream font-semibold text-sm rounded-sm hover:bg-brand-green-900 transition-colors group"
            >
              {isAr ? "اقرأ قصتنا الكاملة" : "Read Our Full Story"}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Marquee of credentials */}
      <div className="mt-24 border-y border-brand-green-900/10 bg-brand-cream-2 overflow-hidden py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-16 pr-16">
              {["OIE Compliant", "Halal Certified", "ISO 9001:2015", "FAO Standards", "GCC Approved", "HACCP Certified", "WOAH Compliant", "Veterinary Export License"].map((t) => (
                <span
                  key={`${idx}-${t}`}
                  className="font-serif text-2xl md:text-3xl text-brand-green-900/40 italic"
                >
                  {t} <span className="text-brand-gold-500 mx-4">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
