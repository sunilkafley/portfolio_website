import type { IconType } from "react-icons"

export interface Skill {
  name: string
  icon: IconType
}

export interface SkillCategory {
  title: string
  description: string
  evidence?: { label: string; href: string }
  skills: Skill[]
}
