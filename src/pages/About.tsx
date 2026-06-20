import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Globe2, ShieldCheck, FileCheck, Leaf, Users } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

interface AboutProps {
  lang: "en" | "ar";
}

export default function About({ lang }: AboutProps) {
  useSEO(
    "About Al Nooh — Trusted Livestock Exporter Since 2008",
    "Learn about Al Nooh's farm-based sourcing, animal welfare standards, veterinary certifications, and 17+ years of livestock export experience across 16 countries."
  );
  const isAr = lang === "ar";

  const features = [
    {
      icon: ShieldCheck,
      title: isAr ? "الرعاية البيطرية المعتمدة" : "Veterinary Certified",
      desc: isAr
        ? "معايير صحية عالية مع إشراف بيطري مستمر"
        : "Premium health standards with continuous veterinary oversight",
    },
    {
      icon: Globe2,
      title: isAr ? "ذبح حلال معتمد" : "Halal Approved",
      desc: isAr
        ? "جميع المنتجات تلبي المعايير الإسلامية الصارمة"
        : "All products meet strict Islamic standards",
    },
    {
      icon: FileCheck,
      title: isAr ? "رخصة التصدير" : "Export Licensed",
      desc: isAr
        ? "رخصة رسمية للتصدير إلى أكثر من 16 دولة"
        : "Official export license to 16+ countries",
    },
    {
      icon: Award,
      title: isAr ? "شهادة ISO 9001:2015" : "ISO 9001:2015",
      desc: isAr
        ? "معايير الجودة الدولية المعترف بها عالمياً"
        : "Globally recognized quality standards",
    },
    {
      icon: Leaf,
      title: isAr ? "التغذية الطبيعية" : "Natural Feeding",
      desc: isAr
        ? "تغذية طبيعية وصحية خالية من المواد الكيميائية"
        : "Natural, chemical-free nutrition",
    },
    {
      icon: Users,
      title: isAr ? "شراكات موثوقة" : "Trusted Partnerships",
      desc: isAr
        ? "علاقات طويلة الأمد مع مزارع عائلية موثوقة"
        : "Long-term relationships with trusted family farms",
    },
  ];

  const stats = [
    { number: "17+", label: isAr ? "سنوات الخبرة" : "Years Experience" },
    { number: "16+", label: isAr ? "دولة التصدير" : "Export Countries" },
    { number: "10K+", label: isAr ? "الحيوانات السنوية" : "Annual Animals" },
    { number: "100%", label: isAr ? "الامتثال القانوني" : "Legal Compliance" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream via-brand-cream to-brand-green-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-40 pb-12 md:pt-48 md:pb-20 overflow-hidden">
        <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-brand-gold-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-brand-green-900/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold-500/15 border border-brand-gold-400/50 mx-auto mb-6 block">
            <span className="w-2 h-2 rounded-full bg-brand-gold-500"></span>
            <span className="text-sm font-semibold text-brand-gold-600 tracking-wide uppercase">{isAr ? "معلومات عنا" : "About Us"}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-green-950 mb-6 text-center leading-tight">
            {isAr ? "حول شركة النور" : "About Al Nooh"}
          </h1>
          <p className="text-xl text-brand-green-700 text-center mb-8 font-medium">
            {isAr
              ? "شريكك الموثوق به في تصدير الماشية المتميزة"
              : "Your Trusted Partner in Premium Livestock Export"}
          </p>
        </motion.div>
      </section>

      {/* Main Story */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-brand-green-950/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none text-brand-green-900 space-y-6"
          >
            <p className="text-lg leading-relaxed">
              {isAr
                ? "بدأت شركة النور في عام 2008 برؤية واضحة: ربط المزارع الموثوقة بالأسواق الدولية عبر سلسلة توريد شفافة وآمنة. اليوم نخدم المستوردين والمطاعم والمسالخ في الشرق الأوسط وآسيا وأفريقيا، مع التزام كامل برعاية الحيوان والامتثال التنظيمي."
                : "Al Nooh began in 2008 with a clear vision: connect trusted farms to international markets through a transparent, traceable supply chain. Today we serve importers, restaurants, and slaughterhouses across the Middle East, Asia, and Africa, with an unwavering commitment to animal welfare and regulatory compliance."}
            </p>
            <p className="text-lg leading-relaxed text-brand-green-800">
              {isAr
                ? "مع أكثر من 17 سنة من الخبرة في الصناعة، طورنا أنظمة معقدة لضمان جودة الحيوانات من بداية التربية إلى الشحن النهائي. فريقنا يضم خبراء بيطريين وخبراء لوجستيين وأخصائيين في الامتثال يعملون بلا كلل لتقديم أفضل النتائج."
                : "With over 17 years of industry experience, we've developed sophisticated systems to ensure livestock quality from initial breeding through final shipment. Our team includes veterinary experts, logistics specialists, and compliance officers working tirelessly to deliver excellence."}
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 pt-12 border-t border-brand-green-200"
          >
            <h3 className="text-2xl font-bold text-brand-green-950 mb-8 text-center">
              {isAr ? "رحلتنا عبر السنوات" : "Our Journey"}
            </h3>
            <div className="space-y-6">
              {[
                { year: "2008", title: isAr ? "التأسيس" : "Founded", desc: isAr ? "بدأنا مع رؤية واضحة لتقديم ماشية معتمدة عالية الجودة" : "Started with a vision for premium certified livestock" },
                { year: "2010", title: isAr ? "ISO 9001" : "ISO 9001", desc: isAr ? "حصلنا على شهادة ISO 9001:2015 لأنظمة الجودة" : "Achieved ISO 9001:2015 quality certification" },
                { year: "2013", title: isAr ? "التوسع الدولي" : "Global Expansion", desc: isAr ? "بدأنا التصدير إلى أكثر من 16 دولة حول العالم" : "Expanded to 16+ countries worldwide" },
                { year: "2018", title: isAr ? "الابتكار التكنولوجي" : "Tech Innovation", desc: isAr ? "طبقنا تقنيات تتبع الحيوانات الحديثة والتوثيق الرقمي" : "Implemented advanced animal tracking technology" },
                { year: "2023", title: isAr ? "الاستدامة" : "Sustainability", desc: isAr ? "بدأنا مشاريع الاستدامة البيئية وحفظ الموارد" : "Launched environmental sustainability initiatives" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-brand-gold-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.year.slice(-2)}
                    </div>
                    {idx < 4 && <div className="w-1 h-16 bg-gradient-to-b from-brand-gold-500 to-transparent"></div>}
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="font-bold text-brand-green-950">{item.title}</h4>
                    <p className="text-brand-green-700 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-950 mb-12 text-center">
            {isAr ? "مجالات الخبرة" : "Areas of Excellence"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Farm-Based Sourcing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-gold-500"
            >
              <h3 className="text-xl font-bold text-brand-green-950 mb-4">
                {isAr ? "المصادر المختارة من المزارع" : "Farm-Based Sourcing"}
              </h3>
              <p className="text-brand-green-700">
                {isAr
                  ? "يتم اختيار الحيوانات بعناية من شبكتنا من المزارع العائلية الموثوقة، مما يضمن أصولاً معروفة لكل حيوان."
                  : "Carefully selected from our network of trusted family farms, ensuring traceable origins for every animal."}
              </p>
            </motion.div>

            {/* Animal Care */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-gold-500"
            >
              <h3 className="text-xl font-bold text-brand-green-950 mb-4">
                {isAr ? "رعاية وتغذية الحيوانات" : "Animal Care & Feeding"}
              </h3>
              <p className="text-brand-green-700">
                {isAr
                  ? "تغذية طبيعية وإشراف بيطري وبيئات نظيفة — لأن الصحة التسامحية تبدأ من المصدر."
                  : "Natural feeding, veterinary oversight, and hygienic environments — because uncompromising health begins at the source."}
              </p>
            </motion.div>

            {/* Export Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-gold-500"
            >
              <h3 className="text-xl font-bold text-brand-green-950 mb-4">
                {isAr ? "خبرة التصدير الدولي" : "Export Experience"}
              </h3>
              <p className="text-brand-green-700">
                {isAr
                  ? "17 سنة من التصدير الدولي عبر 16 دولة مع امتثال تنظيمي خالي من الأخطاء."
                  : "17 years of international export across 16 countries with flawless regulatory compliance."}
              </p>
            </motion.div>

            {/* Quality Assurance */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-gold-500"
            >
              <h3 className="text-xl font-bold text-brand-green-950 mb-4">
                {isAr ? "ضمان الجودة" : "Quality Assurance"}
              </h3>
              <p className="text-brand-green-700">
                {isAr
                  ? "كل حيوان يخضع لفحوصات صحية دقيقة وشهادات معترف بها دولياً قبل التصدير."
                  : "Every animal undergoes rigorous health checks and internationally recognized certifications before export."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-brand-green-950/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-950 mb-12 text-center">
            {isAr ? "الشهادات والمعايير" : "Certifications & Standards"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-8 h-8 text-brand-gold-500 mb-4" />
                  <h3 className="text-lg font-bold text-brand-green-950 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-brand-green-700">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-950 mb-12 text-center">
            {isAr ? "إحصائياتنا" : "Our Numbers"}
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center bg-brand-green-950 text-brand-cream p-8 rounded-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-gold-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-cream/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-green-950 text-brand-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isAr ? "هل تريد معرفة المزيد؟" : "Want to Partner With Us?"}
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8">
            {isAr
              ? "تواصل معنا اليوم للحصول على أفضل الحلول في تصدير الماشية المعتمدة."
              : "Reach out today to learn more about our premium livestock solutions."}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold-500 text-brand-green-950 font-semibold rounded-sm hover:bg-brand-gold-400 transition-all"
          >
            {isAr ? "اتصل بنا الآن" : "Contact Us"}
          </Link>
        </div>
      </section>
    </div>
  );
}
