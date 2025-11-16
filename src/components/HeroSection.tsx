import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-white/3 to-white/5 border border-white/6 backdrop-blur-lg">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-300 mb-3">Portfolio</p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-blue-400">Enzo GAZZOLI</span>
          </h1>

          <p className="mt-4 text-slate-200 text-lg">
            I’m a junior developer passionate about <span className="text-blue-300">video games
            and interactive experiences</span>. I enjoy creating engaging and immersive
            projects, whether it’s Unity games or web applications. Curious and 
            motivated, I’m always eager to learn new technologies to improve my skills 
            and share my passion.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-3 bg-white/10 hover:bg-white/20 rounded-lg">📄 CV</a>
          </div>
        </div>

        <div className="hidden md:flex justify-end">
          <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl">
            <Image 
              src="/pic.png" 
              alt="Profile" 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 0px, 24rem"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
