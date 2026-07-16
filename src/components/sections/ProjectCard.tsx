import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";

import {
  SiAngular,
  SiElectron,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa6";

import {
  Github,
  ExternalLink,
  CheckCircle2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import type { ProjectItem } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const techIconMap: Record<string, IconType> = {
  Angular: SiAngular,
  Electron: SiElectron,
  "Node.js": SiNodedotjs,
  TypeScript: SiTypescript,
  Python: SiPython,
  HTML: SiHtml5,
  CSS: FaCss3Alt,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
};

function BrowserMock({
  project,
  showVideo,
}: {
  project: ProjectItem;
  showVideo: boolean;
}) {
  const images = project.images ?? [];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [paused, images]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full h-full rounded-t-xl overflow-hidden bg-[#151B26] border-b border-white/10 group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Browser Header */}

      <div className="flex items-center gap-2 px-4 h-10 bg-white/5 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />

        <div className="ml-4 flex-1">
          <div className="h-6 rounded-md bg-white/5 flex items-center px-3 text-xs text-gray-400 truncate">
            {project.title}
          </div>
        </div>
      </div>

      {/* Screenshot */}

      <div
  className={`relative overflow-hidden bg-[#151B26] ${
    project.id === "whatsapp-bulk-sender"
      ? "h-[560px]"
      : project.id === "story-generator"
      ? "h-[230px]"
      : "h-[230px]"
  }`}
>
        {showVideo ? (

  <video
    className="absolute inset-0 w-full h-full object-contain bg-black"
    controls
    autoPlay
    muted
  >
    <source src={project.demoVideo} type="video/mp4" />
  </video>

) : (

  <AnimatePresence mode="wait">
    <motion.img
      key={current}
      src={images[current]}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        scale: 1.03,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    />
  </AnimatePresence>

)}

        {/* Left Arrow */}

        {!showVideo && images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black/50 p-2 rounded-full"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black/50 p-2 rounded-full"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </>
        )}

        {/* Dots */}

        {!showVideo && images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  current === index
                    ? "bg-emerald-400 w-5"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: ProjectItem }) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <Card tilt className="overflow-hidden group">
      <div className="aspect-video">
        <BrowserMock
    project={project}
    showVideo={showVideo}
/>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading font-semibold text-xl text-ink">
            {project.title}
          </h3>

          <ArrowUpRight
            size={22}
            className="text-muted shrink-0 mt-1 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>

        <p className="mt-2 text-muted leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2.5 mt-4">
          {project.tech.map((t) => {
            const Icon = techIconMap[t];

            return (
              <div
                key={t}
                className="flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-medium bg-white/[0.03] border border-white/10 text-muted"
              >
                {Icon && <Icon size={14} />}
                <span>{t}</span>
              </div>
            );
          })}
        </div>

        {project.features.length > 0 && (
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <CheckCircle2
                  size={16}
                  className="text-secondary shrink-0"
                />
                {f}
              </li>
            ))}
          </ul>
        )}

        {project.contribution && (
          <div className="mt-5">
            <p className="text-sm font-semibold text-ink/90 mb-2">
              My Contribution
            </p>

            <ul className="space-y-1.5">
              {project.contribution.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-3 mt-6">
  {project.githubUrl && (
    <Button
      as="a"
      href={project.githubUrl}
      variant="ghost"
      target="_blank"
      rel="noreferrer"
    >
      <Github size={16} />
      GitHub
    </Button>
  )}

  {project.demoVideo && (
    <>
          <Button
        variant="ghost"
        onClick={() => setShowVideo(false)}
      >
        🖼 Images
      </Button>
      
      <Button
        variant="primary"
        onClick={() => setShowVideo(true)}
      >
        ▶ Demo
      </Button>


    </>
  )}
</div>
      </div>
    </Card>
  );
}