'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Lang, LanguageContextType } from '@/types/language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr');

  useEffect(() => {
    // Load language from localStorage
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved && (saved === 'fr' || saved === 'en')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'fr' : 'en';
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
