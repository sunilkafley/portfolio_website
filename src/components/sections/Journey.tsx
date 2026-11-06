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
        relative
        overflow-hidden
        pt-3
        sm:pt-4
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
          className="mb-8 max-w-2xl sm:mb-10"
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
            From supporting systems{" "}
            <span className="heading-gradient">
              to building software.
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
            My path into development builds on a background in IT support and systems administration. Each stage has shaped how I investigate problems, understand users and approach new challenges.
          </p>

        </motion.div>

        {/* Timeline */}
        <ol aria-label="Career and education journey" className="max-w-3xl">

          {timeline.map((item) => (
            <TimelineItem
              key={item.id}
              item={item}
            />
          ))}

        </ol>

      </Container>

    </section>
  )
}

export default Journey
