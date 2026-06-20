import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Weight, ShieldCheck, CheckCircle2, Clock3 } from "lucide-react";
import { livestockData, type LivestockCategory } from "../data/livestockData";
import { cn } from "../utils/cn";
import { useSEO } from "../hooks/useSEO";

const categories: LivestockCategory[] = ["All", "Cattle", "Cows", "Bulls", "Calves", "Goats", "Sheep", "Buffalo"];

const stats = [
  { value: "500+", label: "Animals Exported / Year" },
  { value: "6+", label: "Gulf Countries" },
  { value: "15+", label: "Years Experience" },
  { value: "Vet", label: "Certified" },
];

const processSteps = [
  {
    title: "Selection",
    description: "Choose the best breeds from our certified farms with full pre-export inspection.",
    icon: CheckCircle2,
  },
  {
    title: "Vet Check",
    description: "Government-authorized veterinarians conduct full health screenings and documentation.",
    icon: ShieldCheck,
  },
  {
    title: "Documentation",
    description: "We prepare export certificates, customs paperwork, and shipping manifests on your behalf.",
    icon: MapPin,
  },
  {
    title: "Delivery",
    description: "Door-to-port delivery across the Gulf with temperature-controlled transport.",
    icon: Clock3,
  },
];

export default function LivestockPage() {
  useSEO(
    "Livestock for Export — Cattle, Sheep, Goats & Buffalo | Al Nooh",
    "Browse vet-certified cattle, sheep, goats, and buffalo available for live export. Detailed breed info, weight, vaccination records, and fresh meat cuts for restaurant supply."
  );
  const [filter, setFilter] = useState<LivestockCategory>("All");
  const filtered = useMemo(
    () => (filter === "All" ? livestockData : livestockData.filter((item) => item.category === filter)),
    [filter]
  );

  return (
    <main className="bg-gradient-to-b from-brand-cream via-brand-cream to-brand-green-50 text-brand-ink-900 min-h-screen pt-32">
      <section className="relative overflow-hidden bg-brand-green-950 text-brand-cream">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(225,193,108,0.32),transparent_35%)]" />
        <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-brand-gold-500/5 rounded-full translate-x-1/3 -translate-y-1/2 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold-500/10 text-brand-gold-300 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
                Premium Halal Livestock
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Premium Halal Livestock — Exported Globally
              </h1>
              <p className="max-w-2xl text-brand-cream/80 text-base sm:text-lg leading-relaxed mb-8">
                Hand-selected animals with full veterinarian certification, global export documentation, and GCC-ready shipping.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { label: "Vet Certified" },
                  { label: "ISO Compliant" },
                  { label: "Halal Approved" },
                ].map((badge) => (
                  <span key={badge.label} className="inline-flex items-center gap-2 rounded-full bg-brand-cream text-brand-green-950 px-4 py-2 text-sm font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red-600" />
                    {badge.label}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/livestock" className="inline-flex items-center justify-center min-w-[180px] px-6 py-4 bg-brand-gold-500 text-brand-green-950 font-semibold rounded-sm shadow-xl shadow-brand-green-950/20 hover:bg-brand-gold-400 transition">
                  View Our Livestock
                </Link>
                <Link to="/gallery" className="inline-flex items-center justify-center min-w-[180px] px-6 py-4 border border-brand-cream/40 text-brand-cream hover:border-brand-gold-400 hover:text-brand-gold-400 transition rounded-sm">
                  Browse Gallery
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl img-zoom shadow-2xl shadow-brand-green-950/20">
                <img src="https://images.pexels.com/photos/28962623/pexels-photo-28962623.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Holstein cattle" className="w-full h-full object-cover aspect-4/3" />
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl img-zoom shadow-2xl shadow-brand-green-950/20">
                  <img src="https://images.pexels.com/photos/31649657/pexels-photo-31649657.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Brahman bull" className="w-full h-full object-cover aspect-3/2" />
                </div>
                <div className="overflow-hidden rounded-3xl img-zoom shadow-2xl shadow-brand-green-950/20">
                  <img src="https://images.pexels.com/photos/27896657/pexels-photo-27896657.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Sahiwal cow" className="w-full h-full object-cover aspect-3/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-green-950">Explore Our Export-Ready Selection</h2>
          <p className="max-w-2xl mx-auto mt-4 text-brand-ink-700/80">Filter by breed type and discover detailed livestock cards with breed, weight, price, and export destinations.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                filter === category
                  ? "bg-brand-green-950 text-brand-cream shadow-lg shadow-brand-green-950/20"
                  : "bg-brand-cream border border-brand-green-200 text-brand-ink-900 hover:bg-brand-green-50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-4xl border border-brand-green-100 bg-white shadow-xl transition-transform hover:-translate-y-2">
              <div className="relative img-zoom h-80 overflow-hidden">
                <img src={item.image} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-brand-green-950/80 via-brand-green-950/30 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-brand-cream/90 px-3 py-2 text-xs font-semibold text-brand-green-950">{item.category}</div>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap gap-2 items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-green-50 px-3 py-1 text-xs font-semibold text-brand-green-900">
                    {item.availability}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-green-700">{item.exportAvail}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-green-950 mb-2">{item.name}</h3>
                <p className="text-sm text-brand-ink-700 mb-4">{item.breed}</p>
                <div className="grid grid-cols-2 gap-3 text-sm text-brand-ink-700 mb-4">
                  <div className="rounded-2xl bg-brand-cream-2 p-3">
                    <div className="inline-flex items-center gap-2 text-brand-green-950"><Weight className="w-4 h-4" /> {item.weight}</div>
                  </div>
                  <div className="rounded-2xl bg-brand-cream-2 p-3">
                    <div className="inline-flex items-center gap-2 text-brand-green-950"><MapPin className="w-4 h-4" /> {item.tags.join(", ")}</div>
                  </div>
                </div>
                <div className="grid gap-3 mb-4 text-sm text-brand-ink-700">
                  <div className="rounded-2xl bg-brand-cream-2 p-3">Vaccination: {item.vaccination}</div>
                  <div className="rounded-2xl bg-brand-cream-2 p-3">Health: {item.healthStatus}</div>
                </div>
                <div className="mb-6 text-sm text-brand-ink-700 line-clamp-3">{item.description}</div>
                {item.meatCuts && (
                  <div className="mb-5 rounded-2xl border border-brand-red-500/20 bg-brand-red-500/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-600 mb-2">Fresh Meat / Gosht Available</p>
                    <p className="text-sm text-brand-ink-700 mb-2">{item.meatCuts.join(", ")}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-brand-ink-700/80">
                      {item.meatPricePerKg && <span className="font-semibold text-brand-green-950">{item.meatPricePerKg}</span>}
                      {item.meatYield && <span>• {item.meatYield}</span>}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full bg-brand-green-50 px-3 py-1 text-xs font-semibold text-brand-green-900">{tag}</span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/923209792921?text=${encodeURIComponent(`I'm interested in ${item.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1fb855] transition"
                >
                  <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="w-4 h-4 rounded-full" /> Inquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-green-950 text-brand-cream py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-brand-green-900/80 border border-brand-gold-500/20 p-8 text-center">
                <p className="text-4xl font-serif font-bold text-brand-gold-400 mb-3">{stat.value}</p>
                <p className="text-sm text-brand-cream/80">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-brand-cream/10 bg-brand-green-950/90 p-8 shadow-2xl shadow-brand-green-950/10">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-brand-gold-500 text-brand-green-950 mb-6">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-brand-cream/75 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="rounded-4xl border border-brand-green-100 bg-white p-10 shadow-xl">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold-500 font-semibold mb-3">Certifications</p>
              <h2 className="font-serif text-3xl font-bold text-brand-green-950 mb-4">Halal, ISO & Veterinary Compliance</h2>
              <p className="text-brand-ink-700 leading-relaxed">All animals are processed through certified veterinary checks, halal compliance reviews, and export-ready documentation for Gulf markets.</p>
            </div>
            <div className="space-y-3 text-sm text-brand-ink-700">
              <p>• ISO 9001:2015 Quality Management</p>
              <p>• OIE / WOAH veterinary protocol</p>
              <p>• Halal export certification</p>
              <p>• Live animal transport compliance</p>
              <p>• GCC import standard readiness</p>
            </div>
            <div className="flex items-center justify-center">
              <Link to="/restaurants" className="rounded-3xl border border-brand-green-950/10 bg-brand-green-50 p-8 text-center hover:bg-brand-green-100 transition-colors">
                <p className="text-2xl font-bold text-brand-green-950 mb-2">Supply Restaurants?</p>
                <p className="text-sm text-brand-ink-700">See our dedicated meat & gosht supply page for restaurants →</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
