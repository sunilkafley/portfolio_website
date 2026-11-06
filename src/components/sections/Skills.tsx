import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import Container from "../layout/Container"
import SkillCard from "../ui/SkillCard"
import { skillCategories } from "../../data/skills"
import { fadeUp } from "../../utils/motion"

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden pt-3 pb-16 sm:pt-4 sm:pb-20 lg:pt-4 lg:pb-24"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full glow-primary blur-[140px]" />

      <Container>
        <motion.div {...fadeUp} className="mb-8 max-w-2xl sm:mb-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm">
            ⚡ Skills &amp; Technologies
          </div>
          <h2 className="mb-6 max-w-xl text-4xl font-bold leading-[0.95] sm:text-5xl lg:text-6xl">
            Tools I use to build{" "}
            <span className="heading-gradient">modern applications.</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            The technologies behind my academic and personal projects, grouped by
            how I use them. Explore the examples to see them in practice.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-10">
          {skillCategories.map((category) => (
            <motion.div
              {...fadeUp}
              key={category.title}
              className="grid gap-4 border-b border-(--color-border) pb-8 last:border-b-0 last:pb-0 sm:gap-5 sm:pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10"
            >
              <div>
                <h3 className="mb-2 text-xl font-bold leading-snug sm:text-2xl">
                  {category.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  {category.description}
                </p>
                {category.evidence && (
                  <a
                    href={category.evidence.href}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {category.evidence.label}
                    <ArrowUpRight aria-hidden="true" size={16} className="shrink-0" />
                  </a>
                )}
              </div>
              <ul aria-label={`${category.title} skills`} className="grid grid-cols-2 content-start gap-3 xl:grid-cols-3">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
