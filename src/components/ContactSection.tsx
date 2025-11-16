'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { texts } from '@/data/texts';

export default function ContactSection() {
  const { lang } = useLanguage();
  const t = texts[lang];
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="contact" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="relative inline-block mb-6 group">
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-lg" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
            </div>
            <motion.p
              whileHover={{ scale: 1.1, y: -3, rotateX: -3 }}
              className="relative text-sm text-neutral-500 tracking-wide font-light px-3 py-1 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
              {t.contact}
            </motion.p>
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-8 leading-tight pb-2 animate-gradient-x">
            {t.letsWorkTogether}
          </h2>
          <div className="relative max-w-2xl">
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl" />
            <p className="relative text-lg text-neutral-400 font-light p-4">
              {t.contactDescription}
            </p>
          </div>
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
              <h3 className="text-lg font-semibold text-white mb-2 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] group-hover:text-green-200">{t.sendEmail}</h3>
              <p className="text-sm text-neutral-500 font-light">{t.sendEmailDesc}</p>
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
              <h3 className="text-lg font-semibold text-white mb-2 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(75,85,99,0.5)] group-hover:text-gray-200">{t.github}</h3>
              <p className="text-sm text-neutral-500 font-light">{t.githubDesc}</p>
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
              <h3 className="text-lg font-semibold text-white mb-2 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:text-blue-200">{t.linkedin}</h3>
              <p className="text-sm text-neutral-500 font-light">{t.linkedinDesc}</p>
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
