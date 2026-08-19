import React, { useEffect, useState } from 'react';
import { Target, Users2, Rocket, Heart, ShieldCheck, Globe } from 'lucide-react';

const PILLARS = [
  {
    icon: <Target size={24} />,
    title: "Radical Accessibility",
    text: "We believe a job interview shouldn't cost a day's wage. Our fairs are 100% free for every candidate, forever.",
    color: "#E8650A"
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Verified Employers",
    text: "No agents, no middlemen. We only partner with direct employers to ensure the safety and dignity of our youth.",
    color: "#1A7A2E"
  },
  {
    icon: <Globe size={24} />,
    title: "Pan-India Reach",
    text: "From Tier-1 capitals to Tier-4 rural clusters, we bring the boardroom to the doorstep of Bharat.",
    color: "#111"
  }
];

const EVENT_IMAGES = [
  '/images/image1.jpeg', '/images/image2.jpeg', '/images/image3.jpeg', '/images/image4.jpeg', '/images/image5.jpeg',
  '/images/image6.jpeg', '/images/image7.jpeg', '/images/image8.jpeg', '/images/image9.jpeg', '/images/image10.jpeg',
  '/images/image11.jpeg', '/images/image12.jpeg', '/images/image13.jpeg', '/images/image14.jpeg', '/images/image15.jpeg'
];

const PARTNERS = [
  {
    short: "NSDC",
    name: "National Skill Development Corporation",
    text: "The public-private body under the Ministry of Skill Development & Entrepreneurship that drives India's skilling ecosystem nationwide."
  },
  {
    short: "CII",
    name: "Confederation of Indian Industry",
    text: "India's premier industry body, driving the national skills agenda since 1987 and instrumental in setting up NSDC itself."
  },
  {
    short: "ASDC",
    name: "Automotive Skills Development Council",
    text: "The sector skill council for the automotive industry, backed by NSDC and India's leading auto industry associations."
  },
  {
    short: "PWD",
    name: "Persons with Disabilities Inclusion",
    text: "Supporting inclusive hiring and skilling initiatives that create equal opportunities for persons with disabilities."
  },
  {
    short: "NCS",
    name: "National Career Service",
    text: "The Ministry of Labour & Employment's nationwide portal connecting job seekers directly with employers."
  }
];

// Leadership profiles
const LEADERS = [
  {
    photo: "/images/founder.png",
    tag: "Meet the Chairman & Founder",
    name: "Dr G Satheesh Reddy",
    subtitle: "Former Secretary, Dept of Defence R&D & Chairman, DRDO",
    accent: "#1A7A2E",
    paraIntro:
      "Dr G Satheesh Reddy is a defence and aerospace scientist with over four decades of experience in technology leadership. A graduate in Electronics & Communication Engineering from JNTU Anantapur, with an MS and PhD from JNTU Hyderabad, he joined the Defence Research and Development Laboratory in 1986 and went on to lead some of India's most significant national technology programmes.",
    paraClose:
      "He has held several senior positions in the Government of India, including Secretary, Department of Defence R&D, Chairman of DRDO, and Scientific Adviser to the Raksha Mantri. He currently serves as a Member of the National Security Advisory Board, Honorary Adviser (Cabinet Rank) to the Government of Andhra Pradesh, and President of the Aeronautical Society of India. At Skill Yuva Bharat, he brings this experience in building large-scale, mission-driven national systems to the goal of connecting India's youth with real employment opportunities.",
    quoteType: "descriptive", // avoid inventing a fabricated first-person quote for a real public figure
    quoteText: "A career defined by building indigenous capability at national scale — now channelled into building opportunity for India's youth."
  },
  {
    photo: "/images/md.jpeg",
    tag: "Meet the Co-Founder",
    name: "Srinivasan N",
    subtitle: "Co-Founder & CEO · Established 2019",
    accent: "#E8650A",
    paraIntro:
      "A short introduction paragraph about the co-founder goes here — their background, what led them to start Skill Yuva Bharat, and the mission that drives them today.",
    paraClose:
      "A closing paragraph about their vision for the company, the scale of impact so far, and what's next for the platform and the youth it serves.",
    quoteType: "quote",
    quoteText: "Skill was never the problem in India. Access was."
  }
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [start, setStart] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStart((prev) => (prev + 1) % EVENT_IMAGES.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const visible = [
    EVENT_IMAGES[start % EVENT_IMAGES.length],
    EVENT_IMAGES[(start + 1) % EVENT_IMAGES.length],
    EVENT_IMAGES[(start + 2) % EVENT_IMAGES.length]
  ];

  const EG_CARD_POS = [
    "left-0 rotate-[-10deg] z-[1]",
    "left-1/2 top-[10px] -translate-x-1/2 rotate-0 z-[2]",
    "right-0 rotate-[10deg] z-[1]",
  ];

  return (
    <div className="font-['Raleway',sans-serif] bg-[#FBF0E1] text-[#111] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;800;900&family=Crimson+Pro:ital,wght@0,300;1,400;1,600&display=swap');

        @keyframes ap-circle-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ap-circle-spin-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes eg-fade-in { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; } }
        @keyframes pt-hub-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pt-hub-spin-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes pt-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pt-spin-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

        .ap-hero-circle-outer { animation: ap-circle-spin 6s linear infinite; }
        .ap-hero-circle-inner { animation: ap-circle-spin-reverse 6s linear infinite; }
        .eg-card { animation: eg-fade-in 0.6s ease; }
        .pt-hub { animation: pt-hub-spin 6s linear infinite; }
        .pt-hub-content { animation: pt-hub-spin-reverse 6s linear infinite; }
        .pt-orbit { animation: pt-spin 30s linear infinite; }
        .pt-sat-inner { animation: pt-spin-reverse 30s linear infinite; }

        .fs-pullquote::before {
          content: '\\201C';
          position: absolute;
          left: -4px;
          top: -22px;
          font-family: 'Crimson Pro', serif;
          font-size: 70px;
          font-weight: 700;
          color: var(--accent);
          opacity: 0.35;
          line-height: 1;
        }
        @media (max-width: 900px) {
          .fs-pullquote::before { font-size: 56px; top: -14px; }
        }
        .pt-ring { --orbit-r: 200px; }
        @media (max-width: 900px) {
          .pt-ring { --orbit-r: 128px; }
        }
        @media (max-width: 420px) {
          .pt-ring { --orbit-r: 108px; }
        }
      `}</style>

      {/* 1. Header Section */}
      <section className="px-6 pt-[120px] pb-20 max-w-[1200px] mx-auto grid grid-cols-[1.2fr_0.8fr] gap-[60px] items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
        <div className="relative">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1A7A2E] mb-5 block">Established 2019</span>
          <h1 className="text-[clamp(40px,6vw,72px)] font-black leading-none tracking-[-2px] mb-[30px]">
            Beyond the Resume. <em className="font-['Crimson_Pro',serif] not-italic italic text-[#E8650A] font-medium">Building Bharat.</em>
          </h1>
          <p className="font-['Crimson_Pro',serif] text-xl italic text-[#666] border-l-[3px] border-[#FBF0E1] pl-6 leading-[1.6]">
            "Skill was never the problem in India. Access was. We decided to fix the distance between a village classroom and a corporate boardroom."
          </p>
        </div>
        <div className="relative h-[420px]">
          <div className="absolute left-0 top-[10px] w-[58%] h-[300px] rounded-[28px]" style={{ background: "#F4D8BE" }} />
          <div className="absolute right-0 top-[100px] w-[54%] h-[340px] rounded-[28px]" style={{ background: "#1A7A2E" }} />
          <div className="ap-hero-circle-outer absolute left-1/2 top-[42%] -ml-[100px] -mt-[100px] w-[200px] h-[200px] rounded-full bg-[#FBF0E1] border-4 border-dashed border-[#111] shadow-[0_10px_30px_rgba(0,0,0,0.18)] z-[2]">
            <div className="ap-hero-circle-inner absolute inset-0 flex flex-col items-center justify-center gap-1.5">
              <div className="w-[66%] aspect-[456/383] overflow-hidden rounded-[10px]">
                <img src="/images/logo.png" alt="Skill Yuva Bharat" className="w-full h-auto object-cover object-top block" />
              </div>
              <span className="font-black text-[13px] leading-[1.3] text-center tracking-[0.02em]">
                <span style={{ color: "#E8650A" }}>SKILL</span> <span style={{ color: "#000080" }}>YUVA</span> <span style={{ color: "#1A7A2E" }}>BHARAT</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Leadership Section (Founder + Co-Founder) */}
      <section className="pt-20 pb-[10px]">
        <div className="max-w-[1100px] mx-auto mb-[50px] text-center px-6">
          <h2 className="text-[32px] font-black tracking-[-0.5px] mb-2.5">Our Leadership</h2>
          <p className="text-[#666]">The people behind Skill Yuva Bharat's mission.</p>
        </div>

        {LEADERS.map((leader, i) => (
          <div
            key={leader.name}
            className="relative py-14 px-6 bg-white"
            style={{ '--accent': leader.accent }}
          >
            <div
              className={`fs-body relative z-[1] max-w-[1000px] mx-auto grid gap-14 items-center max-[900px]:grid-cols-1 max-[900px]:gap-7 ${
                i % 2 === 0
                  ? "grid-cols-[300px_1fr]"
                  : "grid-cols-[1fr_300px]"
              }`}
            >
              <div className={`relative max-w-[300px] max-[900px]:max-w-[220px] max-[900px]:mx-auto ${i % 2 === 0 ? "" : "order-2 max-[900px]:order-none"}`}>
                <div className="relative z-[1] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_16px_32px_rgba(0,0,0,0.1)]">
                  <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover block" />
                </div>
              </div>
              <div className={i % 2 === 0 ? "" : "order-1 max-[900px]:order-none"}>
                <span className="text-[12.5px] font-extrabold uppercase tracking-[0.14em] mb-2.5 block" style={{ color: "var(--accent)" }}>{leader.tag}</span>
                <h2 className="font-['Raleway',sans-serif] text-[clamp(26px,3.2vw,38px)] font-black tracking-[-1px] text-[#111] mb-[5px] leading-[1.1]">{leader.name}</h2>
                <p className="text-[12.5px] font-bold mb-5" style={{ color: "var(--accent)" }}>{leader.subtitle}</p>
                <p className="text-[14.5px] leading-[1.8] text-[#2A2A2A] mb-[18px]">{leader.paraIntro}</p>
                <div className="fs-pullquote relative my-6 pl-[34px]">
                  <p className="font-['Crimson_Pro',serif] italic text-[17px] leading-[1.6] font-medium m-0" style={{ color: "var(--accent)" }}>{leader.quoteText}</p>
                </div>
                <p className="text-[14.5px] leading-[1.8] text-[#2A2A2A] mb-[18px]">{leader.paraClose}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Event Gallery Section */}
      <section className="bg-[#FBF0E1] px-6 py-[100px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-[0.9fr_1.1fr] gap-[60px] items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1A7A2E] mb-5 block">Moments that matter</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-1px] mb-6 text-[#111]">
              Every fair tells <em className="font-['Crimson_Pro',serif] not-italic italic text-[#E8650A] font-medium">a story</em>.
            </h2>
            <p className="text-base leading-[1.8] text-[#444] max-w-[420px]">
              From packed convention halls to the first handshake between a candidate and a recruiter, these are the moments that define Skill Yuva Bharat's fairs across the country.
            </p>
          </div>

          <div className="relative w-full h-[520px] max-[900px]:h-[340px]">
            {visible.map((img, i) => (
              <div
                key={img}
                className={`eg-card absolute top-10 w-[300px] h-[420px] max-[900px]:w-[150px] max-[900px]:h-[210px] rounded-[22px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.25)] border-[6px] border-white ${EG_CARD_POS[i]}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Vision Section */}
      <section className="bg-white px-6 py-[100px] border-t border-black/5">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div className="bg-[#FBF0E1] p-10 rounded-[20px] flex flex-col justify-center">
            <span className="text-[64px] font-black text-[#1A7A2E] leading-none mb-2.5">50K+</span>
            <span className="text-sm font-bold text-[#999] uppercase tracking-[1px]">Lives Touched Nationwide</span>
            <p className="mt-5 text-[#666]">We measure success not in registrations, but in the number of first-generation earners we help create.</p>
          </div>
          <div>
            <h2 className="text-[32px] font-black mb-6 tracking-[-0.5px]">The "Skill Yuva" Philosophy</h2>
            <p className="text-[16.5px] leading-[1.8] text-[#444] mb-5">
              In the heart of every district in India lies a powerhouse of potential. Yet, for decades, this talent remained hidden behind digital barriers and expensive recruitment agencies.
            </p>
            <p className="text-[16.5px] leading-[1.8] text-[#444] mb-5">
              <strong>Skill Yuva Bharat</strong> was founded to dismantle these walls. By creating a physical, high-energy environment where recruiters meet candidates face-to-face, we remove the bias of the algorithm and the cost of the agent.
            </p>
          </div>
        </div>
      </section>

      {/* 5. The Pillars Section */}
      <section className="px-6 py-[100px] max-w-[1100px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto">
          <h2 className="text-[32px] font-black">What we stand for</h2>
          <p className="text-[#666]">Our work is guided by three non-negotiable principles that ensure every job fair is a win for Bharat.</p>
        </div>
        <div className="grid grid-cols-3 gap-[30px] mt-[50px] max-[900px]:grid-cols-1">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="bg-white px-8 py-10 rounded-2xl border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform duration-300 hover:-translate-y-2.5"
              style={{ borderLeft: `6px solid ${p.color}` }}
            >
              <div className="mb-6" style={{ color: p.color }}>{p.icon}</div>
              <h3 className="text-xl font-extrabold mb-4">{p.title}</h3>
              <p className="text-sm text-[#666] leading-[1.6]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Impact Numbers Section */}
      <section className="bg-[#FBF0E1] px-20 py-20 text-center border-t border-black/5">
        <div className="max-w-[1000px] mx-auto grid grid-cols-4 gap-10 max-[900px]:grid-cols-2">
          <div><h4 className="text-[32px] font-black mb-[5px] text-[#E8650A]" style={{ textShadow: "0 0 8px rgba(232,101,10,0.55), 0 0 20px rgba(232,101,10,0.35), 0 0 36px rgba(232,101,10,0.2)" }}>7</h4><p className="text-[11px] font-bold text-[#666] uppercase tracking-[1px]">States Covered</p></div>
          <div><h4 className="text-[32px] font-black mb-[5px] text-[#E8650A]" style={{ textShadow: "0 0 8px rgba(232,101,10,0.55), 0 0 20px rgba(232,101,10,0.35), 0 0 36px rgba(232,101,10,0.2)" }}>500+</h4><p className="text-[11px] font-bold text-[#666] uppercase tracking-[1px]">Partner Companies</p></div>
          <div><h4 className="text-[32px] font-black mb-[5px] text-[#E8650A]" style={{ textShadow: "0 0 8px rgba(232,101,10,0.55), 0 0 20px rgba(232,101,10,0.35), 0 0 36px rgba(232,101,10,0.2)" }}>25K+</h4><p className="text-[11px] font-bold text-[#666] uppercase tracking-[1px]">Placements Made</p></div>
          <div><h4 className="text-[32px] font-black mb-[5px] text-[#E8650A]" style={{ textShadow: "0 0 8px rgba(232,101,10,0.55), 0 0 20px rgba(232,101,10,0.35), 0 0 36px rgba(232,101,10,0.2)" }}>0</h4><p className="text-[11px] font-bold text-[#666] uppercase tracking-[1px]">Cost to Candidates</p></div>
        </div>
      </section>

      {/* 7. Partners Section */}
      <section className="bg-[#FBF0E1] px-6 py-[100px] max-[900px]:overflow-x-hidden">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1A7A2E] mb-4 block text-center">Backed by</span>
          <h2 className="text-[32px] max-[420px]:text-[26px] font-black mb-[60px] max-[420px]:mb-10 text-[#111] text-center px-2">Trusted by the institutions building Bharat</h2>
        </div>

        <div
          className="pt-ring relative w-[460px] h-[460px] mx-auto mb-10 max-[900px]:w-[300px] max-[900px]:h-[300px] max-[420px]:w-[260px] max-[420px]:h-[260px]"
        >
          <div className="absolute inset-0 border-2 border-dashed border-black/[0.15] rounded-full" />
          <div
            className="pt-hub absolute top-1/2 left-1/2 w-[130px] h-[130px] -ml-[65px] -mt-[65px] rounded-full p-1 z-[3] shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                       max-[900px]:w-24 max-[900px]:h-24 max-[900px]:-ml-12 max-[900px]:-mt-12 max-[900px]:p-[3px]
                       max-[420px]:w-[84px] max-[420px]:h-[84px] max-[420px]:-ml-[42px] max-[420px]:-mt-[42px]"
            style={{ background: "conic-gradient(from -90deg, #E8650A 0deg 120deg, #000080 120deg 240deg, #1A7A2E 240deg 360deg)" }}
          >
            <div className="pt-hub-content w-full h-full rounded-full bg-white flex flex-col items-center justify-center gap-1 text-center p-3 max-[900px]:p-2 max-[900px]:gap-0.5 max-[420px]:p-1.5">
              <div className="w-[74%] aspect-[456/383] overflow-hidden">
                <img src="/images/logo.png" alt="Skill Yuva Bharat" className="w-full h-auto object-cover object-top block" />
              </div>
              <span className="text-[9px] font-extrabold tracking-[0.01em] leading-[1.2] max-[900px]:text-[7.5px] max-[420px]:text-[6.5px]">
                <span style={{ color: "#E8650A" }}>Skill</span> <span style={{ color: "#000080" }}>Yuva</span> <span style={{ color: "#1A7A2E" }}>Bharat</span>
              </span>
            </div>
          </div>
          <div className="pt-orbit absolute inset-0">
            {[
              { short: 'NSDC', angle: 0, color: '#E8650A', logo: '/images/nsdc.png' },
              { short: 'CII', angle: 72, color: '#1A7A2E', logo: '/images/cii.jpg' },
              { short: 'ASDC', angle: 144, color: '#111', logo: '/images/asdc.png' },
              { short: 'TNSkill', angle: 216, color: '#E8650A', logo: '/images/tnskill.jpg' },
              { short: 'NCS', angle: 288, color: '#1A7A2E', logo: '/images/ncs.jpg' }
            ].map((s) => (
              <div
                key={s.short}
                className="absolute top-1/2 left-1/2 w-0 h-0"
                style={{ transform: `rotate(${s.angle}deg) translate(var(--orbit-r, 200px)) rotate(-${s.angle}deg)` }}
              >
                <div
                  className="pt-sat-inner absolute w-[92px] h-[92px] -ml-[46px] -mt-[46px] rounded-full bg-white flex flex-col items-center justify-center gap-1 font-black text-[11px] shadow-[0_8px_20px_rgba(0,0,0,0.1)]
                             max-[900px]:w-[66px] max-[900px]:h-[66px] max-[900px]:-ml-[33px] max-[900px]:-mt-[33px] max-[900px]:text-[8.5px] max-[900px]:gap-0.5
                             max-[420px]:w-14 max-[420px]:h-14 max-[420px]:-ml-7 max-[420px]:-mt-7 max-[420px]:text-[7.5px]"
                  style={{ border: `3px solid ${s.color}`, color: s.color }}
                >
                  <img src={s.logo} alt={s.short} className="w-9 h-9 object-contain max-[900px]:w-6 max-[900px]:h-6 max-[420px]:w-5 max-[420px]:h-5" />
                  <span>{s.short}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[15px] text-[#666] max-w-[560px] mx-auto">
          We work with <strong className="text-[#E8650A]">NSDC</strong>, <strong className="text-[#E8650A]">CII</strong>, <strong className="text-[#E8650A]">ASDC</strong>, <strong className="text-[#E8650A]">TNSKILL</strong> inclusion programs, and <strong className="text-[#E8650A]">NCS</strong> to keep every fair credible, accessible, and connected to real employers.
        </p>
      </section>

      {/* 8. Call to Action */}
      <section className="px-6 py-[120px] text-center bg-[#F4D8BE]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[42px] font-black mb-[30px] tracking-[-1px]">
            Be part of the next <br /><em className="not-italic italic">hiring revolution</em>.
          </h2>
          <div className="flex gap-5 justify-center">
            <a
              href="/jobfair"
              className="inline-block px-12 py-[18px] rounded-lg font-extrabold no-underline transition-all duration-200 bg-transparent border-2 border-[#111] text-[#111] hover:bg-[#E8650A] hover:border-[#E8650A] hover:text-white hover:scale-105"
            >
              Find a Job Fair
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}