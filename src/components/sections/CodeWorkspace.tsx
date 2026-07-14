import { motion } from "framer-motion";
import { SiTypescript, SiReact, SiAngular } from "react-icons/si";

const codeLines = [
  { indent: 0, width: "40%", color: "bg-primary/60" },
  { indent: 1, width: "70%", color: "bg-secondary/50" },
  { indent: 1, width: "55%", color: "bg-white/20" },
  { indent: 2, width: "80%", color: "bg-success/50" },
  { indent: 2, width: "45%", color: "bg-white/15" },
  { indent: 1, width: "60%", color: "bg-primary/40" },
  { indent: 0, width: "30%", color: "bg-white/20" },
];

const badges = [
  { Icon: SiReact, label: "React 19", top: "-6%", right: "-8%", delay: 0 },
  { Icon: SiTypescript, label: "TypeScript", top: "38%", left: "-12%", delay: 0.8 },
  { Icon: SiAngular, label: "Angular", bottom: "-6%", right: "4%", delay: 1.6 },
];

/**
 * Signature hero illustration: a stylized code editor window with an
 * animated typing sequence, standing in for a real photo/screenshot.
 * Grounded in the subject (a developer's actual workspace) rather than
 * a generic avatar or stock illustration.
 */
export function CodeWorkspace() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      {/* ambient glow behind the window */}
      <div className="absolute -inset-6 rounded-[2rem] bg-grad-primary opacity-20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        whileHover={{ rotate: 0, y: -4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-2xl glass shadow-card overflow-hidden"
      >
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 text-xs text-muted font-medium">portfolio.tsx</span>
        </div>

        {/* code body */}
        <div className="p-5 space-y-3">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              style={{ paddingLeft: line.indent * 16 }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15, ease: "easeOut" }}
            >
              <span className="text-[10px] text-muted/50 w-4 shrink-0">{i + 1}</span>
              <span
                className={`h-2.5 rounded-full ${line.color}`}
                style={{ width: line.width, transformOrigin: "left" }}
              />
            </motion.div>
          ))}

          <motion.div
            className="flex items-center gap-2 pl-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            <span className="text-[10px] text-muted/50 w-4 shrink-0">8</span>
            <span className="inline-block w-[2px] h-3.5 bg-primary animate-pulse" />
          </motion.div>
        </div>

        {/* status footer */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/10 bg-white/[0.02] text-[11px] text-muted">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Available for work
          </span>
          <span>TypeScript</span>
        </div>
      </motion.div>

      {/* floating tech badges */}
      {badges.map(({ Icon, label, delay, ...pos }, i) => (
        <motion.div
          key={label}
          className="hidden sm:flex absolute items-center gap-2 glass rounded-full px-3 py-2 shadow-card"
          style={pos}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 1 + i * 0.2 },
            scale: { duration: 0.6, delay: 1 + i * 0.2 },
            y: { duration: 5, repeat: Infinity, delay, ease: "easeInOut" },
          }}
        >
          <Icon size={14} className="text-primary" />
          <span className="text-xs font-medium whitespace-nowrap">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}
