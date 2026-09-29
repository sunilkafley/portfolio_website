import type { Project } from "../types/project"

const detailsPendingDescription =
  "Project details, screenshots and verified links will be added soon."

export const projects: Project[] = [
  {
    id: "fruit-finder-christchurch",
    slug: "fruit-finder-christchurch",
    title: "Fruit Finder Christchurch",
    shortDescription:
      "Interactive map-based web application to discover fruit trees and public locations around Christchurch.",
    technologies: ["React", "TypeScript", "Leaflet", "Tailwind"],
    image: "/projects/project1-card.webp",
    imageSrcSet:
      "/projects/project1-card-400.webp 400w, /projects/project1-card.webp 800w",
    githubUrl:
      "https://github.com/sunilkafley/BCDE213-Interactive-Media-Development",
    liveUrl:
      "https://sunilkafley.github.io/BCDE213-Interactive-Media-Development/",
    featured: true,
    status: "Live",
    category: "Web",
  },
  {
    id: "budget-tracker-pro",
    slug: "budget-tracker-pro",
    title: "Budget Tracker Pro",
    shortDescription: detailsPendingDescription,
    technologies: [],
    featured: true,
    detailsPending: true,
    // TODO: Add verified status, category, technologies, screenshot and links.
  },
  {
    id: "campus-event-planner",
    slug: "campus-event-planner",
    title: "Campus Event Planner",
    shortDescription: detailsPendingDescription,
    technologies: [],
    featured: true,
    detailsPending: true,
    // TODO: Add verified status, category, technologies, screenshot and links.
  },
  {
    id: "vehicle-rental-management-system",
    slug: "vehicle-rental-management-system",
    title: "Vehicle Rental Management System",
    shortDescription:
      "Full-stack Django web application for managing vehicle rentals, customers, and reservations.",
    technologies: ["Django", "Python", "SQLite", "HTML/CSS"],
    image: "/projects/project2-card.webp",
    imageSrcSet:
      "/projects/project2-card-400.webp 400w, /projects/project2-card.webp 552w",
    githubUrl:
      "https://github.com/sunilkafley/vehiclerentalmanagement",
    liveUrl:
      "https://sunilkafley.github.io/vehiclerentalmanagement/",
    featured: false,
    status: "Completed",
    category: "Full Stack",
  },
  {
    id: "health-management-referral-system",
    slug: "health-management-referral-system",
    title: "Health Management Referral System",
    shortDescription:
      "Secure healthcare referral management system with authentication and CRUD functionality.",
    technologies: ["Django", "Python", "Bootstrap"],
    image: "/projects/project3-card.webp",
    imageSrcSet:
      "/projects/project3-card-400.webp 400w, /projects/project3-card.webp 582w",
    featured: false,
    status: "Completed",
    category: "Full Stack",
  },
  {
    id: "agora-marketplace",
    slug: "agora-marketplace",
    title: "Agora Marketplace",
    shortDescription: detailsPendingDescription,
    technologies: [],
    featured: false,
    detailsPending: true,
    // TODO: Add verified project metadata and assets.
  },
  {
    id: "photography-website",
    slug: "photography-website",
    title: "Photography Website",
    shortDescription: detailsPendingDescription,
    technologies: [],
    featured: false,
    detailsPending: true,
    // TODO: Add verified project metadata and assets.
  },
  {
    id: "creator-command-center",
    slug: "creator-command-center",
    title: "Creator Command Center",
    shortDescription: detailsPendingDescription,
    technologies: [],
    featured: false,
    detailsPending: true,
    // TODO: Add verified project metadata and assets.
  },
  {
    id: "sajilo-nz",
    slug: "sajilo-nz",
    title: "Sajilo NZ",
    shortDescription: detailsPendingDescription,
    technologies: [],
    featured: false,
    detailsPending: true,
    // TODO: Add verified project metadata and assets.
  },
  {
    id: "nepali-guitar-chords",
    slug: "nepali-guitar-chords",
    title: "Nepali Guitar Chords",
    shortDescription: detailsPendingDescription,
    technologies: [],
    featured: false,
    detailsPending: true,
    // TODO: Add verified project metadata and assets.
  },
  {
    id: "ai-powered-job-tracker",
    slug: "ai-powered-job-tracker",
    title: "AI-Powered Job Tracker",
    shortDescription: detailsPendingDescription,
    technologies: [],
    featured: false,
    detailsPending: true,
    // TODO: Add verified project metadata and assets.
  },
]

export const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3)
