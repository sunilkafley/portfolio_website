import type { SkillCategory } from "../types/skill"

import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiVercel,
  SiFigma,
} from "react-icons/si"

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },

  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Figma", icon: SiFigma },
    ],
  },
]