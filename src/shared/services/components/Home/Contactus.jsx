import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2, Sparkles } from "lucide-react";

const BRAND = { saffron: "#E8650A", navy: "#000080", green: "#1A7A2E" };

export default function ContactTeaser() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!phone.trim()) return;
    setSent(true);
  }

  return (
    <section id="contact" className="py-14 px-6 bg-[#FBF0E1] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto rounded-[2rem] p-7 md:p-10 text-center text-white relative overflow-hidden z-10"
        style={{ backgroundColor: BRAND.navy }}
      >
        {/* subtle animated dotted texture */}
        <motion.div
          className="absolute inset-0 opacity-[0.07] -z-0"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "22px 22px"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* rotating sparkle accent */}
        <motion.div
          className="absolute top-5 right-6 z-10"
          style={{ color: BRAND.saffron }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles size={20} />
        </motion.div>

        <div className="relative z-10">
          <span className="font-bold tracking-[0.4em] text-[10px] uppercase mb-3 block" style={{ color: BRAND.saffron }}>
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-3">
            Ready to take the <br className="hidden md:block" />
            next step?
          </h2>
          <p className="text-white/70 max-w-md mx-auto mb-6 text-sm">
            Leave your number — our team will call you back about the next job fair near you.
          </p>

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center gap-2.5 max-w-md mx-auto py-2"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.1 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${BRAND.green}25` }}
                >
                  <CheckCircle2 size={24} style={{ color: BRAND.green }} />
                </motion.div>
                <p className="font-bold text-sm">We'll call you shortly!</p>
                <button
                  onClick={() => { setSent(false); setPhone(""); }}
                  className="text-white/60 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors"
                >
                  Submit another number
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="flex-1 min-w-0 flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-5 py-2.5 focus-within:border-white/50 transition-colors">
                  <Phone size={16} className="text-white/60 shrink-0" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    className="bg-transparent outline-none text-sm text-white placeholder:text-white/50 w-full min-w-0"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="font-black text-[11px] uppercase tracking-widest px-6 py-2.5 rounded-lg shrink-0"
                  style={{ backgroundColor: BRAND.saffron }}
                >
                  Request Call
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 text-white/60 hover:text-white text-[11px] font-bold uppercase tracking-widest mt-5 transition-colors"
          >
            Or view full contact details
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}