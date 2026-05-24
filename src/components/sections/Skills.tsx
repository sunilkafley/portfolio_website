import { motion } from "framer-motion"

import Container from "../layout/Container"
import SkillCard from "../ui/SkillCard"

import { skillCategories } from "../../data/skills"

import {
  fadeUp,
} from "../../utils/motion"

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        section-spacing
        relative
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[500px]
          h-[500px]

          glow-primary

          blur-[140px]
          rounded-full

          pointer-events-none
        "
      />

      <Container>

        {/* Section Intro */}
        <motion.div
          {...fadeUp}
          className="max-w-2xl mb-14 lg:mb-16"
        >

          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2

              px-4
              py-2

              rounded-full

              border border-primary/20
              bg-primary/10

              text-sm

              mb-6
            "
          >
            ⚡ Skills & Technologies
          </div>

          {/* Heading */}
          <h2
            className="
              font-bold
              leading-[0.95]

              text-4xl
              sm:text-5xl
              lg:text-6xl

              mb-6

              max-w-xl
            "
          >
            Tools I use to build{" "}
            <span className="heading-gradient">
              modern applications.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              text-muted

              text-base
              sm:text-lg

              leading-relaxed

              max-w-2xl
            "
          >
            I enjoy working across frontend and backend
            technologies focused on performance,
            scalability and user experience.
          </p>

        </motion.div>

        {/* Categories */}
        <div className="space-y-12 lg:space-y-14">

          {skillCategories.map((category) => (
            <motion.div
              {...fadeUp}
              key={category.title}
            >

              {/* Category Title */}
              <h3
                className="
                  text-xl
                  sm:text-2xl

                  font-bold

                  mb-5
                "
              >
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div
                className="
                  grid

                  grid-cols-2
                  md:grid-cols-3
                  xl:grid-cols-4

                  gap-5
                  lg:gap-6
                "
              >

                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                  />
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </Container>

    </section>
  )
}

export default Skills