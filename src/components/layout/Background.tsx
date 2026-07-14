import { useState, type MouseEvent } from "react";
import { motion } from "framer-motion";

const _random = (min: number, max: number) => Math.random() * (max - min) + min;

const Particle = () => {
  const duration = _random(3, 6);
  const size = _random(1, 3);
  const initialY = _random(-10, 80);
  const initialX = _random(0, 100);

  return (
    <motion.span
      className="absolute rounded-full bg-emerald-400/20"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={{ y: [0, _random(-20, 20), 0], x: [0, _random(-15, 15), 0], opacity: [0, 0.6, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: _random(0, duration),
      }}
    />
  );
};

export function Background() {
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="fixed inset-0 -z-10 bg-base overflow-hidden"
    >
      {/* Mouse Glow */}
      <div
        className="absolute inset-0 opacity-60 transition-[background] duration-300"
        style={{
          background: `radial-gradient(400px circle at ${glow.x}% ${glow.y}%, rgba(16,185,129,0.1), transparent 50%)`,
        }}
      />
      {/* Noise is handled globally in App.tsx */}

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at 50% 50%, black, transparent 80%)",
        }}
      />

      {/* Aurora */}
      <motion.div
        className="absolute -top-1/2 -left-1/4 h-[150vh] w-[150vw] rounded-full opacity-[0.15]"
        style={{
          background: "radial-gradient(circle, #10B981, #0F766E, transparent 70%)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Emerald Radial Glow */}
      <motion.div
        className="absolute -bottom-1/2 -right-1/4 h-[120vh] w-[120vw] rounded-full opacity-[0.2]"
        style={{ background: "radial-gradient(circle, #34D399, transparent 70%)" }}
        animate={{ scale: [1, 1.05, 1], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Particles */}
      {[...Array(30)].map((_, i) => (
        <Particle key={i} />
      ))}
    </div>
  );
}
