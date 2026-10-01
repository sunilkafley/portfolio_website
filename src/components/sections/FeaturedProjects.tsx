import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router"

import Container from "../layout/Container"
import ProjectCard from "../ui/ProjectCard"

import { featuredProjects } from "../../data/projects"

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
        lg:pt-4

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

      <Container className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-6">

        {/* Section Intro */}
        <motion.div
          {...fadeUp}
          className="mb-8 max-w-3xl lg:col-start-1 lg:row-start-1 lg:mb-4"
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

              mb-4
              lg:mb-2
              lg:py-1.5
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
              lg:text-4xl

              mb-4
              lg:mb-2

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
              lg:text-base

              leading-relaxed

              max-w-3xl
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
            order-2
            lg:col-span-2
            lg:row-start-2

            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3

            gap-5
            lg:gap-6
          "
        >

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              compact
            />
          ))}

        </motion.div>

        <motion.div
          {...fadeUp}
          className="order-3 mt-8 flex justify-center lg:order-none lg:col-start-2 lg:row-start-1 lg:mb-4 lg:mt-0 lg:items-end lg:justify-end"
        >
          <Link
            to="/projects"
            className="button-outline inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </motion.div>

      </Container>

    </section>
  )
}

export default FeaturedProjects
