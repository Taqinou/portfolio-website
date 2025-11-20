export type Lang = 'fr' | 'en';

export interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}
