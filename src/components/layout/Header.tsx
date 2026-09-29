import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router"

import {
  Menu,
  X,
  Download,
} from "lucide-react"

import Container from "./Container"

import ThemeToggle from "../ui/ThemeToggle"

import { navLinks } from "../../constants/navLinks"

const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const [isOpen, setIsOpen] =
    useState(false)

  const [isScrolled, setIsScrolled] =
    useState(false)

  const [activeSection, setActiveSection] =
    useState("#home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      if (!isHomePage) {
        setActiveSection("")
        return
      }

      const sections = navLinks
        .filter((link) => link.sectionId)
        .map((link) =>
          document.getElementById(link.sectionId!)
        )

      let currentSection = "#home"

      sections.forEach((section) => {
        if (!section) return

        const rect =
          section.getBoundingClientRect()

        const triggerPoint =
          window.innerHeight * 0.35

        if (
          rect.top <= triggerPoint &&
          rect.bottom >= triggerPoint
        ) {
          currentSection = `#${section.id}`
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    )

    handleScroll()

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      )
    }
  }, [isHomePage])

  return (
    <header
      className={`
        fixed
        top-0
        left-1/2
        -translate-x-1/2

        w-full
        max-w-[1280px]

        z-50
        isolate
        overflow-hidden

        rounded-none md:rounded-xl

        transition-all
        duration-300

        ${
          isScrolled
            ? `
              py-3
              bg-(--color-background)/75
              backdrop-blur-xl

              shadow-lg
              shadow-black/5
            `
            : `
              py-4
              bg-(--color-background)/55
              backdrop-blur-xl
            `
        }
      `}
    >
      {/* Blur Protection Layer */}
      <div
        className="
          absolute
          inset-0

          bg-(--color-background)/70
          backdrop-blur-xl

          pointer-events-none
        "
      />

      <Container
        className="
          !w-full
          px-4
          sm:px-6
          lg:px-8

          relative
          z-[60]
        "
      >
        <div
          className="
            relative
            z-[70]

            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}
          <Link
            to="/#home"
            className="
              flex
              items-center
              gap-3

              shrink-0
            "
          >
            <span
              className="
                text-2xl
                font-bold
                text-primary
              "
            >
              {"</>"}
            </span>

            <div
              className="
                text-lg
                sm:text-xl

                font-bold
                leading-none
              "
            >
              <span className="text-(--color-text)">
                Sunil{" "}
              </span>

              <span className="heading-gradient">
                Kafley
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="
              hidden
              xl:flex
              items-center

              gap-3
              lg:gap-5
              xl:gap-8
            "
          >
            {navLinks.map((link) => {
              const isActive = link.href === "/projects"
                ? location.pathname.startsWith("/projects")
                : isHomePage &&
                  activeSection === `#${link.sectionId}`

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`
                    group
                    relative

                    px-4
                    py-2.5

                    rounded-xl

                    text-[15px]
                    xl:text-base

                    font-semibold
                    border
                    border-transparent

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `text-primary
                          bg-primary/10
                          border-primary/20

                          shadow-lg
                          shadow-primary/10
                        `
                        : `
                          text-(--color-text-muted)
                          hover:text-primary

                          hover:bg-(--color-surface)
                          hover:border-(--color-border)

                          hover:-translate-y-[1px]
                        `
                    }
                  `}
                >
                  {link.label}

                  <span
                    className={`
                      absolute
                      left-1/2
                      -translate-x-1/2
                      bottom-1

                      h-[2px]

                      rounded-full

                      bg-primary

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "w-6"
                          : "w-0 group-hover:w-5"
                      }
                    `}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div
            className="
              hidden
              xl:flex
              items-center
              gap-4
            "
          >
            <ThemeToggle />

            <a
              href="/Sunil_Kafley_CV.pdf"
              download="Sunil_Kafley_CV.pdf"
              className="
                button-primary

                inline-flex
                items-center
                justify-center
                gap-2

                rounded-xl

                px-4
                lg:px-6

                py-3

                text-sm
                font-medium

                whitespace-nowrap

                transition-all
                duration-300

                shadow-lg
                hover:shadow-xl

                hover:scale-[1.02]
              "
            >
              <span className="hidden lg:inline">
                Download CV
              </span>

              <span className="lg:hidden">
                CV
              </span>

              <Download size={16} />
            </a>
          </div>

          {/* Mobile Actions */}
          <div
            className="
              xl:hidden

              flex
              items-center
              gap-3
            "
          >
            <ThemeToggle />

            <button
              aria-label="Toggle navigation menu"
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className="
                flex
                items-center
                justify-center

                w-11
                h-11

                rounded-xl

                border
                border-(--color-border)

                bg-(--color-surface)
                backdrop-blur-xl

                text-(--color-text)

                transition-all
                duration-300

                hover:bg-(--color-surface)
              "
            >
              {isOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              xl:hidden
              mt-5

              rounded-2xl

              bg-(--color-background)/80

              backdrop-blur-xl

              shadow-lg
              shadow-black/5

              p-5
            "
          >
            <nav className="flex flex-col gap-3">

              {navLinks.map((link) => {
                const isActive = link.href === "/projects"
                  ? location.pathname.startsWith("/projects")
                  : isHomePage &&
                    activeSection === `#${link.sectionId}`

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className={`
                      group
                      relative

                      overflow-hidden

                      rounded-xl

                      px-4
                      py-3

                      text-sm
                      font-medium

                      border
                      border-transparent

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            bg-primary/10
                            border-primary/20
                            text-primary

                            shadow-lg
                            shadow-primary/10
                          `
                          : `
                            text-(--color-text-muted)

                            hover:bg-(--color-surface)
                            hover:border-(--color-border)

                            hover:text-primary
                            hover:translate-x-1
                          `
                      }
                    `}
                  >
                    {link.label}

                    <span
                      className="
                        absolute
                        inset-0

                        opacity-0
                        group-hover:opacity-100

                        transition-opacity
                        duration-300

                        bg-gradient-to-r
                        from-primary/5
                        via-primary/10
                        to-transparent

                        pointer-events-none
                      "
                    />
                  </Link>
                )
              })}

              {/* Mobile CV Button */}
              <a
                href="/Sunil_Kafley_CV.pdf"
                download="Sunil_Kafley_CV.pdf"
                className="
                  button-primary

                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  px-5
                  py-3

                  text-sm
                  font-medium

                  mt-2

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                "
              >
                Download CV

                <Download size={16} />
              </a>

            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header
