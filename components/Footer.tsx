"use client";

import { motion } from "framer-motion";
import StarField from "./StarField";

export default function Footer({ onAdminTrigger }: { onAdminTrigger: () => void }) {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050810 0%, #000000 100%)" }}
    >
      <StarField count={80} className="opacity-30" />

      {/* Top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74,112,169,0.1) 0%, transparent 60%)",
        }}
      />

      {/* Top horizon line */}
      <div className="horizon-line w-full" />

      {/* Final CTA section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          {/* Big BLUE SPACE */}
          <h2
            className="text-[clamp(4rem,15vw,14rem)] font-extrabold leading-none tracking-tighter select-none"
            style={{
              fontFamily: "'Syne', sans-serif",
              color: "transparent",
              WebkitTextStroke: "1px rgba(74,112,169,0.3)",
              textShadow: "0 0 120px rgba(74,112,169,0.1)",
            }}
          >
            BLUE
            <br />
            SPACE
          </h2>

          <div className="-mt-8 mb-12 flex flex-col items-center gap-6">
            <p
              className="text-cream/60 text-xl max-w-lg"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              One day. Endless builds. Come launch something.
            </p>
            <a
              href="https://blueprint.hackclub.com/guilds/invite/dublin"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-4 rounded-full font-bold text-lg overflow-hidden"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #4A70A9, #8FABD4, #4A70A9)",
                  backgroundSize: "200% 200%",
                  animation: "gradient-x 3s ease infinite",
                }}
              />
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: "0 0 50px rgba(74,112,169,0.9), 0 0 100px rgba(74,112,169,0.5)",
                }}
              />
              <span className="relative text-space-900 flex items-center gap-2">
                Register
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>

        {/* Footer nav */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-blue-mid/15 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-10"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full border border-blue-light/30 flex items-center justify-center">
                <span className="text-xs font-bold text-blue-light" style={{ fontFamily: "'Space Mono', monospace" }}>BS</span>
              </div>
              <span className="text-cream font-bold text-base" style={{ fontFamily: "'Syne', sans-serif" }}>
                BLUE<span className="text-blue-light">SPACE</span>
              </span>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed" style={{ fontFamily: "'Barlow', sans-serif" }}>
              A Build Guilds hackathon. May 16, 2025. Zoho Corporation, Pleasanton CA.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-cream/40 text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Why Attend", href: "#why" },
                { label: "Sponsors", href: "#sponsors" },
                { label: "Venue", href: "#venue" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/50 hover:text-cream text-sm transition-colors animated-underline"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-cream/40 text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/TNjUjYkB3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream/50 hover:text-cream text-sm transition-colors group"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  <svg className="w-4 h-4 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                  </svg>
                  discord.gg/TNjUjYkB3
                </a>
              </li>
              <li>
                <a
                  href="mailto:ro.devnani@gmail.com"
                  className="flex items-center gap-2 text-cream/50 hover:text-cream text-sm transition-colors"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  <svg className="w-4 h-4 text-blue-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  ro.devnani@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:theprasham@gmail.com"
                  className="flex items-center gap-2 text-cream/50 hover:text-cream text-sm transition-colors"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  <svg className="w-4 h-4 text-blue-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2H5a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  theprasham@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-blue-mid/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-cream/25 text-xs"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            © 2025 Blue Space Hackathon. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span
              className="text-cream/20 text-xs"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Built for builders
            </span>
            {/* Hidden admin trigger — subtle period */}
            <button
              onClick={onAdminTrigger}
              className="w-2 h-2 rounded-full bg-cream/5 hover:bg-blue-mid/30 transition-all duration-300"
              aria-hidden="true"
              title=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
