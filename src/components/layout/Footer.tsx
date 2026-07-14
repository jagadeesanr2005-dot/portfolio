import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-14">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <p className="font-heading font-semibold text-lg">
            Jagadeesan<span className="text-primary">.</span>
          </p>
          <p className="text-muted text-sm mt-1">
            Thanks for visiting my portfolio. Let's build something amazing together.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/jagadeesanr2005-dot"
            aria-label="GitHub"
            className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:jagadeesanr2005@gmail.com"
            aria-label="Email"
            className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-muted mt-8">
        © 2026 Jagadeesan R. All Rights Reserved.
      </p>
    </footer>
  );
}
