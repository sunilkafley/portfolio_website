import { motion } from "framer-motion"

import Container from "../layout/Container"
import ProjectCard from "../ui/ProjectCard"

import { projects } from "../../data/projects"

import {
  fadeUp,
  staggerContainer,
} from "../../utils/motion"

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden

        pt-6
        sm:pt-8
        lg:pt-6

        pb-16
        sm:pb-20
        lg:pb-24
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-20
          right-0

          w-[450px]
          h-[450px]

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
          className="max-w-2xl mb-10 lg:mb-8"
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
              lg:mb-4
            "
          >
            🚀 Featured Work
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
              lg:mb-4

              max-w-xl
            "
          >
            Selected{" "}
            <span className="heading-gradient">
              Projects.
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
            Here are some of my recent projects
            showcasing frontend development,
            backend systems and interactive user
            experiences.
          </p>

        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}

          className="
            grid

            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3

            gap-6
            lg:gap-8
          "
        >

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </motion.div>

      </Container>

    </section>
  )
}

export default FeaturedProjects
