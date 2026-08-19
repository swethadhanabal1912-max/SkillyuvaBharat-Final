import React, { useEffect, useRef, useState } from 'react';
import {
  Users2, Handshake, UsersRound, FileText, Megaphone, LifeBuoy,
  Factory, Cpu, HeartPulse, Truck, Landmark, HardHat, ShoppingBag, ConciergeBell, Car, ChevronDown,
  UserSearch
} from 'lucide-react';

const RunIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.49,5.48c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S12.39,5.48,13.49,5.48z M9.89,19.38l1-4.4l2.1,2v6h2v-7.5l-2.1-2 l0.6-3c1.3,1.5,3.3,2.5,5.5,2.5v-2c-1.9,0-3.5-1-4.3-2.4l-1-1.6c-0.4-0.6-1-1-1.7-1c-0.3,0-0.5,0.1-0.8,0.1L6,8.3V13h2V9.6l1.8-0.7 l-1.6,8.1l-4.9-1l-0.4,2L9.89,19.38z"/>
  </svg>
);

const SECTOR_LIST = [
  { name: "Manufacturing", icon: <Factory size={22} />, color: "#E8650A", desc: "Assembly line roles, machine operators, and quality control positions across factories and production units." },
  { name: "IT & Tech", icon: <Cpu size={22} />, color: "#1A7A2E", desc: "Technical support, helpdesk, and entry-level IT roles with leading technology and software employers." },
  { name: "Healthcare", icon: <HeartPulse size={22} />, color: "#111111", desc: "Nursing assistants, lab technicians, and hospital support staff roles with verified healthcare providers." },
  { name: "Logistics", icon: <Truck size={22} />, color: "#E8650A", desc: "Warehouse operations, delivery, and supply chain roles with e-commerce and freight companies." },
  { name: "Banking", icon: <Landmark size={22} />, color: "#1A7A2E", desc: "Teller, customer service, and back-office roles with banks, NBFCs, and financial institutions." },
  { name: "Construction", icon: <HardHat size={22} />, color: "#111111", desc: "Site supervisors, skilled labour, and safety roles with infrastructure and real estate developers." },
  { name: "Retail", icon: <ShoppingBag size={22} />, color: "#E8650A", desc: "Store associates, cashiers, and inventory roles with retail chains and shopping outlets." },
  { name: "Hospitality", icon: <ConciergeBell size={22} />, color: "#1A7A2E", desc: "Front desk, housekeeping, and food & beverage service roles with hotels and restaurants." },
  { name: "Automotive", icon: <Car size={22} />, color: "#111111", desc: "Assembly technicians, service advisors, and dealership roles with auto manufacturers and service centers." },
];

const SERVICES = [
  {
    title: "Job Fair Organization",
    tag: "For Everyone",
    icon: <Users2 size={20} />,
    desc: "We organize engaging online and offline job fairs that bring talented job seekers and leading employers together under one platform.",
    points: ["Online & offline formats", "Multiple employers, one venue", "Open to every job seeker"],
    accent: "#E8650A"
  },
  {
    title: "Recruitment & Talent Acquisition",
    tag: "For Employers",
    icon: <Handshake size={20} />,
    desc: "We help companies find and connect with the right candidates through efficient recruitment and talent acquisition solutions.",
    points: ["Candidate sourcing", "Skill-based matching", "Faster hiring cycles"],
    accent: "#1A7A2E"
  },
  {
    title: "Candidate Connections",
    tag: "For Job Seekers",
    icon: <UsersRound size={20} />,
    desc: "We create opportunities for job seekers to meet recruiters, explore suitable job openings, and participate in direct interviews.",
    points: ["Direct recruiter meetings", "Explore live openings", "On-the-spot interviews"],
    accent: "#111"
  },
  {
    title: "Resume & Candidate Support",
    tag: "For Job Seekers",
    icon: <FileText size={20} />,
    desc: "We help job seekers present themselves effectively and connect their skills and experience with relevant career opportunities.",
    points: ["Resume guidance", "Skill highlighting", "Career-fit matching"],
    accent: "#E8650A"
  },
  {
    title: "Employer Branding & Candidate Screening",
    tag: "For Employers",
    icon: <Megaphone size={20} />,
    desc: "We help companies promote their brand while identifying and connecting with suitable candidates from a diverse talent pool.",
    points: ["Company brand visibility", "Pre-screened candidates", "Access to diverse talent"],
    accent: "#1A7A2E"
  },
  {
    title: "Post-Event Hiring Support",
    tag: "For Everyone",
    icon: <LifeBuoy size={20} />,
    desc: "Our support continues beyond the job fair with interview coordination, candidate follow-ups, and assistance throughout the hiring process.",
    points: ["Interview coordination", "Candidate follow-ups", "End-to-end hiring support"],
    accent: "#111"
  }
];

const SEEKER_STEPS = [
  { title: "Register", desc: "Create your account and register for the job fair." },
  { title: "Create Your Profile", desc: "Build your profile and upload your resume to showcase your skills and experience." },
  { title: "Explore Opportunities", desc: "Discover job openings that match your skills, qualifications, and career goals." },
  { title: "Meet Recruiters", desc: "Connect directly with employers and learn more about available opportunities." },
  { title: "Attend Interviews", desc: "Interact with recruiters and participate in the interview process." },
  { title: "Get Hired", desc: "Take the next step in your career and secure the right opportunity." },
];

const EMPLOYER_STEPS = [
  { title: "Register as an Employer", desc: "Join our platform and register your company for the job fair." },
  { title: "Create Your Company Profile", desc: "Showcase your organization, culture, and career opportunities." },
  { title: "Post Job Openings", desc: "Share your available positions and define your hiring requirements." },
  { title: "Meet Candidates", desc: "Connect with a diverse pool of talented and qualified job seekers." },
  { title: "Conduct Interviews", desc: "Evaluate candidates and identify the best fit for your organization." },
  { title: "Hire the Right Talent", desc: "Select and hire suitable candidates to strengthen your team." },
];

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openSector, setOpenSector] = useState(null);

  const seekerTrackRef = useRef(null);
  const employerTrackRef = useRef(null);
  const [seekerInView, setSeekerInView] = useState(false);
  const [employerInView, setEmployerInView] = useState(false);

  useEffect(() => {
    const makeObserver = (ref, setter) => {
      if (!ref.current) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { setter(entry.isIntersecting); },
        { threshold: 0.35 }
      );
      obs.observe(ref.current);
      return obs;
    };
    const o1 = makeObserver(seekerTrackRef, setSeekerInView);
    const o2 = makeObserver(employerTrackRef, setEmployerInView);
    return () => { if (o1) o1.disconnect(); if (o2) o2.disconnect(); };
  }, []);

  return (
    <div className="min-h-screen font-[Raleway,sans-serif]" style={{ background: '#FBF0E1' }}>
      {/* Only things Tailwind's utility classes truly can't express (a custom keyframe
          animation and a couple of exact CSS-variable-driven accent colors) live here. */}
      <style>{`
        @keyframes hiw-bob {
          from { transform: translateY(0); }
          to { transform: translateY(-2px); }
        }
      `}</style>

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden pt-[120px] pb-[110px] text-center" style={{ background: '#F4D8BE' }}>
        <div className="mx-auto max-w-[1000px] px-6">
          <span className="text-[11px] font-extrabold tracking-[2px]" style={{ color: '#1A7A2E' }}>OUR CAPABILITIES</span>
          <h1 className="my-[15px] text-[48px] font-black">
            Hiring at scale, without the{' '}
            <span className="font-[Crimson_Pro] italic" style={{ color: '#E8650A' }}>chaos.</span>
          </h1>
          <p className="mx-auto max-w-[600px] text-[#666]">
            Whether you're hiring 50 people or 5,000, we run the fair, source the candidates, and manage the room.
          </p>
        </div>
        <svg className="absolute -bottom-px left-0 block w-full" style={{ height: 90 }} viewBox="0 0 1200 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,90 L0,90 Z" fill="#FBF0E1" />
        </svg>
      </section>

      <div className="mx-auto max-w-[1000px] px-6 pt-[70px]">
        {/* ---------- SERVICES ---------- */}
        <div className="mx-auto mb-2.5 max-w-[620px] text-center">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em]" style={{ color: '#E8650A' }}>Our Services</span>
          <h2 className="my-3 text-[30px] font-black tracking-[-0.5px]">
            Covering both sides of{' '}
            <span className="font-[Crimson_Pro] italic" style={{ color: '#1A7A2E' }}>the hiring journey.</span>
          </h2>
          <p className="mb-[50px] text-[14.5px] leading-[1.6] text-[#666]">
            From the first job fair to the final offer letter — six services that support job seekers and employers at every step.
          </p>
        </div>

        <div className="rounded-[20px] border border-black/[0.06] bg-white px-9 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.05)] sm:px-[36px]">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="group relative grid grid-cols-[44px_1fr] gap-3.5 border-b border-black/[0.08] py-[26px] transition-[padding-left] duration-200 last:border-b-0 hover:pl-5 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-[34px]"
              style={{ '--accent': s.accent }}
            >
              <div
                className="absolute -left-5 top-0 bottom-0 w-[3px] origin-center scale-y-0 transition-transform duration-200 group-hover:scale-y-100"
                style={{ background: 'var(--accent)' }}
              />
              <div className="text-[26px] font-black leading-none text-black/10 transition-colors duration-200 group-hover:text-[var(--accent)] sm:text-[40px]">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="flex" style={{ color: 'var(--accent)' }}>{s.icon}</span>
                  <h3 className="text-[17px] font-extrabold sm:text-[19px]">{s.title}</h3>
                  <span
                    className="rounded-md px-[9px] py-[3px] text-[10px] font-extrabold uppercase tracking-[0.05em]"
                    style={{ color: s.accent, background: `${s.accent}1A` }}
                  >
                    {s.tag}
                  </span>
                </div>
                <p className="mb-3.5 max-w-[560px] text-[14.5px] leading-[1.65] text-[#666]">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.points.map((p, idx) => (
                    <span key={idx} className="rounded-full border border-black/[0.08] bg-[#F9F9F9] px-3 py-[5px] text-xs font-bold text-[#444]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- SECTORS ---------- */}
        <div className="mt-[90px]">
          <div className="mx-auto mb-2.5 max-w-[620px] text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em]" style={{ color: '#1A7A2E' }}>Sectors We Cover</span>
            <h2 className="my-3 text-[30px] font-black tracking-[-0.5px]">
              Every industry,{' '}
              <span className="font-[Crimson_Pro] italic" style={{ color: '#E8650A' }}>one platform.</span>
            </h2>
            <p className="mb-[50px] text-[14.5px] leading-[1.6] text-[#666]">Tap a sector to see the kinds of roles typically available.</p>
          </div>

          <div className="grid grid-cols-1 items-start gap-[18px] pb-[100px] sm:grid-cols-2 lg:grid-cols-3">
            {SECTOR_LIST.map((s, i) => {
              const isOpen = openSector === i;
              return (
                <div
                  key={i}
                  onClick={() => setOpenSector(isOpen ? null : i)}
                  className="cursor-pointer rounded-l rounded-r-[14px] border border-black/[0.06] border-l-4 bg-white py-5 pl-[22px] pr-5 transition-shadow duration-200 hover:shadow-[0_10px_26px_rgba(0,0,0,0.06)]"
                  style={{ borderLeftColor: s.color }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ background: `${s.color}1A`, color: s.color }}
                    >
                      {s.icon}
                    </div>
                    <h4 className="flex-1 text-[15px] font-extrabold leading-[1.3]">{s.name}</h4>
                    <ChevronDown
                      size={18}
                      className="flex-shrink-0 text-[#ccc] transition-transform duration-200"
                      style={isOpen ? { transform: 'rotate(180deg)', color: '#E8650A' } : undefined}
                    />
                  </div>
                  <div
                    className="overflow-hidden transition-[max-height,margin-top] duration-300"
                    style={isOpen ? { maxHeight: 120, marginTop: 14 } : { maxHeight: 0, marginTop: 0 }}
                  >
                    <p className="pl-[62px] text-[13px] leading-[1.6] text-[#666]">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------- HOW IT WORKS ---------- */}
        <div className="pb-[110px] pt-10">
          <div className="mx-auto mb-2.5 max-w-[620px] text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em]" style={{ color: '#E8650A' }}>How It Works</span>
            <h2 className="my-3 text-[30px] font-black tracking-[-0.5px]">
              How our services{' '}
              <span className="font-[Crimson_Pro] italic" style={{ color: '#1A7A2E' }}>work.</span>
            </h2>
            <p className="mb-[50px] text-[14.5px] leading-[1.6] text-[#666]">A simple step-by-step journey, whether you're looking for a job or looking to hire.</p>
          </div>

          {/* Job Seekers timeline */}
          <div className="mb-[70px]">
            <div className="mb-[34px] flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px]" style={{ background: '#E8650A1A', color: '#E8650A' }}>
                <UsersRound size={20} />
              </div>
              <h3 className="text-[19px] font-black">For Job Seekers</h3>
              <span className="text-[13px] font-medium text-[#888]">From registration to getting hired</span>
            </div>
            <div className="overflow-x-auto overflow-y-hidden pb-1.5" ref={seekerTrackRef}>
              <div className="relative flex min-w-[780px] pt-[22px]" style={{ '--accent': '#E8650A' }}>
                <div className="absolute top-[22px] h-[3px] rounded-[3px] bg-black/[0.08]" style={{ left: 'calc(100% / 12)', right: 'calc(100% / 12)' }} />
                <div
                  className="absolute top-[22px] h-[3px] rounded-[3px] transition-[width] duration-[5000ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={{ left: 'calc(100% / 12)', background: 'var(--accent)', width: seekerInView ? 'calc(100% - (100% / 6))' : 0 }}
                />
                <div
                  className="absolute top-[22px] z-[3] -mt-[18px] flex h-9 w-9 items-center justify-center rounded-full border-[3px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-[left] duration-[5000ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={{ borderColor: 'var(--accent)', color: 'var(--accent)', left: seekerInView ? 'calc((100% - (100% / 12)) - 18px)' : 'calc((100% / 12) - 18px)' }}
                >
                  <span className={seekerInView ? 'animate-[hiw-bob_0.6s_ease-in-out_infinite_alternate]' : ''}>
                    <RunIcon size={18} />
                  </span>
                </div>
                {SEEKER_STEPS.map((s, i) => (
                  <div
                    key={i}
                    className={`relative z-[1] flex flex-1 flex-col items-center px-3 text-center transition-all duration-500 ${seekerInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
                    style={{ transitionDelay: `${i * 0.5 + 0.3}s` }}
                  >
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-4 text-[13.5px] font-extrabold text-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
                      style={{ background: 'var(--accent)', borderColor: '#FBF0E1' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h4 className="mb-1.5 mt-3.5 text-[12.5px] font-extrabold sm:text-[13.5px]">{s.title}</h4>
                    <p className="text-[11.5px] leading-[1.55] text-[#666] sm:text-xs">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Employers timeline */}
          <div>
            <div className="mb-[34px] flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px]" style={{ background: '#1A7A2E1A', color: '#1A7A2E' }}>
                <Handshake size={20} />
              </div>
              <h3 className="text-[19px] font-black">For Employers</h3>
              <span className="text-[13px] font-medium text-[#888]">From registration to hiring the right talent</span>
            </div>
            <div className="overflow-x-auto overflow-y-hidden pb-1.5" ref={employerTrackRef}>
              <div className="relative flex min-w-[780px] pt-[22px]" style={{ '--accent': '#1A7A2E' }}>
                <div className="absolute top-[22px] h-[3px] rounded-[3px] bg-black/[0.08]" style={{ left: 'calc(100% / 12)', right: 'calc(100% / 12)' }} />
                <div
                  className="absolute top-[22px] h-[3px] rounded-[3px] transition-[width] duration-[5000ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={{ left: 'calc(100% / 12)', background: 'var(--accent)', width: employerInView ? 'calc(100% - (100% / 6))' : 0 }}
                />
                <div
                  className="absolute top-[22px] z-[3] -mt-[18px] flex h-9 w-9 items-center justify-center rounded-full border-[3px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-[left] duration-[5000ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={{ borderColor: 'var(--accent)', color: 'var(--accent)', left: employerInView ? 'calc((100% - (100% / 12)) - 18px)' : 'calc((100% / 12) - 18px)' }}
                >
                  <span className={employerInView ? 'animate-[hiw-bob_0.6s_ease-in-out_infinite_alternate]' : ''}>
                    <UserSearch size={18} />
                  </span>
                </div>
                {EMPLOYER_STEPS.map((s, i) => (
                  <div
                    key={i}
                    className={`relative z-[1] flex flex-1 flex-col items-center px-3 text-center transition-all duration-500 ${employerInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
                    style={{ transitionDelay: `${i * 0.5 + 0.3}s` }}
                  >
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-4 text-[13.5px] font-extrabold text-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
                      style={{ background: 'var(--accent)', borderColor: '#FBF0E1' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h4 className="mb-1.5 mt-3.5 text-[12.5px] font-extrabold sm:text-[13.5px]">{s.title}</h4>
                    <p className="text-[11.5px] leading-[1.55] text-[#666] sm:text-xs">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}