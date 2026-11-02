import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

import Hero from "../components/sections/Hero"
import FeaturedProjects from "../components/sections/FeaturedProjects"
import About from "../components/sections/About"
import Journey from "../components/sections/Journey"
import Skills from "../components/sections/Skills"
import Contact from "../components/sections/Contact"

import NoiseOverlay from "../components/ui/NoiseOverlay"
import SectionDivider from "../components/ui/SectionDivider"
import SEO from "../components/ui/SEO"
import GridBackground from "../components/ui/GridBackground"

const Home = () => {
  return (
    <>
      <SEO
        title="Sunil Kafley | Software Engineering Student"
        description="Portfolio of Sunil Kafley, a software engineering student and aspiring full-stack developer building modern web applications with React, TypeScript, and Django."
      />
      <GridBackground />
      <NoiseOverlay />
      <Header />

      <main>
        <Hero />
        <SectionDivider />
        <FeaturedProjects />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Journey />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Home
