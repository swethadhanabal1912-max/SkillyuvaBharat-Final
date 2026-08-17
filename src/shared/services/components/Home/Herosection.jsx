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
  { value: 1.2, suffix: "L+", label: "Candidates", color: BRAND.saffron, decimals: 1 },
  { value: 70, suffix: "K+", label: "Placed", color: BRAND.green, decimals: 0 },
  { value: 28, suffix: "", label: "States", color: "#111", decimals: 0 },
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
    <span className="st-val" style={{ color }}>
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

        .h-container {
          font-family: 'Raleway', sans-serif;
          background: #FBF0E1;
          width: 100%;
          min-height: 100dvh;
          height: auto;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          padding-top: 80px;
          box-sizing: border-box;
        }

        .h-container::before {
          content: "";
          position: absolute; inset: 0;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          opacity: 0.04;
          pointer-events: none;
          z-index: 10;
        }

        .h-spotlight {
          position: fixed;
          width: 800px; height: 800px;
          background: radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          transform: translate(-50%, -50%);
        }

        .h-bgw-wrap {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          display: flex; justify-content: center; align-items: center;
          pointer-events: none;
          z-index: 2;
        }

        .h-word-display {
          font-size: clamp(140px, 22vw, 380px);
          font-weight: 900;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          opacity: 0.18;
        }

        /* Soft glow pulse behind the rotating word — the "added effect" */
        .h-word-glow {
          position: absolute;
          width: clamp(300px, 40vw, 600px);
          height: clamp(300px, 40vw, 600px);
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 1;
        }

        .h-hero-content {
          position: relative;
          z-index: 5;
          text-align: center;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-bottom: 40px;
        }

        .h-sans { font-size: clamp(30px, 4.5vw, 60px); font-weight: 900; letter-spacing: -0.02em; color: #111; text-transform: uppercase; }
        .h-serif { font-family: 'Crimson Pro', serif; font-size: clamp(34px, 5vw, 68px); font-weight: 300; font-style: italic; color: ${BRAND.saffron}; margin-left: 10px; }
        .h-serif-gr { color: ${BRAND.green}; font-family: 'Crimson Pro', serif; font-size: clamp(34px, 5vw, 68px); font-weight: 600; font-style: italic; }

        .h-sub { font-size: clamp(14px, 1.2vw, 16px); font-weight: 400; color: #666; line-height: 1.6; max-width: 480px; margin-bottom: 40px; margin-top: 20px; }

        .h-stats-row {
          display: flex;
          align-items: center;
          gap: clamp(15px, 3vw, 35px);
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px);
          padding: 18px 45px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 20px 50px rgba(0,0,0,0.03);
        }
        .st-item { text-align: left; }
        .st-val { font-size: clamp(20px, 2vw, 24px); font-weight: 900; color: #111; display: block; line-height: 1; font-variant-numeric: tabular-nums; }
        .st-lbl { font-size: 10px; font-weight: 800; color: #aaa; text-transform: uppercase; letter-spacing: 0.1em; }

        .h-float-badge {
          position: absolute;
          z-index: 4;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(0,0,0,0.06);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #444;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          white-space: nowrap;
        }

        .h-live-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(0,0,0,0.06);
          padding: 8px 18px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 700;
          color: #555;
        }
        .h-live-pill .st-val { font-size: 13px; display: inline; }
        .h-live-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px rgba(34,197,94,0.6);
          animation: htapePulse 1.6s ease-in-out infinite;
        }
        @keyframes htapePulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        .h-live-txt { color: #888; }

        .h-bot-tape {
          border-top: 1.5px solid rgba(0,0,0,0.08);
          border-bottom: 1.5px solid rgba(0,0,0,0.08);
          padding: 18px 0;
          background: #FBF0E1;
          z-index: 10;
          overflow: hidden;
          margin-bottom: 0;
        }

        @keyframes htape { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .h-tape { display: inline-flex; white-space: nowrap; animation: htape 45s linear infinite; }

        .h-ti {
          display: inline-flex; align-items: center;
          gap: 12px; padding: 0 45px;
          font-size: 12px; font-weight: 900;
          color: #000;
          text-transform: uppercase; letter-spacing: 0.15em;
        }

        .h-ti-dot { color: ${BRAND.saffron}; font-size: 18px; }

        @media (max-width: 768px) {
          .h-container { padding-top: 64px; }
          .h-hero-content { padding-bottom: 24px; }
          .h-stats-row { gap: 15px; padding: 15px 20px; border-radius: 14px; flex-wrap: wrap; justify-content: center; }
          .h-word-display { font-size: 120px; }
          .h-ti { padding: 0 25px; font-size: 10px; }
          .h-float-badge { display: none; }
        }

        @media (max-width: 480px) {
          .h-container { padding-top: 56px; }
          .h-sub { margin-bottom: 28px; }
          .h-stats-row { padding: 14px 16px; gap: 12px 18px; }
          .h-live-pill { flex-wrap: wrap; justify-content: center; text-align: center; }
        }
      `}</style>

      <div className="h-container" id="home">
        <div className="h-spotlight" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />

        <div className="h-bgw-wrap">
          {/* glow pulse synced to the active word's color */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`glow-${activeWord.text}`}
              className="h-word-glow"
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
                className="h-word-display"
              >
                {activeWord.text}
              </motion.h1>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* trust badges removed */}

        <div className="h-hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-hl">
            <span className="h-sans">Where skill meets</span>
            <span className="h-serif">opportunity.</span>
            <br />
            <span className="h-sans">Every single</span>
            <span className="h-serif-gr">day.</span>
          </motion.div>

          <p className="h-sub">
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

          <div className="h-live-pill mb-8">
            <span className="h-live-dot" />
            <AnimatedNumber value={342} suffix="" decimals={0} color="#111" />
            <span className="h-live-txt">candidates registered today</span>
          </div>

          <div className="h-stats-row">
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="w-[1px] h-8 bg-black/[0.06]" />}
                <div className="st-item">
                  <AnimatedNumber value={s.value} suffix={s.suffix} decimals={s.decimals} color={s.color} />
                  <span className="st-lbl">{s.label}</span>
                </div>
              </React.Fragment>
            ))}
            <div className="w-[1px] h-8 bg-black/[0.06]" />
            <div className="st-item flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-[#1A7A2E] rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <div>
                <span className="st-val text-sm font-black uppercase">Live Fair</span>
                <span className="st-lbl">Gujarat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-bot-tape">
          <div className="h-tape">
            {[...SECTORS, ...SECTORS].map((s, i) => (
              <span key={i} className="h-ti">
                {s} <span className="h-ti-dot">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}