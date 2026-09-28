import { motion } from "framer-motion"

import { fadeUp } from "../../utils/motion"

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa"

import type { Project } from "../../types/project"

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({
  project,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="
        card
        overflow-hidden
        group
      "
    >

      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          srcSet={project.imageSrcSet}
          sizes="(min-width: 1280px) 384px, (min-width: 768px) calc(50vw - 36px), calc(100vw - 32px)"
          alt={project.title}
          width={800}
          height={480}
          loading="lazy"
          decoding="async"
          className="
            w-full
            h-60
            object-cover
            group-hover:scale-110
            transition-transform
            duration-700
          "
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
            pointer-events-none
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="
            text-muted
            leading-relaxed
            mb-6
          "
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-8">

          {project.tech.map((item) => (
            <span
              key={item}
              className="
                px-4
                py-2
                rounded-full
                bg-primary/10
                border border-primary/20
                text-sm
                text-primary
              "
            >
              {item}
            </span>
          ))}

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2
                button-outline
              "
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2
                button-primary
              "
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

        </div>

      </div>

    </motion.div>
  )
}

export default ProjectCard
