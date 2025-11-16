"use client";

import Image from "next/image";
import type { Project } from "@/types/project";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen?: (p: Project) => void;
}) {
  return (
    <button
      onClick={() => onOpen?.(project)}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.03]"
    >
      <div className="relative h-48 w-full flex-shrink-0">
        {project.image ? (
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        ) : (
          <div className="bg-slate-800 h-full w-full" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-4 bg-gradient-to-b from-black/20 to-transparent flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-semibold text-white">{project.title}</h3>

        <div className="mt-auto pt-3 flex gap-2 flex-wrap">
          {project.tech.map((t) => (
            <span key={t} className="inline-block bg-white/6 text-sky-200 px-3 py-1 rounded-full text-xs">
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
