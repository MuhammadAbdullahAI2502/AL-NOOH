import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  Truck,
  FileCheck,
  CheckCircle2,
  Shield,
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";

interface ProcessProps {
  lang: "en" | "ar";
}

export default function Process({ lang }: ProcessProps) {
  useSEO(
    "Our Export Process — From Farm to Port | Al Nooh",
    "A transparent, step-by-step look at our livestock export process: sourcing, health screening, documentation, transport, and international shipping."
  );
  const isAr = lang === "ar";

  const steps = [
    {
      icon: Search,
      title: isAr ? "الاختيار والتقييم" : "Selection & Evaluation",
      desc: isAr
        ? "نختار الحيوانات بعناية من مزارعنا الموثوقة ونجري فحوصات صحية أولية شاملة."
        : "We carefully select animals from our trusted farms and conduct comprehensive initial health checks.",
    },
    {
      icon: TrendingUp,
      title: isAr ? "التحضير والتغذية" : "Preparation & Nutrition",
      desc: isAr
        ? "نوفر تغذية طبيعية وعالية الجودة مع إشراف بيطري مستمر لضمان أفضل حالة صحية."
        : "We provide premium natural feed with continuous veterinary oversight for optimal health.",
    },
    {
      icon: Shield,
      title: isAr ? "الاختبارات والشهادات" : "Testing & Certification",
      desc: isAr
        ? "تتم فحوصات صحية عميقة واختبارات معملية صارمة لضمان الامتثال الكامل."
        : "Deep health checks and rigorous lab testing ensure complete compliance.",
    },
    {
      icon: FileCheck,
      title: isAr ? "التوثيق القانوني" : "Legal Documentation",
      desc: isAr
        ? "نحصل على جميع الشهادات والرخص المطلوبة للتصدير والاستيراد."
        : "We obtain all required certificates and licenses for export and import.",
    },
    {
      icon: Truck,
      title: isAr ? "النقل الآمن" : "Safe Transportation",
      desc: isAr
        ? "نستخدم مركبات متخصصة مع تهوية مثالية وإشراف طيلة الرحلة."
        : "We use specialized vehicles with optimal ventilation and supervision throughout.",
    },
    {
      icon: CheckCircle2,
      title: isAr ? "التسليم والدعم" : "Delivery & Support",
      desc: isAr
        ? "ندعم عملائنا بدعم كامل ما بعد التسليم والاستشارات المستمرة."
        : "We provide full post-delivery support and ongoing consultation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream via-brand-cream to-brand-green-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-40 pb-12 md:pt-48 md:pb-20 overflow-hidden">
        <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-brand-gold-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="hidden sm:block absolute top-1/3 right-0 w-96 h-96 bg-brand-green-900/5 rounded-full translate-x-1/2 blur-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold-500/15 border border-brand-gold-400/50 mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-gold-500"></span>
            <span className="text-sm font-semibold text-brand-gold-600 tracking-wide uppercase">{isAr ? "عملية التصدير" : "Process"}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-green-950 mb-6">
            {isAr ? "عملية التصدير" : "Export Process"}
          </h1>
          <p className="text-xl text-brand-green-700">
            {isAr
              ? "تعرف على خطواتنا المفصلة لضمان أفضل جودة وأعلى معايير الامتثال."
              : "Discover our detailed steps to ensure the best quality and highest compliance standards."}
          </p>
        </motion.div>
      </section>

      {/* Process Steps */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute top-0 left-0 w-12 h-12 bg-brand-gold-500 rounded-full flex items-center justify-center font-bold text-brand-green-950">
                    {idx + 1}
                  </div>

                  <div className="bg-white p-8 rounded-lg shadow-lg pt-20">
                    <Icon className="w-10 h-10 text-brand-gold-500 mb-4" />
                    <h3 className="text-xl font-bold text-brand-green-950 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-brand-green-700">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline View */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-brand-green-950/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-950 mb-12 text-center">
            {isAr ? "خط زمني للعملية" : "Process Timeline"}
          </h2>

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold-500 rounded-full flex items-center justify-center font-bold text-brand-green-950 mb-2">
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-1 h-20 bg-brand-gold-500/30"></div>
                  )}
                </div>

                <div className="pt-2 pb-8">
                  <h3 className="text-lg font-bold text-brand-green-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-green-700">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-950 mb-12 text-center">
            {isAr ? "ضمان الجودة في كل خطوة" : "Quality Assurance at Every Step"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-brand-green-950 mb-4">
                {isAr ? "الفحوصات الصحية" : "Health Checks"}
              </h3>
              <ul className="space-y-3 text-brand-green-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold-500 font-bold mt-1">✓</span>
                  <span>
                    {isAr
                      ? "فحص جسدي شامل لكل حيوان"
                      : "Comprehensive physical examination for each animal"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold-500 font-bold mt-1">✓</span>
                  <span>
                    {isAr
                      ? "اختبارات معملية وتشخيصية"
                      : "Laboratory and diagnostic tests"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold-500 font-bold mt-1">✓</span>
                  <span>
                    {isAr
                      ? "مراقبة طبية بيطرية مستمرة"
                      : "Continuous veterinary monitoring"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold-500 font-bold mt-1">✓</span>
                  <span>
                    {isAr ? "فحصات الأمراض المعدية" : "Infectious disease screening"}
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-brand-green-950 mb-4">
                {isAr ? "الامتثال القانوني" : "Legal Compliance"}
              </h3>
              <ul className="space-y-3 text-brand-green-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold-500 font-bold mt-1">✓</span>
                  <span>
                    {isAr
                      ? "شهادات صحية حكومية"
                      : "Government health certificates"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold-500 font-bold mt-1">✓</span>
                  <span>
                    {isAr ? "ترخيص الذبح الحلال" : "Halal slaughter certification"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold-500 font-bold mt-1">✓</span>
                  <span>
                    {isAr
                      ? "وثائق الاستيراد والتصدير"
                      : "Import/Export documentation"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold-500 font-bold mt-1">✓</span>
                  <span>
                    {isAr
                      ? "معايير الرفاهة الحيوانية"
                      : "Animal welfare standards"}
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-green-950 text-brand-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isAr ? "اختبر عملية التصدير المحترفة" : "Experience Professional Export"}
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8">
            {isAr
              ? "اتصل بنا لمعرفة كيفية يمكننا مساعدتك في الحصول على أفضل الماشية المعتمدة."
              : "Contact us to see how we can help you get the best certified livestock."}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold-500 text-brand-green-950 font-semibold rounded-sm hover:bg-brand-gold-400 transition-all"
          >
            {isAr ? "اطلب عرض سعر" : "Request Quote"}
          </a>
        </div>
      </section>
    </div>
  );
}
