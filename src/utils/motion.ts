import type { Variants } from "framer-motion"

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.6,
  },
}

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: 40,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.6,
  },
}

export const fadeRight = {
  initial: {
    opacity: 0,
    x: -40,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.6,
  },
}

export const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

/**
 * Use with staggerContainer — shares the hidden/show keys
 * so parent orchestration triggers each child in sequence.
 */
export const itemFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}
