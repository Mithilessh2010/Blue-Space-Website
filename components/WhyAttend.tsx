"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Learn Hardware",
    description: "From resistors to microcontrollers — hands-on workshops guide you through the fundamentals of hardware engineering.",
    accent: "#4A70A9",
  },
  {
    title: "Meet Your People",
    description: "Connect with like-minded builders, engineers, and creators. The friendships you make here last beyond the event.",
    accent: "#8FABD4",
  },
  {
    title: "Build Cool Stuff",
    description: "Ship real projects. From robots to IoT devices to full-stack apps — if you can dream it, you can build it here.",
    accent: "#4A70A9",
  },
  {
    title: "Expert Workshops",
    description: "Level up with structured workshops from experienced mentors covering PCB design, embedded systems, and more.",
    accent: "#8FABD4",
  },
  {
    title: "Free PCB Coupons",
    description: "Every participant gets free PCB manufacturing coupons from EasyEDA. Build your board — then actually ship it.",
    accent: "#4A70A9",
  },
  {
    title: "Completely Free",
    description: "Zero cost. No tickets, no hidden fees. We provide food, materials, and everything you need to build.",
    accent: "#8FABD4",
  },
];

export default function WhyAttend() {
  return (
    <section id="why" className="relative py-32 overflow-hidden"
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
            02 — Why Attend
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
          Six reasons to{" "}
          <span className="text-gradient-blue">launch yourself</span>{" "}
          into Blue Space.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cream/60 text-lg max-w-2xl mb-20"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Whether you're a first-time builder or a seasoned hacker, Blue Space has something that will push you forward.
        </motion.p>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-card rounded-2xl p-8 cursor-default relative overflow-hidden"
            >
              {/* Card hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${feature.accent}15, transparent 70%)`,
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)` }}
              />

              {/* Content */}
              <h3
                className="text-cream font-bold text-xl mb-3 group-hover:text-blue-light transition-colors duration-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-cream/55 text-sm leading-relaxed"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {feature.description}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://discord.gg/CHnfX449"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-blue-mid/40 hover:border-blue-light/60 bg-blue-mid/10 hover:bg-blue-mid/20 transition-all duration-300 hover:shadow-glow-blue"
          >
            <span
              className="text-cream font-semibold"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Secure your spot — it's free
            </span>
            <svg className="w-4 h-4 text-blue-light transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
