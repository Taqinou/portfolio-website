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
    <section id="projects" className="mt-24">
      <h2 className="text-3xl font-semibold mb-8">My Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} onOpen={openProject} />
        ))}
      </div>

      <ProjectModal open={open} onClose={closeProject} project={selected} />
    </section>
  );
}
