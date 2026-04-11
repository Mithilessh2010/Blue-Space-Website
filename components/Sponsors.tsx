"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const sponsors = [
  {
    id: "quantum",
    name: "Quantum Robotics",
    tier: "gold",
    logo: "/images/quantum.jpg",
    url: "https://quantum-robotics.ai/",
    bg: "white",
  },
  {
    id: "easyeda",
    name: "EasyEDA",
    tier: "gold",
    logo: "/images/easyeda.jpg",
    url: "https://easyeda.com",
    bg: "white",
  },
  {
    id: "featherless",
    name: "Featherless.ai",
    tier: "silver",
    logo: "/images/featherless.jpeg",
    url: "https://featherless.ai",
    bg: "dark",
  },
  {
    id: "zoho",
    name: "Zoho",
    tier: "venue",
    logo: "/images/zoho.png",
    url: "https://zoho.com",
    bg: "white",
  },
  {
    id: "hackclub",
    name: "Hack Club",
    tier: "community",
    logo: "/images/hackclub.png",
    url: "https://hackclub.com",
    bg: "dark",
  },
  {
    id: "generationxyz",
    name: "Generation XYZ",
    tier: "gold",
    logo: "/xyz-logo-color.png",
    url: "https://gen.xyz/",
    bg: "dark",
  },
];

const tierConfig: Record<string, { label: string; color: string; glow: string }> = {
  gold: { label: "Gold Sponsor", color: "#F5C842", glow: "rgba(245,200,66,0.25)" },
  silver: { label: "Silver Sponsor", color: "#8FABD4", glow: "rgba(143,171,212,0.25)" },
  venue: { label: "Venue Partner", color: "#4A70A9", glow: "rgba(74,112,169,0.25)" },
  community: { label: "Community Partner", color: "#EC3750", glow: "rgba(236,55,80,0.2)" },
};

export default function Sponsors() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="sponsors"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080f1a 0%, #050810 100%)" }}
    >
      {/* Top horizon line */}
      <div className="horizon-line w-full mb-0" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(74,112,169,0.07) 0%, transparent 70%)",
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
            03 — Sponsors
          </span>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-blue-mid/60 to-transparent" />
        </motion.div>

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-tight tracking-tight max-w-xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            The orgs making{" "}
            <span className="text-gradient-blue">Blue Space</span> possible.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/50 text-sm max-w-xs leading-relaxed"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Interested in sponsoring? Reach out at{" "}
            <a
              href="mailto:ro.devnani@gmail.com"
              className="text-blue-light hover:text-cream transition-colors"
            >
              ro.devnani@gmail.com
            </a>
          </motion.p>
        </div>

        {/* Gold sponsors - large */}
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-yellow-400/60 tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            <span className="w-4 h-px bg-yellow-400/40" />
            Gold Sponsors
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-6">
            {sponsors
              .filter((s) => s.tier === "gold")
              .map((sponsor, i) => (
                <SponsorCard
                  key={sponsor.id}
                  sponsor={sponsor}
                  index={i}
                  size="large"
                  hovered={hoveredId === sponsor.id}
                  onHover={setHoveredId}
                />
              ))}
          </div>
        </div>

        {/* Other sponsors */}
        <div className="grid sm:grid-cols-3 gap-5">
          {sponsors
            .filter((s) => s.tier !== "gold")
            .map((sponsor, i) => (
              <SponsorCard
                key={sponsor.id}
                sponsor={sponsor}
                index={i + 2}
                size="medium"
                hovered={hoveredId === sponsor.id}
                onHover={setHoveredId}
              />
            ))}
        </div>

        {/* Become a sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass-card rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-cream font-bold text-xl mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Want to sponsor Blue Space?
            </h3>
            <p className="text-cream/50 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
              Get in front of the next generation of hardware and software builders.
            </p>
          </div>
          <a
            href="mailto:ro.devnani@gmail.com"
            className="flex-shrink-0 px-6 py-3 rounded-full border border-blue-mid/50 hover:border-blue-light/70 text-cream text-sm font-semibold bg-blue-mid/10 hover:bg-blue-mid/20 transition-all duration-300 hover:shadow-glow-blue"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Get in touch →
          </a>
        </motion.div>
      </div>

      {/* Bottom horizon line */}
      <div className="horizon-line w-full mt-0 absolute bottom-0 left-0 right-0" />
    </section>
  );
}

function SponsorCard({
  sponsor,
  index,
  size,
  hovered,
  onHover,
}: {
  sponsor: (typeof sponsors)[0];
  index: number;
  size: "large" | "medium";
  hovered: boolean;
  onHover: (id: string | null) => void;
}) {
  const tier = tierConfig[sponsor.tier];

  return (
    <motion.a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      onHoverStart={() => onHover(sponsor.id)}
      onHoverEnd={() => onHover(null)}
      className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer block"
      style={{
        padding: size === "large" ? "2.5rem" : "2rem",
        boxShadow: hovered ? `0 0 40px ${tier.glow}` : "none",
        transition: "box-shadow 0.4s ease",
        border: hovered
          ? `1px solid ${tier.color}40`
          : "1px solid rgba(74,112,169,0.2)",
      }}
    >
      {/* Tier badge */}
      <div
        className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider"
        style={{
          fontFamily: "'Space Mono', monospace",
          color: tier.color,
          background: `${tier.color}18`,
          border: `1px solid ${tier.color}30`,
        }}
      >
        {tier.label}
      </div>

      {/* Logo */}
      <div
        className={`relative mx-auto ${
          size === "large" ? "h-20 w-40" : "h-14 w-28"
        } mb-5 transition-all duration-300 group-hover:scale-105`}
      >
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          className={`object-contain ${
            sponsor.bg === "white"
              ? "rounded-lg p-1"
              : ""
          }`}
          style={
            sponsor.bg === "white"
              ? { background: "rgba(255,255,255,0.92)", padding: "6px", borderRadius: "8px" }
              : {}
          }
        />
      </div>

      {/* Name */}
      <p
        className="text-center font-bold text-cream/80 group-hover:text-cream transition-colors duration-300"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: size === "large" ? "1.1rem" : "0.9rem",
        }}
      >
        {sponsor.name}
      </p>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: `linear-gradient(90deg, ${tier.color}, transparent)` }}
      />
    </motion.a>
  );
}
