import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
