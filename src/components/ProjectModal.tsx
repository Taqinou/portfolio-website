import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types/project";

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
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 p-6 rounded-2xl z-50">
          <Dialog.Title className="sr-only">{project?.title || "Project"}</Dialog.Title>
          <Dialog.Close asChild>
            <button aria-label="Close" className="absolute right-2 top-2 p-2 rounded-md bg-white/10 hover:bg-white/20 z-10 text-white font-bold text-xl">×</button>
          </Dialog.Close>

          {project && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="rounded-lg overflow-hidden bg-gradient-to-br from-[#071a2a] to-[#0b2240] shadow-2xl">
                <div className="relative h-64 w-full">
                  {project.image && (
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  )}
                </div>

                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-slate-300 mb-4">{project.description}</p>

                  <div className="flex gap-3 flex-wrap mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="inline-block bg-white/6 text-sky-200 px-3 py-1 rounded-full text-xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.playable && (
                      <a href={project.playable} target="_blank" rel="noopener noreferrer"className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white font-medium">
                        Play
                      </a>
                    )}

                    {project.download && (
                      <a href={project.download} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/6 rounded-full">
                        Download
                      </a>
                    )}

                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/6 rounded-full">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
