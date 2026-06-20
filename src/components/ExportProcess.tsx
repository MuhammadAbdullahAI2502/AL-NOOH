import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FileCheck2, Truck, Ship, CheckCircle2 } from "lucide-react";

interface ExportProcessProps {
  lang: "en" | "ar";
}

export default function ExportProcess({ lang }: ExportProcessProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Search,
      num: "01",
      title: isAr ? "اختيار الحيوان" : "Animal Selection",
      text: isAr
        ? "اختر من كتالوجنا أو اطلب مواصفات مخصصة. يفحص خبراؤنا كل حيوان ليتوافق مع احتياجاتك."
        : "Choose from our catalog or request custom specifications. Our experts match each animal to your requirements.",
    },
    {
      icon: FileCheck2,
      num: "02",
      title: isAr ? "الشهادة الصحية" : "Health Certification",
      text: isAr
        ? "فحوصات بيطرية شاملة، بروتوكولات التطعيم، وإصدار شهادات صحية متوافقة مع OIE."
        : "Comprehensive veterinary inspections, vaccination protocols, and OIE-compliant health certificates issued.",
    },
    {
      icon: Truck,
      num: "03",
      title: isAr ? "تحضير النقل" : "Transport Preparation",
      text: isAr
        ? "حجر صحي، ترطيب، تغذية، وتحميل في مركبات معتمدة لرفاهية الحيوان."
        : "Quarantine, hydration, feeding, and loading into welfare-certified transport vehicles.",
    },
    {
      icon: Ship,
      num: "04",
      title: isAr ? "الشحن الجوي/البحري" : "Air & Sea Shipping",
      text: isAr
        ? "شحن بحري وجوي دولي مع رعاية على متن السفينة، تتبع، ووصول مضمون."
        : "International sea freight and air cargo with in-transit care, real-time tracking, and guaranteed arrival.",
    },
  ];

  return (
    <section id="process" className="relative py-24 md:py-32 bg-brand-cream-2 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" className="text-brand-green-900/5">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="gold-divider justify-center mb-5">
            <span className="text-xs tracking-[0.3em] uppercase text-brand-gold-600 font-medium">
              {isAr ? "عملية التصدير" : "The Export Process"}
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green-900 leading-[1.05] mb-6 max-w-3xl mx-auto"
          >
            {isAr ? (
              <>رحلة <em className="text-brand-red-600">سلسة</em>، من المزرعة إلى وجهتك</>
            ) : (
              <>A <em className="text-brand-red-600">Seamless</em> Journey, Farm to Destination</>
            )}
          </motion.h2>
          <p className="text-brand-ink-700/70 text-lg max-w-2xl mx-auto font-light">
            {isAr
              ? "عملية شفافة من أربع مراحل مصممة للامتثال، رعاية الحيوان، والراحة."
              : "A transparent, four-stage process engineered for compliance, animal welfare, and your peace of mind."}
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-brand-gold-500 to-transparent"></div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative mx-auto w-24 h-24 mb-6">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-brand-gold-500/40"></div>
                {/* Inner circle */}
                <div className="absolute inset-2 rounded-full bg-brand-green-900 flex items-center justify-center shadow-lg shadow-brand-green-900/20 group hover:bg-brand-red-600 transition-colors">
                  <step.icon className="w-8 h-8 text-brand-gold-400" />
                </div>
                {/* Number badge */}
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand-gold-500 text-brand-green-950 text-xs font-bold flex items-center justify-center shadow-md">
                  {step.num}
                </div>
              </div>
              <h3 className="font-serif text-xl text-brand-green-900 mb-3">{step.title}</h3>
              <p className="text-brand-ink-700/70 text-sm leading-relaxed font-light">{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Outcome guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-green-900 text-brand-gold-400 rounded-full">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm tracking-wide">
              {isAr
                ? "ضمان وصول صحي ٩٩.٨٪ • تأمين كامل للشحنة"
                : "99.8% Healthy Arrival Guarantee • Full Shipment Insurance"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
