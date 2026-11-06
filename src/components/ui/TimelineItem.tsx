import { motion } from "framer-motion"
import { Link } from "react-router"
import { ArrowUpRight } from "lucide-react"

import type { TimelineItem as TimelineItemType } from "../../types/timeline"

import { fadeLeft } from "../../utils/motion"

type TimelineItemProps = {
  item: TimelineItemType
}

const TimelineItem = ({
  item,
}: TimelineItemProps) => {
  return (
    <motion.li
      {...fadeLeft}
      className="group relative pl-9 pb-8 last:pb-0 sm:pl-11 sm:pb-10"
    >

      {/* Line */}
      <div
        className="
          absolute
          left-[7px]
          top-2
          w-0.5
          h-full
          bg-(--color-border)
          group-last:hidden
        "
      />

      {/* Dot */}
      <div
        className="
          absolute
          left-0
          top-1
          w-4
          h-4
          rounded-full
          bg-primary
          border-2
          border-background
        "
      />

      {/* Content */}
      <div>

        <p className="mb-1.5 text-sm font-semibold text-primary">
          {item.year}
        </p>

        <h3 className="mb-2 text-xl font-bold leading-snug sm:text-2xl">
          {item.title}
        </h3>

        <p className="text-muted leading-relaxed">
          {item.description}
        </p>

        {item.link && (
          <Link
            to={item.link.href}
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            {item.link.label}
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        )}

      </div>

    </motion.li>
  )
}

export default TimelineItem
