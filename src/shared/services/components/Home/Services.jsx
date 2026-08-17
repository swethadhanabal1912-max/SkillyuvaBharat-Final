import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  Users, 
  Trophy, 
  Zap, 
  ChevronRight,
  Target,
  Globe,
  Sparkles,
  ArrowRightCircle
} from "lucide-react";

const SERVICES = [
  { id: 1, title: "Mega Job Fairs", desc: "Connect with 500+ top companies in our massive pan-India hiring events.", icon: <Briefcase size={28} />, color: "#E8650A" },
  { id: 2, title: "Govt Scheme Guide", desc: "Expert guidance to unlock official benefits and government career schemes.", icon: <Globe size={28} />, color: "#000080" },
  { id: 3, title: "Career Assessment", desc: "AI-powered testing to find the career path that matches your true DNA.", icon: <Target size={28} />, color: "#1A7A2E" },
  { id: 4, title: "Employer Match", desc: "Directly matching your profile with real-time industry requirements.", icon: <Users size={28} />, color: "#7C3AED" },
  { id: 5, title: "Skill Certification", desc: "Industry-recognized credentials that validate your expertise to recruiters.", icon: <Zap size={28} />, color: "#E11D48" },
  { id: 6, title: "Success Mentorship", desc: "One-on-one support until you successfully join your dream workplace.", icon: <Trophy size={28} />, color: "#0891B2" },
];

// Tracks viewport width in three buckets so the orbit can scale down on small screens
function useOrbitScale() {
  const getScale = () => {
    if (typeof window === "undefined") return "lg";
    const w = window.innerWidth;
    if (w < 420) return "xs";
    if (w < 640) return "sm";
    if (w < 768) return "md";
    return "lg";
  };
  const [scale, setScale] = useState(getScale);
  React.useEffect(() => {
    const onResize = () => setScale(getScale());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return scale;
}

const ORBIT_CONFIG = {
  xs: { ring: 240, plate: 112, bubble: 56, radius: 128, iconSize: 18, fontTitle: "text-sm" },
  sm: { ring: 300, plate: 140, bubble: 68, radius: 158, iconSize: 22, fontTitle: "text-base" },
  md: { ring: 380, plate: 176, bubble: 80, radius: 210, iconSize: 24, fontTitle: "text-lg" },
  lg: { ring: 420, plate: 192, bubble: 80, radius: 210, iconSize: 24, fontTitle: "text-lg" },
};

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(1);
  const scale = useOrbitScale();
  const cfg = ORBIT_CONFIG[scale];

  return (
    <section className="relative pt-0 pb-8 px-6 bg-[#FBF0E1] overflow-hidden">

      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER (Compact) --- */}
        <div className="text-center mb-5 pt-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-md border border-[#E8650A]/20 mb-3"
          >
            <Sparkles size={12} className="text-[#E8650A]" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600">Career Ecosystem</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black text-[#000080] leading-[1.1] uppercase tracking-tighter">
            Skill. Opportunities. <br />
            <span className="text-[#E8650A] italic font-serif lowercase font-light">Success Hub.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 items-center">
          
          {/* --- LEFT: COMPACT ORBITAL CIRCLE --- */}
          <div
            className="relative flex justify-center items-center mx-auto max-w-full"
            style={{ height: cfg.ring + cfg.bubble + 16, width: cfg.ring + cfg.bubble + 16, maxWidth: "100%" }}
          >

            {/* Glowing Orbit Ring */}
            <div
              className="absolute border-[3px] border-white/50 rounded-full shadow-lg"
              style={{ width: cfg.ring, height: cfg.ring }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute border-[2px] border-dashed border-[#E8650A]/40 rounded-full"
              style={{ width: cfg.ring, height: cfg.ring }}
            />

            {/* Center Brand Plate (Compact) */}
            <motion.div
              className="absolute z-20 bg-white rounded-full shadow-2xl border-[6px] border-[#FBF0E1] flex flex-col items-center justify-center text-center p-3"
              style={{ width: cfg.plate, height: cfg.plate }}
            >
              <img
                src="/images/logo.png"
                alt="Skill Yuva Bharat"
                className="w-[82%] h-[82%] object-contain"
              />
            </motion.div>

            {/* Service Bubbles Orbiting (radius scales with viewport) */}
            {SERVICES.map((item, index) => {
              const angle = (index * (360 / SERVICES.length)) * (Math.PI / 180);
              const x = Math.cos(angle) * cfg.radius;
              const y = Math.sin(angle) * cfg.radius;
              const half = cfg.bubble / 2;

              return (
                <motion.div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`absolute z-30 cursor-pointer rounded-[1.5rem] flex flex-col items-center justify-center transition-all duration-300 shadow-xl ${
                    activeId === item.id 
                    ? `scale-110 ring-[6px] ring-white z-40` 
                    : "bg-white text-gray-400 opacity-80"
                  }`}
                  style={{
                    width: cfg.bubble,
                    height: cfg.bubble,
                    left: `calc(50% + ${x}px - ${half}px)`,
                    top: `calc(50% + ${y}px - ${half}px)`,
                    backgroundColor: activeId === item.id ? item.color : "white",
                    color: activeId === item.id ? "white" : undefined,
                  }}
                >
                  {activeId === item.id && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="absolute inset-0 rounded-[1.5rem] blur-2xl opacity-60 -z-10"
                      style={{ backgroundColor: item.color }}
                    />
                  )}
                  {React.cloneElement(item.icon, { size: cfg.iconSize })}
                  <span className="text-[7px] font-black uppercase mt-0.5 tracking-tighter">{item.title.split(' ')[0]}</span>
                </motion.div>
              );
            })}
          </div>

          {/* --- RIGHT: DETAIL LIST --- */}
          <div className="flex flex-col gap-3 relative z-10 min-w-0">
            {SERVICES.map((item) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                className={`group relative p-4 rounded-[2.5rem] transition-all duration-500 border-2 cursor-default min-w-0 ${
                  activeId === item.id 
                  ? "bg-white border-white shadow-xl translate-x-4 z-20 scale-105" 
                  : "bg-white/60 border-transparent opacity-60"
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div 
                    className="w-12 h-12 rounded-[1.2rem] flex items-center justify-center text-white shadow-lg shrink-0 border-2 border-white/50"
                    style={{ backgroundColor: item.color }}
                  >
                    {React.cloneElement(item.icon, { size: 20 })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-black opacity-30 shrink-0" style={{ color: item.color }}>0{item.id}</span>
                       <h4 className="text-base font-black text-gray-900 uppercase tracking-tighter truncate">
                         {item.title}
                       </h4>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 leading-tight font-bold line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRightCircle 
                    size={24} 
                    className={`shrink-0 transition-all duration-300 ${activeId === item.id ? "opacity-100 translate-x-0" : "opacity-0"}`}
                    style={{ color: item.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* --- BOTTOM: COMPACT SUCCESS ROADMAP --- */}
        <div className="mt-5 flex justify-center">
            <div className="bg-[#000080] rounded-[1.5rem] p-1.5 px-5 flex flex-wrap justify-center items-center gap-4 md:gap-8 shadow-lg border-4 border-white">
                {[
                    { label: "Discovery", icon: <Globe size={12}/> },
                    { label: "AI Test", icon: <Target size={12}/> },
                    { label: "Skill-Up", icon: <Zap size={12}/> },
                    { label: "Job Fair", icon: <Briefcase size={12}/> },
                    { label: "Placements", icon: <Trophy size={12}/> },
                ].map((s, i) => (
                    <div key={i} className="flex items-center gap-1.5 py-1">
                        <span className="text-[9px] font-black text-white bg-[#E8650A] w-5 h-5 rounded-full flex items-center justify-center shadow-lg">{i + 1}</span>
                        <span className="text-white font-black text-[9px] uppercase tracking-widest">{s.label}</span>
                        {i !== 4 && <div className="h-1 w-3 bg-white/10 rounded-full hidden lg:block" />}
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}