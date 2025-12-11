// frontend/src/layouts/BaseLayout.tsx

import React from 'react';
import LanguageSwitch from '../components/LanguageSwitch'; // Add this import

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Placeholder for Navbar */}
      <header className="p-4 shadow-md bg-white dark:bg-gray-800 flex justify-between items-center">
        <div className="text-xl font-bold">My App</div>
        <div className="flex items-center space-x-4"> {/* Add a container for multiple controls */}
          <ThemeToggle />
          <LanguageSwitch /> {/* Integrate LanguageSwitch here */}
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Placeholder for Footer */}
      <footer className="p-4 shadow-md bg-white dark:bg-gray-800 text-center text-sm">
        © {new Date().getFullYear()} My App
      </footer>
    </div>
  );
};

export default BaseLayout;
