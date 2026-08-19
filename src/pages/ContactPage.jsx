import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Building2, HelpCircle, ChevronDown } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);
const FacebookIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
const XIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5675 21H20.8122L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
  </svg>
);

const SOCIAL_LINKS = [
  { icon: <XIcon />, label: "X", href: "https://x.com/skillyuvabharat" },
  { icon: <InstagramIcon />, label: "Instagram", href: "https://instagram.com/skillyuvabharat" },
  { icon: <YoutubeIcon />, label: "YouTube", href: "https://youtube.com/@skillyuvabharat" },
  { icon: <LinkedinIcon />, label: "LinkedIn", href: "https://linkedin.com/company/skillyuvabharat" },
  { icon: <FacebookIcon />, label: "Facebook", href: "https://facebook.com/skillyuvabharat" },
];

const QUICK_CONTACTS = [
  {
    icon: <Phone size={22} />,
    title: "Call Our Helpline",
    detail: "+91 98765 43210",
    sub: "Mon–Sat, 9 AM – 7 PM",
    accent: "#E8650A",
  },
  {
    icon: <Mail size={22} />,
    title: "Email Support",
    detail: "info@skillyuvabharat.com",
    detail2: "contact@skillyuvabharat.com",
    sub: "We reply within 24 hours",
    accent: "#1A7A2E",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "WhatsApp Us",
    detail: "+91 98765 43210",
    sub: "Fastest way to reach us",
    accent: "#111111",
  },
  {
    icon: <Building2 size={22} />,
    title: "Visit an Office",
    detail: "Chennai, Tamil Nadu",
    sub: "See address below",
    accent: "#E8650A",
  },
];

const OFFICES = [
  { city: "Chennai", tag: "Head Office", address: "31/15, Morrison 4th St, Ramapuram, Hudco Colony Layout, Pazhavanthangal, Chennai, St. Thomas Mount, Tamil Nadu 600016" },
];

const FAQS = [
  { q: "How do I register for a job fair?", a: "Click 'Register Free' on the homepage, fill in your details, and you'll get a confirmation for the nearest upcoming fair." },
  { q: "Is there any cost to attend?", a: "No. All job fairs, skill training, and support services are completely free for job seekers." },
  { q: "How can employers participate?", a: "Reach out through the form below or call our helpline — our employer relations team will guide you through onboarding." },
];

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '', message: '' });
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#FBF0E1] text-[#111111]" style={{ fontFamily: "'Raleway', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800;900&family=Crimson+Pro:ital,wght@0,300;1,400;1,600&display=swap');`}</style>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F4D8BE] pt-[120px] pb-20 text-center max-[600px]:pt-[90px] max-[600px]:pb-[60px]">
        <div className="mx-auto max-w-[1100px] px-6">
          <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#1A7A2E]">Get in Touch</span>
          <h1 className="my-[15px] text-[44px] font-black tracking-[-1px] max-[600px]:text-[32px]">
            We're here to help{' '}
            <em className="font-['Crimson_Pro',serif] font-semibold italic text-[#E8650A]">every step of the way</em>
          </h1>
          <p className="mx-auto max-w-[560px] text-[15.5px] leading-[1.7] text-[#666666]">
            Whether you're a job seeker, an employer, or just have a question about our fairs — reach out. Our team responds fast, and every channel is free to use.
          </p>
        </div>
        <svg className="absolute -bottom-px left-0 block h-[90px] w-full" viewBox="0 0 1200 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,90 L0,90 Z" fill="#FBF0E1" />
        </svg>
      </section>

      <div className="mx-auto max-w-[1100px] px-6">
        {/* QUICK CONTACT CARDS */}
        <div className="grid grid-cols-4 gap-5 pt-[60px] pb-5 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {QUICK_CONTACTS.map((c, i) => (
            <div
              key={i}
              className="rounded-xl border border-black/[0.06] bg-white p-[26px_22px] transition-transform duration-[250ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-[10px] bg-black/[0.04]" style={{ color: c.accent }}>
                {c.icon}
              </div>
              <h4 className="mb-1 text-[15px] font-extrabold">{c.title}</h4>
              <p className="mb-0.5 text-sm font-bold" style={{ color: c.accent }}>{c.detail}</p>
              {c.detail2 && <p className="-mt-0.5 mb-0.5 text-sm font-bold" style={{ color: c.accent }}>{c.detail2}</p>}
              <p className="text-[12.5px] text-[#888888]">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* OFFICES + FORM */}
        <div className="grid grid-cols-[1fr_1.2fr] items-start gap-12 py-[60px] max-[900px]:grid-cols-1">
          <div>
            <div className="mb-2.5 text-[11px] font-extrabold uppercase tracking-[.18em] text-black/40">Our Offices</div>
            <h2 className="mb-5 text-2xl font-black tracking-[-0.5px]">
              Find us <em className="font-['Crimson_Pro',serif] font-semibold not-italic italic text-[#E8650A]">near you</em>
            </h2>

            <div className="mb-4 rounded-xl border border-black/[0.06] border-l-4 border-l-[#1A7A2E] bg-white p-5 px-[22px]">
              <span className="text-[10.5px] font-extrabold uppercase tracking-[.05em] text-[#111111]">Working Hours</span>
              <h4 className="mb-1.5 mt-1.5 text-base font-extrabold">Monday – Saturday</h4>
              <p className="text-[13.5px] leading-[1.6] text-[#666666]">09:00 AM – 06:00 PM IST (Closed on national holidays)</p>
            </div>

            {OFFICES.map((o, i) => (
              <div key={i} className="mb-4 rounded-xl border border-black/[0.06] border-l-4 border-l-[#111111] bg-white p-5 px-[22px]">
                <span className="text-[10.5px] font-extrabold uppercase tracking-[.05em] text-[#1A7A2E]">{o.tag}</span>
                <h4 className="mb-1.5 mt-1.5 text-base font-extrabold">{o.city}</h4>
                <p className="text-[13.5px] leading-[1.6] text-[#666666]">{o.address}</p>
              </div>
            ))}

            <div className="rounded-xl border border-black/[0.06] border-l-4 border-l-[#111111] bg-white p-[22px]">
              <h4 className="mb-1 text-[14.5px] font-extrabold">Follow us</h4>
              <p className="mb-4 text-[13px] text-[#888888]">Job fair updates, hiring tips & success stories</p>
              <div className="flex gap-2.5">
                {SOCIAL_LINKS.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/[0.06] bg-[#F9F9F9] text-[#111111] no-underline transition-all duration-200 ease-in-out hover:-translate-y-[3px] hover:bg-[#E8650A] hover:text-white"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-2.5 text-[11px] font-extrabold uppercase tracking-[.18em] text-black/40">Send a Message</div>
            <h2 className="mb-5 text-2xl font-black tracking-[-0.5px]">
              Let's start a <em className="font-['Crimson_Pro',serif] font-semibold italic text-[#E8650A]">conversation</em>
            </h2>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-black/[0.06] bg-white p-[34px] shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
            >
              <div className="mb-4 grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
                <div>
                  <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.05em] text-[#999999]">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-black/[0.08] bg-[#F9F9F9] px-3.5 py-3 font-sans text-sm outline-none transition-colors duration-200 focus:border-[#E8650A] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.05em] text-[#999999]">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-black/[0.08] bg-[#F9F9F9] px-3.5 py-3 font-sans text-sm outline-none transition-colors duration-200 focus:border-[#E8650A] focus:bg-white"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.05em] text-[#999999]">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-black/[0.08] bg-[#F9F9F9] px-3.5 py-3 font-sans text-sm outline-none transition-colors duration-200 focus:border-[#E8650A] focus:bg-white"
                />
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.05em] text-[#999999]">I am a...</label>
                <select
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full rounded-lg border border-black/[0.08] bg-[#F9F9F9] px-3.5 py-3 font-sans text-sm outline-none transition-colors duration-200 focus:border-[#E8650A] focus:bg-white"
                >
                  <option>Job Seeker</option>
                  <option>Employer</option>
                  <option>Training Partner</option>
                  <option>Media / Press</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.05em] text-[#999999]">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-black/[0.08] bg-[#F9F9F9] px-3.5 py-3 font-sans text-sm outline-none transition-colors duration-200 focus:border-[#E8650A] focus:bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2.5 rounded-lg border-none bg-[#111111] p-[15px] text-sm font-bold text-white transition-colors duration-200 ease-in-out hover:bg-[#E8650A]"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="-mt-5 pb-[60px]">
          <div className="mb-2.5 text-[11px] font-extrabold uppercase tracking-[.18em] text-black/40">Location</div>
          <h2 className="mb-5 text-2xl font-black tracking-[-0.5px]">
            Our office <em className="font-['Crimson_Pro',serif] font-semibold italic text-[#E8650A]">on the map</em>
          </h2>
          <div className="mb-4 overflow-hidden rounded-xl border border-black/[0.06]">
            <iframe
              title="Skill Yuva Bharat office location"
              src="https://maps.google.com/maps?q=31%2F15%2C%20Morrison%204th%20St%2C%20Ramapuram%2C%20Hudco%20Colony%20Layout%2C%20Pazhavanthangal%2C%20Chennai%2C%20St.%20Thomas%20Mount%2C%20Tamil%20Nadu%20600016&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[380px] w-full border-0"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-[760px] px-6 pt-5 pb-[90px]">
        <div className="mb-9 text-center">
          <div className="mb-2.5 flex justify-center text-[11px] font-extrabold uppercase tracking-[.18em] text-black/40">Before You Write to Us</div>
          <h2 className="mb-5 text-2xl font-black tracking-[-0.5px]">
            Quick <em className="font-['Crimson_Pro',serif] font-semibold italic text-[#E8650A]">answers</em>
          </h2>
        </div>
        {FAQS.map((f, i) => {
          const isOpen = openFaq === i;
          return (
            <div key={i} className="mb-3 overflow-hidden rounded-xl border border-black/[0.06] bg-white">
              <div
                onClick={() => setOpenFaq(isOpen ? -1 : i)}
                className="flex cursor-pointer items-center justify-between gap-3 p-[18px_22px] text-[14.5px] font-bold"
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle size={17} color="#1A7A2E" />
                  {f.q}
                </span>
                <ChevronDown size={18} className={`flex-shrink-0 text-[#E8650A] transition-transform duration-[250ms] ${isOpen ? 'rotate-180' : ''}`} />
              </div>
              <div
                className={`overflow-hidden px-[22px] text-[13.5px] leading-[1.7] text-[#666666] transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[200px] pb-5' : 'max-h-0'
                }`}
              >
                {f.a}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}