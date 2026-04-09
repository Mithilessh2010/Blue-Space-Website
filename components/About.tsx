"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import StarField from "./StarField";

export default function About() {
  const { ref, inView } = useInView();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-space-900">
      {/* Background elements */}
      <StarField count={60} className="opacity-40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(74,112,169,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-blue-mid to-transparent" />
          <span
            className="text-xs text-blue-light tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            01 — About
          </span>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-blue-mid/60 to-transparent" />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.h2
              variants={item}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-none tracking-tight mb-8"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="text-cream">Where hardware</span>
              <br />
              <span className="text-gradient-blue">meets the future.</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-cream/70 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              Blue Space is a one-day hardware + software hackathon where students come together to 
              build, learn, and connect. No matter your background — if you're curious, you belong here.
            </motion.p>

            <motion.p
              variants={item}
              className="text-cream/70 text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              From soldering your first circuit to shipping full-stack projects — Blue Space is the 
              launchpad. Workshops, mentorship, free PCB coupons, and a community that builds together.
            </motion.p>

            {/* Feature pills */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              {[
                "Beginner Friendly",
                "100% Free",
                "Hardware Workshops",
                "Free PCB Coupons",
                "Community First",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-sm border border-blue-mid/30 text-blue-light/80 bg-blue-mid/10 hover:bg-blue-mid/20 hover:border-blue-light/50 transition-all duration-200"
                  style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500 }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Hack Club Blueprint badge */}
            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-4 glass-card rounded-2xl p-4 w-fit"
            >
              <div className="w-12 h-8 relative flex-shrink-0">
                <Image src="/images/hackclub.png" alt="Hack Club" fill className="object-contain" />
              </div>
              <div>
                <p className="text-xs text-blue-light/60 tracking-widest uppercase mb-0.5" style={{ fontFamily: "'Space Mono', monospace" }}>
                  Powered by
                </p>
                <p className="text-sm font-bold text-cream" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Hack Club Blueprint
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Poster image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Glow behind poster */}
              <div
                className="absolute inset-0 -m-8 rounded-3xl blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, #4A70A9, transparent)" }}
              />
              {/* Poster */}
              <div className="relative rounded-2xl overflow-hidden border border-blue-mid/20 shadow-glow-blue">
                <Image
                  src="/images/poster.png"
                  alt="Blue Space Poster"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
                {/* Overlay sheen */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%)",
                  }}
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass-card rounded-xl p-3 border border-blue-mid/30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-cream/80 font-medium" style={{ fontFamily: "'Space Mono', monospace" }}>
                    Registrations Open
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
