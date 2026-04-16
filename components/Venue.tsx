"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Venue() {
  const venueAddress = "Zoho Corporation, 4141 Hacienda Dr, Pleasanton, CA 94588";
  const encodedVenueAddress = encodeURIComponent(venueAddress);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedVenueAddress}`;
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodedVenueAddress}&output=embed`;

  return (
    <section
      id="venue"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050810 0%, #080f1a 100%)" }}
    >
      {/* Circuit grid */}
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(74,112,169,0.08) 0%, transparent 70%)",
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
            04 — Venue
          </span>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-blue-mid/60 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-tight tracking-tight mb-8"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="text-cream">Venue</span>
              <br />
              <span className="text-gradient-blue">Confirmed.</span>
            </h2>

            {/* Zoho logo */}
            <div className="flex items-center gap-5 mb-8">
              <div
                className="relative w-16 h-12 flex-shrink-0 rounded-xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.9)", padding: "8px" }}
              >
                <Image
                  src="/images/zoho.png"
                  alt="Zoho"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p
                  className="text-cream font-bold text-xl"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Zoho Corporation
                </p>
                <p className="text-blue-light/70 text-sm mt-0.5" style={{ fontFamily: "'Barlow', sans-serif" }}>
                  Official Venue Partner
                </p>
              </div>
            </div>

            {/* Address block */}
            <div className="glass-card rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-blue-mid/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-cream font-semibold mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    4141 Hacienda Dr
                  </p>
                  <p className="text-cream/60 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
                    Pleasanton, CA 94588
                  </p>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs text-blue-light hover:text-cream transition-colors"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Open in Maps
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Date & time info */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Date", value: "May 16, 2026" },
                { label: "Time", value: "9:00 AM — 6:00 PM" },
                { label: "Parking", value: "Free on-site" },
                { label: "Food", value: "Provided all day" },
              ].map((info) => (
                <div
                  key={info.label}
                  className="glass-card rounded-xl p-4"
                >
                  <p className="text-cream/40 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {info.label}
                  </p>
                  <p className="text-cream text-sm font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Map + venue image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Venue confirmed image */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-mid/20">
              <Image
                src="/images/zoho-venue.png"
                alt="Zoho Venue"
                width={600}
                height={400}
                className="w-full h-auto"
                style={{ filter: "saturate(1.1) brightness(0.95)" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent 60%, rgba(8,15,26,0.8) 100%)",
                }}
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-900/80 backdrop-blur-sm border border-blue-mid/30">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-cream font-medium" style={{ fontFamily: "'Space Mono', monospace" }}>
                    Venue Confirmed
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map (click anywhere to open Google Maps) */}
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden border border-blue-mid/20 h-64"
              aria-label="Open Zoho Corporation location in Google Maps"
            >
              <iframe
                src={mapsEmbedSrc}
                width="100%"
                height="100%"
                className="pointer-events-none"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zoho Corporation Location"
              />

              <div className="absolute top-3 left-3 right-3 pointer-events-none">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-space-900/85 px-3 py-1.5 border border-blue-mid/30 backdrop-blur-sm">
                  <svg className="w-3.5 h-3.5 text-blue-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span
                    className="text-[11px] text-cream/90 truncate"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    4141 Hacienda Dr, Pleasanton, CA 94588
                  </span>
                </div>
              </div>

              {/* Map overlay for dark theme consistency */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl transition-colors duration-300 group-hover:bg-blue-mid/5"
                style={{ boxShadow: "inset 0 0 0 1px rgba(74,112,169,0.2)" }}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
