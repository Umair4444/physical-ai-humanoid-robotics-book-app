// frontend/src/components/DynamicNavbar.tsx

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link'; // Assuming Docusaurus Link component

interface DynamicNavbarProps {
  // Props for controlling visibility or other dynamic behaviors
  isVisible?: boolean;
}

const DynamicNavbar: React.FC<DynamicNavbarProps> = ({ isVisible = true }) => {
  return (
    <nav
      className={clsx(
        'fixed',
        'top-0',
        'left-0',
        'right-0',
        'z-50',
        'px-4',
        'py-2',
        'transition-all',
        'duration-300',
        'ease-in-out',
        isVisible ? 'translate-y-0' : '-translate-y-full',
        'flex',
        'items-center',
        'justify-between',
        'bg-white/80', // Glass-card effect base
        'dark:bg-gray-800/80',
        'backdrop-blur-md',
        'shadow-lg'
      )}
    >
      <div className="flex-shrink-0">
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white no-underline hover:no-underline">
          My App
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/books" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
          Books
        </Link>
        <Link to="/pricing" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
          Pricing
        </Link>
        <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
          About
        </Link>
        {/* Placeholder for ThemeToggle and LanguageSwitch */}
        {/* These will be integrated into BaseLayout, which then uses DynamicNavbar */}
      </div>
    </nav>
  );
};

export default DynamicNavbar;
