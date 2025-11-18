'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
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
          {label}
        </motion.p>
      </div>
      <h2 className="text-5xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent animate-gradient-x pb-2">
        {title}
      </h2>
      {description && (
        <div className="relative max-w-2xl mt-8">
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl" />
          <p className="relative text-lg text-neutral-400 font-light p-4">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
