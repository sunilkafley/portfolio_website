import { motion } from "framer-motion"

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md"

import Container from "../layout/Container"

import { fadeUp } from "../../utils/motion"

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-spacing"
    >

      <Container>

        <motion.div
          {...fadeUp}
          className="
            card
            p-8
            sm:p-12
            lg:p-16
            text-center
            relative
            overflow-hidden
          "
        >

          {/* Background Glow */}
          <div
            className="
              absolute
              inset-0
              bg-primary/10
              blur-3xl
            "
          />

          <div className="relative z-10">

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
              📬 Contact Me
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
              "
            >
              Let&apos;s build something{" "}
              <span className="heading-gradient">
                amazing together.
              </span>
            </h2>

            <p
              className="
                text-muted
                text-lg
                max-w-2xl
                mx-auto
                leading-relaxed
                mb-12
              "
            >
              I&apos;m currently open to internship,
              junior developer and collaboration
              opportunities. Please feel free to reach out.
            </p>

            {/* CTA Buttons */}
            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-4
                mb-12
              "
            >

              <a
                href="mailto:beingmesunil@gmail.com"
                className="
                  button-primary
                  flex items-center gap-2
                "
              >
                <MdEmail size={20} />
                Send Email
              </a>

              <a
                href="https://linkedin.com/in/sunilkafley"
                target="_blank"
                rel="noreferrer"
                className="
                  button-outline
                  flex items-center gap-2
                "
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

            </div>

            {/* Info */}
            <div
              className="
                flex
                flex-col
                md:flex-row
                items-center
                justify-center
                gap-8
                text-muted
              "
            >

              <div className="flex items-center gap-3">
                <MdLocationOn size={22} />
                Christchurch, New Zealand
              </div>

              <div className="flex items-center gap-3">
                <FaGithub size={20} />
                <a
                  href="https://github.com/sunilkafley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  github.com/sunilkafley
                </a>
              </div>

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  )
}

export default Contact
