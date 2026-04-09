"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

export default function StarField({
  count = 200,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  const colors = ["#EFECE3", "#8FABD4", "#4A70A9", "#ffffff", "#c8d8f0"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars();
    };

    const initStars = () => {
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.3,
        opacity: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.15 + 0.02,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const animate = (time: number) => {
      timeRef.current = time;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        const twinkle =
          (Math.sin(time * star.twinkleSpeed + star.twinkleOffset) + 1) / 2;
        const currentOpacity = star.opacity * (0.4 + twinkle * 0.6);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle =
          star.color +
          Math.floor(currentOpacity * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();

        // Subtle cross sparkle for larger stars
        if (star.size > 1.8 && twinkle > 0.8) {
          ctx.beginPath();
          ctx.strokeStyle =
            star.color +
            Math.floor(currentOpacity * 0.5 * 255)
              .toString(16)
              .padStart(2, "0");
          ctx.lineWidth = 0.5;
          const sparkLen = star.size * 3;
          ctx.moveTo(star.x - sparkLen, star.y);
          ctx.lineTo(star.x + sparkLen, star.y);
          ctx.moveTo(star.x, star.y - sparkLen);
          ctx.lineTo(star.x, star.y + sparkLen);
          ctx.stroke();
        }

        // Drift downward slowly (parallax feel)
        star.y += star.speed * 0.3;
        if (star.y > canvas.height + 5) {
          star.y = -5;
          star.x = Math.random() * canvas.width;
        }
      });

      animRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
