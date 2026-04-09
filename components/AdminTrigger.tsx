"use client";

import { useEffect, useRef } from "react";

const SECRET_SEQUENCE = ["b", "s", "d", "e", "v"];

export default function AdminTrigger({ onTrigger }: { onTrigger: () => void }) {
  const sequenceRef = useRef<string[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      sequenceRef.current.push(e.key.toLowerCase());

      // Keep only last N keys
      if (sequenceRef.current.length > SECRET_SEQUENCE.length) {
        sequenceRef.current.shift();
      }

      // Reset timer
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        sequenceRef.current = [];
      }, 3000);

      // Check match
      if (
        sequenceRef.current.join("") ===
        SECRET_SEQUENCE.join("")
      ) {
        sequenceRef.current = [];
        onTrigger();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [onTrigger]);

  // Invisible — just handles keyboard shortcut
  return null;
}
