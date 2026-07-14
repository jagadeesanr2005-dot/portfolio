import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { useActiveSection } from "@/hooks/useActiveSection";

const mobileNavVariants = {
  hidden: {
    y: -20,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: "easeIn",
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const mobileNavItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(navItems.map((n) => n.href));

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="section-container mt-4">
        <div className="relative flex items-center justify-between rounded-full bg-card/60 px-4 py-2 shadow-lg shadow-black/20 backdrop-blur-xl border border-white/10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-heading font-semibold text-lg tracking-tight"
          >
            Jagadeesan<span className="text-primary">.</span>
          </motion.button>

          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo(item.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeId === item.href ? "text-ink" : "text-muted hover:text-ink/90"
                  }`}
                >
                  {activeId === item.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary/20 border border-emerald-400/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <motion.span whileHover={{ y: -1 }} className="relative block">
                    {item.label}
                  </motion.span>
                </motion.button>
              </li>
            ))}
          </ul>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-full transition-colors md:hidden text-muted hover:text-ink hover:bg-primary/10"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 8, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mt-2 flex flex-col gap-1 rounded-2xl bg-card/80 p-2 shadow-xl shadow-black/20 backdrop-blur-lg border border-white/10 md:hidden"
            >
              {navItems.map((item) => (
                <motion.li key={item.href} variants={mobileNavItemVariants}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      activeId === item.href
                        ? "bg-primary/15 text-ink"
                        : "text-muted hover:bg-white/[0.04] hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
