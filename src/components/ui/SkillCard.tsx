import type { Skill } from "../../types/skill"

type SkillCardProps = {
  skill: Skill
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const Icon = skill.icon

  return (
    <li className="card flex min-w-0 items-center gap-3 px-3 py-3 sm:px-4 sm:py-4">
      <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-primary" />
      <span className="min-w-0 text-sm font-semibold sm:text-base">{skill.name}</span>
    </li>
  )
}

export default SkillCard
