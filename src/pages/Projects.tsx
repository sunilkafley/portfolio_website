import { useState } from "react"
import { motion } from "framer-motion"

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import Container from "../components/layout/Container"

import GridBackground from "../components/ui/GridBackground"
import NoiseOverlay from "../components/ui/NoiseOverlay"
import ProjectCard from "../components/ui/ProjectCard"
import SEO from "../components/ui/SEO"

import { projects } from "../data/projects"
import type { ProjectCategory } from "../types/project"
import {
  fadeUp,
  staggerContainer,
} from "../utils/motion"

type ProjectFilter = "All" | ProjectCategory

const filters: ProjectFilter[] = [
  "All",
  "Web",
  "Mobile",
  "Full Stack",
  "Prototype / Concept",
]

const Projects = () => {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All")

  const visibleProjects = activeFilter === "All"
    ? projects
    : projects.filter(
        (project) => project.category === activeFilter
      )

  return (
    <>
      <SEO
        title="Projects | Sunil Kafley"
        description="Explore software projects, experiments and products by Sunil Kafley."
        path="/projects"
      />

      <GridBackground />
      <NoiseOverlay />
      <Header />

      <main>
        <section className="relative overflow-hidden pt-32 pb-12 sm:pt-36 sm:pb-14">
          <div
            className="
              pointer-events-none
              absolute
              top-8
              right-0
              h-[420px]
              w-[420px]
              rounded-full
              glow-primary
              blur-[140px]
            "
          />

          <Container>
            <motion.div
              {...fadeUp}
              className="max-w-3xl"
            >
              <p
                className="
                  mb-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-primary
                "
              >
                Portfolio archive
              </p>

              <h1
                className="
                  mb-5
                  text-4xl
                  font-bold
                  leading-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Projects, experiments{" "}
                <span className="heading-gradient">
                  &amp; products
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                A collection of software I&apos;ve built, am currently
                developing, and am exploring.
              </p>
            </motion.div>
          </Container>
        </section>

        <section className="pb-20 sm:pb-24 lg:pb-28">
          <Container>
            <div
              aria-label="Filter projects"
              className="mb-10 flex flex-wrap gap-2 sm:gap-3"
              role="group"
            >
              {filters.map((filter) => {
                const isActive = activeFilter === filter

                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(filter)}
                    className={`
                      rounded-full
                      border
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      transition-all
                      ${
                        isActive
                          ? "border-primary/40 bg-primary/15 text-primary"
                          : "border-(--color-border) bg-(--color-surface) text-muted hover:border-primary/30 hover:text-primary"
                      }
                    `}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>

            <p className="sr-only" aria-live="polite">
              Showing {visibleProjects.length} projects
            </p>

            {visibleProjects.length > 0 ? (
              <motion.div
                key={activeFilter}
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8"
              >
                {visibleProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                {...fadeUp}
                className="card px-6 py-14 text-center"
              >
                <h2 className="mb-2 text-xl font-bold">
                  No projects in this category yet
                </h2>
                <p className="text-muted">
                  New work will appear here as verified project details are added.
                </p>
              </motion.div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Projects
