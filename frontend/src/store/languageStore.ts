import { create } from 'zustand';

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'en', // Default language
  setLanguage: (lang: string) => set(() => ({ language: lang })),
}));
