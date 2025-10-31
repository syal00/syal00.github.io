import HeroSection from './components/homepage/hero-section';
import AboutSection from './components/homepage/about';
import SkillsSection from './components/homepage/skills';
import ProjectsSection from './components/homepage/projects';
import ExperienceSection from './components/homepage/experience';
import EducationSection from './components/homepage/education';
import BlogSection from './components/homepage/blog';
import ContactSection from './components/homepage/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ScrollToTop from './components/helper/scroll-to-top';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </>
  );
}
