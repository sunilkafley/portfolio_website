import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Fruit Finder App",
    description:
      "Interactive map-based web application to discover fruit trees and public locations around Christchurch.",
    image: "/projects/project1.png",
    tech: ["React", "TypeScript", "Leaflet", "Tailwind"],
    github:
      "https://github.com/sunilkafley/BCDE213-Interactive-Media-Development",
    live: "https://sunilkafley.github.io/BCDE213-Interactive-Media-Development/",
  },

  {
    title: "Vehicle Rental Management System",
    description:
      "Full-stack Django web application for managing vehicle rentals, customers, and reservations.",
    image: "/projects/project2.png",
    tech: ["Django", "Python", "SQLite", "HTML/CSS"],
    github: "https://github.com/sunilkafley/vehiclerentalmanagement",
    live: "https://sunilkafley.github.io/vehiclerentalmanagement/",
  },

  {
    title: "Healthcare Referral System",
    description:
      "Secure healthcare referral management system with authentication and CRUD functionality.",
    image: "/projects/project3.png",
    tech: ["Django", "Python", "Bootstrap"],
  },
];
