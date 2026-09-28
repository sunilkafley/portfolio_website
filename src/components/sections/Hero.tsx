import { motion, useReducedMotion } from "framer-motion"

import {
  FaReact,
  FaPython,
} from "react-icons/fa"

import {
  SiTypescript,
  SiJavascript,
} from "react-icons/si"

import {
  HiArrowRight,
  HiEnvelope,
} from "react-icons/hi2"

import profileImage from "../../assets/images/profile.webp"

import SocialLinks from "../ui/SocialLinks"

import {
  staggerContainer,
  itemFadeUp,
} from "../../utils/motion"

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden

        min-h-screen

        flex
        items-start

        pt-36
        sm:pt-40
        lg:pt-32
        xl:pt-36

        pb-16
        sm:pb-20
      "
    >
      {/* Background Grid */}
      <div
        className="
          absolute
          inset-0
          -z-10

          opacity-[0.03]

          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

          [background-size:80px_80px]
        "
      />

      <div className="container-custom">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            gap-14
            lg:gap-16
            xl:gap-24

            items-center
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="
              order-2
              lg:order-1

              text-center
              lg:text-left

              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            {/* Badge */}
            <motion.div
              variants={itemFadeUp}
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
              👋 Software Development Student @ Ara Institute of Canterbury
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemFadeUp}
              className="
                font-bold
                leading-tight

                text-4xl
                sm:text-5xl
                md:text-6xl
                xl:text-7xl

                mb-6
              "
            >
              Sunil{" "}
              <span className="heading-gradient">
                Kafley
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={itemFadeUp}
              className="
                text-lg
                sm:text-xl
                md:text-2xl

                text-muted

                mb-6
              "
            >
              Building modern digital experiences with
              React & Django
            </motion.h2>

            {/* Availability */}
            <motion.div
              variants={itemFadeUp}
              className="
                inline-flex
                items-center
                gap-2

                px-4
                py-2

                rounded-full

                availability-badge
                font-semibold

                mb-8
              "
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 motion-safe:animate-pulse"
              />
              <span>
                Available for internships & graduate opportunities
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemFadeUp}
              className="
                text-base
                sm:text-lg

                leading-relaxed

                text-muted

                max-w-xl
                mx-auto
                lg:mx-0

                mb-10
              "
            >
              I build responsive and modern web
              applications using React, TypeScript
              and Django. Passionate about creating
              clean user experiences, solving
              real-world problems and continuously
              growing as a full stack developer in
              New Zealand.

              <br />
              <br />

              Focused on building real-world
              projects and growing into a
              professional software engineer.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemFadeUp}
              className="
                flex
                flex-col
                sm:flex-row

                items-center
                lg:items-start

                justify-center
                lg:justify-start

                gap-4

                mb-10
              "
            >
              <a
                href="#projects"
                className="
                  button-primary

                  flex
                  items-center
                  justify-center
                  gap-2

                  w-full
                  sm:w-auto

                  transition-all
                  hover:-translate-y-1
                "
              >
                View My Work

                <HiArrowRight size={20} />
              </a>

              <a
                href="#contact"
                className="
                  button-outline

                  flex
                  items-center
                  justify-center
                  gap-2

                  w-full
                  sm:w-auto

                  transition-all
                  hover:-translate-y-1
                "
              >
                Contact Me

                <HiEnvelope size={20} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemFadeUp}
              className="
                flex
                flex-wrap

                justify-center
                lg:justify-start

                gap-8

                mt-10
                pt-8

                border-t border-white/10
              "
            >
              <div>
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-primary
                  "
                >
                  5+
                </h3>

                <p
                  className="
                    text-sm
                    text-muted
                  "
                >
                  Projects Built
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-primary
                  "
                >
                  React
                </h3>

                <p
                  className="
                    text-sm
                    text-muted
                  "
                >
                  Frontend Focus
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-primary
                  "
                >
                  Django
                </h3>

                <p
                  className="
                    text-sm
                    text-muted
                  "
                >
                  Backend Development
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemFadeUp}
              className="
                flex
                justify-center
                lg:justify-start

                mt-8
              "
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="
              order-1
              lg:order-2

              relative

              flex
              items-center
              justify-center
            "
          >
            {/* Glow */}
            <div
              className="
                absolute

                rounded-full
                bg-primary/20
                blur-3xl

                w-[260px]
                h-[260px]

                sm:w-[340px]
                sm:h-[340px]

                md:w-[420px]
                md:h-[420px]

                lg:w-[500px]
                lg:h-[500px]
              "
            />

            {/* Profile Image */}
            <motion.img
              src={profileImage}
              alt="Portrait of Sunil Kafley"
              width={460}
              height={460}
              animate={
                shouldReduceMotion
                  ? {}
                  : { y: [0, -10, 0] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10

                w-[220px]
                sm:w-[280px]
                md:w-[340px]
                lg:w-[400px]
                xl:w-[460px]

                h-auto
                object-contain

                drop-shadow-[0_20px_80px_rgba(0,0,0,0.35)]
              "
            />

            {/* Floating Icons */}
            <div
              className="
                absolute

                bottom-4
                sm:bottom-0

                left-1/2
                -translate-x-1/2

                sm:left-auto
                sm:right-2
                sm:translate-x-0

                lg:right-0

                flex
                flex-row
                sm:flex-col

                gap-3
                sm:gap-4

                z-20
              "
            >
              <FloatingIcon
                icon={<FaReact />}
                delay={0}
              />

              <FloatingIcon
                icon={<SiTypescript />}
                delay={1}
              />

              <FloatingIcon
                icon={<SiJavascript />}
                delay={2}
              />

              <FloatingIcon
                icon={<FaPython />}
                delay={3}
              />
            </div>

            {/* Learning Badge */}
            <div
              className="
                absolute

                -bottom-4
                sm:-bottom-6
                left-1/2
                -translate-x-1/2

                px-4
                py-2

                rounded-xl

                border border-white/10
                bg-(--color-surface)/80

                backdrop-blur-md

                text-sm

                whitespace-nowrap

                z-20
              "
            >
              Currently Learning AI & Cloud
              Technologies
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="
          absolute

          bottom-0 lg:bottom-6
          left-1/2
          -translate-x-1/2

          hidden
          lg:flex

          items-center
          gap-4

          px-5
          py-3

          rounded-2xl

          border border-white/10
          bg-(--color-surface)/70

          backdrop-blur-xl

          shadow-lg
          hover:shadow-2xl
          hover:shadow-primary/10

          hover:-translate-y-1
          hover:border-primary/30

          transition-all
          duration-300

          z-30
        "
      >
        {/* Decorative Line */}
        <div
          className="
            w-10
            h-[1px]

            bg-primary/50
          "
        />

        {/* Text */}
        <div className="text-sm">
          <p className="text-muted">
            Learn more about my
          </p>

          <p className="font-medium">
            Journey & Experience
          </p>
        </div>

        {/* Arrow */}
        <div
          className="
            flex
            items-center
            justify-center

            w-9
            h-9

            rounded-full

            bg-primary/10

            text-primary

            text-lg
          "
        >
          ↓
        </div>
      </a>
    </section>
  )
}

type FloatingIconProps = {
  icon: React.ReactNode
  delay: number
}

const FloatingIcon = ({
  icon,
  delay,
}: FloatingIconProps) => {
  const shouldReduceMotion =
    useReducedMotion()

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [0, 12, 0],
            }
      }
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.08,
        rotate: 6,
      }}
      className="
        flex
        items-center
        justify-center

        rounded-2xl

        border border-(--color-border)
        bg-(--color-surface)

        backdrop-blur-md

        shadow-lg

        text-primary

        w-12
        h-12

        sm:w-14
        sm:h-14

        md:w-16
        md:h-16

        text-xl
        sm:text-2xl

        transition-all
      "
    >
      {icon}
    </motion.div>
  )
}

export default Hero
