import HeroSection from './components/homepage/hero-section'
import About from './components/homepage/about'
import Experience from './components/homepage/experience'
import Skills from './components/homepage/skills'
import Projects from './components/homepage/projects'
import Education from './components/homepage/education'
import Blog from './components/homepage/blog'
import Contact from './components/homepage/contact'

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Blog />
      <Contact />
    </>
  )
}
