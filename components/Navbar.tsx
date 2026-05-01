"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Why Attend", href: "#why" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Venue", href: "#venue" },
  { label: "FAQ", href: "#faq" },
  { label: "Organizers", href: "#organizers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-space-900/80 backdrop-blur-xl border-b border-blue-mid/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-blue-light/40 group-hover:border-blue-light/60 transition-all duration-300">
            <Image
              src="/images/galaxy.png"
              alt="Blue Space Logo"
              fill
              className="object-cover"
            />
          </div>
          <span
            className="text-cream font-bold text-lg tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            BLUE<span className="text-blue-light">SPACE</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="animated-underline text-cream/70 hover:text-cream text-sm tracking-wider transition-colors duration-200"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, letterSpacing: "0.08em" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://discord.gg/M7usdn4mgz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow relative px-5 py-2 rounded-full text-sm font-semibold text-cream border border-blue-mid/60 hover:border-blue-light/80 bg-blue-mid/10 hover:bg-blue-mid/20 transition-all duration-300 hover:shadow-glow-blue"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Apply Now →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-space-900/95 backdrop-blur-xl border-t border-blue-mid/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-cream/80 hover:text-cream text-lg font-medium"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://discord.gg/M7usdn4mgz"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.06 }}
                className="mt-2 px-6 py-3 rounded-full text-center text-sm font-bold text-cream bg-blue-mid/30 border border-blue-mid/60 hover:bg-blue-mid/50 transition-all"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Apply Now →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
