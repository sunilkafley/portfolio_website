import { motion } from "framer-motion"
import {
  Search,
  MessageSquare,
  CheckCircle2,
  ArrowDown,
} from "lucide-react"

import Container from "../layout/Container"

import { fadeUp } from "../../utils/motion"

const About = () => {
  return (
    <section
      id="about"
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
            A thoughtful approach{" "}
            <span className="heading-gradient">
              to building software.
            </span>
          </h2>

          {/* Description */}
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I enjoy turning practical needs into clear interfaces and working
              functionality, while developing my understanding of maintainable
              code and reliable software.
            </p>
            <p>
              AI-assisted development is becoming part of how I work. I use it to
              explore approaches, investigate issues and refine implementations,
              while reviewing the changes and checking the resulting behaviour.
              I’m interested in developing workflows that improve both delivery
              and software quality.
            </p>
          </div>

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
                <Search className="w-6 h-6 mb-5 text-primary" />

                <h3 className="font-semibold text-lg mb-3">
                  Start with the Problem
                </h3>

                <p className="text-muted leading-relaxed">
                  Understanding who a feature is for, what they need and
                  which details will make it useful.
                </p>
              </div>

              <div className="card p-6">
                <MessageSquare className="w-6 h-6 mb-5 text-primary" />

                <h3 className="font-semibold text-lg mb-3">
                  Refine through Feedback
                </h3>

                <p className="text-muted leading-relaxed">
                  Staying open to other perspectives and using feedback
                  to make the next iteration better.
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
                src="/projects/project1-about.webp"
                srcSet="/projects/project1-about-480.webp 480w, /projects/project1-about-800.webp 800w, /projects/project1-about.webp 1200w"
                sizes="(min-width: 1280px) 584px, (min-width: 1024px) calc(50vw - 48px), calc(100vw - 32px)"
                alt="Project Preview"
                width={1200}
                height={1083}
                loading="lazy"
                decoding="async"
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

        <motion.a
          {...fadeUp}
          href="#journey"
          className="mt-14 flex flex-col items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:mt-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.08em]">
            Learn More About
          </span>
          <span className="font-semibold text-(--color-text)/80">
            My Journey &amp; Experience
          </span>
          <ArrowDown aria-hidden="true" size={18} />
        </motion.a>

      </Container>

    </section>
  )
}

export default About
