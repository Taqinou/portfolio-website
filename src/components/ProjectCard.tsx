// src/components/ProjectCard.tsx

import Link from "next/link";
import type { ReactNode } from "react";

type Project = {
  slug: string;
  title: string;
  type?: string;
  tech: string[];
  description?: string;
  image?: string;
  playable?: string;
  github?: string;
  download?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl p-5 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer">
        
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl mb-4 object-cover h-48 w-full group-hover:scale-110 transition-transform duration-500"
        />

        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="text-gray-300 mt-2">{project.description}</p>

        <div className="mt-3 flex gap-2 flex-wrap">
          {project.tech.map((t) => (
            <span key={t} className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-lg text-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
