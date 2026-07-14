import { motion } from "framer-motion";
import type { SkillItem } from "@/types";
import { skillIconMap } from "@/lib/skillIcons";
import { Card } from "@/components/ui/Card";

interface SkillCardProps extends SkillItem {
  variant?: "card" | "badge" | "pill" | "highlight";
}

export function SkillCard({ name, icon, status, variant = "card" }: SkillCardProps) {
  const Icon = icon ? skillIconMap[icon] : null;

  const content = (
    <>
      {Icon && (
        <div
          className={
            variant === "card"
              ? "grid h-16 w-16 place-items-center rounded-2xl border border-primary/15 bg-primary/10 text-primary shadow-[0_0_26px_rgba(16,185,129,0.12)]"
              : "text-muted"
          }
        >
          <Icon size={variant === "card" ? 32 : 16} />
        </div>
      )}
      <span
        className={
          variant === "card" ? "text-base font-medium text-ink/95" : "text-sm font-medium"
        }
      >
        {name}
      </span>
      {status && variant === "card" && (
        <span
          className={`text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full ${
            status === "learning" ? "bg-secondary/15 text-secondary" : "bg-white/8 text-muted"
          }`}
        >
          {status}
        </span>
      )}
    </>
  );

  switch (variant) {
    case "badge":
      return (
        <motion.div
          whileHover={{ y: -3, scale: 1.05 }}
          className="glass flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-ink/80 transition-colors hover:text-ink hover:border-primary/20"
        >
          {content}
        </motion.div>
      );
    case "pill":
      return (
        <motion.div
          whileHover={{ y: -3, scale: 1.05 }}
          className="glass flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-ink/80 transition-colors hover:text-ink hover:border-primary/20"
        >
          {content}
        </motion.div>
      );
    case "highlight":
      return (
        <motion.div
          whileHover={{ y: -3, scale: 1.05 }}
          className="glass flex items-center gap-2 rounded-lg border-2 border-emerald-400/50 bg-primary/10 px-4 py-2 text-ink shadow-[0_0_24px_rgba(16,185,129,0.2)]"
        >
          <span className="text-emerald-400">⚡</span>
          {content}
        </motion.div>
      );
    case "card":
    default:
      return (
        <motion.div
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-full"
        >
          <Card className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center">
            {content}
          </Card>
        </motion.div>
      );
  }
}
