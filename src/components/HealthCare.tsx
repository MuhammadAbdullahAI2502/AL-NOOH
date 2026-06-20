import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Droplets, Stethoscope, ShieldCheck, Wheat, HeartHandshake } from "lucide-react";

interface HealthCareProps {
  lang: "en" | "ar";
}

export default function HealthCare({ lang }: HealthCareProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      icon: Wheat,
      title: isAr ? "نظام تغذية طبيعي" : "Natural Feeding System",
      text: isAr
        ? "تغذية عضوية، مياه نقية، وأعلاف متوازنة — لا هرمونات، لا مضادات حيوية غير ضرورية."
        : "Organic feed, clean water, and balanced nutrition — no hormones, no unnecessary antibiotics.",
    },
    {
      icon: Droplets,
      title: isAr ? "بيئة نظيفة" : "Clean Farm Environment",
      text: isAr
        ? "حظائر صحية، بروتوكولات تعقيم، ومساحات مفتوحة للرعي والرعاية المثلى."
        : "Sanitary barns, sterilization protocols, and open spaces for grazing and optimal welfare.",
    },
    {
      icon: Stethoscope,
      title: isAr ? "إشراف بيطري" : "Veterinary Supervision",
      text: isAr
        ? "فريق بيطري بدوام كامل يجري فحوصات أسبوعية وإجراءات وقائية."
        : "Full-time veterinary team conducting weekly examinations and preventive care programs.",
    },
    {
      icon: ShieldCheck,
      title: isAr ? "ماشية خالية من الأمراض" : "Disease-Free Livestock",
      text: isAr
        ? "فحوصات معتمدة من OIE، وحجر صحي، وشهادات صحية قبل كل شحنة."
        : "OIE-compliant testing, quarantine protocols, and health certificates prior to every shipment.",
    },
  ];

  return (
    <section id="health" className="relative py-24 md:py-32 bg-brand-cream overflow-hidden">
      {/* Decorative */}
      <div className="hidden sm:block absolute top-20 right-0 w-96 h-96 bg-brand-green-700/5 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute bottom-0 left-0 w-96 h-96 bg-brand-red-600/5 rounded-full blur-3xl"></div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-2">
            <div className="gold-divider mb-5">
              <span className="text-xs tracking-[0.3em] uppercase text-brand-gold-600 font-medium">
                {isAr ? "الرعاية الصحية للحيوان" : "Animal Health & Care"}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green-900 leading-[1.05] mb-6">
              {isAr ? (
                <>صحة <em className="text-brand-red-600">لا تُساوم</em>، من المزرعة إلى الميناء</>
              ) : (
                <>Uncompromising <em className="text-brand-red-600">Health</em>, From Farm to Port</>
              )}
            </h2>
            <p className="text-brand-ink-700/75 text-lg leading-relaxed mb-8 font-light">
              {isAr
                ? "رعاية الحيوان ليست مجرد سياسة — إنها الأساس الذي يُبنى عليه كل شيء آخر. حيوانات صحية تعني عملاء سعداء، وشحنات ناجحة، وسمعة تستمر لعقود."
                : "Animal welfare isn't just policy — it's the foundation everything else is built on. Healthy animals mean satisfied clients, successful shipments, and a reputation that lasts decades."}
            </p>

            {/* Feature callout */}
            <div className="flex items-start gap-4 p-5 bg-brand-green-900 text-brand-cream rounded-sm">
              <Leaf className="w-8 h-8 text-brand-gold-400 shrink-0" />
              <div>
                <div className="font-serif text-lg mb-1">{isAr ? "وعدنا الأخضر" : "Our Green Promise"}</div>
                <p className="text-sm text-brand-cream/70 leading-relaxed">
                  {isAr
                    ? "ممارسات زراعية مستدامة، انبعاثات منخفضة، ورعاية أخلاقية للحيوان."
                    : "Sustainable farming practices, low-emission operations, and ethical animal husbandry across every facility."}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Pillars grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative p-7 bg-white border border-brand-green-900/10 hover:border-brand-gold-500/60 rounded-sm card-lift ${
                  i % 2 === 1 ? "sm:mt-10" : ""
                }`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold-500/5 rounded-bl-full"></div>
                <div className="relative">
                  <div className="w-12 h-12 mb-5 rounded-sm bg-brand-green-900 flex items-center justify-center group-hover:bg-brand-red-600 transition-colors">
                    <p.icon className="w-5 h-5 text-brand-gold-400" />
                  </div>
                  <h3 className="font-serif text-xl text-brand-green-900 mb-2">{p.title}</h3>
                  <p className="text-brand-ink-700/70 text-sm leading-relaxed">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Veterinary process strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid md:grid-cols-5 gap-0 border border-brand-gold-500/30 rounded-sm overflow-hidden"
        >
          <div className="md:col-span-2 relative img-zoom">
            <img
              src="https://images.pexels.com/photos/33950078/pexels-photo-33950078.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800"
              alt="Healthy cattle"
              className="w-full h-full object-cover aspect-4/3 md:aspect-auto"
            />
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-brand-green-950/60 md:to-brand-green-950/80"></div>
          </div>
          <div className="md:col-span-3 bg-brand-green-950 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <HeartHandshake className="w-6 h-6 text-brand-gold-400" />
              <span className="text-xs tracking-[0.3em] uppercase text-brand-gold-400 font-medium">
                {isAr ? "بروتوكول ما قبل الشحن" : "Pre-Shipment Protocol"}
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-brand-cream mb-6 leading-tight">
              {isAr ? "٧٢ ساعة من الفحوصات قبل أي شحنة" : "72 Hours of Inspection Before Every Shipment"}
            </h3>
            <div className="space-y-3">
              {[
                isAr ? "فحص بيطري بدني شامل" : "Comprehensive physical veterinary examination",
                isAr ? "فحوصات دم واختبارات أمراض" : "Blood panels and disease screening",
                isAr ? "فترة الحجر الصحي والمراقبة" : "Quarantine and observation period",
                isAr ? "تعزيز التطعيمات وإصدار الشهادات" : "Vaccination boosters and certification",
                isAr ? "التقييم الغذائي والترطيب" : "Nutritional and hydration assessment",
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border border-brand-gold-500 flex items-center justify-center text-[10px] text-brand-gold-400 font-semibold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-brand-cream/80 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
