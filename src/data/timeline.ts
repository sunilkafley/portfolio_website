import type { TimelineItem } from "../types/timeline"

export const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "2013–2019",
    title: "A Foundation in IT",
    description:
      "Supported Windows systems, managed user accounts and helped people resolve technical issues as an IT Administrator at S V Associates Pvt Ltd.",
  },

  {
    id: 2,
    year: "2020–2021",
    title: "Strengthening My Technical Foundations",
    description:
      "Completed a New Zealand Diploma in Systems Administration (Level 6) at Aspire2 International Business & Technology.",
  },

  {
    id: 3,
    year: "2025–Present",
    title: "Moving into Software Development",
    description:
      "Studying a Bachelor of Information and Communication Technology, specialising in Software Development, at Ara Institute of Canterbury.",
  },
  {
    id: 4,
    year: "Today",
    title: "Putting Learning into Practice",
    description:
      "Applying coursework through academic and personal projects, from managing vehicle rentals to helping people discover fruit trees around Christchurch.",
    link: { href: "/projects", label: "Explore my projects" },
  },
]
