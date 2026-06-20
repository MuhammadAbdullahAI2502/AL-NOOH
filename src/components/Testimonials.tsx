import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../data";

interface TestimonialsProps {
  lang: "en" | "ar";
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: 1 | -1) => {
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="relative py-24 md:py-32 bg-brand-cream overflow-hidden">
      {/* Decorative quote */}
      <div className="absolute top-20 right-10 md:right-20 font-serif text-[20rem] text-brand-green-900/5 leading-none select-none pointer-events-none">
        "
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <div className="gold-divider justify-center mb-5">
            <span className="text-xs tracking-[0.3em] uppercase text-brand-gold-600 font-medium">
              {isAr ? "آراء العملاء" : "Client Voices"}
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green-900 leading-tight">
            {isAr ? (
              <>موثوق به من <em className="text-brand-red-600">المشترين العالميين</em></>
            ) : (
              <>Trusted by <em className="text-brand-red-600">Global Buyers</em></>
            )}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-white border border-brand-gold-500/30 p-8 md:p-14 shadow-2xl shadow-brand-green-900/5 rounded-sm"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-gold-500 text-brand-gold-500" />
            ))}
          </div>

          <Quote className="w-10 h-10 text-brand-gold-500/30 mb-6" />

          <div key={current} className="animate-fade-up">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-brand-green-900 leading-[1.3] mb-8 italic">
              "{t.quote}"
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-brand-green-900/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-green-900 flex items-center justify-center text-2xl">
                  {t.flag}
                </div>
                <div>
                  <div className="font-serif text-lg text-brand-green-900">{t.name}</div>
                  <div className="text-sm text-brand-ink-700/60">{t.role}</div>
                  <div className="text-sm text-brand-ink-700/80 font-medium">{t.company}</div>
                </div>
              </div>
              <div className="text-xs tracking-[0.3em] uppercase text-brand-gold-600 font-medium">
                {t.country}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 transition-all ${
                    i === current ? "w-12 bg-brand-gold-500" : "w-6 bg-brand-green-900/20 hover:bg-brand-green-900/40"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                className="w-11 h-11 rounded-full border border-brand-green-900/20 hover:border-brand-gold-500 hover:bg-brand-gold-500 hover:text-white text-brand-green-900 transition-all flex items-center justify-center"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => go(1)}
                className="w-11 h-11 rounded-full border border-brand-green-900/20 hover:border-brand-gold-500 hover:bg-brand-gold-500 hover:text-white text-brand-green-900 transition-all flex items-center justify-center"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
