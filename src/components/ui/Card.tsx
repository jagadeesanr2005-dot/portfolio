import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}

/**
 * A card component with a glass-morphism effect and an optional 3D tilt on hover.
 * Now includes a premium border glow that follows the mouse.
 */
export function Card({ children, className = "", tilt = false }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for 3D tilt
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [10, -10]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-10, 10]), { stiffness: 250, damping: 25 });

  // Motion values for glow effect
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(350px circle at ${glowX}px ${glowY}px, rgba(16, 185, 129, 0.15), transparent 80%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);

    if (tilt) {
      tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
      tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
    }
  }

  function handleMouseLeave() {
    if (tilt) {
      tiltX.set(0);
      tiltY.set(0);
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tilt ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      className={`group relative rounded-2xl border border-white/10 bg-card/80 shadow-xl shadow-black/25 backdrop-blur-lg ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </motion.div>
  );
}
