import { motion } from "framer-motion"
import {
  Code2,
  GraduationCap,
  CheckCircle2,
} from "lucide-react"

import Container from "../layout/Container"

import { fadeUp } from "../../utils/motion"

const About = () => {
  return (
    <section
      id="about"
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
          left-1/2
          -translate-x-1/2

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
            ✨ About Me
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
            Turning passion{" "}
            <span className="heading-gradient">
              into purpose
            </span>{" "}
            through code.
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
            I'm a self-motivated developer focused on
            building responsive and modern digital
            experiences using React, TypeScript,
            Django and modern frontend technologies.
          </p>

        </motion.div>

        {/* Content */}
        <div
          className="
            grid
            lg:grid-cols-2

            gap-10
            lg:gap-14

            items-start
          "
        >

          {/* Left */}
          <motion.div
            {...fadeUp}
            className="space-y-6"
          >

            <div
              className="
                grid
                sm:grid-cols-2

                gap-4
              "
            >

              <div className="card p-6">
                <Code2 className="w-6 h-6 mb-5 text-primary" />

                <h3 className="font-semibold text-lg mb-3">
                  Full Stack Development
                </h3>

                <p className="text-muted leading-relaxed">
                  Building scalable frontend and backend
                  applications using modern technologies.
                </p>
              </div>

              <div className="card p-6">
                <GraduationCap className="w-6 h-6 mb-5 text-primary" />

                <h3 className="font-semibold text-lg mb-3">
                  Continuous Learning
                </h3>

                <p className="text-muted leading-relaxed">
                  Exploring AI, cloud technologies and
                  advanced software engineering concepts.
                </p>
              </div>

            </div>

            <a
              href="#contact"
              className="button-primary inline-flex items-center gap-2"
            >
              Let&apos;s Connect
            </a>

          </motion.div>

          {/* Right */}
          <motion.div
            {...fadeUp}
            className="relative"
          >

            <div className="card p-4 lg:p-5">

              <img
                src="/projects/project1.png"
                alt="Project Preview"
                className="
                  rounded-2xl
                  w-full
                  object-cover
                "
              />

            </div>

            {/* Floating Card */}
            <div
              className="
                absolute
                -bottom-5
                left-6

                card

                px-5
                py-4

                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  w-10
                  h-10

                  rounded-full

                  bg-primary/20

                  flex
                  items-center
                  justify-center
                "
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>

              <div>
                <p className="font-semibold">
                  Real-World Projects
                </p>

                <p className="text-sm text-muted">
                  Focused on practical experience
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  )
}

export default About