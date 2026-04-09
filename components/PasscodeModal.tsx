"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CORRECT_PASSCODE = "bluespacedagoat12";

export default function PasscodeModal({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [attempts, setAttempts] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const blink = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleSubmit = () => {
    if (value === CORRECT_PASSCODE) {
      setStatus("success");
      setTimeout(() => onSuccess(), 1200);
    } else {
      setStatus("error");
      setAttempts((a) => a + 1);
      setValue("");
      setTimeout(() => setStatus("idle"), 1500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="admin-terminal crt relative w-full max-w-lg mx-4 rounded-2xl overflow-hidden"
        >
          {/* Terminal header */}
          <div
            className="flex items-center gap-2 px-5 py-3 border-b border-blue-mid/20"
            style={{ background: "rgba(74,112,169,0.08)" }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70 cursor-pointer" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span
              className="text-blue-light/60 text-xs mx-auto"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              BLUESPACE_ADMIN_ACCESS — v2.4.1
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-8">
            {/* ASCII art */}
            <pre
              className="text-blue-mid/40 text-[9px] leading-tight mb-6 select-none"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
{`  ██████╗ ██╗     ██╗   ██╗███████╗
  ██╔══██╗██║     ██║   ██║██╔════╝
  ██████╔╝██║     ██║   ██║█████╗  
  ██╔══██╗██║     ██║   ██║██╔══╝  
  ██████╔╝███████╗╚██████╔╝███████╗
  ╚═════╝ ╚══════╝ ╚═════╝ ╚══════╝`}
            </pre>

            {/* Log lines */}
            <div className="mb-6 space-y-1">
              {[
                "Initializing secure connection...",
                "Verifying node certificate...",
                "BLUESPACE_ADMIN_GATEWAY [LOCKED]",
                attempts > 0
                  ? `⚠ ${attempts} failed attempt${attempts > 1 ? "s" : ""} logged`
                  : "Awaiting authorization token...",
              ].map((line, i) => (
                <p
                  key={i}
                  className={`text-xs ${
                    line.startsWith("⚠")
                      ? "text-red-400/80"
                      : i < 2
                      ? "text-blue-light/30"
                      : i === 2
                      ? "text-blue-light/60"
                      : "text-cream/50"
                  }`}
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {i < 2 ? (
                    <span className="text-green-400/50 mr-2">✓</span>
                  ) : (
                    <span className="text-blue-mid/50 mr-2">›</span>
                  )}
                  {line}
                </p>
              ))}
            </div>

            {/* Passcode input */}
            <div className="mb-4">
              <p
                className="text-blue-light/60 text-xs mb-2"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                root@bluespace:~$ enter_passcode
              </p>
              <div
                className={`flex items-center gap-2 border rounded-lg px-4 py-3 transition-all duration-200 ${
                  status === "error"
                    ? "border-red-500/60 bg-red-500/5"
                    : status === "success"
                    ? "border-green-500/60 bg-green-500/5"
                    : "border-blue-mid/30 bg-blue-mid/5 focus-within:border-blue-light/50"
                }`}
              >
                <span className="text-blue-mid text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
                  $
                </span>
                <input
                  ref={inputRef}
                  type="password"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="enter passcode..."
                  className="flex-1 bg-transparent outline-none text-cream text-sm"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                  autoComplete="off"
                  spellCheck={false}
                />
                <span
                  className={`w-2 h-4 transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"}`}
                  style={{ background: "#8FABD4" }}
                />
              </div>

              {/* Status message */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-xs mt-2"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    ✗ ACCESS DENIED — Invalid authorization token
                  </motion.p>
                )}
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-xs mt-2"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    ✓ ACCESS GRANTED — Opening mission control...
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={!value || status === "success"}
              className="w-full py-3 rounded-lg text-sm font-semibold border border-blue-mid/40 bg-blue-mid/15 hover:bg-blue-mid/25 hover:border-blue-light/50 text-cream transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {status === "success" ? "[ AUTHENTICATED ]" : "[ AUTHENTICATE ]"}
            </button>

            <p
              className="text-cream/20 text-[10px] text-center mt-4"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Press ESC to abort · All access attempts are logged
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
