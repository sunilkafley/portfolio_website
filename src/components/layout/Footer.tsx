import Container from "./Container"

const Footer = () => {
  return (
    <footer
      className="
        border-t
        border-(--color-border)
        py-8
      " 
    >

      <Container>

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          {/* Left */}
          <p className="text-(--color-text-muted) text-sm">
            © 2026 Sunil Kafley. All rights reserved.
          </p>

          {/* Right */}
          <p className="text-(--color-text-muted) text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>

        </div>

      </Container>

    </footer>
  )
}

export default Footer