// frontend/src/components/ScrollToTopArrow.tsx

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

interface ScrollToTopArrowProps {
  // Add any props if needed
}

const ScrollToTopArrow: React.FC<ScrollToTopArrowProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Show if scrolled more than 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        'fixed',
        'bottom-4',
        'right-4',
        'p-3',
        'rounded-full',
        'bg-blue-600',
        'text-white',
        'shadow-lg',
        'transition-opacity',
        'duration-300',
        'ease-in-out',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-blue-500',
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
      aria-label="Scroll to top"
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
          d="M7 11l5-5m0 0l5 5m-5-5v12"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopArrow;
