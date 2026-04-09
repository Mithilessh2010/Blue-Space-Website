"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cmsData from "@/data/cms.json";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const faqs = cmsData.faqs;

  return (
    <section
      id="faq"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080f1a 0%, #050810 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(74,112,169,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
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
            05 — FAQ
          </span>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-blue-mid/60 to-transparent" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-tight tracking-tight mb-6"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Questions?{" "}
          <span className="text-gradient-blue">We've got answers.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cream/50 text-lg mb-16"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Can't find what you're looking for?{" "}
          <a
            href="https://discord.gg/TNjUjYkB3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-light hover:text-cream transition-colors animated-underline"
          >
            Ask us on Discord
          </a>
          .
        </motion.p>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
            >
              <div
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                  openId === faq.id
                    ? "border-blue-mid/40 shadow-glow-blue"
                    : "border-blue-mid/20 hover:border-blue-mid/30"
                }`}
              >
                {/* Question button */}
                <button
                  className="w-full flex items-center justify-between px-7 py-5 text-left group"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <span
                    className={`font-semibold text-base transition-colors duration-200 pr-8 ${
                      openId === faq.id ? "text-blue-light" : "text-cream group-hover:text-blue-light"
                    }`}
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      openId === faq.id
                        ? "border-blue-light/50 bg-blue-mid/20"
                        : "border-blue-mid/30 group-hover:border-blue-mid/50"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-colors duration-200 ${
                        openId === faq.id ? "text-blue-light" : "text-cream/50"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-6">
                        <div className="h-px bg-gradient-to-r from-blue-mid/30 to-transparent mb-5" />
                        <p
                          className="text-cream/65 leading-relaxed"
                          style={{ fontFamily: "'Barlow', sans-serif" }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Discord CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass-card rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 border-blue-mid/20"
        >
          <div className="text-4xl">💬</div>
          <div className="flex-1 text-center sm:text-left">
            <h3
              className="text-cream font-bold text-lg mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Still have questions?
            </h3>
            <p className="text-cream/50 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
              Our Discord is where the community lives — join to get answers and stay updated.
            </p>
          </div>
          <a
            href="https://discord.gg/TNjUjYkB3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-full text-sm font-bold text-cream bg-[#5865F2]/20 border border-[#5865F2]/40 hover:bg-[#5865F2]/30 hover:border-[#5865F2]/60 transition-all duration-300"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Join Discord →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
