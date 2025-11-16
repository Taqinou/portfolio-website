export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600 font-light">
            © {new Date().getFullYear()} GAZZOLI Enzo
          </p>
          <p className="text-xs text-neutral-700 font-light">
            Built with Next.js 
          </p>
        </div>
      </div>
    </footer>
  );
}
