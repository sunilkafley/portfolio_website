import { motion } from "framer-motion"

import type { Skill } from "../../types/skill"

type SkillCardProps = {
  skill: Skill
}

const SkillCard = ({
  skill,
}: SkillCardProps) => {
  const Icon = skill.icon

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
        rotateX: 4,
      }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 18,
     }}
     
      className="
        card
        p-6
        flex
        flex-col
        items-center
        justify-center
        text-center
        gap-4
        hover:border-primary/40
        transition-all
        duration-300
      "
    >

      {/* Icon */}
      <div className="text-5xl text-primary">
        <Icon />
      </div>

      {/* Name */}
      <h3 className="font-semibold text-lg">
        {skill.name}
      </h3>

    </motion.div>
  )
}

export default SkillCard