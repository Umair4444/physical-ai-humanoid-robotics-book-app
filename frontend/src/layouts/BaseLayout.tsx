// frontend/src/layouts/BaseLayout.tsx

import React, { useState } from 'react';
import LanguageSwitch from '../components/LanguageSwitch';
import ScrollToTop from '../components/ScrollToTop';
import ThemeToggle from '../components/ThemeToggle';
import ChatWindow from '../components/chatbot/ChatWindow'; // Import ChatWindow
import { Button } from '../components/ui/button'; // Import Button

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Placeholder for Navbar */}
      <header className="p-4 shadow-md bg-white dark:bg-gray-800 flex justify-between items-center">
        <div className="text-xl font-bold">My App</div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <LanguageSwitch />
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Placeholder for Footer */}
      <footer className="p-4 shadow-md bg-white dark:bg-gray-800 text-center text-sm">
        © {new Date().getFullYear()} My App
      </footer>
      <ScrollToTop /> {/* Render ScrollToTop */}

      {/* Floating Chatbot Button */}
      <Button
        className="fixed bottom-4 left-4 z-50 p-3 rounded-full shadow-lg"
        onClick={toggleChatbot}
        aria-label="Toggle Chatbot"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </Button>

      {/* Chatbot Window */}
      {isChatbotOpen && (
        <div className="fixed bottom-20 left-4 z-50 h-[400px] w-[300px] flex flex-col">
          <ChatWindow />
        </div>
      )}
    </div>
  );
};

export default BaseLayout;
