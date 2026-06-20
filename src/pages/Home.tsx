import Hero from "../components/Hero";
import About from "../components/About";
import HealthCare from "../components/HealthCare";
import ExportProcess from "../components/ExportProcess";
import Logistics from "../components/Logistics";
import Testimonials from "../components/Testimonials";
import HomeCTA from "../components/HomeCTA";
import { useSEO } from "../hooks/useSEO";

interface HomeProps {
  lang: "en" | "ar";
}

export default function Home({ lang }: HomeProps) {
  useSEO(
    "Al Nooh Livestock Exports — Live Cattle, Sheep, Goats & Halal Meat Supplier",
    "Premium live cattle, sheep, goats, and buffalo plus fresh Halal meat supply for restaurants. Veterinary certified, export-licensed, trusted across the Middle East, Asia, and Africa since 2008."
  );
  return (
    <div className="animate-fade-in">
      <Hero lang={lang} />
      <About lang={lang} />
      <HealthCare lang={lang} />
      <ExportProcess lang={lang} />
      <Logistics lang={lang} />
      <Testimonials lang={lang} />
      <HomeCTA lang={lang} />
    </div>
  );
}
