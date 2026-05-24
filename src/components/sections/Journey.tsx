import { motion } from "framer-motion"

import Container from "../layout/Container"
import TimelineItem from "../ui/TimelineItem"

import { timeline } from "../../data/timeline"

import { fadeUp } from "../../utils/motion"

const Journey = () => {
  return (
    <section
      id="journey"
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
          top-10
          right-1/4

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
            🗺️ My Journey
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
            Learning and growing{" "}
            <span className="heading-gradient">
              every year.
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
            My path into software development has
            been driven by curiosity, consistency
            and a passion for creating meaningful
            digital products.
          </p>

          {/* Journey Highlights */}
            <div
              className="
                flex
                flex-wrap
                gap-3

                mt-8
              "
            >
              {[
                "React",
                "TypeScript",
                "Django",
                "Tailwind CSS",
                "Responsive UI",
                "Full-Stack Development",
              ].map((tech) => (
                <div
                  key={tech}
                  className="
                    px-4
                    py-2

                    rounded-full

                    border border-border
                    bg-card/60
                    backdrop-blur-sm

                    text-sm
                    font-medium

                    text-muted-foreground

                    hover:border-primary/40
                    hover:text-foreground
                    hover:bg-card

                    transition-all
                    duration-300
                  "
                >
                  {tech}
                </div>
              ))}
            </div>

        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl">

          {timeline.map((item) => (
            <TimelineItem
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </Container>

    </section>
  )
}

export default Journey
