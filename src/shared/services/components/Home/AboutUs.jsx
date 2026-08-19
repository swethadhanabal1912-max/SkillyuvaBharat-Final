import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Users, GraduationCap, Handshake, MapPin, ArrowRight, Play, Briefcase, ShieldCheck, Rocket, X } from "lucide-react";

const BRAND = {
  saffron: "#E8650A",
  navy: "#000080",
  green: "#1A7A2E",
  purple: "#7C3AED",
};

const features = [
  { icon: <Users size={22} />, title: "Connecting Talent", desc: "Bridging youth with the right opportunities.", dot: BRAND.saffron },
  { icon: <GraduationCap size={22} />, title: "Skill Development", desc: "Industry-aligned training for real-world success.", dot: BRAND.navy },
  { icon: <Handshake size={22} />, title: "Employer Partnerships", desc: "Building strong alliances for better placements.", dot: BRAND.green },
  { icon: <MapPin size={22} />, title: "Pan-India Impact", desc: "Creating opportunities in every state.", dot: BRAND.saffron },
];

const floatingStats = [
  { icon: <Users size={16} />, value: "50K+", label: "Candidates", bg: "bg-orange-50", color: BRAND.saffron },
  { icon: <Briefcase size={16} />, value: "500+", label: "Recruiters", bg: "bg-blue-50", color: BRAND.navy },
  { icon: <ShieldCheck size={16} />, value: "7", label: "Job Fairs", bg: "bg-green-50", color: BRAND.green },
];

const bottomStats = [
  { icon: <Users size={20} />, value: "25K+", label: "Happy Candidates", sub: "Placed & Growing", color: BRAND.saffron, bg: "bg-orange-50" },
  { icon: <Briefcase size={20} />, value: "7", label: "Job Fairs Conducted", sub: "Across 6 States", color: BRAND.navy, bg: "bg-blue-50" },
  { icon: <Handshake size={20} />, value: "500+", label: "Employer Partners", sub: "Trusting Our Platform", color: BRAND.green, bg: "bg-green-50" },
  { icon: <Rocket size={20} />, value: "85%+", label: "Placement Success", sub: "Rate Across Fairs", color: BRAND.purple, bg: "bg-purple-50" },
];

export default function AboutHero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative bg-[#FBF0E1] overflow-hidden pt-28 pb-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-12 items-center">
          {/* ---------- LEFT: CONTENT ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-[#E8650A]/30 rounded-lg px-5 py-2 text-[11px] font-black uppercase tracking-widest mb-8 text-[#E8650A]"
            >
              <Star size={13} fill={BRAND.saffron} /> About Skill Yuva Bharat
            </motion.span>

            <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6">
              <span className="text-[#000080]">Building Bharat.</span>
              <br />
              <span className="italic font-serif text-[#E8650A]">Empowering Youth.</span>
            </h1>

            <div className="w-16 h-1 rounded-full mb-6 bg-[#E8650A]" />

            <p className="text-gray-600 text-base leading-relaxed max-w-xl mb-10">
              Skill Yuva Bharat is a pan-India initiative on a mission to connect talent
              with opportunities. Through mega job fairs, skill development programs and
              employer partnerships, we are building a future-ready workforce for a
              stronger India.
            </p>

            {/* Feature grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                >
                  <div className="relative w-14 h-14 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center mb-3" style={{ color: f.dot }}>
                    {f.icon}
                    <span className="absolute top-0 right-0 w-2 h-2 rounded-full" style={{ backgroundColor: f.dot }} />
                  </div>
                  <h4 className="text-[13px] font-black text-gray-900 leading-tight mb-1">{f.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-snug">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 text-white font-black text-[13px] px-8 py-4 rounded-lg shadow-lg bg-[#E8650A]"
              >
                Our Journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <button
                onClick={() => setShowVideo(true)}
                className="group flex items-center gap-3 text-gray-900 font-bold text-sm"
              >
                <span className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Play size={14} fill="#111" className="ml-0.5" />
                </span>
                Watch Our Story
              </button>
            </motion.div>
          </motion.div>

          {/* ---------- RIGHT: IMAGE + FLOATING CARDS ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -right-10 top-6 w-[85%] h-[85%] rounded-full opacity-90 -z-10 bg-[linear-gradient(135deg,#E8650A,#ffb066)]" />

            <div className="absolute -top-6 right-8 z-20 w-[110px] h-[90px]">
              <svg
                className="absolute inset-0 pointer-events-none"
                width="110" height="90" viewBox="0 0 110 90" fill="none"
              >
                <path
                  d="M5 85 C 25 60, 15 30, 60 15 S 95 5, 100 5"
                  stroke="#FDBA74"
                  strokeWidth="1.5"
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />
              </svg>

              <motion.div
                className="absolute top-0 left-0 text-[#E8650A]"
                animate={{
                  x: [-6, 4.7, 12.1, 24.2, 49, 73.5, 84, 87, 89],
                  y: [74, 54.6, 35.25, 17.75, 4, -3.9, -6.6, -6.55, -6],
                  rotate: [0, -12, -22, -14, 2, 14, 6, 0, 0],
                  opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  repeatDelay: 0.4,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 2L2 9.5l7 3 2.5 7L22 2z" />
                </svg>
              </motion.div>
            </div>

            {/*
              Fix: the image was set with a fixed aspect-ratio (520/830, a
              very tall portrait) at up to 480px wide. On real screens that
              made the image (and therefore the whole hero) taller than the
              viewport, forcing a big vertical scroll and pushing the
              floating stat cards up behind the fixed navbar.

              Instead of a fixed aspect-ratio, cap the image's height to a
              share of the viewport height (max-h-[70vh], smaller on
              mobile) and let width follow from that — so the image always
              fits within one screen instead of dictating page height.
            */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl w-full max-w-[480px] mx-auto max-h-[58vh] sm:max-h-[64vh] lg:max-h-[70vh] aspect-[520/830]">
              <img
                src="/images/hero-about-boy.png"
                alt="Skill Yuva Bharat — youth opportunity"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="absolute top-10 -right-2 md:right-2 flex flex-col gap-3 z-20">
              {floatingStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                  transition={{
                    opacity: { delay: 0.6 + i * 0.15, duration: 0.5 },
                    x: { delay: 0.6 + i * 0.15, duration: 0.5 },
                    y: { duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                  }}
                  className="flex items-center gap-3 bg-white rounded-2xl shadow-lg px-4 py-3 border border-black/5"
                >
                  <div className={`w-9 h-9 rounded-full ${s.bg} flex items-center justify-center shrink-0`} style={{ color: s.color }}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-sm font-black text-gray-900 leading-none">{s.value}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mt-0.5">{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------- BOTTOM: SCROLLING STATS MARQUEE ---------- */}
      <div className="max-w-7xl mx-auto mt-14 md:mt-16">
        <div className="relative bg-white/70 backdrop-blur-sm rounded-[2rem] border border-black/5 py-6 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FBF0E1] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FBF0E1] to-transparent z-10" />

          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            {[...bottomStats, ...bottomStats].map((s, i) => (
              <div key={i} className="flex items-center gap-4 px-4 shrink-0">
                <div className={`w-12 h-12 rounded-full ${s.bg} flex items-center justify-center shrink-0`} style={{ color: s.color }}>
                  {s.icon}
                </div>
                <div>
                  <p className="text-2xl font-black leading-none" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-[13px] font-bold text-gray-800 leading-tight mt-1">{s.label}</p>
                  <p className="text-[11px] text-gray-400">{s.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ---------- VIDEO MODAL ---------- */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1100] bg-black/80 flex items-center justify-center p-6"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
              // Macha, removed aspect-video to allow any video shape, increased max-width
              className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-[1200]"
              >
                <X size={18} />
              </button>

              <video
                src="/images/video.mp4"
                controls
                autoPlay
                // Macha, 'object-contain' is the key here. It shows the full video without cutting.
                className="w-full h-full max-h-[85vh] object-contain"
              >
                Your browser doesn't support embedded video.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}