"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import StarField from "./StarField";

const titleLetters = "BLUE SPACE".split("");

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const galaxyY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const galaxyScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const galaxyOpacity = useTransform(scrollYProgress, [0, 0.8], [0.7, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 60%, #080f1a 0%, #050810 60%, #000000 100%)" }}
    >
      {/* Star field */}
      <StarField count={280} className="z-0" />

      {/* Deep space nebula glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(74,112,169,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 30% 40%, rgba(143,171,212,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Circuit grid overlay */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />

      {/* Galaxy image - parallax */}
      <motion.div
        style={{ y: galaxyY, scale: galaxyScale, opacity: galaxyOpacity }}
        className="absolute right-0 md:right-[-5%] top-[10%] w-[90vw] md:w-[55vw] max-w-3xl pointer-events-none"
      >
        <div
          className="relative w-full aspect-square"
          style={{
            filter: "blur(0px) saturate(1.3) brightness(0.9)",
          }}
        >
          {mounted && (
            <Image
              src="/images/galaxy.png"
              alt="Galaxy"
              fill
              className="object-contain"
              priority
            />
          )}
          {/* Galaxy glow overlay */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(74,112,169,0.2) 0%, transparent 70%)",
              mixBlendMode: "screen",
            }}
          />
        </div>
      </motion.div>

      {/* Floating orbital rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <div
          className="w-[600px] h-[600px] rounded-full border border-blue-mid/40"
          style={{ animation: "spin 40s linear infinite" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-blue-light/30"
          style={{ animation: "spin 25s linear infinite reverse" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-cream/20"
          style={{ animation: "spin 15s linear infinite" }}
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col items-start"
      >
        {/* Build Guilds tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-blue-mid/40 bg-blue-mid/10">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-light animate-pulse" />
            <span
              className="text-xs font-medium text-blue-light tracking-widest uppercase"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Build Guilds presents
            </span>
          </div>
          <div className="h-px w-12 bg-gradient-to-r from-blue-mid/60 to-transparent" />
        </motion.div>

        {/* BLUE SPACE title - staggered letters */}
        <div className="overflow-hidden mb-4">
          <div className="flex flex-wrap">
            {titleLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4 + i * 0.045,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`glitch-text text-[clamp(3.5rem,10vw,9rem)] font-extrabold leading-none tracking-tighter ${
                  letter === " " ? "w-[0.25em]" : ""
                }`}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: "#EFECE3",
                  textShadow:
                    "0 0 80px rgba(74,112,169,0.6), 0 0 160px rgba(74,112,169,0.3)",
                  animationDelay: `${i * 0.8}s`,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="text-[clamp(1rem,2.5vw,1.5rem)] font-light text-blue-light/90 tracking-[0.2em] uppercase mb-8"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Hardware + Software Hackathon
        </motion.p>

        {/* Date & Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-cream/80 text-sm font-medium tracking-wider" style={{ fontFamily: "'Space Mono', monospace" }}>
              April 19, 2025
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span className="text-cream/80 text-sm font-medium" style={{ fontFamily: "'Space Mono', monospace" }}>
              Zoho Corporation — Pleasanton, CA
            </span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="https://discord.gg/TNjUjYkB3"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full font-bold text-base overflow-hidden"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {/* Animated gradient background */}
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #4A70A9, #8FABD4, #4A70A9)",
                backgroundSize: "200% 200%",
                animation: "gradient-x 3s ease infinite",
              }}
            />
            {/* Glow pulse rings */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: "0 0 40px rgba(74,112,169,0.8), 0 0 80px rgba(74,112,169,0.4)",
              }}
            />
            <span className="relative text-space-900 flex items-center gap-2">
              Apply Now
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          <a
            href="#about"
            className="group px-8 py-4 rounded-full font-semibold text-base text-cream/80 hover:text-cream border border-cream/20 hover:border-blue-light/50 transition-all duration-300 hover:bg-blue-mid/10"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Learn more
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-16 flex flex-wrap gap-8 border-t border-blue-mid/20 pt-8"
        >
          {[
            { value: "100%", label: "Free" },
            { value: "1 Day", label: "Hackathon" },
            { value: "∞", label: "Workshops" },
            { value: "Free PCBs", label: "For all" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="text-2xl font-bold text-gradient-blue"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-cream/50 tracking-widest uppercase mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-cream/30 tracking-widest uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-blue-mid/60 to-transparent"
        />
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #050810)" }}
      />
    </section>
  );
}
