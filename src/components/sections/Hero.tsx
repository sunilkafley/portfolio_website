import { motion, useReducedMotion } from "framer-motion"

import { FaReact } from "react-icons/fa"

import {
  SiTypescript,
  SiJavascript,
} from "react-icons/si"

import {
  HiArrowDownTray,
  HiArrowRight,
  HiEnvelope,
  HiMapPin,
} from "react-icons/hi2"

import profileImage from "../../assets/images/profile.webp"
import profileImageSmall from "../../assets/images/profile-320.webp"
import profileImageMedium from "../../assets/images/profile-640.webp"

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
          hero-grid

          absolute
          inset-0
          -z-10
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
              order-1

              text-center
              lg:text-left

              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            {/* Greeting */}
            <motion.p
              variants={itemFadeUp}
              className="
                text-sm
                sm:text-base
                font-semibold
                tracking-[0.16em]
                uppercase
                text-primary

                mb-4
              "
            >
              Kia Ora, I&apos;m
            </motion.p>

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

                mb-4
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

                font-semibold
                text-(--color-text)

                mb-5
              "
            >
              Software Engineering Student &amp; Full-Stack Developer
            </motion.h2>

            {/* Value proposition */}
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
                mb-5
              "
            >
              Building web and mobile applications with React, TypeScript,
              Python and modern software engineering practices.
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemFadeUp}
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                sm:text-base
                text-muted
                mb-5
              "
            >
              <HiMapPin aria-hidden="true" className="shrink-0 text-primary" />
              <span>Christchurch, New Zealand</span>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemFadeUp}
              className="
                flex
                justify-center
                lg:justify-start
                mb-8
              "
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  availability-badge
                  text-sm
                  font-semibold
                "
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 motion-safe:animate-pulse"
                />
                <span>
                  Open to Internship, Graduate &amp; Junior Developer Opportunities
                </span>
              </div>
            </motion.div>

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

                mb-5
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
                href="/Sunil_Kafley_CV.pdf"
                download="Sunil_Kafley_CV.pdf"
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
                Download CV

                <HiArrowDownTray aria-hidden="true" size={20} />
              </a>
            </motion.div>

            {/* Contact link */}
            <motion.a
              variants={itemFadeUp}
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-muted
                hover:text-primary
                transition-colors
              "
            >
              <HiEnvelope aria-hidden="true" size={18} />
              Contact me
            </motion.a>

            {/* Social Links */}
            <motion.div
              variants={itemFadeUp}
              className="
                flex
                justify-center
                lg:justify-start

                mt-6
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
              portrait-stage

              order-2

              relative

              flex
              items-center
              justify-center
            "
          >
            {/* Profile Image */}
            <motion.img
              src={profileImage}
              srcSet={`${profileImageSmall} 320w, ${profileImageMedium} 640w, ${profileImage} 920w`}
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 500px, (min-width: 768px) 420px, (min-width: 640px) 340px, 260px"
              alt="Portrait of Sunil Kafley"
              width={920}
              height={725}
              fetchPriority="high"
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

                w-[260px]
                sm:w-[340px]
                md:w-[420px]
                lg:w-[500px]
                xl:w-[560px]

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
                colorClass="text-[#61DAFB]"
              />

              <FloatingIcon
                icon={(
                  <SiTypescript className="rounded-[2px] bg-white" />
                )}
                delay={1}
                colorClass="text-[#3178C6]"
              />

              <FloatingIcon
                icon={(
                  <SiJavascript className="rounded-[2px] bg-[#111827]" />
                )}
                delay={2}
                colorClass="text-[#F7DF1E]"
              />

              <FloatingIcon
                icon={<OfficialPythonIcon />}
                delay={3}
                colorClass="text-[#3776AB]"
              />
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
  colorClass: string
}

const OfficialPythonIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 448 512"
    className="h-[1em] w-[1em]"
  >
    <defs>
      <linearGradient
        id="python-brand-gradient"
        x1="0"
        y1="0"
        x2="0"
        y2="1"
      >
        <stop offset="0%" stopColor="#3776AB" />
        <stop offset="49%" stopColor="#3776AB" />
        <stop offset="51%" stopColor="#FFD43B" />
        <stop offset="100%" stopColor="#FFD43B" />
      </linearGradient>
    </defs>
    <path
      fill="url(#python-brand-gradient)"
      d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
    />
  </svg>
)

const FloatingIcon = ({
  icon,
  delay,
  colorClass,
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
      aria-hidden="true"
      className={`
        flex
        items-center
        justify-center

        rounded-2xl

        border border-(--color-border)
        bg-(--color-surface)

        backdrop-blur-md

        shadow-lg

        w-12
        h-12

        sm:w-14
        sm:h-14

        md:w-16
        md:h-16

        text-xl
        sm:text-2xl

        transition-all
        ${colorClass}
      `}
    >
      {icon}
    </motion.div>
  )
}

export default Hero
