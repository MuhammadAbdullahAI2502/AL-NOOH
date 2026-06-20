import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, PhoneOff, X, Loader2, AlertTriangle } from "lucide-react";
import type Vapi from "@vapi-ai/web";

type CallState = "idle" | "connecting" | "active" | "error" | "mic-denied";

const PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY;
const ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID;

export default function VoiceAgent() {
  const [callState, setCallState] = useState<CallState>("idle");
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [muted, setMuted] = useState(false);
  const vapiRef = useRef<Vapi | null>(null);

  useEffect(() => {
    return () => {
      vapiRef.current?.stop();
    };
  }, []);

  const closeWidget = () => {
    vapiRef.current?.stop();
    setOpen(false);
    setCallState("idle");
  };

  const startCall = async () => {
    setOpen(true);
    setCallState("connecting");
    setErrorMsg("");

    if (!PUBLIC_KEY || !ASSISTANT_ID) {
      setErrorMsg("Voice agent isn't configured yet. Please contact us on WhatsApp in the meantime.");
      setCallState("error");
      return;
    }

    // Explicitly request microphone permission BEFORE starting the call.
    // Without this, on some browsers the call connects one-way: the agent
    // can be heard, but it never actually receives your microphone audio —
    // which looks exactly like "the agent talks but doesn't listen".
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // We only needed this to trigger/confirm the permission prompt; Vapi's
      // SDK will open its own audio track when the call starts.
      stream.getTracks().forEach((t) => t.stop());
    } catch (err) {
      console.error("Microphone permission error:", err);
      setCallState("mic-denied");
      return;
    }

    try {
      // Lazy-load the SDK so it's not in the main bundle for users who never open this widget
      const mod: any = await import("@vapi-ai/web");
      const VapiCtor = mod?.default?.default ?? mod?.default ?? mod;
      const vapi = new VapiCtor(PUBLIC_KEY);
      vapiRef.current = vapi;

      vapi.on("call-start", () => setCallState("active"));
      vapi.on("call-end", () => {
        setCallState("idle");
        setOpen(false);
      });
      vapi.on("speech-start", () => setIsSpeaking(true));
      vapi.on("speech-end", () => setIsSpeaking(false));
      vapi.on("error", (e: any) => {
        console.error("Vapi error:", e);
        setErrorMsg("The voice agent ran into an issue. Please try again.");
        setCallState("error");
      });

      // No language is forced here — the assistant's own prompt auto-detects
      // whichever language the caller speaks (English / Urdu / Arabic) and
      // replies in that language.
      await vapi.start(ASSISTANT_ID);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(
        err?.message ||
          "Voice agent isn't set up yet. Please contact us on WhatsApp in the meantime."
      );
      setCallState("error");
    }
  };

  const endCall = () => {
    vapiRef.current?.stop();
    setCallState("idle");
    setOpen(false);
  };

  const toggleMute = () => {
    if (!vapiRef.current) return;
    vapiRef.current.setMuted(!muted);
    setMuted(!muted);
  };

  return (
    <>
      {/* Floating mic button — left side, own corner */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={startCall}
          aria-label="Talk to our AI voice agent"
          className="group relative w-14 h-14 rounded-full bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-green-950 shadow-2xl shadow-brand-gold-500/40 flex items-center justify-center transition-all hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full bg-brand-gold-500 animate-ping opacity-25"></span>
          <Mic className="w-6 h-6 relative" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-ink-900/60 backdrop-blur-sm flex items-center justify-center p-5"
            onClick={(e) => e.target === e.currentTarget && closeWidget()}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-brand-green-950 p-6 text-brand-cream flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gold-500 flex items-center justify-center text-brand-green-950">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-serif text-lg">AL NOOH Voice Agent</p>
                    <p className="text-xs text-brand-cream/60">Speak any language — English, Urdu, or Arabic</p>
                  </div>
                </div>
                <button onClick={closeWidget} aria-label="Close" className="text-brand-cream/70 hover:text-brand-cream">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {callState === "connecting" && (
                  <div className="flex flex-col items-center justify-center py-10 gap-4">
                    <Loader2 className="w-8 h-8 text-brand-gold-500 animate-spin" />
                    <p className="text-sm text-brand-ink-700">Connecting you with our voice agent…</p>
                    <p className="text-xs text-brand-ink-700/60 text-center">
                      Please allow microphone access if your browser asks.
                    </p>
                  </div>
                )}

                {callState === "active" && (
                  <div className="flex flex-col items-center justify-center py-8 gap-6">
                    <div className="relative">
                      <div
                        className={`w-24 h-24 rounded-full bg-brand-green-950 flex items-center justify-center transition-transform ${
                          isSpeaking ? "scale-110" : "scale-100"
                        }`}
                      >
                        <Mic className="w-10 h-10 text-brand-gold-400" />
                      </div>
                      {isSpeaking && (
                        <span className="absolute inset-0 rounded-full border-2 border-brand-gold-400 animate-ping"></span>
                      )}
                    </div>
                    <p className="text-sm text-brand-ink-700">
                      {isSpeaking ? "Agent is speaking…" : muted ? "Microphone muted" : "Listening…"}
                    </p>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={toggleMute}
                        aria-label={muted ? "Unmute" : "Mute"}
                        className="w-12 h-12 rounded-full border border-brand-green-100 flex items-center justify-center hover:bg-brand-green-50 transition-colors"
                      >
                        {muted ? <MicOff className="w-5 h-5 text-brand-ink-700" /> : <Mic className="w-5 h-5 text-brand-ink-700" />}
                      </button>
                      <button
                        onClick={endCall}
                        aria-label="End call"
                        className="w-12 h-12 rounded-full bg-brand-red-600 hover:bg-brand-red-700 text-white flex items-center justify-center transition-colors"
                      >
                        <PhoneOff className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {callState === "mic-denied" && (
                  <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
                    <AlertTriangle className="w-8 h-8 text-brand-gold-500" />
                    <p className="text-sm text-brand-ink-700">
                      Microphone access was blocked, so the agent can't hear you. Please allow microphone
                      access for this site in your browser's address-bar settings (the 🔒 or ⓘ icon), then
                      try again.
                    </p>
                    <button
                      onClick={startCall}
                      className="px-5 py-2.5 rounded-full bg-brand-gold-500 text-brand-green-950 font-semibold text-sm hover:bg-brand-gold-400 transition"
                    >
                      Try Again
                    </button>
                  </div>
                )}

                {callState === "error" && (
                  <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
                    <p className="text-sm text-brand-red-600">{errorMsg}</p>
                    <button
                      onClick={startCall}
                      className="px-5 py-2.5 rounded-full bg-brand-gold-500 text-brand-green-950 font-semibold text-sm hover:bg-brand-gold-400 transition"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
