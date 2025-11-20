"use client";

import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../features/ProjectCard";
import ProjectModal from "../modals/ProjectModal";
import SectionHeader from "../ui/SectionHeader";
import type { Project } from "../../types/project";
import { useLanguage } from '@/contexts/LanguageContext';
import { texts } from '@/data/texts';

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const t = texts[lang];
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
        <SectionHeader label={t.projects} title={t.featuredWork} />

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
