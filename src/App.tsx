import { Suspense, lazy } from "react";
import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { BackToTop } from "@/components/layout/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { useLenis } from "@/hooks/useLenis";

// Below-the-fold sections are lazy-loaded to keep the initial bundle lean.
const About = lazy(() => import("@/components/sections/About").then((m) => ({ default: m.About })));
const Skills = lazy(() => import("@/components/sections/Skills").then((m) => ({ default: m.Skills })));
const Projects = lazy(() => import("@/components/sections/Projects").then((m) => ({ default: m.Projects })));
const Experience = lazy(() => import("@/components/sections/Experience").then((m) => ({ default: m.Experience })));
const Education = lazy(() => import("@/components/sections/Education").then((m) => ({ default: m.Education })));
const GithubStats = lazy(() => import("@/components/sections/GithubStats").then((m) => ({ default: m.GithubStats })));
const Resume = lazy(() => import("@/components/sections/Resume").then((m) => ({ default: m.Resume })));
const Contact = lazy(() => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })));

function SectionFallback() {
  return <div className="h-40" aria-hidden />;
}

export default function App() {
  useLenis();

  return (
    <>
      <div className="noise-overlay" />
      <Background />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <GithubStats />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
