export type ProjectStatus =
  | "Live"
  | "Completed"
  | "In Development"
  | "Prototype"
  | "Planned"

export type ProjectCategory =
  | "Web"
  | "Mobile"
  | "Full Stack"
  | "Prototype / Concept"

export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  technologies: string[]
  image?: string
  imageSrcSet?: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  status?: ProjectStatus
  category?: ProjectCategory
  detailsPending?: boolean
}
