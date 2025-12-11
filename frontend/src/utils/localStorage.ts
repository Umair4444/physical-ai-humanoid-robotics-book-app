// frontend/src/utils/localStorage.ts

// Keys for local storage
const THEME_KEY = 'app-theme';
const LANGUAGE_KEY = 'app-language';

/**
 * Saves the current theme to local storage.
 * @param theme The theme to save ('light' or 'dark').
 */
export const saveTheme = (theme: 'light' | 'dark'): void => {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.error('Error saving theme to local storage:', error);
  }
};

/**
 * Loads the theme from local storage.
 * @returns The saved theme ('light' or 'dark'), or null if not found.
 */
export const loadTheme = (): 'light' | 'dark' | null => {
  try {
    return (localStorage.getItem(THEME_KEY) as 'light' | 'dark') || null;
  } catch (error) {
    console.error('Error loading theme from local storage:', error);
    return null;
  }
};

/**
 * Saves the current language to local storage.
 * @param language The language code to save (e.g., 'en', 'ur', 'zh').
 */
export const saveLanguage = (language: string): void => {
  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    console.error('Error saving language to local storage:', error);
  }
};

/**
 * Loads the language from local storage.
 * @returns The saved language code, or null if not found.
 */
export const loadLanguage = (): string | null => {
  try {
    return localStorage.getItem(LANGUAGE_KEY);
  } catch (error) {
    console.error('Error loading language from local storage:', error);
    return null;
  }
};
