import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    id: "whatsapp-bulk-sender",
    title: "WhatsApp Bulk Sender",
    description:
      "A desktop application that enables users to send personalized WhatsApp messages in bulk using Excel files with QR authentication.",
    images: [
  "/images/my-screenshots/whatsapp-1.png",
  "/images/my-screenshots/whatsapp-2.png",
  "/images/my-screenshots/whatsapp-3.png",
  "/images/my-screenshots/whatsapp-4.png",
],
    demoVideo: "/videos/whatsapp-bulk-sender-demo.mp4",
    tech: ["Angular", "Electron", "Node.js", "TypeScript"],
    features: [
      "QR Authentication",
      "Bulk Messaging",
      "Excel Import",
      "Personalized Messages",
      "Desktop Application",
    ],
    githubUrl: "https://github.com/jagadeesanr2005-dot/whatsapp-sender1",
    liveUrl: "#",
  },
  {
    id: "story-generator",
    title: "Story Generator",
    description:
      "An AI-flavored procedural story engine with a polished, animated web interface for generating short stories across many genres.",
   images: [
  "/images/my-screenshots/whatsapp-1.png",
  "/images/my-screenshots/whatsapp-2.png",
  "/images/my-screenshots/whatsapp-3.png",
],
    demoVideo: "/videos/story-generator-demo.mp4",
    tech: ["Python", "HTML", "CSS", "TypeScript"],
    features: [
      "Story Generation",
      "Interactive UI",
      "Dynamic Content",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/jagadeesanr2005-dot/AI-Story-Generator",
    liveUrl: "#",
  },
  {
    id: "desktop-scanner",
    title: "Desktop Scanner",
    description:
      "A desktop document scanning application with a full frontend interface and backend API integration for document management.",
   images: [
  "/images/my-screenshots/whatsapp-1.png",
  "/images/my-screenshots/whatsapp-2.png",
  "/images/my-screenshots/whatsapp-3.png",
],
    demoVideo: "/videos/desktop-scanner-demo.mp4",
    tech: [
    "Angular",
    "Electron",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript"
  ],

  features: [
    "Barcode Scanner",
    "Real-time Validation",
    "Duplicate Detection",
    "Offline Support",
    "Backend Synchronization"
  ],

  contribution: [
    "Developed complete frontend using Angular.",
    "Built Electron desktop interface.",
    "Integrated REST APIs.",
    "Implemented barcode scanning workflow.",
    "Worked closely with backend developers."
  ],
    githubUrl: "https://github.com/jagadeesanr2005-dot/Desktop-Scanner",
    liveUrl: "#",
  },
];
