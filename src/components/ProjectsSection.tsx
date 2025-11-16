"use client";

import { useState } from "react";
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
          <p className="text-sm text-neutral-500 mb-6 tracking-wide font-light">PROJECTS</p>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
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
