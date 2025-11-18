'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type GlowColor = 'green' | 'gray' | 'blue' | 'emerald' | 'purple';

interface ContactCardProps {
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
  glowColor?: GlowColor;
}

const glowClasses = {
  green: 'group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] group-hover:text-green-200',
  gray: 'group-hover:drop-shadow-[0_0_10px_rgba(75,85,99,0.5)] group-hover:text-gray-200',
  blue: 'group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:text-blue-200',
  emerald: 'group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:text-emerald-200',
  purple: 'group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.5)] group-hover:text-purple-200',
};

export default function ContactCard({
  title,
  description,
  href,
  onClick,
  glowColor = 'green',
}: ContactCardProps) {
  const content = (
    <>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10">
        <h3 className={`text-lg font-semibold text-white mb-2 transition-all duration-300 ${glowClasses[glowColor]}`}>
          {title}
        </h3>
        <p className="text-sm text-neutral-500 font-light">{description}</p>
        <div className="absolute bottom-8 right-8 text-neutral-700 group-hover:text-neutral-500 transition-colors">
          →
        </div>
      </div>
    </>
  );

  const baseClasses = "group relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.12] transition-all overflow-hidden";

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={baseClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`${baseClasses} text-left`}
    >
      {content}
    </motion.button>
  );
}
