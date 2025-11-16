'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Project } from '@/types/project';
import { useLanguage } from '@/contexts/LanguageContext';
import { texts } from '@/data/texts';

export default function ProjectModal({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project?: Project | null;
}) {
  const { lang } = useLanguage();
  const t = texts[lang];
  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
        />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 p-6 z-50 focus:outline-none max-h-[85vh] overflow-y-auto custom-scrollbar">
          <Dialog.Close asChild>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close"
              className="absolute right-8 top-8 p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800/80 border border-neutral-800 z-10 text-neutral-400 hover:text-white text-xl transition-all backdrop-blur-sm"
            >
              ✕
            </motion.button>
          </Dialog.Close>

          {project && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/[0.1] relative shadow-2xl"
            >
              {/* Light effect on modal */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-20 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
              />
              
              {/* Inner shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

              {/* Image section */}
              <div className="relative h-64 w-full overflow-hidden">
                {project.image && (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                  </>
                )}
              </div>

              {/* Content section */}
              <div className="p-8">
                {/* Title and type */}
                <div className="mb-6">
                  {project.type && (
                    <p className="text-xs uppercase tracking-widest text-neutral-500 font-light mb-3">
                      {project.type}
                    </p>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <Dialog.Title className="text-4xl font-semibold text-white tracking-tight">
                      {project.titleKey ? t[project.titleKey as keyof typeof t] : project.title}
                    </Dialog.Title>
                    {project.status && (
                      <div className={`px-3 py-1 rounded-full backdrop-blur-sm border text-xs font-light ${
                        project.status === 'completed'
                          ? 'bg-green-500/20 border-green-500/30 text-green-300'
                          : 'bg-blue-500/20 border-blue-500/30 text-blue-300'
                      }`}>
                        {project.status === 'completed' ? t.finished : t.inProgress}
                      </div>
                    )}
                  </div>
                  <p className="text-base text-neutral-400 font-light leading-relaxed max-w-3xl">
                    {project.descriptionKey && t[project.descriptionKey as keyof typeof t]}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="mb-6 pb-6 border-b border-neutral-900">
                  <p className="text-xs uppercase tracking-wider text-neutral-500 font-light mb-3">
                    {t.techStack}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t, index) => {
                      const colors = [
                        'hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] hover:text-red-300 hover:border-red-500/50',
                        'hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] hover:text-green-300 hover:border-green-500/50',
                        'hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] hover:text-blue-300 hover:border-blue-500/50',
                        'hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.5)] hover:text-purple-300 hover:border-purple-500/50',
                        'hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] hover:text-yellow-300 hover:border-yellow-500/50',
                        'hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] hover:text-pink-300 hover:border-pink-500/50',
                        'hover:drop-shadow-[0_0_8px_rgba(75,85,99,0.5)] hover:text-gray-300 hover:border-gray-500/50',
                        'hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.5)] hover:text-sky-300 hover:border-sky-500/50',
                        'hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] hover:text-violet-300 hover:border-violet-500/50',
                        'hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.5)] hover:text-orange-300 hover:border-orange-500/50',
                        'hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] hover:text-emerald-300 hover:border-emerald-500/50'
                      ];
                      const colorClass = colors[index % colors.length];
                      return (
                        <span
                          key={t}
                          className={`group inline-block px-3 py-1.5 rounded-lg text-xs font-light text-neutral-400 bg-neutral-900/50 border border-neutral-800 transition-all duration-300 ${colorClass}`}
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 flex-wrap">
                  {project.playable && (
                    <a
                      href={project.playable}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-lg hover:bg-neutral-100 transition-all overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-transparent" />
                      </div>
                      <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">▶</span> <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">{t.play}</span>
                    </a>
                  )}

                  {project.download && (
                    <a
                      href={project.download}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white border border-neutral-800 rounded-lg hover:border-neutral-700 transition-all overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-transparent" />
                      </div>
                      <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">⬇</span> <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">{t.download}</span>
                    </a>
                  )}

                  {project.visit && (
                    <a
                      href={project.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-lg hover:bg-neutral-100 transition-all overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-transparent" />
                      </div>
                      <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">▶</span> <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">{t.visitSite}</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-400 border border-neutral-900 rounded-lg hover:border-neutral-800 hover:text-neutral-300 transition-all"
                    >
                      <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(75,85,99,0.5)]">⚙</span> <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(75,85,99,0.5)]">GitHub</span>
                    </a>
                  )}


                </div>
              </div>
            </motion.div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
