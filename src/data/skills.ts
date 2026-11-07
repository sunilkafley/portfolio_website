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
  SiSqlite,
  SiVercel,
  SiFigma,
} from "react-icons/si"

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive interfaces and interactive maps.",
    evidence: {
      label: "See Fruit Finder Christchurch",
      href: "https://sunilkafley.github.io/BCDE213-Interactive-Media-Development/",
    },
    skills: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Backend & Databases",
    description: "Working with authentication, data models and application logic.",
    evidence: {
      label: "Explore the vehicle rental source",
      href: "https://github.com/sunilkafley/vehiclerentalmanagement",
    },
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "SQLite", icon: SiSqlite },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },

  {
    title: "Version Control",
    description: "Tracking changes and organising project code.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
    ],
  },
  {
    title: "Design & Deployment",
    description: "Tools for exploring interface designs and publishing web projects.",
    skills: [
      { name: "Vercel", icon: SiVercel },
      { name: "Figma", icon: SiFigma },
    ],
  },
]

export const developmentPractices = [
  {
    title: "Process",
    description: "Understanding needs and organising work in manageable steps.",
    practices: ["Design thinking", "Agile development", "Scrum", "Kanban"],
  },
  {
    title: "Code Quality",
    description: "Keeping code readable, focused and easier to maintain.",
    practices: ["SOLID principles", "DRY", "Separation of concerns"],
  },
  {
    title: "Architecture",
    description: "Separating responsibilities to make applications easier to extend.",
    practices: ["MVC", "Layered architecture"],
  },
  {
    title: "Testing & Delivery",
    description: "Checking behaviour and delivering changes with confidence.",
    practices: ["Unit testing", "Git", "CI/CD"],
  },
]
