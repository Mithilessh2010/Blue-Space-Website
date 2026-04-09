"use client";

import { motion } from "framer-motion";

const organizers = [
  "Rohan Devnani",
  "Eshaan Savanur",
  "Prasham Yadothare",
  "Yashmit Sunkara",
  "Mithilessh Bhasker",
];

const helpers = [
  "Sahil Singla",
];

export default function Organizers() {
  return (
    <section
      id="organizers"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050810 0%, #080f1a 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(74,112,169,0.06) 0%, transparent 70%)",
        }}
      />

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
            06 — Team
          </span>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-blue-mid/60 to-transparent" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-tight tracking-tight mb-6 max-w-3xl"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Meet the <span className="text-gradient-blue">team</span> behind Blue Space.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cream/60 text-lg max-w-2xl mb-16"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Built by students, for students. These are the people making Blue Space happen.
        </motion.p>

        {/* Organizers subsection */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold text-cream mb-6 tracking-wide"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Organizers
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {organizers.map((person, i) => (
              <motion.div
                key={person}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-card rounded-2xl p-6 text-center border border-blue-mid/20 hover:border-blue-mid/40 transition-all duration-300"
              >
                <p className="text-cream font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {person}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Helpers subsection */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold text-cream mb-6 tracking-wide"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Helpers
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {helpers.map((person, i) => (
              <motion.div
                key={person}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-card rounded-2xl p-6 text-center border border-blue-mid/20 hover:border-blue-mid/40 transition-all duration-300"
              >
                <p className="text-cream font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {person}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
