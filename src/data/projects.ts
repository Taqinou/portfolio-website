import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: "portfolio-web",
    title: "Portfolio Web",
    titleKey: "projectPortfolioTitle",
    type: "web",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostCSS", "Framer Motion", "Radix UI", "Lucide React", "clsx", "Resend", "ESLint"],
    descriptionKey: "projectPortfolioDesc",
    image: "/img/projects/portfolio-minimal.svg",
    github: "https://github.com/Taqinou/portfolio-website",
    status: "completed",
    visit: "https://enzo-gazzoli.vercel.app"
  },
  {
  slug: "apartment-hub",
  title: "Apartment Aggregator Web App",
  titleKey: "projectApartmentTitle",
  type: "web",
  tech: ["Next.js", "React", "TypeScript", "ESLint", "MongoDB", "SQL"],
  descriptionKey: "projectApartmentDesc",
  image: "/img/projects/apartment-hub.svg",
  github: "https://github.com/Toto028-GT/ProjetTechno-Web",
  status: "completed",
  visit: "https://projet-techno-web.vercel.app"
  },
  {
  slug: "functional-calendar",
  title: "Functional Calendar",
  titleKey: "projectCalendarTitle",
  type: "web",
  tech: ["JavaScript", "ESLint", "Mongoose", "SQL", "HTML", "CSS"],
  descriptionKey: "projectCalendarDesc",
  image: "/img/projects/functional-calendar.svg",
  github: "https://github.com/JusteHugoStudent/ACL-2025-OpenForWork",
  status: "in-progress"
  },
  {
  slug: "game-library-java",
  title: "Game Library App",
  titleKey: "projectGameLibTitle",
  type: "Java App",
  tech: ["Java", "SQL"],
  descriptionKey: "projectGameLibDesc",
  image: "/img/projects/game-library.svg",
  github: "https://github.com/Toto028-GT/ProjetJava",
  status: "completed"
}
];
