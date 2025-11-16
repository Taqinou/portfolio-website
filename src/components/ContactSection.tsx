'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';

export default function ContactSection() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="contact" className="mt-24 text-center">
      <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-white/3 to-white/5 border border-white/6 backdrop-blur-lg">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">Contact Me</h2>

        <p className="text-slate-200 max-w-2xl mx-auto mb-8 text-center">
          For any questions, collaborations, or inquiries, feel free to contact me!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <button
            onClick={() => setContactOpen(true)}
            className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg hover:scale-105 transition-all"
          >
            📧 Email
          </button>
          <a
            href="https://github.com/Taqinou" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-medium bg-white/6 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
          >
            🔗 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/enzo-gazzoli" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-medium bg-white/6 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}
