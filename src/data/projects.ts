import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: "portfolio-web",
    title: "Portfolio Web",
    type: "web",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostCSS", "Framer Motion", "Radix UI", "Lucide React", "clsx", "Resend", "ESLint"],
    description: "A modern and interactive portfolio built with Next.js and React, featuring a responsive interface. Showcasing my projects. Integrated with Tailwind CSS and PostCSS for styling, TypeScript for code robustness, Framer Motion for smooth animations, Radix UI for accessible components, Lucide React for icons, clsx for utility classes, Resend for email functionality, and ESLint for code quality.",
    image: "/img/projects/portfolio-minimal.svg",
    github: "https://github.com/Taqinou/portfolio-website",
    status: "completed",
    visit: "https://enzo-gazzoli.vercel.app"
  },
  {
  slug: "apartment-hub",
  title: "Apartment Aggregator Web App",
  type: "web",
  tech: ["Next.js", "React", "TypeScript", "ESLint", "MongoDB", "SQL"],
  description: "A full-stack web application built during my final year of Bachelor's degree. The platform aggregates apartment listings from multiple real-estate websites into a single interface, helping users avoid browsing several sites separately. It centralizes results, simplifies comparison, and improves the apartment-hunting experience.",
  image: "/img/projects/apartment-hub.svg",
  github: "https://github.com/Toto028-GT/ProjetTechno-Web",
  status: "completed",
  visit: "https://projet-techno-web.vercel.app"
  },
  {
  slug: "functional-calendar",
  title: "Functional Calendar",
  type: "web",
  tech: ["JavaScript", "ESLint", "Mongoose", "SQL"],
  description: "A fully functional calendar web application built during my first year of Master's studies. It allows users to create, edit, and manage events seamlessly with a clean and intuitive interface.",
  image: "/img/projects/functional-calendar.svg",
  github: "https://github.com/JusteHugoStudent/ACL-2025-OpenForWork",
  status: "in-progress"
  },
  {
  "slug": "game-library-java",
  "title": "Game Library App",
  "type": "Java App",
  "tech": ["Java", "SQL"],
  "description": "An old Java application developed during my second year of undergraduate studies. It functions like a Netflix-style platform but for games, allowing users to browse a large database of games, read reviews, filter by categories, and discover similar games.",
  "image": "/img/projects/game-library.svg",
  "github": "https://github.com/Toto028-GT/ProjetJava",
  "status": "completed"
}
];
