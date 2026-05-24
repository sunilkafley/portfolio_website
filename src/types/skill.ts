import type { IconType } from "react-icons"

export interface Skill {
  name: string
  icon: IconType
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}