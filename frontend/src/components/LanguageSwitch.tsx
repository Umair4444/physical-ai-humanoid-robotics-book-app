import React from 'react';
import clsx from 'clsx';
import { useLanguageStore } from '../store/languageStore'; // Import useLanguageStore
import i18n from '../i18n/i18n'; // Import i18n instance

interface LanguageSwitchProps {
  // Add any props if needed
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = () => {
  const { language, setLanguage } = useLanguageStore(); // Use the language store

  const availableLanguages = [
    { code: 'en', label: 'English' },
    { code: 'ur', label: 'Urdu' },
    { code: 'zh', label: 'Chinese' },
  ];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode); // Change language using i18n
    setLanguage(langCode); // Update Zustand store
  };

  return (
    <div className="relative inline-block text-left">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={language} // Use language from store
        className={clsx(
          'block',
          'appearance-none',
          'w-full',
          'bg-white',
          'dark:bg-gray-700',
          'border',
          'border-gray-300',
          'dark:border-gray-600',
          'text-gray-700',
          'dark:text-white',
          'py-2',
          'px-4',
          'pr-8',
          'rounded-md',
          'shadow-sm',
          'focus:outline-none',
          'focus:ring-2',
          'focus:ring-blue-500',
          'focus:border-transparent',
          'transition-colors',
          'duration-200'
        )}
      >
        {availableLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitch;
