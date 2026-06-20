import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HomeCTAProps {
  lang: "en" | "ar";
}

export default function HomeCTA({ lang }: HomeCTAProps) {
  const isAr = lang === "ar";

  return (
    <section className="px-5 sm:px-8 py-20 md:py-28 bg-brand-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto rounded-4xl bg-gradient-to-r from-brand-green-900 to-brand-green-950 text-brand-cream p-10 sm:p-16 text-center shadow-2xl"
      >
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
          {isAr ? "هل أنت مستعد لبدء استيرادك؟" : "Ready to Start Your Import or Supply Order?"}
        </h2>
        <p className="text-brand-cream/80 max-w-2xl mx-auto mb-9 text-base sm:text-lg">
          {isAr
            ? "تحدث مع فريقنا اليوم عبر واتسآب، أو املأ نموذج الاتصال للحصول على عرض سعر مفصل."
            : "Talk to our team today on WhatsApp, or fill out our contact form for a detailed quotation."}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/923209792921"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#25D366] text-white font-semibold rounded-sm hover:bg-[#1fb855] transition"
          >
            <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="w-5 h-5 rounded-full" />
            {isAr ? "تواصل عبر واتسآب" : "Chat on WhatsApp"}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 bg-brand-gold-500 text-brand-green-950 font-semibold rounded-sm hover:bg-brand-gold-400 transition-all"
          >
            {isAr ? "صفحة الاتصال" : "Contact Page"}
            <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
