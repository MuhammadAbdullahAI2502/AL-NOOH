import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Beef,
  Truck,
  ThermometerSnowflake,
  ShieldCheck,
  ClipboardCheck,
  Clock,
  Package,
} from "lucide-react";
import { livestockData } from "../data/livestockData";
import { useSEO } from "../hooks/useSEO";

interface RestaurantsProps {
  lang: "en" | "ar";
}

const meatCategories = [
  {
    icon: Beef,
    title: "Beef & Buffalo Meat",
    desc: "Boneless, bone-in, mince (qeema), shank, ribs & offal — sourced from Sahiwal, Friesian, Angus, Brahman & Nili-Ravi buffalo.",
  },
  {
    icon: Beef,
    title: "Mutton & Lamb",
    desc: "Whole carcass, leg, shoulder, chops & mince from Awassi, Kacchi, Kajli, Toda & Tedhi breeds — ideal for BBQ and karahi cuts.",
  },
  {
    icon: Beef,
    title: "Veal & Calf Meat",
    desc: "Tender veal-style cuts from young dairy & beef calves, perfect for premium menu items.",
  },
  {
    icon: Package,
    title: "Custom Cuts & Bulk Orders",
    desc: "Tell us your menu — we cut, pack, and deliver to your exact specification in bulk crates.",
  },
];

const whyUs = [
  { icon: ShieldCheck, title: "Halal Certified", desc: "Every animal is Halal slaughtered under certified supervision with full documentation." },
  { icon: ClipboardCheck, title: "Vet-Inspected Quality", desc: "Government-authorized veterinary checks before and after slaughter, every single batch." },
  { icon: ThermometerSnowflake, title: "Cold-Chain Delivery", desc: "Refrigerated transport keeps meat fresh from our facility straight to your kitchen." },
  { icon: Clock, title: "Daily & Scheduled Supply", desc: "Set up a recurring daily, weekly, or on-demand supply schedule — never run out of stock." },
];

export default function Restaurants({ lang }: RestaurantsProps) {
  useSEO(
    "Halal Meat Supply for Restaurants — Bulk Gosht Delivery | Al Nooh",
    "Daily and scheduled Halal meat supply for restaurants — beef, buffalo, mutton, and lamb cuts. Vet-inspected quality, cold-chain delivery, and bulk wholesale pricing."
  );
  const isAr = lang === "ar";
  const meatItems = livestockData.filter((i) => i.meatCuts && i.meatCuts.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream via-brand-cream to-brand-green-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-green-950 text-brand-cream pt-32 pb-20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(225,193,108,0.32),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold-500/10 text-brand-gold-300 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
              {isAr ? "توريد اللحوم للمطاعم" : "Meat Supply for Restaurants"}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {isAr ? "نُزوّد المطاعم المحلية بكل أنواع اللحوم الحلال" : "Fresh Halal Gosht & Meat — Delivered to Your Restaurant"}
            </h1>
            <p className="max-w-2xl text-brand-cream/80 text-base sm:text-lg leading-relaxed mb-8">
              {isAr
                ? "نوفر لحوم البقر، الجاموس، الماعز والأغنام بجميع القطعيات لمطاعم ومطابخ السوق المحلي — توريد يومي أو حسب الجدول، جودة بيطرية موثقة، وتسليم بسلسلة تبريد كاملة."
                : "We supply local restaurants and kitchens with beef, buffalo, goat, and mutton in every cut you need — daily or scheduled supply, vet-certified quality, and full cold-chain delivery."}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/923209792921?text=Hello%2C%20I%20run%20a%20restaurant%20and%20want%20to%20discuss%20bulk%20meat%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 bg-[#25D366] text-white font-semibold rounded-sm hover:bg-[#1fb855] transition"
              >
                <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="w-5 h-5 rounded-full" />
                {isAr ? "اطلب عرض سعر بالجملة" : "Get a Bulk Supply Quote"}
              </a>
              <Link to="/livestock" className="inline-flex items-center justify-center px-6 py-4 border border-brand-cream/40 text-brand-cream hover:border-brand-gold-400 hover:text-brand-gold-400 transition rounded-sm">
                {isAr ? "عرض كل الماشية" : "View All Animals"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meat categories */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold-500 font-semibold mb-3">
            {isAr ? "ما نوفره" : "What We Supply"}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-green-950">
            {isAr ? "كل أنواع اللحوم الحلال لمطبخك" : "Every Type of Halal Meat for Your Kitchen"}
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-brand-ink-700/80">
            {isAr
              ? "من اللحم المفروم إلى القطعيات الفاخرة — نقطع ونحزم حسب احتياجات قائمة طعامك."
              : "From mince to premium boneless cuts — we cut and pack according to your menu's exact needs."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {meatCategories.map((c) => (
            <div key={c.title} className="rounded-3xl border border-brand-green-100 bg-white p-7 shadow-lg card-lift">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-brand-red-500/10 text-brand-red-600 mb-5">
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-green-950 mb-2">{c.title}</h3>
              <p className="text-sm text-brand-ink-700 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Animal-by-animal meat catalog */}
      <section className="bg-brand-green-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-green-950">
              {isAr ? "كتالوج اللحوم حسب الحيوان" : "Meat Catalog by Animal"}
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-brand-ink-700/80">
              {isAr ? "أسعار تقريبية للجملة لكل كيلوغرام — تختلف حسب الكمية والقطعيات." : "Approximate wholesale price per kg — varies with order volume and specific cuts."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meatItems.map((item) => (
              <div key={item.id} className="rounded-3xl overflow-hidden bg-white border border-brand-green-100 shadow-lg">
                <div className="relative h-44 overflow-hidden">
                  <img src={item.image} alt={item.alt} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-green-950/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-brand-cream font-serif text-lg font-bold">{item.name}</div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-brand-ink-700 mb-3">{item.meatCuts?.join(", ")}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-brand-green-950">{item.meatPricePerKg}</span>
                    <span className="text-brand-ink-700/70">{item.meatYield}</span>
                  </div>
                  <p className="text-xs text-brand-ink-700/60 mt-2">Origin: {item.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why restaurants choose us */}
      <section className="bg-brand-green-950 text-brand-cream py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold-400 font-semibold mb-3">
              {isAr ? "لماذا نحن؟" : "Why Restaurants Choose Al Nooh"}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              {isAr ? "موثوقون من مطابخ ومطاعم محلية" : "Trusted by Local Kitchens & Restaurants"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-3xl border border-brand-cream/10 bg-brand-green-900/80 p-7">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-gold-500 text-brand-green-950 mb-5">
                  <w.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{w.title}</h3>
                <p className="text-sm text-brand-cream/75 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How supply works */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8 py-20">
        <div className="rounded-4xl border border-brand-green-100 bg-white p-10 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold-500 font-semibold mb-3">
                {isAr ? "كيف يعمل التوريد" : "How Restaurant Supply Works"}
              </p>
              <h2 className="font-serif text-3xl font-bold text-brand-green-950 mb-4">
                {isAr ? "من المزرعة إلى مطبخك في 4 خطوات" : "From Our Farm to Your Kitchen in 4 Steps"}
              </h2>
              <p className="text-brand-ink-700 leading-relaxed">
                {isAr
                  ? "تواصل معنا عبر واتساب، حدد احتياجاتك، نوصلها طازجة وفقاً لجدولك."
                  : "Reach out on WhatsApp, tell us your weekly volume and cuts, and we set up a recurring delivery schedule built around your kitchen."}
              </p>
            </div>
            <div className="space-y-4">
              {[
                { n: "1", t: isAr ? "تواصل معنا" : "Tell us your needs", d: isAr ? "نوع اللحم، الكمية، والقطعيات" : "Meat type, volume, cuts & frequency" },
                { n: "2", t: isAr ? "عرض سعر بالجملة" : "Get a wholesale quote", d: isAr ? "أسعار تنافسية حسب الحجم" : "Competitive pricing based on order size" },
                { n: "3", t: isAr ? "الذبح والتعبئة" : "Halal slaughter & packing", d: isAr ? "تحت إشراف بيطري ومعتمد" : "Vet-supervised, Halal-certified, hygienically packed" },
                { n: "4", t: isAr ? "تسليم بسلسلة تبريد" : "Cold-chain delivery", d: isAr ? "طازجة مباشرة لمطبخك" : "Delivered fresh, on schedule, straight to your kitchen" },
              ].map((s) => (
                <div key={s.n} className="flex items-start gap-4 rounded-2xl bg-brand-cream-2 p-4">
                  <div className="flex items-center justify-center h-9 w-9 rounded-full bg-brand-gold-500 text-brand-green-950 font-bold shrink-0">{s.n}</div>
                  <div>
                    <p className="font-semibold text-brand-green-950">{s.t}</p>
                    <p className="text-sm text-brand-ink-700">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 pb-24">
        <div className="max-w-5xl mx-auto rounded-4xl bg-gradient-to-r from-brand-green-900 to-brand-green-950 text-brand-cream p-10 sm:p-14 text-center shadow-2xl">
          <Truck className="w-10 h-10 text-brand-gold-400 mx-auto mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            {isAr ? "هل تدير مطعمًا؟ لنبدأ التوريد اليوم" : "Run a Restaurant? Let's Set Up Your Meat Supply Today"}
          </h2>
          <p className="text-brand-cream/80 max-w-2xl mx-auto mb-8">
            {isAr
              ? "تحدث مع فريقنا الآن عبر واتساب أو وكيل الصوت الذكي لمناقشة احتياجاتك."
              : "Talk to our team now on WhatsApp, or use our AI voice agent to discuss your supply needs in your own language."}
          </p>
          <a
            href="https://wa.me/923209792921?text=Hello%2C%20I%20run%20a%20restaurant%20and%20want%20to%20discuss%20bulk%20meat%20supply."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold-500 text-brand-green-950 font-semibold rounded-sm hover:bg-brand-gold-400 transition-all btn-shine"
          >
            <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="w-5 h-5 rounded-full" />
            {isAr ? "تحدث معنا الآن" : "Talk to Us Now"}
          </a>
        </div>
      </section>
    </div>
  );
}
