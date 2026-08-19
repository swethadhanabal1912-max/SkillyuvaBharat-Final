import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTORS = ["Manufacturing", "IT & Tech", "Healthcare", "Logistics", "Banking", "Construction", "Retail", "Hospitality", "Automotive"];

// Same palette as the Navbar — kept consistent across the whole site
const BRAND = {
  saffron: "#E8650A",
  navy: "#000080",
  green: "#1A7A2E",
};

// Matches the Sign Up button's orange
const HOVER_ORANGE = "#E8650A";

const WORDS_CONFIG = [
  { text: "SKILL", color: BRAND.saffron },
  { text: "YUVA", color: BRAND.navy },
  { text: "BHARAT", color: BRAND.green },
];

const STATS = [
  { value: 50, suffix: "K+", label: "Candidates", color: BRAND.saffron, decimals: 0 },
  { value: 25, suffix: "K+", label: "Placed", color: BRAND.green, decimals: 0 },
  { value: 7, suffix: "", label: "States", color: "#111", decimals: 0 },
];

// (floating badges removed)

// --- Animated count-up number (runs once on mount) ---
function AnimatedNumber({ value, suffix, decimals, color }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let raf;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <span className="text-[clamp(20px,2vw,24px)] font-black block leading-none [font-variant-numeric:tabular-nums]" style={{ color }}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS_CONFIG.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeWord = WORDS_CONFIG[index];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700;900&family=Crimson+Pro:ital,wght@0,300;1,400;1,600&display=swap');

        @keyframes htapePulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes htape { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .h-live-dot { animation: htapePulse 1.6s ease-in-out infinite; }
        .h-tape { animation: htape 45s linear infinite; }
      `}</style>

      <div
        id="home"
        className="font-['Raleway',sans-serif] bg-[#FBF0E1] w-full min-h-dvh h-auto flex flex-col overflow-hidden relative pt-20 box-border
                   max-[768px]:pt-16 max-[480px]:pt-14
                   before:content-[''] before:absolute before:inset-0 before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] before:opacity-[0.04] before:pointer-events-none before:z-10"
      >
        <div
          className="fixed w-[800px] h-[800px] rounded-full pointer-events-none z-[1] -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none z-[2]">
          {/* glow pulse synced to the active word's color */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`glow-${activeWord.text}`}
              className="absolute w-[clamp(300px,40vw,600px)] h-[clamp(300px,40vw,600px)] rounded-full blur-[80px] pointer-events-none z-[1]"
              style={{ background: activeWord.color }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 0.25, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>

          <motion.div
            style={{
              x: (mousePos.x - window.innerWidth / 2) * 0.015,
              y: (mousePos.y - window.innerHeight / 2) * 0.015,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeWord.text}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)", letterSpacing: "0.05em" }}
                animate={{ opacity: 0.18, y: 0, filter: "blur(0px)", letterSpacing: "-0.06em" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ color: activeWord.color }}
                className="text-[clamp(140px,22vw,380px)] max-[768px]:text-[120px] font-black uppercase"
              >
                {activeWord.text}
              </motion.h1>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* trust badges removed */}

        <div className="relative z-[5] text-center flex-1 flex flex-col items-center justify-center pb-10 max-[768px]:pb-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[clamp(30px,4.5vw,60px)] font-black tracking-[-0.02em] text-[#111] uppercase">
              Where skill meets
            </span>
            <span
              className="font-['Crimson_Pro',serif] text-[clamp(34px,5vw,68px)] font-light italic ml-2.5"
              style={{ color: BRAND.saffron }}
            >
              opportunity.
            </span>
            <br />
            <span className="text-[clamp(30px,4.5vw,60px)] font-black tracking-[-0.02em] text-[#111] uppercase">
              Every single
            </span>
            <span
              className="font-['Crimson_Pro',serif] text-[clamp(34px,5vw,68px)] font-semibold italic"
              style={{ color: BRAND.green }}
            >
              day.
            </span>
          </motion.div>

          <p className="text-[clamp(14px,1.2vw,16px)] font-normal text-[#666] leading-[1.6] max-w-[480px] mb-10 mt-5">
            <strong>Skill Yuva Bharat</strong> simplifies the bridge between ambition and opportunity. Access India's largest zero-cost job fair network.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 text-white rounded-lg font-black text-[11px] uppercase tracking-[0.2em] shadow-xl transition-colors"
              style={{ backgroundColor: HOVER_ORANGE }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1A7A2E")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = HOVER_ORANGE)}
            >
              Explore Fairs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 border border-black/10 rounded-lg font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all"
            >
              Our Vision
            </motion.button>
          </div>

          

          <div
            className="flex items-center gap-[clamp(15px,3vw,35px)] bg-white/60 backdrop-blur-md px-[45px] py-[18px] rounded-2xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)]
                       max-[768px]:gap-[15px] max-[768px]:px-5 max-[768px]:py-[15px] max-[768px]:rounded-[14px] max-[768px]:flex-wrap max-[768px]:justify-center
                       max-[480px]:px-4 max-[480px]:py-[14px] max-[480px]:gap-x-[18px] max-[480px]:gap-y-3"
          >
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="w-[1px] h-8 bg-black/[0.06]" />}
                <div className="text-left">
                  <AnimatedNumber value={s.value} suffix={s.suffix} decimals={s.decimals} color={s.color} />
                  <span className="text-[10px] font-extrabold text-[#aaa] uppercase tracking-[0.1em]">{s.label}</span>
                </div>
              </React.Fragment>
            ))}
            <div className="w-[1px] h-8 bg-black/[0.06]" />
            <div className="text-left flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-[#1A7A2E] rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <div>
                <span className="block text-sm font-black uppercase leading-none">Live Fair</span>
                <span className="text-[10px] font-extrabold text-[#aaa] uppercase tracking-[0.1em]">Porbandar-Gujarat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-[1.5px] border-b-[1.5px] border-black/[0.08] py-[18px] bg-[#FBF0E1] z-10 overflow-hidden mb-0">
          <div className="h-tape inline-flex whitespace-nowrap">
            {[...SECTORS, ...SECTORS].map((s, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 px-[45px] max-[768px]:px-[25px] text-xs max-[768px]:text-[10px] font-black text-black uppercase tracking-[0.15em]"
              >
                {s} <span className="text-lg" style={{ color: BRAND.saffron }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Small inline variant of AnimatedNumber that doesn't wrap its own <span> styling,
// used inside the live pill where the color/size is already set by the parent.
function AnimatedNumberInline({ value, suffix, decimals }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let raf;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <>
      {display.toFixed(decimals)}
      {suffix}
    </>
  );
}