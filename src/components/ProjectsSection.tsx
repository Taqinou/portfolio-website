"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "../types/project";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  function openProject(p: Project) {
    setSelected(p);
    setOpen(true);
  }

  function closeProject() {
    setOpen(false);
    setSelected(null);
  }

  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="relative inline-block mb-6 group">
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-lg" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
            </div>
            <motion.p
              whileHover={{ scale: 1.1, y: -3, rotateX: -3 }}
              className="relative text-sm text-neutral-500 tracking-wide font-light px-3 py-1 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
              PROJECTS
            </motion.p>
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent animate-gradient-x">
            Featured Work
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} onOpen={openProject} />
          ))}
        </div>
      </div>

      <ProjectModal open={open} onClose={closeProject} project={selected} />
    </section>
  );
}
