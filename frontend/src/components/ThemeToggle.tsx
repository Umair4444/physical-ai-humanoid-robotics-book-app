// frontend/src/components/ThemeToggle.tsx

import React from 'react';
import clsx from 'clsx';
// Assuming a Zustand store for theme management at frontend/src/store/themeStore.ts
// import useThemeStore from '../store/themeStore'; // Placeholder import

interface ThemeToggleProps {
  // Add any props if needed, e.g., for external control or styling
}

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  // Placeholder for theme state and toggle logic
  // const { theme, toggleTheme } = useThemeStore();
  const theme = 'light'; // Replace with actual theme state from store
  const toggleTheme = () => {
    console.log('Toggle theme clicked');
    // Implement actual theme toggling logic here
  };

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        'p-2',
        'rounded-full',
        'bg-gray-200',
        'dark:bg-gray-700',
        'text-gray-800',
        'dark:text-white',
        'hover:bg-gray-300',
        'dark:hover:bg-gray-600',
        'transition-colors',
        'duration-200',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-blue-500'
      )}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.457 4.573a1 1 0 01-1.06 1.06l-2.094-.378a1 1 0 01.378-1.06 4.001 4.001 0 004.776-1.57zm.927-.927C15.674 13.432 16 12.188 16 10a6 6 0 00-6-6c-2.188 0-3.432.326-4.573 1.258a1 1 0 01.927.927c.476.476.853 1.05.927 1.927A4.001 4.001 0 0010 14a4 4 0 003.111-1.604c.877-.074 1.451-.451 1.927-.927zM4 10a1 1 0 01-1-1V8a1 1 0 112 0v1a1 1 0 01-1 1zm8-9a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-7 4a1 1 0 01-1-1V3a1 1 0 112 0v1a1 1 0 01-1 1zm-4 4a1 1 0 01-1-1V8a1 1 0 112 0v1a1 1 0 01-1 1z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
