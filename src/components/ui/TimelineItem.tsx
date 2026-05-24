import { motion } from "framer-motion"

import type { TimelineItem as TimelineItemType } from "../../types/timeline"

import { fadeLeft } from "../../utils/motion"

type TimelineItemProps = {
  item: TimelineItemType
}

const TimelineItem = ({
  item,
}: TimelineItemProps) => {
  return (
    <motion.div
      {...fadeLeft}
      className="relative pl-10 md:pl-12 pb-12"
    >

      {/* Line */}
      <div
        className="
          absolute
          left-2.5
          top-0
          w-0.5
          h-full
          bg-white/10
        "
      />

      {/* Dot */}
      <div
        className="
          absolute
          left-0
          top-1
          w-6
          h-6
          rounded-full
          bg-primary
          border-4
          border-background
        "
      />

      {/* Content */}
      <div>

        <p className="text-primary font-semibold mb-2">
          {item.year}
        </p>

        <h3 className="text-2xl font-bold mb-3">
          {item.title}
        </h3>

        <p className="text-muted leading-relaxed">
          {item.description}
        </p>

      </div>

    </motion.div>
  )
}

export default TimelineItem
