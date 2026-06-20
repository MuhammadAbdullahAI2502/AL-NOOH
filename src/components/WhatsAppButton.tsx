import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 4000);
    const h = setTimeout(() => setShowTip(false), 10000);
    return () => {
      clearTimeout(t);
      clearTimeout(h);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tip bubble */}
      <AnimatePresence>
        {showTip && !open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative bg-white text-brand-ink-900 text-xs font-medium px-4 py-3 rounded-lg shadow-2xl max-w-[220px]"
          >
            <div className="font-semibold mb-1 text-brand-green-800">Need a quote?</div>
            <div className="text-brand-ink-700/70 leading-relaxed">Chat with our export team on WhatsApp — instant response.</div>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45"></div>
            <button
              onClick={() => setShowTip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-ink-900 text-white flex items-center justify-center"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[320px] bg-white rounded-lg shadow-2xl overflow-hidden border border-brand-cream-2"
          >
            <div className="bg-brand-green-900 p-5 text-brand-cream">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden p-1">
                  <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-serif text-base">Al Nooh Exports</div>
                  <div className="text-xs text-brand-cream/70 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Online now
                  </div>
                </div>
              </div>
              <p className="text-sm text-brand-cream/80 leading-relaxed">
                Hello! 👋 How can we help with your livestock export inquiry today?
              </p>
            </div>
            <div className="p-4 bg-brand-cream-2">
              <div className="bg-white rounded-lg p-3 shadow-sm text-sm text-brand-ink-700 mb-3 max-w-[85%]">
                Hi! I'd like to learn more about your available livestock and export process.
              </div>
              <div className="text-[10px] text-brand-ink-700/50 mb-3 text-right">Just now</div>
              <a
                href="https://wa.me/923209792921?text=Hello%20Al%20Nooh%20Livestock%2C%20I'd%20like%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold rounded-lg text-sm transition-colors"
              >
                Continue on WhatsApp →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <button
        onClick={() => {
          setOpen(!open);
          setShowTip(false);
        }}
        aria-label="WhatsApp chat"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white shadow-2xl shadow-green-500/40 flex items-center justify-center transition-all hover:scale-110"
      >
        {/* Pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        {open ? <X className="w-5 h-5 relative" /> : <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="w-8 h-8 relative rounded-full" />}
      </button>
    </div>
  );
}
