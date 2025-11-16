// src/components/HeroSection.tsx

export default function HeroSection() {
  return (
    <section className="text-center pt-10">
      <h1 className="text-5xl font-extrabold leading-tight">
        Salut, je suis <span className="text-blue-400">Ton Nom</span> 👋
      </h1>

      <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
        Développeur <span className="text-blue-400">Unity & Web</span>.
        Passionné par la création de jeux, d’expériences interactives et d’outils modernes.
        Voici mon travail.
      </p>
    </section>
  );
}
