export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/6 pt-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} — GAZZOLI Enzo • Built with Next.js
      </div>
    </footer>
  );
}
