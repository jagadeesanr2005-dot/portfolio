import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiPython,
  SiAngular,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiElectron,
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { Smartphone, Server, Layers } from "lucide-react";
import type { ComponentType } from "react";

export const skillIconMap: Record<string, IconType | ComponentType<{ size?: number }>> = {
  java: FaJava,
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html5: SiHtml5,
  css3: SiCss,
  sql: SiMysql,
  angular: SiAngular,
  bootstrap: SiBootstrap,
  responsive: Smartphone,
  nodejs: SiNodedotjs,
  express: SiExpress,
  spring: SiSpringboot,
  mysql: SiMysql,
  mongodb: SiMongodb,
  electron: SiElectron,
  git: SiGit,
  github: SiGithub,
  vscode: VscCode,
  intellij: SiIntellijidea,
  postman: SiPostman,
  api: Server,
  backend: Layers,
};
