'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitch() {
  const { lang, toggleLang } = useLanguage();

  return (
    <motion.button
      onClick={toggleLang}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-6 right-6 z-50 group"
    >
      <div className="relative px-4 py-2 rounded-lg bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.12] transition-all overflow-hidden">
        {/* Glass shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex items-center gap-2">
          <span className={`text-sm font-medium transition-all duration-300 ${lang === 'fr'
            ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
            : 'text-neutral-500'
            }`}>
            FR
          </span>
          <div className="w-px h-4 bg-neutral-700" />
          <span className={`text-sm font-medium transition-all duration-300 ${lang === 'en'
            ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
            : 'text-neutral-500'
            }`}>
            EN
          </span>
        </div>
      </div>
    </motion.button>
  );
}

