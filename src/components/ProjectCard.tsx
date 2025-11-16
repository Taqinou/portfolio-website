'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen?: (p: Project) => void;
}) {
  return (
    <motion.button
      onClick={() => onOpen?.(project)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative w-full text-left"
    >
      {/* Glassmorphism card */}
      <div className="relative rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-2xl">
        {/* Gradient shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
        </div>

        {/* Image section */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {project.image ? (
            <>
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-black" />
          )}
          
          {/* Type badge with glass effect */}
          {project.type && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1.5 bg-white/[0.08] backdrop-blur-md text-white text-xs font-medium uppercase tracking-wider rounded-full border border-white/[0.12] shadow-lg">
                {project.type}
              </span>
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="p-6 space-y-3">
          <h3 className="text-2xl font-semibold text-white group-hover:text-neutral-200 transition-colors">
            {project.title}
          </h3>

          {project.description && (
            <p className="text-sm text-neutral-400 line-clamp-2 font-light leading-relaxed">
              {project.description}
            </p>
          )}

          <div className="flex gap-2 flex-wrap pt-2">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-xs text-neutral-500 font-light"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs text-neutral-500 font-light">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Inner glow border on hover */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/[0.12] transition-all pointer-events-none" />
      </div>
    </motion.button>
  );
}
