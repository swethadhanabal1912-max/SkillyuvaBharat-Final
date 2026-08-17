import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Calendar, MapPin, Users, ArrowRight, ArrowLeft, CheckCircle2, Clock } from "lucide-react";

const BRAND = { saffron: "#FF9933", navy: "#000080", green: "#138808" };

const PREVIOUS_FAIRS = [
  { city: "Chennai", venue: "YMCA Grounds, Nandanam", date: "12 - 14 Mar 2026", jobs: 118, youth: "6,400+" },
  { city: "Kolkata", venue: "Biswa Bangla Mela Prangan", date: "22 - 23 Feb 2026", jobs: 95, youth: "5,100+" },
  { city: "Ahmedabad", venue: "GMDC Exhibition Ground", date: "05 - 06 Feb 2026", jobs: 132, youth: "7,800+" },
  { city: "Pune", venue: "Ground No. 4, Balewadi", date: "18 - 19 Jan 2026", jobs: 87, youth: "4,900+" },
  { city: "Jaipur", venue: "Birla Auditorium Grounds", date: "22 - 23 Dec 2025", jobs: 74, youth: "3,600+" },
  { city: "Bhubaneswar", venue: "Janata Maidan", date: "08 - 09 Dec 2025", jobs: 61, youth: "3,100+" },
];

const UPCOMING_FAIRS = [
  { city: "Guwahati", venue: "Khanapara Veterinary Ground", date: "02 - 03 Aug 2026", jobs: 70, youth: "3,500+ expected" },
  { city: "Lucknow", venue: "Smriti Upvan Ground", date: "16 - 17 Aug 2026", jobs: 105, youth: "5,800+ expected" },
  { city: "Indore", venue: "Nehru Stadium Grounds", date: "29 - 30 Aug 2026", jobs: 92, youth: "4,700+ expected" },
  { city: "Coimbatore", venue: "Codissia Trade Fair Complex", date: "12 - 13 Sep 2026", jobs: 68, youth: "3,300+ expected" },
  { city: "Patna", venue: "Gandhi Maidan", date: "26 - 27 Sep 2026", jobs: 84, youth: "4,200+ expected" },
  { city: "Nagpur", venue: "Reshimbagh Ground", date: "10 - 11 Oct 2026", jobs: 76, youth: "3,900+ expected" },
];

const TABS = [
  { key: "previous", label: "Previous Job Fairs", icon: <CheckCircle2 size={15} />, color: BRAND.green },
  { key: "upcoming", label: "Upcoming Job Fairs", icon: <Clock size={15} />, color: BRAND.saffron },
];

function FairCard({ fair, tab }) {
  const tone = tab === "previous" ? BRAND.green : BRAND.saffron;

  return (
    <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-5 hover:shadow-lg transition-shadow h-full min-w-0">
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${tone}15`, color: tone }}
        >
          <Calendar size={18} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 text-base truncate">{fair.city}</h4>
          <p className="text-[12px] text-gray-500 flex items-center gap-1 mt-0.5 truncate">
            <MapPin size={11} className="shrink-0" /> {fair.venue}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-black/5 pt-3 gap-2 min-w-0">
        <div className="min-w-0">
          <p className="text-[13px] font-black" style={{ color: tone }}>{fair.date}</p>
          <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5 truncate">
            <Users size={11} className="shrink-0" /> {fair.youth} &middot; {fair.jobs} jobs
          </p>
        </div>

        {tab === "upcoming" ? (
          <button
            type="button"
            className="shrink-0 text-[10px] font-black uppercase tracking-wide flex items-center gap-1 px-3 py-2 rounded-full text-white"
            style={{ backgroundColor: BRAND.navy }}
          >
            Register <ArrowRight size={12} />
          </button>
        ) : (
          <button
            type="button"
            className="group shrink-0 flex items-center gap-1.5 text-[12px] font-bold transition-colors"
            style={{ color: BRAND.navy }}
          >
            View details
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}

export default function PreviousUpcomingSection() {
  const [tab, setTab] = useState("previous");
  const fairs = tab === "previous" ? PREVIOUS_FAIRS : UPCOMING_FAIRS;

  return (
    <section className="py-14 px-6 bg-[#FBF0E1] relative overflow-hidden" id="fairs">
      <style>{`
        .puf-swiper .swiper-wrapper { align-items: stretch; }
        .puf-swiper .swiper-slide { height: auto; display: flex; }
        .puf-swiper .swiper-slide > div { width: 100%; }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER — matches JobFairPage eyebrow + ServicesSection heading treatment */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8" style={{ backgroundColor: BRAND.navy }} />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500">Job Fair Events</span>
            <span className="h-[1px] w-8" style={{ backgroundColor: BRAND.navy }} />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#000080] uppercase tracking-tighter leading-tight">
            Previous &amp;{" "}
            <span className="italic font-serif lowercase font-light" style={{ color: BRAND.saffron }}>
              upcoming
            </span>{" "}
            job fairs
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto mt-3 leading-relaxed">
            Explore our successful recruitment drives and discover upcoming opportunities to connect with leading employers across India.
          </p>
        </div>

        {/* TABS — same pill pattern as JobFairPage */}
        <div className="flex items-center justify-center gap-2.5 mb-8 flex-wrap">
          {TABS.map((t) => {
            const isActive = tab === t.key;
            return (
              <motion.button
                key={t.key}
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setTab(t.key)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-[12px] uppercase tracking-widest transition-all"
                style={{ color: isActive ? "#fff" : t.color, backgroundColor: isActive ? t.color : `${t.color}12` }}
              >
                {t.icon}
                {t.label}
              </motion.button>
            );
          })}
        </div>

        {/* CAROUSEL */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Swiper
              className="puf-swiper !overflow-hidden"
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
              loop
              spaceBetween={20}
              slidesPerView={1}
              navigation={{ prevEl: ".puf-nav-prev", nextEl: ".puf-nav-next" }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {fairs.map((fair) => (
                <SwiperSlide key={fair.city}>
                  <FairCard fair={fair} tab={tab} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>

        {/* NAV ARROWS — same circular button language as elsewhere */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            type="button"
            aria-label="Previous"
            className="puf-nav-prev w-10 h-10 rounded-full bg-white border border-black/10 shadow-md flex items-center justify-center text-gray-900 hover:text-white transition-colors"
            style={{ "--tw-shadow-color": BRAND.navy }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND.navy)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="puf-nav-next w-10 h-10 rounded-full bg-white border border-black/10 shadow-md flex items-center justify-center text-gray-900 hover:text-white transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND.navy)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
          >
            <ArrowRight size={16} />
          </button>
        </div>

        {/* CTA — same primary-button style as FairCard's Register button */}
        <div className="flex justify-center mt-8">
          <Link
            to="/jobfair"
            className="flex items-center gap-2 font-black text-[12px] uppercase tracking-widest px-7 py-3 rounded-full text-white transition-colors"
            style={{ backgroundColor: BRAND.navy }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND.saffron)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND.navy)}
          >
            View All Job Fairs <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}