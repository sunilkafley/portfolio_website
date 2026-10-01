export type NavigationLink = {
  label: string
  href: string
  sectionId?: string
}

export const navLinks: NavigationLink[] = [
  {
    label: "Home",
    href: "/#home",
    sectionId: "home",
  },
  {
    label: "About",
    href: "/#about",
    sectionId: "about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Skills",
    href: "/#skills",
    sectionId: "skills",
  },
  {
    label: "Journey",
    href: "/#journey",
    sectionId: "journey",
  },
  {
    label: "Contact",
    href: "/#contact",
    sectionId: "contact",
  },
]
