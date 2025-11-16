// src/app/projects/[slug]/page.tsx

import { projects } from "../../../data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetails({ params }: { params: { slug?: string } | Promise<{ slug?: string }> }) {
  const { slug } = (await params) ?? {};
  if (!slug) return notFound();

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="space-y-8">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl w-full max-h-96 object-cover shadow-xl"
      />

      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="text-gray-300">{project.description}</p>

      <div className="flex gap-3 flex-wrap">
        {project.tech.map((t) => (
          <span key={t} className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-lg">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {project.playable && (
          <a
            href={project.playable}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl"
          >
            Jouer en WebGL
          </a>
        )}

        {project.download && (
          <a
            href={project.download}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl"
          >
            Télécharger
          </a>
        )}

        <a
          href={project.github}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl"
        >
          GitHub
        </a>
      </div>

      <Link href="/projects" className="text-blue-400 hover:underline">
        ← Retour aux projets
      </Link>
    </div>
  );
}
