import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Ship, Plane, Truck, MapPin, ShieldCheck, Clock, Award, ThumbsUp, DollarSign, Heart } from "lucide-react";
import { exportCountries } from "../data";

interface LogisticsProps {
  lang: "en" | "ar";
}

export default function Logistics({ lang }: LogisticsProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="logistics" className="relative py-24 md:py-32 bg-brand-green-950 overflow-hidden">
      <div className="grain-overlay"></div>
      <div ref={ref} className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-divider justify-center mb-5">
            <span className="text-xs tracking-[0.3em] uppercase text-brand-gold-400 font-medium">
              {isAr ? "الشحن واللوجستيات" : "Logistics & Shipping"}
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-cream leading-[1.05] mb-6 max-w-3xl mx-auto"
          >
            {isAr ? (
              <>خدمة <em className="shimmer-gold">عالمية</em>، رعاية محلية</>
            ) : (
              <>Global Reach, <em className="shimmer-gold">Local Care</em></>
            )}
          </motion.h2>
        </div>

        {/* Logistics image + services */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative img-zoom rounded-sm overflow-hidden"
          >
            <img
              src="/images/export-ship.jpg"
              alt="Cargo ship export logistics"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-green-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream/10 backdrop-blur-md border border-brand-cream/20 rounded-sm mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-brand-cream text-xs tracking-widest uppercase">Live Operations</span>
              </div>
              <h3 className="font-serif text-3xl text-brand-cream">
                {isAr ? "شحنات يومية إلى ١٦ دولة" : "Daily Shipments to 16 Countries"}
              </h3>
            </div>
          </motion.div>

          <div className="space-y-5">
            {[
              {
                icon: Ship,
                title: isAr ? "الشحن البحري" : "Sea Freight",
                desc: isAr
                  ? "حاويات وسفن متخصصة لنقل الحيوانات الحية بكميات كبيرة مع أنظمة تهوية ورعاية."
                  : "Specialized livestock vessels and container ships with ventilation, feeding systems, and onboard veterinary care.",
              },
              {
                icon: Plane,
                title: isAr ? "الشحن الجوي" : "Air Freight",
                desc: isAr
                  ? "شحن جوي سريع عبر IATA LAR للشحنات عالية القيمة والحساسة للوقت."
                  : "Rapid air cargo via IATA LAR-compliant carriers for high-value, time-sensitive shipments.",
              },
              {
                icon: Truck,
                title: isAr ? "النقل البري" : "Overland Transport",
                desc: isAr
                  ? "أسطول من المركبات المعتمدة لرفاهية الحيوان مع تتبع GPS ومراقبة المناخ."
                  : "Fleet of welfare-certified vehicles with GPS tracking, climate monitoring, and trained handlers.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex gap-5 p-6 border border-brand-gold-500/20 hover:border-brand-gold-400/60 bg-brand-green-900/50 hover:bg-brand-green-900 transition-all rounded-sm"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/40 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-brand-gold-400" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-cream mb-2">{s.title}</h4>
                  <p className="text-brand-cream/60 text-sm leading-relaxed font-light">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Countries Served - World Map Section */}
        <div className="relative">
          <div className="gold-divider justify-center mb-10">
            <span className="text-xs tracking-[0.3em] uppercase text-brand-gold-400 font-medium">
              {isAr ? "الدول المخدومة" : "Countries We Serve"}
            </span>
          </div>

          {/* Stylized world map with country dots */}
          <div className="relative bg-brand-green-900/50 border border-brand-gold-500/20 rounded-sm p-8 md:p-12 overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="loggrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c9a961" strokeWidth="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#loggrid)" />
              </svg>
            </div>

            <div className="relative grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {exportCountries.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group flex flex-col items-center gap-2 p-3 rounded-sm hover:bg-brand-gold-500/10 border border-transparent hover:border-brand-gold-500/40 transition-all cursor-default"
                >
                  <div className="relative">
                    <span className="text-3xl">{c.flag}</span>
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-gold-400 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-brand-cream/80 text-[11px] text-center leading-tight font-medium">
                    {c.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-cream/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-gold-400" />
                <span>{isAr ? "١٦ دولة نشطة" : "16 Active Countries"}</span>
              </div>
              <div className="w-1 h-1 bg-brand-gold-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold-400" />
                <span>{isAr ? "متوسط التسليم ٧-٢١ يوماً" : "7-21 Day Avg. Delivery"}</span>
              </div>
              <div className="w-1 h-1 bg-brand-gold-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold-400" />
                <span>{isAr ? "تأمين كامل" : "Full Insurance"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="gold-divider justify-center mb-5">
              <span className="text-xs tracking-[0.3em] uppercase text-brand-gold-400 font-medium">
                {isAr ? "لماذا نحن" : "Why Choose Us"}
              </span>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-cream leading-tight">
              {isAr ? (
                <>الفرق الذي <em className="shimmer-gold">يصنع الفرق</em></>
              ) : (
                <>The Difference That <em className="shimmer-gold">Makes the Difference</em></>
              )}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Heart, title: isAr ? "١٠٠٪ ماشية صحية" : "100% Healthy Livestock", desc: isAr ? "ضمان صحة شامل مع كل شحنة." : "Comprehensive health guarantee with every shipment." },
              { icon: Award, title: isAr ? "معايير دولية" : "International Standards", desc: isAr ? "التزام كامل بمعايير OIE وISO والحلال." : "Full OIE, ISO, and Halal compliance at every stage." },
              { icon: ThumbsUp, title: isAr ? "ثقة عالمية" : "Trusted by Global Buyers", desc: isAr ? "١٧ عاماً من الشراكات طويلة الأمد." : "17 years of long-term buyer partnerships across continents." },
              { icon: DollarSign, title: isAr ? "أسعار تنافسية" : "Competitive Pricing", desc: isAr ? "تسعير شفاف بالجملة بدون رسوم مخفية." : "Transparent bulk pricing with no hidden fees — ever." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-7 bg-linear-to-br from-brand-green-900 to-brand-green-950 border border-brand-gold-500/20 hover:border-brand-gold-400 transition-all rounded-sm group"
              >
                <div className="absolute top-4 right-4 font-serif text-5xl text-brand-gold-500/10">0{i + 1}</div>
                <div className="w-12 h-12 mb-5 rounded-sm bg-brand-gold-500/10 border border-brand-gold-500/30 flex items-center justify-center group-hover:bg-brand-gold-500/20 transition-colors">
                  <f.icon className="w-5 h-5 text-brand-gold-400" />
                </div>
                <h4 className="font-serif text-xl text-brand-cream mb-2">{f.title}</h4>
                <p className="text-brand-cream/60 text-sm leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
