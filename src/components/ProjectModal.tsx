'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Project } from '@/types/project';

export default function ProjectModal({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project?: Project | null;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
        />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 p-6 z-50 focus:outline-none max-h-[85vh] overflow-y-auto">
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
                  <Dialog.Title className="text-4xl font-semibold text-white mb-4 tracking-tight">
                    {project.title}
                  </Dialog.Title>
                  <p className="text-base text-neutral-400 font-light leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="mb-6 pb-6 border-b border-neutral-900">
                  <p className="text-xs uppercase tracking-wider text-neutral-500 font-light mb-3">
                    Tech Stack
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-block px-3 py-1.5 rounded-lg text-xs font-light text-neutral-400 bg-neutral-900/50 border border-neutral-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 flex-wrap">
                  {project.playable && (
                    <a
                      href={project.playable}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-lg hover:bg-neutral-100 transition-all"
                    >
                      <span>▶</span> Play
                    </a>
                  )}

                  {project.download && (
                    <a
                      href={project.download}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white border border-neutral-800 rounded-lg hover:border-neutral-700 transition-all"
                    >
                      <span>⬇</span> Download
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-400 border border-neutral-900 rounded-lg hover:border-neutral-800 hover:text-neutral-300 transition-all"
                    >
                      <span>⚙</span> GitHub
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
