// src/app/page.tsx
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <div className="space-y-20">

      {/* --- HERO SECTION --- */}
      <section className="text-center pt-10">
        <h1 className="text-5xl font-extrabold leading-tight">
          Salut, je suis <span className="text-blue-400">Ton Nom</span> 👋
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
          Développeur <span className="text-blue-400">Unity & Web</span>, spécialisé dans les expériences interactives,
          jeux en WebGL et projets immersifs. Voici mes créations.
        </p>

        <div className="mt-10">
          <a
            href="/projects"
            className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 transition rounded-xl shadow-lg"
          >
            Voir mes projets
          </a>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section>
        <h2 className="text-3xl font-semibold mb-10">Projets récents</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <ProjectCard
            title="Space Shooter"
            description="Un shooter spatial réalisé sous Unity WebGL."
            image="/placeholder.jpg"
            link="/projects/space-shooter"
          />

          <ProjectCard
            title="Runner 3D"
            description="Jeu de course 3D moderne."
            image="/placeholder.jpg"
            link="/projects/runner-3d"
          />

          <ProjectCard
            title="Puzzle Game"
            description="Un puzzle stylé en WebGL."
            image="/placeholder.jpg"
            link="/projects/puzzle"
          />

        </div>
      </section>

    </div>
  );
}
