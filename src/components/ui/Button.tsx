import { forwardRef, useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";

type Variant = "primary" | "ghost";

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  magnetic?: boolean;
}

type ButtonProps = CommonProps & Omit<HTMLMotionProps<"button">, "children"> & { as?: "button" };
type LinkProps = CommonProps & Omit<HTMLMotionProps<"a">, "children"> & { as: "a" };

const springConfig = { stiffness: 200, damping: 15, mass: 0.2 };

/**
 * Shared CTA button used across Hero, Projects, Resume and Contact.
 * Renders as <a> when `as="a"` is passed (for external links / downloads).
 * When `magnetic` (default true), the button subtly follows the cursor
 * within its bounds, snapping back on mouse leave — a small Linear/Vercel-style detail.
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | LinkProps>(
  ({ variant = "primary", className = "", children, as, magnetic = true, ...rest }, ref) => {
    const base = variant === "primary" ? "btn-primary" : "btn-ghost";
    const innerRef = useRef<HTMLElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    function handleMouseMove(e: MouseEvent) {
      if (!magnetic || !innerRef.current) return;
      const rect = innerRef.current.getBoundingClientRect();
      x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
      y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
    }

    function handleMouseLeave() {
      x.set(0);
      y.set(0);
    }

    if (as === "a") {
      return (
        <motion.a
          ref={(node) => {
            innerRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLAnchorElement | null>).current = node;
          }}
          style={{ x: springX, y: springY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileTap={{ scale: 0.96 }}
          className={`${base} ${className}`}
          {...(rest as HTMLMotionProps<"a">)}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={(node) => {
          innerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.96 }}
        className={`${base} ${className}`}
        {...(rest as HTMLMotionProps<"button">)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
