import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
