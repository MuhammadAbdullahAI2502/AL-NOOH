import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import VoiceAgent from "./components/VoiceAgent";

const Home = lazy(() => import("./pages/Home"));
const LivestockPage = lazy(() => import("./pages/Livestock"));
const GalleryPage = lazy(() => import("./pages/Gallery"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ProcessPage = lazy(() => import("./pages/Process"));
const RestaurantsPage = lazy(() => import("./pages/Restaurants"));

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.scrollBy(0, -100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

export default function App() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  return (
    <BrowserRouter>
      <div dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen flex flex-col bg-brand-cream">
        <Navbar lang={lang} setLang={setLang} />
        <ScrollToHash />
        <main className="flex-1">
          <Suspense fallback={<div className="min-h-screen bg-brand-cream" />}>
            <Routes>
              <Route path="/" element={<Home lang={lang} />} />
              <Route path="/livestock" element={<LivestockPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/about" element={<AboutPage lang={lang} />} />
              <Route path="/contact" element={<ContactPage lang={lang} />} />
              <Route path="/process" element={<ProcessPage lang={lang} />} />
              <Route path="/restaurants" element={<RestaurantsPage lang={lang} />} />
              <Route path="*" element={<Home lang={lang} />} />
            </Routes>
          </Suspense>
        </main>
        <Footer lang={lang} />
        <VoiceAgent />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
