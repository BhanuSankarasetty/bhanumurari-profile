
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scrolling for hash links
  useEffect(() => {
    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        event.preventDefault();
        const hash = target.getAttribute('href') as string;
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100, // Offset for fixed header
            behavior: 'smooth'
          });
          // Update URL without scrolling
          history.pushState(null, '', hash);
        }
      }
    };

    document.addEventListener('click', handleHashLinkClick);
    return () => document.removeEventListener('click', handleHashLinkClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
