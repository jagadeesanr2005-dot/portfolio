<<<<<<< HEAD
# Jagadeesan R — Portfolio

A premium, dark-themed developer portfolio built with React 19, Vite, TypeScript,
Tailwind CSS, Framer Motion, and Lenis smooth scrolling.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed localhost URL. `npm run build` produces a production
build in `dist/`, and `npm run preview` serves that build locally.

## What you need to plug in

Everything renders and animates out of the box, but a few things are
intentionally left as placeholders for you to swap in:

- **Resume PDF** — drop your actual file at `public/resume.pdf`. Both
  "Download Resume" buttons already point at that path.
- **Project screenshots** — add real images to `public/projects/` and update
  the `image` field in `src/data/projects.ts`, then swap the placeholder div
  in `ProjectCard.tsx` for an `<img>` tag.
- **GitHub section** — currently static placeholders (`src/components/sections/GithubStats.tsx`).
  Wire it to the GitHub REST API (`/users/{username}/repos`, plus a
  contribution-graph library or the GitHub GraphQL API) when you're ready.
- **Contact form** — validates and shows a success state, but doesn't send
  anywhere yet. Point `handleSubmit` in `Contact.tsx` at a form backend
  (Formspree, Resend, your own API route, etc.).
- **Social links** — update the placeholder `href="#"` values in
  `Footer.tsx` and `Contact.tsx` with your real GitHub/LinkedIn URLs.

## Notes on the stack

- **Framer Motion** handles all component and scroll animations (reveal,
  magnetic buttons, card tilt, mouse-follow gradients in the hero).
- **Lenis** provides the smooth-scroll feel; it auto-disables under
  `prefers-reduced-motion`.
- **GSAP** and **shadcn/ui** from the original brief were intentionally left
  out to keep the dependency surface and config small — Framer Motion alone
  covers every animation requirement here. If you later want a specific GSAP-only
  effect (e.g. a scrubbed pin-and-reveal on scroll), it can be added
  as a scoped addition rather than a second animation engine running
  alongside Framer Motion.
- **react-router-dom** is included as a dependency (per the original brief)
  but isn't wired up, since this is a single-page scrolling portfolio. It's
  there if you want to add a dedicated project detail page or blog later.

## Folder structure

```
src/
  components/
    layout/     Navbar, Footer, ScrollProgressBar, BackToTop
    sections/   Hero, About, Skills, Projects, Experience, Education, GitHub, Resume, Contact
    ui/         Button, Card, Reveal, SectionHeading, FloatingInput
  data/         Static content (skills, projects, timeline, nav)
  hooks/        useLenis, useActiveSection, useScrollProgress
  lib/          skillIcons map
  types/        Shared TypeScript interfaces
```
=======
# portfolio
My personal developer portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion, showcasing my projects, skills, and experience.
>>>>>>> 913865e8070c85d3e702f314fb092cb26e22647e
