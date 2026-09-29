import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa"

import type {
  Project,
  ProjectStatus,
} from "../../types/project"

import { fadeUp } from "../../utils/motion"

type ProjectCardProps = {
  project: Project
}

const statusStyles: Record<
  ProjectStatus,
  { badge: string; dot: string; hollow?: boolean }
> = {
  Live: {
    badge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    dot: "bg-emerald-400",
  },
  Completed: {
    badge: "border-primary/30 bg-primary/10 text-primary",
    dot: "bg-primary",
  },
  "In Development": {
    badge: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    dot: "bg-amber-400",
  },
  Prototype: {
    badge: "border-(--color-border) bg-(--color-surface) text-muted",
    dot: "border border-current",
    hollow: true,
  },
  Planned: {
    badge: "border-(--color-border) bg-(--color-surface) text-muted",
    dot: "border border-current",
    hollow: true,
  },
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const statusStyle = project.status
    ? statusStyles[project.status]
    : null

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="
        card
        overflow-hidden
        group
        h-full
        flex
        flex-col
      "
    >
      <div
        className="
          relative
          overflow-hidden
          aspect-[5/3]
          bg-primary/5
        "
      >
        {project.image ? (
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
              h-full
              w-full
              object-cover
              group-hover:scale-105
              transition-transform
              duration-700
            "
          />
        ) : (
          <div
            className="
              h-full
              flex
              flex-col
              items-center
              justify-center
              gap-3
              text-muted
              bg-[linear-gradient(135deg,var(--color-surface),transparent)]
            "
          >
            <Code2 aria-hidden="true" size={34} className="text-primary/70" />
            <span className="text-sm font-medium">
              Screenshot coming soon
            </span>
          </div>
        )}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/45
            via-transparent
            to-transparent
            pointer-events-none
          "
        />

        {(project.status || project.detailsPending) && (
          <div
            className={`
              absolute
              top-3
              left-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-3
              py-1.5
              text-xs
              font-semibold
              backdrop-blur-md
              ${
                statusStyle?.badge ??
                "border-(--color-border) bg-(--color-surface)/90 text-muted"
              }
            `}
          >
            <span
              aria-hidden="true"
              className={`
                h-2
                w-2
                shrink-0
                rounded-full
                ${statusStyle?.dot ?? "border border-current"}
                ${statusStyle?.hollow ? "bg-transparent" : ""}
              `}
            />
            {project.status ?? "Details pending"}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {project.category && (
          <p
            className="
              mb-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.14em]
              text-primary
            "
          >
            {project.category}
          </p>
        )}

        <h3 className="mb-3 text-xl font-bold sm:text-2xl">
          {project.title}
        </h3>

        <p className="mb-5 leading-relaxed text-muted">
          {project.shortDescription}
        </p>

        {project.technologies.length > 0 ? (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/10
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-primary
                "
              >
                {technology}
              </span>
            ))}
          </div>
        ) : (
          <p className="mb-6 text-sm italic text-muted">
            Technology details pending
          </p>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="button-outline flex items-center gap-2"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="button-primary flex items-center gap-2"
            >
              <FaExternalLinkAlt aria-hidden="true" />
              Live Demo
            </a>
          )}

          {!project.githubUrl && !project.liveUrl && (
            <span className="text-xs font-medium text-muted">
              Verified links pending
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
