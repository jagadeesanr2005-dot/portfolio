import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, FolderGit2, ArrowDown, UserRound } from "lucide-react";
import { Button } from "@/components/ui/Button";

const roles = ["Full Stack Developer", "Angular Developer", "Desktop Application Developer"];

function useTypewriter(words: string[], typingSpeed = 70, pauseMs = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), typingSpeed / 2);
    } else {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pauseMs]);

  return text;
}

function ProfilePhotoCard() {
  const [missing, setMissing] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
      whileHover={{ y: -14, scale: 1.015 }}
      transition={{
        opacity: { duration: 0.7, delay: 0.5 },
        scale: { duration: 0.7, delay: 0.5 },
        y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      }}
      className="relative mx-auto w-full max-w-[21rem] sm:max-w-[24rem] lg:ml-auto"
    >
      <div className="absolute -inset-5 rounded-[2rem] bg-primary/20 blur-3xl" />
      <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-white/28 via-primary/35 to-white/5 opacity-80" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.055] p-2 shadow-[0_24px_90px_rgba(0,0,0,0.44),0_0_54px_rgba(16,185,129,0.16)] backdrop-blur-2xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-card">
          {!missing ? (
            <img
              src="/images/profile.jpg"
              alt="Jagadeesan R professional portrait"
              onError={() => setMissing(true)}
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.035]"
            />
          ) : (
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-card">
              <img
                src="/images/profile.jpg"
                alt="Jagadeesan R"
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-base/28 via-transparent to-white/[0.04]" />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const typed = useTypewriter(roles);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      <div className="section-container grid items-center gap-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="order-2 text-center sm:text-left lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="eyebrow">Jagadeesan R | Full Stack Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-xl"
          >
            Turning Ideas <br />
            Into Software.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 min-h-10 sm:min-h-12"
          >
            <span className="text-xl font-medium text-muted sm:text-2xl">
              I am a{" "}
              <span className="font-semibold gradient-text">
                {typed}
                <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-secondary align-middle sm:h-7" />
              </span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            I'm a Full Stack Developer specializing in Angular, Electron, Node.js, and TypeScript. I build responsive web applications and desktop software with a focus on clean architecture, performance, and user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start sm:gap-4"
          >
            <Button variant="primary" onClick={() => scrollTo("projects")}>
              <FolderGit2 size={18} /> View Projects
            </Button>
            <Button as="a" variant="ghost" href="/resume.pdf" download>
              <Download size={18} /> Download Resume
            </Button>
            <Button variant="ghost" onClick={() => scrollTo("contact")}>
              <Mail size={18} /> Contact Me
            </Button>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <ProfilePhotoCard />
        </div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-ink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to About section"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
