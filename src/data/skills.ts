import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "Angular", icon: "angular" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Responsive Design", icon: "responsive" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express", status: "basic" },
      { name: "Spring Boot", icon: "spring", status: "learning" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb", status: "basic" },
    ],
  },
  {
    title: "Desktop Development",
    items: [{ name: "Electron", icon: "electron" }],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "IntelliJ IDEA", icon: "intellij" },
      { name: "Postman", icon: "postman" },
    ],
  },
  {
    title: "Currently Learning",
    items: [
      { name: "Spring Boot", icon: "spring", status: "learning" },
      { name: "REST APIs", icon: "api", status: "learning" },
      { name: "Advanced Backend Development", icon: "backend", status: "learning" },
    ],
  },
];
