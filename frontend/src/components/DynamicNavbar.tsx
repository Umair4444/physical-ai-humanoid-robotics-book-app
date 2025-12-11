import React, { type ReactNode, useEffect, useState } from 'react';
import useScrollDirection from '../../hooks/useScrollDirection';
import ThemeToggle from './ThemeToggle';
import LanguageSwitch from './LanguageSwitch'; // Import LanguageSwitch

interface DynamicNavbarProps {
  children?: ReactNode;
}

function DynamicNavbar({ children }: DynamicNavbarProps): JSX.Element {
  const scrollDirection = useScrollDirection();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    if (scrollDirection === 'down') {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
  }, [scrollDirection]);

  return (
    <nav className={`navbar navbar--fixed-top bg-white/30 dark:bg-gray-800/30 backdrop-blur-md px-4 py-2 shadow-lg ${!isNavbarVisible ? 'navbar--hidden' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__items">
          {/* Left items */}
        </div>
        <div className="navbar__items navbar__items--right">
          <ThemeToggle />
          <LanguageSwitch /> {/* Add LanguageSwitch here */}
          {/* Right items */}
        </div>
      </div>
      {children}
    </nav>
  );
}

export default DynamicNavbar;