import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, Calendar, MapPin, ChevronRight, CheckCircle2, CalendarClock,
  IdCard, Users, MessageSquare, Briefcase, Star,
} from "lucide-react";

const BRAND = { saffron: "#E8650A", navy: "#000080", green: "#1A7A2E" };

// ---------- DUMMY DATA ----------
const FAIRS = {
  upcoming: [
    { city: "Delhi NCR", title: "Mega Job Fair", date: "25 Aug", venue: "Pragati Maidan" },
    { city: "Mumbai", title: "Finance & Banking Fair", date: "02 Sep", venue: "BKC Grounds" },
    { city: "Kochi", title: "IT Career Fair", date: "15 Sep", venue: "Infopark Campus" },
    { city: "Chennai", title: "Trade Centre Job Fair", date: "20 Sep", venue: "Chennai Trade Centre" },
    { city: "Visakhapatnam", title: "Job Mela", date: "05 Oct", venue: "VUDA Grounds" },
    { city: "Jaipur", title: "Skill Connect Fair", date: "12 Oct", venue: "Sitapura Expo Centre" },
  ],
  ongoing: [
    { city: "Bengaluru", title: "Career Expo 2026", date: "Today, 23 Jul", venue: "KTPO Convention Centre" },
    { city: "Pune", title: "Recruitment Drive", date: "Today, 23 Jul", venue: "Pune Trade Centre" },
  ],
  completed: [
    { city: "Chennai", title: "Tech Job Fair", date: "15 Jul", venue: "Chennai Trade Centre" },
    { city: "Coimbatore", title: "Job Mela", date: "20 Jul", venue: "CODISSIA Grounds" },
    { city: "Hyderabad", title: "IT Career Fair", date: "10 Jul", venue: "HITEX Exhibition Centre" },
    { city: "Madurai", title: "Skill Fair", date: "18 Jul", venue: "Tamukkam Ground" },
  ],
};

const TABS = [
  { key: "upcoming", label: "Upcoming", icon: <CalendarClock size={15} />, color: BRAND.saffron },
  { key: "ongoing", label: "Ongoing", icon: <CheckCircle2 size={15} />, color: BRAND.green },
  { key: "completed", label: "Completed", icon: <CheckCircle2 size={15} />, color: "#6b7280" },
];

const journey = [
  { icon: <IdCard size={20} />, title: "Register", desc: "Sign up in seconds and get your pass", color: BRAND.navy },
  { icon: <Users size={20} />, title: "Explore", desc: "Discover companies, roles & opportunities", color: BRAND.saffron },
  { icon: <MessageSquare size={20} />, title: "Connect", desc: "Meet recruiters and industry experts", color: BRAND.green },
  { icon: <Briefcase size={20} />, title: "Interview", desc: "Showcase your skills in real conversations", color: BRAND.navy },
  { icon: <Star size={20} />, title: "Get Hired", desc: "Grab the opportunity and build your future", color: BRAND.saffron },
];

function FairCard({ fair, tab }) {
  const isUpcoming = tab === "upcoming";
  const isOngoing = tab === "ongoing";
  const tone = isOngoing ? BRAND.green : isUpcoming ? BRAND.saffron : "#9ca3af";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-black/5 shadow-sm p-4 hover:shadow-lg transition-shadow min-w-0"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${tone}15`, color: tone }}>
          {isOngoing ? (
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: tone }} />
              <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: tone }} />
            </span>
          ) : isUpcoming ? <Calendar size={16} /> : <CheckCircle2 size={16} />}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 text-sm truncate">{fair.title}</h4>
          <p className="text-[12px] text-gray-500 flex items-center gap-1 mt-0.5 truncate">
            <MapPin size={11} className="shrink-0" /> {fair.city}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-black/5 pt-3 gap-2 min-w-0">
        <div className="min-w-0">
          <p className="text-[11px] font-black" style={{ color: tone }}>{fair.date}</p>
          <p className="text-[10px] text-gray-400 truncate">{fair.venue}</p>
        </div>
        {isUpcoming && (
          <button className="shrink-0 text-[10px] font-black uppercase tracking-wide flex items-center gap-1 px-3 py-2 rounded-lg text-white" style={{ backgroundColor: BRAND.navy }}>
            Register <ArrowUpRight size={12} />
          </button>
        )}
        {isOngoing && (
          <button className="shrink-0 text-[10px] font-black uppercase tracking-wide flex items-center gap-1 px-3 py-2 rounded-lg text-white" style={{ backgroundColor: tone }}>
            Join Now <ArrowUpRight size={12} />
          </button>
        )}
        {tab === "completed" && <ChevronRight size={16} className="text-gray-300 shrink-0" />}
      </div>
    </motion.div>
  );
}

export default function JobFairPage() {
  const [active, setActive] = useState("upcoming");

  return (
    <div className="bg-[#FBF0E1] min-h-screen overflow-x-hidden">
      {/* ================= SEAMLESS FLOW START ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-14">
        
        {/* HERO BLOCK */}
        <div className="max-w-4xl mx-auto text-center mb-12 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8" style={{ backgroundColor: BRAND.navy }} />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500">Job Fair Experience</span>
              <span className="h-[1px] w-8" style={{ backgroundColor: BRAND.navy }} />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-gray-900 mb-1">
              Opportunities Are Everywhere.
            </h1>

            <div className="relative inline-block mb-4">
              <span className="italic font-serif text-2xl sm:text-3xl md:text-4xl" style={{ color: BRAND.saffron }}>
                Let's connect them.
              </span>
              <svg width="220" height="10" viewBox="0 0 260 12" className="absolute -bottom-1 left-1/2 -translate-x-1/2">
                <path d="M2 8 Q130 -2 258 8" stroke={BRAND.green} strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto mb-2">
              Our Job Fairs bring together ambitious talent and leading companies
              to build the future, one connection at a time.
            </p>
          </motion.div>
        </div>

        {/* JOURNEY TIMELINE (Flows directly) */}
        <div className="mb-14 relative">
          <div className="text-center mb-8">
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-gray-500">Your Journey At The Job Fair</span>
            <div className="w-10 h-[2px] mx-auto mt-2" style={{ backgroundColor: BRAND.saffron }} />
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4">
            {/* Background Journey Line */}
            <svg className="hidden md:block absolute top-7 left-0 w-full h-6 -z-0" viewBox="0 0 1000 40" preserveAspectRatio="none">
              <motion.path
                d="M100 20 Q 190 0, 280 20 T 460 20 T 640 20 T 820 20 T 900 20"
                fill="none" stroke="url(#journeyGrad)" strokeWidth="2" strokeDasharray="6 6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              />
              <defs>
                <linearGradient id="journeyGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={BRAND.navy} />
                  <stop offset="50%" stopColor={BRAND.saffron} />
                  <stop offset="100%" stopColor={BRAND.green} />
                </linearGradient>
              </defs>
            </svg>

            {journey.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative z-10 flex flex-col items-center text-center min-w-0"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-3"
                  style={{ color: step.color, boxShadow: `0 6px 20px ${step.color}22` }}>
                  {step.icon}
                </div>
                <span className="w-1.5 h-1.5 rounded-full mb-2" style={{ backgroundColor: step.color }} />
                <h4 className="font-black text-gray-900 text-sm mb-1">{step.title}</h4>
                <p className="text-[11px] text-gray-500 leading-snug max-w-[130px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LISTINGS BLOCK (Flows directly) */}
        <div id="job-fairs" className="scroll-mt-32">
          <div className="text-center mb-6">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500">Job Fair Status</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-1.5">
              Find Fairs, <span style={{ color: BRAND.navy }}>Your Way.</span>
            </h2>
          </div>

          <div className="flex items-center justify-center gap-2.5 mb-8 flex-wrap">
            {TABS.map((tab) => {
              const isActive = active === tab.key;
              return (
                <motion.button
                  key={tab.key}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActive(tab.key)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-black text-[12px] uppercase tracking-widest transition-all"
                  style={{ color: isActive ? "#fff" : tab.color, backgroundColor: isActive ? tab.color : `${tab.color}12` }}
                >
                  {tab.icon}
                  {tab.label}
                  <span className="ml-1 px-1.5 py-0.5 rounded-md text-[10px]"
                    style={{ backgroundColor: isActive ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.06)" }}>
                    {FAIRS[tab.key].length}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {FAIRS[active].map((fair, i) => (
                <FairCard key={`${active}-${i}`} fair={fair} tab={active} />
              ))}
            </AnimatePresence>
          </motion.div>

          {FAIRS[active].length === 0 && (
            <p className="text-center text-gray-400 py-16 font-serif italic">No fairs in this category right now.</p>
          )}
        </div>

      </div>
    </div>
  );
}