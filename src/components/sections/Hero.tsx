import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router"

import { FaReact } from "react-icons/fa"
import { SiJavascript, SiTypescript } from "react-icons/si"
import {
  HiArrowDown,
  HiArrowRight,
  HiEnvelope,
  HiMapPin,
} from "react-icons/hi2"

import profileImage from "../../assets/images/portrait-photo-960.webp"
import profileImageSmall from "../../assets/images/portrait-photo-320.webp"
import profileImageMedium from "../../assets/images/portrait-photo-640.webp"

import SocialLinks from "../ui/SocialLinks"

import {
  itemFadeUp,
  staggerContainer,
} from "../../utils/motion"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-start overflow-hidden pt-24 pb-8 sm:pb-10 lg:pb-8"
    >
      <div className="hero-grid absolute inset-0 -z-10" />

      <div className="container-custom">
        <div
          className="
            grid grid-cols-1 items-center gap-x-12 gap-y-8
            lg:grid-cols-2 lg:grid-rows-[1fr_auto_auto] lg:gap-y-3
            xl:gap-x-16
          "
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="
              order-2 mx-auto max-w-xl text-center
              lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2
              lg:mx-0 lg:text-left
            "
          >
            <motion.p
              variants={itemFadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary sm:text-base lg:mb-3"
            >
              Kia Ora, I&apos;m
            </motion.p>

            <motion.h1
              variants={itemFadeUp}
              className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:mb-3 xl:text-7xl"
            >
              Sunil <span className="heading-gradient">Kafley</span>
            </motion.h1>

            <motion.h2
              variants={itemFadeUp}
              className="mb-5 text-lg font-semibold text-(--color-text) sm:text-xl md:text-2xl lg:mb-3"
            >
              <span className="block">Software Engineering Student</span>
              <span className="block">&amp; Full-Stack Developer</span>
            </motion.h2>

            <motion.p
              variants={itemFadeUp}
              className="mx-auto mb-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0 lg:mb-3"
            >
              Building web and mobile applications with React, TypeScript,
              Python and modern software engineering practices.
            </motion.p>

            <motion.div
              variants={itemFadeUp}
              className="mb-5 inline-flex items-center gap-2 text-sm text-muted sm:text-base lg:mb-3"
            >
              <HiMapPin aria-hidden="true" className="shrink-0 text-primary" />
              <span>Christchurch, New Zealand</span>
            </motion.div>

            <motion.div
              variants={itemFadeUp}
              className="mb-4 flex flex-row flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Link
                to="/projects"
                className="button-primary flex w-auto items-center justify-center gap-2 px-4 py-3 whitespace-nowrap transition-all hover:-translate-y-1"
              >
                View My Work
                <HiArrowRight aria-hidden="true" size={20} />
              </Link>

              <a
                href="#contact"
                className="button-outline flex items-center justify-center gap-2 px-4 py-3 whitespace-nowrap transition-all hover:-translate-y-1"
              >
                <HiEnvelope aria-hidden="true" size={18} />
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={itemFadeUp}
              className="flex justify-center lg:justify-start"
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="
              order-1 flex flex-col items-center justify-center
              lg:order-none lg:col-start-2 lg:row-start-1
            "
          >
            <div className="relative flex w-full items-center justify-center">
              <img
                src={profileImage}
                srcSet={`${profileImageSmall} 320w, ${profileImageMedium} 640w, ${profileImage} 960w`}
                sizes="(min-width: 1280px) 600px, (min-width: 1024px) 520px, (min-width: 640px) 600px, calc(100vw - 32px)"
                alt="Portrait of Sunil Kafley"
                width={960}
                height={640}
                fetchPriority="high"
                className="
                  hero-portrait-blend relative z-10 h-auto w-full max-w-[600px] object-contain
                  lg:max-w-[520px] xl:max-w-[600px]
                "
              />

              <div
                className="
                  absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 flex-row gap-2.5
                  sm:bottom-0 sm:left-auto sm:right-0 sm:translate-x-0 sm:flex-col sm:gap-3
                "
              >
                <FloatingIcon
                  icon={<FaReact />}
                  delay={0}
                  colorClass="text-[#61DAFB]"
                />
                <FloatingIcon
                  icon={<SiTypescript className="rounded-[2px] bg-white" />}
                  delay={1}
                  colorClass="text-[#3178C6]"
                />
                <FloatingIcon
                  icon={<SiJavascript className="rounded-[2px] bg-[#111827]" />}
                  delay={2}
                  colorClass="text-[#F7DF1E]"
                />
                <FloatingIcon
                  icon={<OfficialPythonIcon />}
                  delay={3}
                  colorClass="text-[#3776AB]"
                />
              </div>
            </div>

            <motion.div
              variants={itemFadeUp}
              className="
                relative z-20 mt-3 inline-flex items-center gap-3 rounded-xl
                border border-(--color-border) bg-(--color-surface)/80
                px-4 py-2.5 text-left backdrop-blur-md
              "
            >
              <span aria-hidden="true" className="h-8 w-1 rounded-full bg-primary" />
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Currently Learning
                </span>
                <span className="block text-sm font-semibold">
                  AI &amp; Cloud Technologies
                </span>
              </span>
            </motion.div>
          </motion.div>

          <motion.a
            variants={itemFadeUp}
            initial="hidden"
            animate="show"
            href="#journey"
            className="
              order-3 inline-flex flex-col items-center gap-1 justify-self-center
              text-sm font-medium text-muted transition-colors hover:text-primary
              lg:order-none lg:col-span-2 lg:col-start-1 lg:row-start-3
            "
          >
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">
              Learn More About
            </span>
            <span>My Journey &amp; Experience</span>
            <HiArrowDown aria-hidden="true" size={18} />
          </motion.a>

          <motion.div
            variants={itemFadeUp}
            initial="hidden"
            animate="show"
            className="
              order-4 flex w-full min-w-0 justify-center self-start
              lg:order-none lg:col-start-2 lg:row-start-2 lg:self-center
            "
          >
            <div
              className="
                availability-badge relative inline-flex w-full max-w-md items-center justify-center rounded-xl
                px-3 py-2.5 text-center sm:w-auto sm:px-4
              "
            >
              <span
                aria-hidden="true"
                className="absolute left-3 h-2 w-2 shrink-0 rounded-full bg-emerald-400 motion-safe:animate-pulse"
              />
              <span className="min-w-0 sm:pl-2">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em]">
                  Open to
                </span>
                <span className="block whitespace-nowrap text-[11px] leading-snug sm:text-sm">
                  <strong className="font-bold">
                    Internship, Graduate &amp; Junior Developer
                  </strong>{" "}
                  Opportunities
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
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
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.08, rotate: 6 }}
      aria-hidden="true"
      className={`
        flex h-12 w-12 items-center justify-center rounded-2xl
        border border-(--color-border) bg-(--color-surface)
        text-xl shadow-lg backdrop-blur-md transition-all
        sm:h-14 sm:w-14 sm:text-2xl md:h-16 md:w-16
        ${colorClass}
      `}
    >
      {icon}
    </motion.div>
  )
}

export default Hero
