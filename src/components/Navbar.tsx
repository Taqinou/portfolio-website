// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-md bg-white/5 border-b border-white/10 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Portfolio<span className="text-white">Unity</span>
        </Link>

        <div className="space-x-8 text-lg">
          <Link href="/" className="hover:text-blue-400 transition">Accueil</Link>
          <Link href="/projects" className="hover:text-blue-400 transition">Projets</Link>
          <Link href="/about" className="hover:text-blue-400 transition">À propos</Link>
        </div>
      </div>
    </nav>
  );
}
