import React, { type ReactNode } from 'react';

interface NavbarProps {
  children?: ReactNode;
}

function Navbar({ children }: NavbarProps): JSX.Element {
  return (
    <nav className="navbar navbar--fixed-top">
      <div className="navbar__inner">
        <div className="navbar__items">
          {/* Left items */}
        </div>
        <div className="navbar__items navbar__items--right">
          {/* Right items */}
        </div>
      </div>
      {children}
    </nav>
  );
}

export default Navbar;
