'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

export default function ContactSection() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="contact" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-sm text-neutral-500 mb-6 tracking-wide font-light">CONTACT</p>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-8">
            Let's Work Together
          </h2>
          <p className="text-lg text-neutral-400 font-light max-w-2xl">
            Have an exciting project or just want to chat? I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.button
            onClick={() => setContactOpen(true)}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.12] transition-all text-left overflow-hidden"
          >
            {/* Glass shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
            </div>
            
            <div className="relative z-10">
              <div className="mb-4 text-4xl">📧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Send Email</h3>
              <p className="text-sm text-neutral-500 font-light">Quick message through contact form</p>
              <div className="absolute bottom-8 right-8 text-neutral-700 group-hover:text-neutral-500 transition-colors">
                →
              </div>
            </div>
          </motion.button>

          <motion.a
            href="https://github.com/Taqinou"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.12] transition-all overflow-hidden"
          >
            {/* Glass shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
            </div>
            
            <div className="relative z-10">
              <div className="mb-4 text-4xl">🔗</div>
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-sm text-neutral-500 font-light">Check out my projects</p>
              <div className="absolute bottom-8 right-8 text-neutral-700 group-hover:text-neutral-500 transition-colors">
                →
              </div>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/enzo-gazzoli"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.12] transition-all overflow-hidden"
          >
            {/* Glass shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
            </div>
            
            <div className="relative z-10">
              <div className="mb-4 text-4xl">💼</div>
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-sm text-neutral-500 font-light">Connect with me professionally</p>
              <div className="absolute bottom-8 right-8 text-neutral-700 group-hover:text-neutral-500 transition-colors">
                →
              </div>
            </div>
          </motion.a>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}
